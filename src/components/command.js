export default function (Alpine) {
    Alpine.directive('h-command', (el) => {
        el.classList.add('bg-popover', 'text-popover-foreground', 'flex', 'h-full', 'w-full', 'flex-col', 'overflow-hidden', 'rounded-md');
        el.setAttribute('data-slot', 'command');
    });

    Alpine.directive('h-command-input', (el) => {
        el.classList.add(
            'flex',
            'h-9',
            'items-center',
            'gap-2',
            'border-b',
            'px-3',
            '[&_svg]:size-4',
            '[&_svg]:shrink-0',
            '[&_svg]:opacity-50',
            '[&_input]:placeholder:text-muted-foreground',
            '[&_input]:flex',
            '[&_input]:h-10',
            '[&_input]:w-full',
            '[&_input]:rounded-md',
            '[&_input]:bg-transparent',
            '[&_input]:py-3',
            '[&_input]:text-sm',
            '[&_input]:outline-hidden',
            '[&_input]:disabled:cursor-not-allowed',
            '[&_input]:disabled:opacity-50'
        );
        el.setAttribute('data-slot', 'command-input-wrapper');
    });
}
