import { computePosition, offset, flip, shift, size } from '@floating-ui/dom';

export default function (Alpine) {
  Alpine.directive('h-menu-area', (el) => {
    el._menu_area = true;
  });

  Alpine.directive('h-menu', (el, { modifiers }, { cleanup, Alpine }) => {
    el.classList.add('hidden', 'fixed', 'bg-popover', 'text-popover-foreground', 'z-50', 'min-w-[8rem]', 'overflow-x-hidden', 'overflow-y-auto', 'rounded-md', 'p-1', 'shadow-md', 'border', 'outline-none');
    el.setAttribute('role', 'menu');
    el.setAttribute('tabindex', '-1');
    el.setAttribute('data-slot', 'menu');
    if (!el.hasAttribute('aria-labelledby') && !el.hasAttribute('aria-label')) {
      console.error('h-menu: must have an "aria-label" or "aria-labelledby" attribute');
    }

    const menuArea = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty('_menu_area'));
    if (!menuArea) {
      console.error('h-menu: menu must be inside an h-menu-area');
      return;
    }

    let isSubmenu = modifiers.includes('sub');
    let menuSubItem;
    if (isSubmenu) menuSubItem = Alpine.findClosest(el.parentElement, (parent) => parent.getAttribute('data-slot') === 'menu-sub');

    let hidden = true;

    function close() {
      hidden = true;
      el.classList.add('hidden');
      Object.assign(el.style, {
        left: '0px',
        top: '0px',
      });
      if (isSubmenu) {
        top.removeEventListener('click', onClick);
        el.removeEventListener('keydown', onKeydown);
      }
    }

    function isPrintableCharacter(str) {
      return str.length === 1 && /\S/.test(str);
    }

    function getFirstChar(text) {
      const clean = text.replaceAll('\n', '').trim();
      if (clean) return clean[0].toLowerCase();
      return '';
    }

    function onClick() {
      close();
    }

    el.pauseKeyEvents = false;

    function onKeydown(event) {
      if (!el.pauseKeyEvents) {
        let menuitem;
        switch (event.key) {
          case 'Esc':
          case 'Escape':
          case 'Tab':
          case ' ':
          case 'Enter':
            event.preventDefault();
            close();
            if (isSubmenu) {
              setTimeout(() => menuSubItem.focus(), 0);
            }
            break;
          case 'Down':
          case 'ArrowDown':
            event.preventDefault();
            menuitem = el.querySelector(':scope > [role^=menuitem][tabIndex="0"] ~ [role^=menuitem][tabIndex="-1"]');
            if (!menuitem) menuitem = el.querySelector('[role^=menuitem][tabIndex="-1"]');
            if (menuitem) {
              menuitem.focus();
            }
            break;
          case 'Up':
          case 'ArrowUp':
            event.preventDefault();
            let menuitems = el.querySelectorAll(':scope > [role^=menuitem][tabIndex="-1"]:has(~ [role^=menuitem][tabIndex="0"])');
            if (menuitems.length) {
              menuitem = menuitems[menuitems.length - 1];
            } else {
              menuitem = el.querySelector(':scope > [role^=menuitem][tabIndex="-1"]:last-of-type');
            }
            if (menuitem) {
              menuitem.focus();
            }
            break;
          case 'Left':
          case 'ArrowLeft':
            if (isSubmenu) {
              close();
              menuSubItem.focus();
            }
            break;
          case 'Home':
          case 'PageUp':
            event.preventDefault();
            menuitem = el.querySelector(':scope > [role^=menuitem][tabIndex="-1"]:first-of-type');
            if (menuitem) {
              menuitem.focus();
            }
            break;
          case 'End':
          case 'PageDown':
            event.preventDefault();
            menuitem = el.querySelector(':scope > [role^=menuitem][tabIndex="-1"]:last-of-type');
            if (menuitem) {
              menuitem.focus();
            }
            break;
          default:
            if (isPrintableCharacter(event.key)) {
              const items = el.querySelectorAll(':scope > [role^=menuitem]');
              for (let i = 0; i < items.length; i++) {
                if (getFirstChar(items[i].textContent).startsWith(event.key.toLowerCase()) && items[i].tabIndex !== 0) {
                  items[i].focus();
                  break;
                }
              }
            }
        }
      }
    }

    function show(parent) {
      hidden = false;
      el.pauseKeyEvents = false;
      computePosition(parent, el, {
        placement: 'right-start',
        middleware: [
          flip(),
          shift({ padding: 4 }),
          size({
            apply({ availableWidth, availableHeight, elements }) {
              Object.assign(elements.floating.style, {
                maxWidth: `${Math.max(0, availableWidth) - 4}px`,
                maxHeight: `${Math.max(0, availableHeight) - 4}px`,
              });
            },
          }),
        ],
      }).then(({ x, y }) => {
        el.classList.remove('hidden');
        Object.assign(el.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
        el.addEventListener('keydown', onKeydown);
      });
    }

    function hide() {
      close();
    }

    function onContextmenu(event) {
      event.preventDefault();
      el.pauseKeyEvents = false;
      Alpine.nextTick(() => el.focus());
      const virtualEl = {
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: event.clientX,
            y: event.clientY,
            top: event.clientY,
            left: event.clientX,
            right: event.clientX,
            bottom: event.clientY,
          };
        },
      };
      if (hidden) {
        hidden = false;
        computePosition(virtualEl, el, {
          placement: 'bottom-start',
          middleware: [
            offset(4),
            flip(),
            shift({ padding: 4 }),
            size({
              apply({ availableWidth, availableHeight, elements }) {
                Object.assign(elements.floating.style, {
                  maxWidth: `${Math.max(0, availableWidth) - 4}px`,
                  maxHeight: `${Math.max(0, availableHeight) - 4}px`,
                });
              },
            }),
          ],
        }).then(({ x, y }) => {
          el.classList.remove('hidden');
          Object.assign(el.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
        });
        top.addEventListener('click', onClick);
        el.addEventListener('keydown', onKeydown);
      } else {
        close();
      }
    }

    if (isSubmenu) {
      menuSubItem._menu_sub.show = show;
      menuSubItem._menu_sub.hide = hide;
    } else {
      menuArea.addEventListener('contextmenu', onContextmenu);
    }

    cleanup(() => {
      if (!isSubmenu) {
        menuArea.removeEventListener('contextmenu', onContextmenu);
        top.removeEventListener('click', onClick);
      }
      el.removeEventListener('keydown', onKeydown);
    });
  });

  Alpine.directive('h-menu-item', (el, {}, { cleanup, Alpine }) => {
    el.classList.add(
      'focus:bg-muted/80',
      'hover:bg-muted/80',
      'data-[variant=negative]:text-negative',
      'data-[variant=negative]:focus:bg-negative/10',
      'data-[variant=negative]:hover:bg-negative/10',
      'dark:data-[variant=negative]:focus:bg-negative/20',
      'data-[variant=negative]:focus:text-negative',
      'data-[variant=negative]:hover:text-negative',
      'data-[variant=negative]:*:[svg]:!text-negative',
      "[&_svg:not([class*='text-'])]:text-muted-foreground",
      'relative',
      'flex',
      'cursor-default',
      'items-center',
      'gap-2',
      'rounded-sm',
      'px-2',
      'py-1.5',
      'text-sm',
      'outline-hidden',
      'select-none',
      'data-[disabled]:pointer-events-none',
      'data-[disabled]:opacity-50',
      'data-[inset=true]:pl-8',
      '[&_svg]:pointer-events-none',
      '[&_svg]:shrink-0',
      "[&_svg:not([class*='size-'])]:size-4"
    );
    el.setAttribute('role', 'menuitem');
    el.setAttribute('tabindex', '-1');
    el.setAttribute('data-slot', 'menu-item');

    const menu = Alpine.findClosest(el.parentElement, (parent) => parent.getAttribute('role') === 'menu');

    function focusOut(event) {
      el.setAttribute('tabindex', '-1');
      if (event.type === 'mouseleave') menu.focus();
    }

    function focusIn() {
      el.setAttribute('tabindex', '0');
      el.addEventListener('blur', focusOut);
      el.addEventListener('mouseleave', focusOut);
    }

    el.addEventListener('mouseenter', focusIn);
    el.addEventListener('focus', focusIn);

    cleanup(() => {
      el.removeEventListener('mouseenter', focusIn);
      el.removeEventListener('focus', focusIn);
      el.removeEventListener('blur', focusOut);
      el.removeEventListener('mouseleave', focusOut);
    });
  });

  Alpine.directive('h-menu-sub', (el, {}, { cleanup, Alpine }) => {
    el.classList.add(
      'focus:bg-muted/80',
      'hover:bg-muted/80',
      'aria-expanded:bg-muted/80',
      "[&_svg:not([class*='text-'])]:text-muted-foreground",
      'relative',
      'flex',
      'cursor-default',
      'items-center',
      'gap-2',
      'rounded-sm',
      'px-2',
      'py-1.5',
      'text-sm',
      'outline-hidden',
      'select-none',
      'data-[disabled]:pointer-events-none',
      'data-[disabled]:opacity-50',
      'data-[inset=true]:pl-8',
      '[&_svg]:pointer-events-none',
      '[&_svg]:shrink-0',
      "[&_svg:not([class*='size-'])]:size-4",
      'after:block',
      'after:bg-transparent',
      'after:border-t-2',
      'after:border-r-2',
      'after:border-muted-foreground',
      'after:pointer-events-none',
      'after:size-2',
      'after:rounded-[0.125rem]',
      'after:rotate-45',
      'after:ml-auto',
      'after:-translate-x-0.75'
    );
    el.setAttribute('role', 'menuitem');
    el.setAttribute('aria-haspopup', 'true');
    el.setAttribute('aria-expanded', 'false');
    el.setAttribute('tabindex', '-1');
    el.setAttribute('data-slot', 'menu-sub');

    el._menu_sub = {
      show: undefined,
      hide: undefined,
      expanded: false,
    };
    const parentMenu = Alpine.findClosest(el.parentElement, (parent) => parent.getAttribute('role') === 'menu');

    const keyEvents = ['Right', 'ArrowRight', 'Enter', ' '];

    function onKeydown(event) {
      if (keyEvents.includes(event.key)) {
        event.stopPropagation();
        el.setAttribute('aria-expanded', 'true');
        el._menu_sub.show(el);
        el._menu_sub.expanded = true;
        parentMenu.pauseKeyEvents = true;
        el.removeEventListener('keydown', onKeydown);
        const submenuitem = el.querySelector('[role^=menuitem][tabIndex="-1"]:first-of-type');
        if (submenuitem) Alpine.nextTick(() => submenuitem.focus());
      }
    }

    function focusOut(event) {
      console.log('out');
      el.setAttribute('tabindex', '-1');
      if (event.type === 'mouseleave') {
        el._menu_sub.hide();
        el._menu_sub.expanded = false;
        parentMenu.pauseKeyEvents = false;
        el.setAttribute('aria-expanded', 'false');
        parentMenu.focus();
      } else if (!el._menu_sub.expanded) {
        el.setAttribute('aria-expanded', 'false');
        el._menu_sub.hide();
        parentMenu.pauseKeyEvents = false;
        el.removeEventListener('keydown', onKeydown);
      }
    }

    function focusIn(event) {
      el.setAttribute('tabindex', '0');
      if (event.type === 'mouseenter') {
        el.setAttribute('aria-expanded', 'true');
        el.addEventListener('mouseleave', focusOut);
        el._menu_sub.show(el);
        el._menu_sub.expanded = true;
      } else {
        if (el._menu_sub.expanded) {
          el._menu_sub.expanded = false;
          parentMenu.pauseKeyEvents = false;
        } else {
          el.addEventListener('keydown', onKeydown);
          el.addEventListener('blur', focusOut);
        }
      }
    }

    el.addEventListener('mouseenter', focusIn);
    el.addEventListener('focus', focusIn);

    cleanup(() => {
      el.removeEventListener('mouseenter', focusIn);
      el.removeEventListener('focus', focusIn);
      el.removeEventListener('blur', focusOut);
      el.removeEventListener('mouseleave', focusOut);
    });
  });

  Alpine.directive('h-menu-item-secondary', (el) => {
    el.classList.add('text-muted-foreground', 'ml-auto', 'text-xs', 'tracking-widest');
    el.setAttribute('data-slot', 'menu-item-secondary');
  });

  Alpine.directive('h-menu-separator', (el) => {
    el.classList.add('bg-border', '-mx-1', 'my-1', 'h-px');
    el.setAttribute('role', 'presentation');
    el.setAttribute('data-slot', 'menu-separator');
  });

  Alpine.directive('h-menu-label', (el) => {
    el.classList.add('text-foreground', 'px-2', 'py-1.5', 'text-sm', 'font-medium', 'data-[inset=true]:pl-8');
    el.setAttribute('data-slot', 'menu-label');
  });

  Alpine.directive('h-menu-checkbox-item', (el, {}, { cleanup, Alpine }) => {
    el.classList.add(
      'focus:bg-muted/80',
      'hover:bg-muted/80',
      'relative',
      'flex',
      'cursor-default',
      'items-center',
      'gap-2',
      'rounded-sm',
      'pr-2',
      'pl-3.5',
      'py-1.5',
      'text-sm',
      'outline-hidden',
      'select-none',
      'aria-[disabled=true]:pointer-events-none',
      'aria-[disabled=true]:cursor-not-allowed',
      'aria-[disabled=true]:opacity-50',
      'transition-all',
      'overflow-hidden',
      'before:invisible',
      'before:bg-transparent',
      'before:border-l-2',
      'before:border-b-2',
      'before:border-foreground',
      'before:pointer-events-none',
      'before:w-2.5',
      'before:h-1.5',
      'before:rounded-[0.125rem]',
      'before:-rotate-45',
      'before:-translate-x-0.75',
      'aria-[checked=true]:before:visible'
    );
    el.setAttribute('tabindex', '-1');
    el.setAttribute('role', 'menuitemcheckbox');
    el.setAttribute('data-slot', 'menu-checkbox-item');

    function setState(checked, dispatch = true) {
      el.setAttribute('aria-checked', checked);
      if (dispatch)
        setTimeout(() => {
          el.dispatchEvent(new Event('change', { bubbles: true }));
        }, 0);
    }

    if (el.hasOwnProperty('_x_model')) {
      function handler(event) {
        if (event.type === 'keydown') {
          if (event.key !== ' ' && event.key !== 'Enter') {
            return;
          } else if (event.key === ' ') {
            event.preventDefault();
          }
        }
        el._x_model.set(!el._x_model.get());
        setState(el._x_model.get());
      }

      setState(el._x_model.get(), false);

      el.addEventListener('click', handler);
      el.addEventListener('keydown', handler);
    }

    const menu = Alpine.findClosest(el.parentElement, (parent) => parent.getAttribute('role') === 'menu');

    function focusOut(event) {
      el.setAttribute('tabindex', '-1');
      if (event.type === 'mouseleave') menu.focus();
    }

    function focusIn() {
      el.setAttribute('tabindex', '0');
      el.addEventListener('blur', focusOut);
      el.addEventListener('mouseleave', focusOut);
    }

    el.addEventListener('mouseenter', focusIn);
    el.addEventListener('focus', focusIn);

    cleanup(() => {
      if (el.hasOwnProperty('_x_model')) {
        el.removeEventListener('click', handler);
        el.removeEventListener('keydown', handler);
      }
      el.removeEventListener('mouseenter', focusIn);
      el.removeEventListener('focus', focusIn);
      el.removeEventListener('blur', focusOut);
      el.removeEventListener('mouseleave', focusOut);
    });
  });

  Alpine.directive('h-menu-radio-item', (el, { expression }, { effect, evaluateLater, cleanup, Alpine }) => {
    el.classList.add(
      'focus:bg-muted/80',
      'hover:bg-muted/80',
      'relative',
      'flex',
      'cursor-default',
      'items-center',
      'gap-2',
      'rounded-sm',
      'pr-2',
      'pl-3.5',
      'py-1.5',
      'text-sm',
      'outline-hidden',
      'select-none',
      'aria-[disabled=true]:pointer-events-none',
      'aria-[disabled=true]:cursor-not-allowed',
      'aria-[disabled=true]:opacity-50',
      'transition-all',
      'overflow-hidden',
      'before:invisible',
      'before:bg-foreground',
      'before:pointer-events-none',
      'before:size-2',
      'before:rounded-full',
      'before:-translate-x-0.75',
      'aria-[checked=true]:before:visible'
    );
    el.setAttribute('tabindex', '-1');
    el.setAttribute('type', 'radio');
    el.setAttribute('role', 'menuitemradio');
    el.setAttribute('data-slot', 'menu-radio-item');

    const getValue = evaluateLater(expression);
    let value;

    effect(() => {
      getValue((val) => (value = val));
    });

    function setState(checked, dispatch = true) {
      el.setAttribute('aria-checked', checked);
      if (dispatch) el.dispatchEvent(new Event('change', { bubbles: true }));
    }

    if (el.hasOwnProperty('_x_model')) {
      function handler(event) {
        if (event.type === 'keydown') {
          if (event.key !== ' ' && event.key !== 'Enter') {
            return;
          } else if (event.key === ' ') {
            event.preventDefault();
          }
        }
        if (el._x_model.get() !== value) {
          el._x_model.set(value);
        }
      }

      effect(() => {
        setState(el._x_model.get() === value);
      });

      el.addEventListener('click', handler);
      el.addEventListener('keydown', handler);
    }

    const menu = Alpine.findClosest(el.parentElement, (parent) => parent.getAttribute('role') === 'menu');

    function focusOut(event) {
      el.setAttribute('tabindex', '-1');
      if (event.type === 'mouseleave') menu.focus();
    }

    function focusIn() {
      el.setAttribute('tabindex', '0');
      el.addEventListener('blur', focusOut);
      el.addEventListener('mouseleave', focusOut);
    }

    el.addEventListener('mouseenter', focusIn);
    el.addEventListener('focus', focusIn);

    cleanup(() => {
      if (el.hasOwnProperty('_x_model')) {
        el.removeEventListener('click', handler);
        el.removeEventListener('keydown', handler);
      }
      el.removeEventListener('mouseenter', focusIn);
      el.removeEventListener('focus', focusIn);
      el.removeEventListener('blur', focusOut);
      el.removeEventListener('mouseleave', focusOut);
    });
  });
}
