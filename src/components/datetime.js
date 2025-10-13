import { Calendar } from 'vanilla-calendar-pro';

export default function (Alpine) {
  Alpine.directive('h-datetime', (el, { modifiers, expression }, { evaluate }) => {
    el.readOnly = true;
    el.setAttribute('type', 'text');
    el.classList.add(
      'cursor-pointer',
      'placeholder:text-muted-foreground',
      'selection:bg-primary',
      'selection:text-primary-foreground',
      'bg-input-inner',
      'hover:bg-secondary-hover',
      'active:bg-secondary-active',
      'border-input',
      'flex',
      'w-full',
      (() => {
        if (modifiers[0] === 'sm') return 'h-8';
        else if (modifiers[0] === 'xs') return 'h-6.5';
        else return 'h-9';
      })(),
      'px-3',
      'py-1',
      'min-w-0',
      'rounded-control',
      'border',
      'text-base',
      'shadow-control',
      'transition-[color,box-shadow]',
      'outline-none',
      'disabled:pointer-events-none',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
      'md:text-sm',
      'focus-visible:border-ring',
      'focus-visible:ring-ring/50',
      'focus-visible:ring-[3px]',
      'aria-invalid:ring-negative/20',
      'dark:aria-invalid:ring-negative/40',
      'aria-invalid:border-negative'
    );
    el.setAttribute('data-slot', 'datetime');
    let config = {
      positionToInput: 'auto',
    };
    let onChange;
    if (expression) config = evaluate(expression);
    // if (config.hasOwnProperty('onChangeToInput')) {
    //     onChange = config.onChangeToInput;
    // }
    config.inputMode = true;
    config.onChangeToInput = (self, event) => {
      if (!self.context.inputElement) return;
      if (self.context.selectedDates.length) {
        const value = self.context.selectedDates.length > 1 ? self.context.selectedDates : self.context.selectedDates[0];
        if (el.hasOwnProperty('_x_model')) el._x_model.set(value);
        else self.context.inputElement.value = value;
        self.hide();
      } else {
        if (el.hasOwnProperty('_x_model')) el._x_model.set('');
        else self.context.inputElement.value = '';
      }
      console.log(event);
      setTimeout(() => {
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }, 0);
      // if (onChange) onChange(self);
    };
    const calendar = new Calendar(el, config);
    calendar.init();
  });

  Alpine.directive('h-date-arrow', (el) => {
    el.classList.add('flex', 'items-center', 'h-6', 'w-6');
    el.setAttribute('data-slot', 'date-arrow');
    el.innerHTML = `<svg width="24px" height="24px" aria-label="Previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>`;
    Alpine.initTree(el);
  });
}
