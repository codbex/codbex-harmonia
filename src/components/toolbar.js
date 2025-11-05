export default function (Alpine) {
  Alpine.directive('h-toolbar', (el, { modifiers }) => {
    el.classList.add(
      'bg-object-header',
      'text-object-header-foreground',
      'flex',
      'flex-row',
      'shrink-0',
      'items-center',
      'px-2',
      'gap-1',
      modifiers.includes('footer') ? 'border-t' : 'border-b',
      'w-full',
      'h-11',
      'data-[size=sm]:h-8',
      'data-[variant=transparent]:bg-transparent',
      'data-[variant=transparent]:text-foreground'
    );
    el.setAttribute('data-slot', 'toolbar');
  });

  Alpine.directive('h-toolbar-title', (el) => {
    el.classList.add('text', '[[data-size=sm]_&]:text-sm', 'font-medium', 'whitespace-nowrap', 'text-ellipsis', 'overflow-hidden');
    el.setAttribute('data-slot', 'toolbar-title');
  });

  Alpine.directive('h-toolbar-spacer', (el) => {
    el.classList.add('flex-[1_auto]', 'h-full');
    el.setAttribute('data-slot', 'toolbar-spacer');
  });

  Alpine.directive('h-toolbar-separator', (el) => {
    el.classList.add('w-px', 'h-full', 'border-l');
    el.setAttribute('data-slot', 'toolbar-separator');
  });
}
