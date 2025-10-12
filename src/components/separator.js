export default function (Alpine) {
    Alpine.directive('h-separator', (el) => {
        el.classList.add('bg-border', 'shrink-0', 'data-[orientation=horizontal]:h-px', 'data-[orientation=horizontal]:w-full', 'data-[orientation=vertical]:h-full', 'data-[orientation=vertical]:w-px');
        el.setAttribute('role', 'none');
        el.setAttribute('data-slot', 'separator');
    });
}
