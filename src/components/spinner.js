export default function (Alpine) {
    Alpine.directive('h-spinner', (el) => {
        el.classList.add('size-4', 'border-2', 'border-x-primary', 'border-b-primary', 'border-t-transparent', 'rounded-full', 'animate-spin');
        el.setAttribute('role', 'status');
        el.setAttribute('data-slot', 'spinner');
        el.setAttribute('aria-label', 'Loading');
    });
}
