export default function (Alpine) {
    Alpine.directive('h-information', (el) => {
        el.classList.add('flex', 'min-w-0', 'flex-1', 'flex-col', 'items-center', 'justify-center', 'gap-6', 'rounded-lg', 'border-dashed', 'p-6', 'text-center', 'text-balance', 'md:p-12');
        el.setAttribute('data-slot', 'information');
    });

    Alpine.directive('h-information-header', (el) => {
        el.classList.add('flex', 'max-w-sm', 'flex-col', 'items-center', 'gap-2', 'text-center');
        el.setAttribute('data-slot', 'information-header');
    });

    Alpine.directive('h-information-media', (el, { modifiers }) => {
        el.classList.add('flex', 'shrink-0', 'items-center', 'justify-center', 'mb-2', '[&_svg]:pointer-events-none', '[&_svg]:shrink-0');
        if (modifiers.includes('icon')) el.classList.add('bg-muted', 'text-foreground', 'flex', 'size-10', 'shrink-0', 'items-center', 'justify-center', 'rounded-lg', "[&_svg:not([class*='size-'])]:size-6");
        else el.classList.add('bg-transparent');
        el.setAttribute('data-slot', 'information-media');
    });

    Alpine.directive('h-information-title', (el) => {
        el.classList.add('text-lg', 'font-medium', 'tracking-tight');
        el.setAttribute('data-slot', 'information-title');
    });

    Alpine.directive('h-information-description', (el) => {
        el.classList.add('text-muted-foreground', '[&>a:hover]:text-primary', 'text-sm/relaxed', '[&>a]:underline', '[&>a]:underline-offset-4');
        el.setAttribute('data-slot', 'information-description');
    });

    Alpine.directive('h-information-content', (el) => {
        el.classList.add('flex', 'w-full', 'max-w-sm', 'min-w-0', 'flex-col', 'items-center', 'gap-4', 'text-sm', 'text-balance');
        el.setAttribute('data-slot', 'information-description');
    });
}
