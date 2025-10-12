export default function (Alpine) {
    Alpine.directive('h-checkbox', (el, {}, { cleanup }) => {
        el.classList.add(
            'group/checkbox',
            'appearance-none',
            'peer',
            'border-input',
            'bg-input-inner',
            'data-[state=checked]:bg-primary',
            'data-[state=checked]:text-primary-foreground',
            'data-[state=checked]:border-primary',
            'focus-visible:border-ring',
            'focus-visible:ring-ring/50',
            'aria-invalid:ring-negative/20',
            'dark:aria-invalid:ring-negative/40',
            'aria-invalid:border-negative',
            'size-4',
            'shrink-0',
            'rounded-[4px]',
            'border',
            'shadow-control',
            'transition-all',
            'outline-none',
            'focus-visible:ring-[3px]',
            'disabled:cursor-not-allowed',
            'disabled:opacity-50',
            'overflow-hidden',
            'before:block',
            'before:bg-transparent',
            'before:border-l-2',
            'before:border-b-2',
            'before:border-primary-foreground',
            'before:pointer-events-none',
            'before:w-2.5',
            'before:h-1.5',
            'before:rounded-[2px]',
            'before:-rotate-45',
            'before:translate-x-0.5',
            'before:translate-y-0.75',
            'data-[state=unchecked]:before:hidden'
        );
        el.setAttribute('data-slot', 'checkbox');

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
