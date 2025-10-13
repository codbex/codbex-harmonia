export default function (Alpine) {
  Alpine.directive('h-dialog-overlay', (el) => {
    el.classList.add('hidden', 'data-[open=true]:block', 'fixed', 'inset-0', 'z-50', 'bg-black/50');
    el.setAttribute('tabindex', '-1');
    el.setAttribute('data-slot', 'dialog-overlay');
  });

  Alpine.directive('h-dialog', (el) => {
    el.classList.add(
      'relative',
      'bg-background',
      'fixed',
      'top-[50%]',
      'left-[50%]',
      'z-50',
      'grid',
      'w-full',
      'max-w-[calc(100%-2rem)]',
      'translate-x-[-50%]',
      'translate-y-[-50%]',
      'gap-4',
      'rounded-lg',
      'border',
      'p-4',
      'shadow-lg',
      'sm:max-w-lg'
    );
    el.setAttribute('role', 'dialog');
    el.setAttribute('data-slot', 'dialog');
  });

  Alpine.directive('h-dialog-header', (el) => {
    el.classList.add('grid', 'grid-cols-[1fr_auto]', 'place-items-start', 'gap-2', 'text-center', 'sm:text-left');
    el.setAttribute('data-slot', 'dialog-header');
  });

  Alpine.directive('h-dialog-title', (el) => {
    el.classList.add('text-lg', 'leading-none', 'font-semibold');
    el.setAttribute('data-slot', 'dialog-title');
  });

  Alpine.directive('h-dialog-close', (el) => {
    el.classList.add(
      'ring-offset-background',
      'focus:ring-ring',
      // 'absolute',
      // 'top-4',
      // 'right-4',
      'rounded-xs',
      'opacity-70',
      'transition-opacity',
      'hover:opacity-100',
      'focus:ring-2',
      'focus:ring-offset-2',
      'focus:outline-hidden',
      'disabled:pointer-events-none',
      '[&_svg]:pointer-events-none',
      '[&_svg]:shrink-0',
      "[&_svg:not([class*='size-'])]:size-4"
    );
    el.setAttribute('data-slot', 'dialog-close');
  });

  Alpine.directive('h-dialog-description', (el) => {
    el.classList.add('col-span-full', 'text-muted-foreground', 'text-sm');
    el.setAttribute('data-slot', 'dialog-description');
  });

  Alpine.directive('h-dialog-footer', (el) => {
    el.classList.add('flex', 'flex-col-reverse', 'gap-2', 'sm:flex-row', 'sm:justify-end');
    el.setAttribute('data-slot', 'dialog-footer');
  });
}
