export default function (Alpine) {
    Alpine.directive('h-radio', (el) => {
        el.classList.add(
            'appearance-none',
            'border-input',
            'bg-input-inner',
            'text-primary',
            'focus-visible:border-ring',
            'focus-visible:ring-ring/50',
            'aria-invalid:ring-negative/20',
            'dark:aria-invalid:ring-negative/40',
            'aria-invalid:border-negative',
            'aspect-square',
            'size-4',
            'shrink-0',
            'rounded-full',
            'border',
            'shadow-control',
            'transition-color',
            'duration-200',
            'outline-none',
            'focus-visible:ring-[3px]',
            'disabled:cursor-not-allowed',
            'disabled:opacity-50',
            'before:block',
            'before:bg-clip-padding',
            'before:rounded-full',
            'before:h-full',
            'before:w-full',
            'before:bg-primary',
            'before:border-input-inner',
            'before:border-3',
            'not-checked:before:hidden'
        );
        el.setAttribute('data-slot', 'radio');
    });
}
