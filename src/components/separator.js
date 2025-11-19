export default function (Alpine) {
  Alpine.directive('h-separator', (el) => {
    el.classList.add(
      'bg-border',
      'shrink-0',
      'data-[orientation=horizontal]:h-px',
      'data-[orientation=horizontal]:w-full',
      'data-[orientation=vertical]:h-full',
      'data-[orientation=vertical]:w-px',
      'data-[orientation=vertical]:[[data-slot=input-group]_&]:h-auto',
      'data-[orientation=vertical]:[[data-slot=input-group]_&]:self-stretch',
      'data-[orientation=horizontal]:[[data-slot=input-group]_&]:w-auto',
      'data-[orientation=horizontal]:[[data-slot=input-group]_&]:grow'
    );
    el.setAttribute('role', 'none');
    el.setAttribute('data-slot', 'separator');
  });
}
