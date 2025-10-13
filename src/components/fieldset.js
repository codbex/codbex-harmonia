export default function (Alpine) {
  Alpine.directive('h-fieldset', (el) => {
    el.classList.add('flex', 'flex-col', 'gap-6', 'has-[>[data-slot=checkbox-group]]:gap-3', 'has-[>[data-slot=radio-group]]:gap-3');
    el.setAttribute('data-slot', 'fieldset');
  });

  Alpine.directive('h-legend', (el, { modifiers }) => {
    el.classList.add('mb-3', 'font-medium', modifiers.includes('label') ? 'text-sm' : 'text-base');
    el.setAttribute('data-slot', 'legend');
  });

  Alpine.directive('h-field-group', (el) => {
    el.classList.add('group/field-group', '@container/field-group', 'flex', 'w-full', 'flex-col', 'gap-7', 'data-[slot=checkbox-group]:gap-3', '[&>[data-slot=field-group]]:gap-4');
    el.setAttribute('data-slot', 'field-group');
  });

  Alpine.directive('h-field', (el) => {
    el.classList.add('group/field', 'flex', 'w-full', 'gap-3', 'data-[invalid=true]:text-destructive');
    switch (el.getAttribute('data-orientation')) {
      case 'horizontal':
        el.classList.add('flex-row', 'items-center', '[&>[data-slot=field-label]]:flex-auto', 'has-[>[data-slot=field-content]]:items-start', 'has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px');
        break;
      case 'responsive':
        el.classList.add(
          'flex-col',
          '[&>*]:w-full',
          '[&>.sr-only]:w-auto',
          '@md/field-group:flex-row',
          '@md/field-group:items-center',
          '@md/field-group:[&>*]:w-auto',
          '@md/field-group:[&>[data-slot=field-label]]:flex-auto',
          '@md/field-group:has-[>[data-slot=field-content]]:items-start',
          '@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'
        );
        break;
      default:
        el.classList.add('flex-col', '[&>*]:w-full', '[&>.sr-only]:w-auto');
    }
    el.setAttribute('role', 'group');
    el.setAttribute('data-slot', 'field');
  });

  Alpine.directive('h-field-content', (el) => {
    el.classList.add('group/field-content', 'flex', 'flex-1', 'flex-col', 'gap-1.5', 'leading-snug');
    el.setAttribute('data-slot', 'field-content');
  });

  Alpine.directive('h-field-title', (el) => {
    el.classList.add('flex', 'w-fit', 'items-center', 'gap-2', 'text-sm', 'leading-snug', 'font-medium', 'group-data-[disabled=true]/field:opacity-50');
    el.setAttribute('data-slot', 'field-title');
  });

  Alpine.directive('h-field-description', (el) => {
    el.classList.add(
      'text-muted-foreground',
      'text-sm',
      'leading-normal',
      'font-normal',
      'group-has-[[data-orientation=horizontal]]/field:text-balance',
      'last:mt-0',
      'nth-last-2:-mt-1',
      '[[data-variant=legend]+&]:-mt-1.5',
      '[&>a:hover]:text-primary',
      '[&>a]:underline',
      '[&>a]:underline-offset-4'
    );
    el.setAttribute('data-slot', 'field-description');
  });

  Alpine.directive('h-field-error', (el) => {
    el.classList.add('text-negative', 'text-sm', 'font-normal');
    el.setAttribute('data-slot', 'field-error');
  });
}
