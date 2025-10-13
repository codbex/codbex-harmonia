export default function (Alpine) {
  Alpine.directive('h-table-container', (el, { modifiers }) => {
    if (modifiers.includes('scroll')) {
      el.classList.add('overflow-scroll', '[&_thead]:sticky', '[&_thead]:top-0', '[&_thead]:z-10');
    } else {
      el.classList.add('relative', 'w-full', 'overflow-x-auto');
    }
    el.setAttribute('data-slot', 'table');

    if (el.getAttribute('data-border')) {
      el.classList.add('border', 'rounded-md', '[&_caption]:pb-4');
    }
  });

  Alpine.directive('h-table', (el) => {
    el.classList.add('w-full', 'caption-bottom', 'text-sm');
    el.setAttribute('data-slot', 'table');

    switch (el.getAttribute('data-border')) {
      case 'rows':
        el.classList.add('[&_tr]:border-b');
        break;
      case 'columns':
        el.classList.add('[&_tr]:divide-x');
        break;
      case 'both':
        el.classList.add('[&_tr]:border-b', '[&_tr]:divide-x');
        break;
    }
  });

  Alpine.directive('h-table-header', (el) => {
    el.classList.add('bg-background', '[&_tr]:bg-muted/50');
    el.setAttribute('data-slot', 'table-header');
  });

  Alpine.directive('h-table-head', (el) => {
    el.classList.add('text-foreground', 'h-10', 'px-2', 'text-left', 'align-middle', 'font-semibold', 'whitespace-nowrap', '[&:has([role=checkbox])]:pr-0', '[&>[role=checkbox]]:flex', '[&>[role=checkbox]]:items-center');
    el.setAttribute('data-slot', 'table-head');
  });

  Alpine.directive('h-table-cell', (el) => {
    el.classList.add('p-2', 'align-middle', 'whitespace-nowrap', '[&:has([role=checkbox])]:pr-0', '[&>[role=checkbox]]:flex', '[&>[role=checkbox]]:items-center');
    el.setAttribute('data-slot', 'table-cell');
  });

  Alpine.directive('h-table-body', (el) => {
    el.classList.add('[&_tr:last-child]:border-0');
    el.setAttribute('data-slot', 'table-body');
  });

  Alpine.directive('h-table-row', (el) => {
    el.classList.add('hover:bg-muted/50', 'data-[state=selected]:bg-muted', 'transition-colors');
    el.setAttribute('data-slot', 'table-row');
  });

  Alpine.directive('h-table-caption', (el) => {
    el.classList.add('text-muted-foreground', 'mt-4', 'text-sm');
    el.setAttribute('data-slot', 'table-caption');
  });

  Alpine.directive('h-table-footer', (el) => {
    el.classList.add('bg-muted/50', 'border-t', 'font-medium', '[&>tr]:last:border-b-0');
    el.setAttribute('data-slot', 'table-footer');
  });
}
