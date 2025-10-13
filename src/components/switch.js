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
      'h-4.5',
      'w-8',
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
      'before:size-4',
      'before:rounded-full',
      'before:ring-0',
      'before:transition-transform',
      'before:duration-200',
      'data-[state=checked]:before:translate-x-[calc(100%-2px)]',
      'data-[state=unchecked]:before:translate-x-0'
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
