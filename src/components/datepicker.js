import { createElement, Calendar, ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from 'lucide';
import { v4 as uuidv4 } from 'uuid';
import { computePosition, offset, flip, shift, autoUpdate } from '@floating-ui/dom';

export default function (Alpine) {
  Alpine.directive('h-date-picker', (el) => {
    el._datepicker = Alpine.reactive({
      id: undefined,
      controls: `hdpc${uuidv4()}`,
      input: undefined,
      expanded: false,
    });
    el._datepicker.input = el.querySelector('input');
    if (!el._datepicker.input || el._datepicker.input.tagName !== 'INPUT') {
      throw new Error('h-date-picker must have an input inside it');
    } else if (el._datepicker.input.hasAttribute('id')) {
      el._datepicker.id = el._datepicker.input.getAttribute('id');
    } else {
      const id = `hdp${uuidv4()}`;
      el._datepicker.input.setAttribute('id', id);
      el._datepicker.id = id;
    }

    el.classList.add(
      'border-input',
      'bg-input-inner',
      'flex',
      'w-full',
      'items-center',
      'rounded-control',
      'border',
      'shadow-control',
      'transition-[color,box-shadow]',
      'outline-none',
      'h-9',
      'pl-3',
      'pr-1',
      'gap-2',
      'min-w-0',
      'has-[input:focus-visible]:border-ring',
      'has-[input:focus-visible]:ring-ring/50',
      'has-[input:focus-visible]:ring-[3px]',
      'has-[input[aria-invalid=true]]:ring-negative/20',
      'has-[input[aria-invalid=true]]:border-negative',
      'dark:has-[input[aria-invalid=true]]:ring-negative/40',
      'has-[input:invalid]:ring-negative/20',
      'has-[input:invalid]:border-negative',
      'dark:has-[input:invalid]:ring-negative/40'
    );
    el.setAttribute('data-slot', 'date-picker');

    el._datepicker.input.classList.add('bg-transparent', 'outline-none', 'flex-1', 'border-0', 'focus-visible:ring-0', 'disabled:pointer-events-none', 'disabled:cursor-not-allowed', 'disabled:opacity-50', 'md:text-sm', 'text-base');
    el._datepicker.input.setAttribute('aria-autocomplete', 'none');
    el._datepicker.input.setAttribute('type', 'text');
  });

  Alpine.directive('h-date-picker-trigger', (el, {}, { effect, cleanup, Alpine }) => {
    if (el.tagName !== 'BUTTON') {
      throw new Error('h-date-picker-trigger must be a button');
    }
    if (!el.hasAttribute('aria-labelledby') && !el.hasAttribute('aria-label')) {
      throw new Error('h-date-picker-trigger: must have an "aria-label" or "aria-labelledby" attribute');
    }
    const datepicker = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty('_datepicker'));
    if (!datepicker) {
      throw new Error('h-date-picker-trigger must be inside an h-date-picker element');
    }
    el.setAttribute('aria-controls', datepicker._datepicker.controls);
    el.setAttribute('aria-expanded', 'false');
    el.setAttribute('aria-haspopup', 'dialog');
    el.setAttribute('type', 'button');
    el.setAttribute('data-slot', 'date-picker-trigger');

    el.appendChild(
      createElement(Calendar, {
        class: ['opacity-50 size-4 transition-transform duration-200'],
        width: '16',
        height: '16',
        'aria-hidden': true,
        role: 'presentation',
      })
    );

    effect(() => {
      el.setAttribute('data-state', datepicker._datepicker.expanded ? 'open' : 'closed');
      el.setAttribute('aria-expanded', datepicker._datepicker.expanded);
    });

    const close = () => {
      datepicker._datepicker.expanded = false;
    };

    const handler = () => {
      datepicker._datepicker.expanded = !datepicker._datepicker.expanded;
      el.setAttribute('aria-expanded', datepicker._datepicker.expanded);
      Alpine.nextTick(() => {
        if (datepicker._datepicker.expanded) {
          top.addEventListener('click', close, { once: true });
        } else {
          top.removeEventListener('click', close);
        }
      });
    };

    el.addEventListener('click', handler);

    cleanup(() => {
      el.removeEventListener('click', handler);
      top.removeEventListener('click', close);
    });
  }).before('h-button');

  Alpine.directive('h-calendar', (el, { expression }, { effect, evaluateLater, cleanup, Alpine }) => {
    const datepicker = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty('_datepicker'));
    el.classList.add('border', 'rounded-control', 'gap-2', 'p-2');
    el.setAttribute('tabindex', '-1');
    if (datepicker) {
      el.classList.add('fixed', 'bg-popover', 'text-popover-foreground', 'data-[state=open]:flex', 'data-[state=open]:flex-col', 'data-[state=closed]:hidden', 'z-50', 'shadow-md');
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-modal', 'true');
      el.setAttribute('data-slot', 'date-picker-calendar');
      el.setAttribute('data-state', datepicker._datepicker.expanded ? 'open' : 'closed');
    } else {
      el.classList.add('shadow-control');
    }

    let date = new Date();
    let selected = null;
    let focusedDay = null;

    let locale = undefined;
    let formatter = null;
    let modelAsIso = false;
    let firstDay = 0;
    let minDate = null;
    let maxDate = null;

    function modelChange() {
      Alpine.nextTick(() => {
        el.dispatchEvent(new CustomEvent('change', { detail: { date: selected } }));
      });
      if (modelAsIso) {
        el._x_model.set(selected.toISOString());
      } else {
        el._x_model.set(formatter.format(selected));
      }
      if (datepicker) {
        datepicker._datepicker.input.value = formatter.format(selected);
      }
    }

    if (datepicker) {
      datepicker._datepicker.input.addEventListener('change', () => {
        selected = new Date(datepicker._datepicker.input.value);
        if (isNaN(selected)) {
          console.error(`h-calendar: input value is not a valid date - ${datepicker._datepicker.input.value}`);
          datepicker._datepicker.input.setCustomValidity('Input value is not a valid date.');
          return;
        } else {
          datepicker._datepicker.input.setCustomValidity('');
        }
        modelChange();
        render();
      });
    }

    function dayClick(event) {
      if (event.target.getAttribute('aria-disabled') === 'true') return;
      focusedDay = new Date(event.target.dataset.year, event.target.dataset.month, event.target.dataset.day);
      selected = new Date(focusedDay);
      modelChange();
      render();
    }

    function isDisabled(d) {
      if (minDate && d < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true;
      if (maxDate && d > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true;
      return false;
    }

    function sameDay(a, b) {
      return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    }

    const weekdayFormat = new Intl.DateTimeFormat(locale, { weekday: 'short' });
    function getWeekdayNames() {
      return Array.from({ length: 7 }, (_, i) => {
        const weekday = (i + firstDay) % 7;
        return weekdayFormat.format(new Date(2020, 9, weekday + 4));
      });
    }

    const fullWeekdayFormat = new Intl.DateTimeFormat(locale, { weekday: 'long' });
    function getFullWeekdayNames() {
      return Array.from({ length: 7 }, (_, i) => {
        const weekday = (i + firstDay) % 7;
        return fullWeekdayFormat.format(new Date(2020, 9, weekday + 4));
      });
    }

    let weekdayNames = undefined;
    let fullWeekdayNames = undefined;

    const header = document.createElement('div');
    header.classList.add('hbox', 'gap-2', 'items-center', 'justify-between');
    const buttonClasses = [
      'size-9',
      'cursor-pointer',
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-control',
      'text-sm',
      'font-medium',
      'transition-all',
      'outline-none',
      'focus-visible:border-ring',
      'focus-visible:ring-ring/50',
      'focus-visible:ring-[3px]',
      'bg-transparent',
      'text-foreground',
      'hover:bg-secondary',
      'hover:text-secondary-foreground',
      'active:bg-secondary-active',
      'aria-pressed:bg-secondary-active',
    ];
    const previousYearBtn = document.createElement('button');
    previousYearBtn.classList.add(...buttonClasses);
    previousYearBtn.setAttribute('aria-label', el.hasAttribute('data-aria-prev-year') ? el.hasAttribute('data-aria-prev-year') : 'previous year');
    previousYearBtn.setAttribute('type', 'button');
    previousYearBtn.appendChild(
      createElement(ChevronsLeft, {
        class: ['opacity-50 size-4 shrink-0 pointer-events-none'],
        width: '16',
        height: '16',
        'aria-hidden': true,
        role: 'presentation',
      })
    );
    previousYearBtn.addEventListener('click', () => {
      date.setFullYear(date.getFullYear() - 1);
      render();
    });
    header.appendChild(previousYearBtn);

    const previousMonthBtn = document.createElement('button');
    previousMonthBtn.classList.add(...buttonClasses);
    previousMonthBtn.setAttribute('aria-label', el.hasAttribute('data-aria-prev-month') ? el.hasAttribute('data-aria-prev-month') : 'previous month');
    previousMonthBtn.setAttribute('type', 'button');
    previousMonthBtn.appendChild(
      createElement(ChevronLeft, {
        class: ['opacity-50 size-4 shrink-0 pointer-events-none'],
        width: '16',
        height: '16',
        'aria-hidden': true,
        role: 'presentation',
      })
    );
    previousMonthBtn.addEventListener('click', () => {
      date.setMonth(date.getMonth() - 1);
      render();
    });
    header.appendChild(previousMonthBtn);

    const headerLabel = document.createElement('h2');
    headerLabel.classList.add('min-w-[8rem]', 'text-center');
    headerLabel.setAttribute('id', `hdpl${uuidv4()}`);
    headerLabel.setAttribute('aria-live', 'polite');
    header.appendChild(headerLabel);

    const nextMonthBtn = document.createElement('button');
    nextMonthBtn.classList.add(...buttonClasses);
    nextMonthBtn.setAttribute('aria-label', el.hasAttribute('data-aria-next-month') ? el.hasAttribute('data-aria-next-month') : 'next month');
    nextMonthBtn.setAttribute('type', 'button');
    nextMonthBtn.appendChild(
      createElement(ChevronRight, {
        class: ['opacity-50 size-4 shrink-0 pointer-events-none'],
        width: '16',
        height: '16',
        'aria-hidden': true,
        role: 'presentation',
      })
    );
    nextMonthBtn.addEventListener('click', () => {
      date.setMonth(date.getMonth() + 1);
      render();
    });
    header.appendChild(nextMonthBtn);

    const nextYearBtn = document.createElement('button');
    nextYearBtn.classList.add(...buttonClasses);
    nextYearBtn.setAttribute('aria-label', el.hasAttribute('data-aria-next-year') ? el.hasAttribute('data-aria-next-year') : 'next year');
    nextYearBtn.setAttribute('type', 'button');
    nextYearBtn.appendChild(
      createElement(ChevronsRight, {
        class: ['opacity-50 size-4 shrink-0 pointer-events-none'],
        width: '16',
        height: '16',
        'aria-hidden': true,
        role: 'presentation',
      })
    );
    nextYearBtn.addEventListener('click', () => {
      date.setFullYear(date.getFullYear() + 1);
      render();
    });
    header.appendChild(nextYearBtn);
    el.appendChild(header);

    const datesTable = document.createElement('table');
    if (datepicker) datesTable.setAttribute('aria-labelledby', `hdpl${uuidv4()}`);
    datesTable.classList.add('table-fixed', 'border-separate', 'border-spacing-1');
    if (!datepicker) datesTable.classList.add('w-full');
    const thead = document.createElement('thead');
    datesTable.appendChild(thead);
    const theadRow = document.createElement('tr');
    thead.appendChild(theadRow);
    const tbody = document.createElement('tbody');
    datesTable.appendChild(tbody);

    // Weekday headers with ARIA columnheader
    function setWeekdayHeaders() {
      theadRow.replaceChildren();
      for (let i = 0; i < 7; i++) {
        const th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.setAttribute('abbr', weekdayNames[i]);
        th.setAttribute('aria-label', fullWeekdayNames[i]);
        th.classList.add('text-sm', 'font-medium');
        th.innerText = weekdayNames[i];
        theadRow.appendChild(th);
      }
    }

    el.appendChild(datesTable);

    const dayCells = [];

    for (let r = 0; r < 6; r++) {
      const row = document.createElement('tr');
      for (let d = 0; d < 7; d++) {
        const cell = document.createElement('td');
        cell.classList.add(
          'cursor-pointer',
          'text-sm',
          'align-middle',
          'text-center',
          'size-8',
          'rounded-sm',
          'outline-none',
          'hover:bg-secondary',
          'hover:text-secondary-foreground',
          "[&[tabindex='0']]:bg-secondary",
          "[&[tabindex='0']]:text-secondary-foreground",
          'aria-[current=date]:bg-secondary/70',
          'hover:aria-[current=date]:bg-secondary',
          'aria-[current=date]:text-secondary-foreground',
          'aria-selected:!bg-primary',
          'aria-selected:!text-primary-foreground',
          'aria-disabled:pointer-events-none',
          'aria-disabled:opacity-50'
        );
        cell.setAttribute('tabindex', '-1');
        dayCells.push(row.appendChild(cell));
      }
      tbody.appendChild(row);
    }

    function render() {
      const year = date.getFullYear();
      const month = date.getMonth();

      const start = new Date(year, month, 1);
      const end = new Date(year, month + 1, 0);
      const days = end.getDate();

      const prevEndDay = new Date(year, month, 1);
      prevEndDay.setDate(prevEndDay.getDate() - 1);

      let lastPrevMonthDay = prevEndDay.getDate();
      let startDay = (start.getDay() - firstDay + 7) % 7;

      headerLabel.innerText = new Intl.DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric',
      }).format(start);

      let cellIndex = 0;

      function updateDateCell(cell, dayNum) {
        cell.setAttribute('tabindex', '-1');
        cell.setAttribute('aria-disabled', 'true');
        cell.removeAttribute('data-day');
        cell.removeAttribute('data-month');
        cell.removeAttribute('data-year');
        cell.removeAttribute('aria-selected');
        cell.removeAttribute('aria-current');
        if (dayNum < 10) {
          cell.innerText = `0${dayNum}`;
        } else {
          cell.innerText = dayNum;
        }
        cell.removeEventListener('click', dayClick);
      }

      // Previous month days at the beginning
      for (let d = startDay - 1; d >= 0; d--) {
        updateDateCell(dayCells[d], lastPrevMonthDay);
        lastPrevMonthDay--;
        cellIndex++;
      }

      // Active month days
      for (let d = 1; d <= days; d++) {
        const curr = new Date(year, month, d);
        dayCells[cellIndex].setAttribute('data-day', d);
        dayCells[cellIndex].setAttribute('data-month', month);
        dayCells[cellIndex].setAttribute('data-year', year);
        dayCells[cellIndex].setAttribute('tabindex', focusedDay && sameDay(focusedDay, curr) ? '0' : '-1');
        dayCells[cellIndex].setAttribute('aria-selected', selected && sameDay(selected, curr));
        dayCells[cellIndex].setAttribute('aria-disabled', isDisabled(curr));
        if (sameDay(new Date(), curr)) {
          dayCells[cellIndex].setAttribute('aria-current', 'date');
          if (focusedDay === null) dayCells[cellIndex].setAttribute('tabindex', '0');
        } else dayCells[cellIndex].removeAttribute('aria-current');
        if (d < 10) {
          dayCells[cellIndex].innerText = `0${d}`;
        } else {
          dayCells[cellIndex].innerText = d;
        }
        dayCells[cellIndex].addEventListener('click', dayClick);
        cellIndex++;
      }

      // Next month days at the end
      let lastDayNum = 1;
      for (cellIndex; cellIndex < 42; cellIndex++) {
        updateDateCell(dayCells[cellIndex], lastDayNum);
        lastDayNum++;
      }
    }

    function onKeyDown(event) {
      event.stopPropagation();
      if (!focusedDay) focusedDay = selected || new Date(date.getFullYear(), date.getMonth(), 1);
      let newDay = new Date(focusedDay);

      switch (event.key) {
        case 'ArrowLeft':
          newDay.setDate(newDay.getDate() - 1);
          break;
        case 'ArrowRight':
          newDay.setDate(newDay.getDate() + 1);
          break;
        case 'ArrowUp':
          newDay.setDate(newDay.getDate() - 7);
          break;
        case 'ArrowDown':
          newDay.setDate(newDay.getDate() + 7);
          break;
        case 'Home':
          newDay.setDate(1);
          break;
        case 'End':
          newDay.setDate(end.getDate());
          break;
        case 'PageUp':
          newDay.setMonth(newDay.getMonth() - 1);
          break;
        case 'PageDown':
          newDay.setMonth(newDay.getMonth() + 1);
          break;

        case 'Enter':
        case ' ':
          if (!isDisabled(focusedDay)) {
            selected = new Date(focusedDay);
            modelChange();
            render();
          }
          return;

        default:
          return;
      }

      // If the user has navigated to a date from a previous or next month
      if (newDay.getMonth() !== date.getMonth()) {
        date = newDay;
        focusedDay = newDay;
        render();
        return;
      }

      focusedDay = newDay;
      render();
    }

    el.addEventListener('keydown', onKeyDown);

    if (expression) {
      const getConfig = evaluateLater(expression);

      effect(() => {
        getConfig((config) => {
          if (config) {
            if (config.locale) locale = config.locale;
            if (config.firstDay) firstDay = config.firstDay;
            if (config.options) formatter = new Intl.DateTimeFormat(locale, config.options);
            else formatter = new Intl.DateTimeFormat(locale);
            modelAsIso = config.modelAsIso === false;
            if (config.min) minDate = new Date(config.min);
            if (config.max) maxDate = new Date(config.max);
            weekdayNames = getWeekdayNames();
            fullWeekdayNames = getFullWeekdayNames();
            setWeekdayHeaders();
          }
          if (el.hasOwnProperty('_x_model')) {
            selected = new Date(el._x_model.get());
            if (isNaN(selected)) {
              console.error(`h-calendar: input value is not a valid date - ${el._x_model.get()}`);
              datepicker._datepicker.input.setCustomValidity('Input value is not a valid date.');
            } else {
              datepicker._datepicker.input.value = formatter.format(selected);
            }
          }
          render();
        });
      });
    } else {
      formatter = new Intl.DateTimeFormat();
      weekdayNames = getWeekdayNames();
      fullWeekdayNames = getFullWeekdayNames();
      setWeekdayHeaders();
      if (el.hasOwnProperty('_x_model')) {
        selected = new Date(el._x_model.get());
        if (isNaN(selected)) {
          console.error(`h-calendar: input value is not a valid date - ${el._x_model.get()}`);
          datepicker._datepicker.input.setCustomValidity('Input value is not a valid date.');
        } else {
          datepicker._datepicker.input.value = formatter.format(selected);
        }
      }
      render();
    }

    let autoUpdateCleanup;

    function updatePosition() {
      computePosition(datepicker, el, {
        placement: el.getAttribute('data-align') || 'bottom-start',
        strategy: 'fixed',
        middleware: [offset(4), flip(), shift({ padding: 4 })],
      }).then(({ x, y }) => {
        el.focus();
        Object.assign(el.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }

    effect(() => {
      el.setAttribute('data-state', datepicker._datepicker.expanded ? 'open' : 'closed');
      if (datepicker._datepicker.expanded) {
        autoUpdateCleanup = autoUpdate(datepicker, el, updatePosition);
      } else {
        if (autoUpdateCleanup) autoUpdateCleanup();
        Object.assign(el.style, {
          left: '0px',
          top: '0px',
        });
      }
    });

    cleanup(() => {
      el.removeEventListener('keydown', onKeyDown);
      for (let d = 0; d < dayCells.length; d++) {
        dayCells[d].removeEventListener('click', dayClick);
      }
    });
  });
}
