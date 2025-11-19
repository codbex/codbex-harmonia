export default function (Alpine) {
  Alpine.directive('h-switch', (el, {}, { cleanup }) => {
    el.classList.add(
      'appearance-none',
      'peer',
      'data-[state=checked]:bg-primary',
      'data-[state=unchecked]:bg-input',
      'focus-visible:border-ring',
      'focus-visible:ring-ring/50',
      'inline-flex',
      'data-[size=sm]:h-5',
      'data-[size=sm]:w-8',
      'h-6',
      'w-10',
      'shrink-0',
      'items-center',
      'rounded-full',
      'border',
      'border-transparent',
      'shadow-control',
      'transition-all',
      'duration-200',
      'outline-none',
      'focus-visible:ring-[3px]',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
      'before:block',
      'before:bg-background',
      'before:pointer-events-none',
      'data-[size=sm]:before:size-4',
      'before:size-5',
      'before:rounded-full',
      'before:ring-0',
      'before:transition-transform',
      'before:duration-200',
      'data-[state=checked]:before:translate-x-[calc(100%-3px)]',
      'data-[state=unchecked]:before:translate-x-[1px]'
    );
    el.setAttribute('data-slot', 'switch');

    function setState() {
      el.setAttribute('data-state', el.checked ? 'checked' : 'unchecked');
    }

    setState();
    el.addEventListener('change', setState);

    cleanup(() => {
      el.removeEventListener('change', setState);
    });
  });
}
