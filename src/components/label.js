export default function (Alpine) {
  Alpine.directive('h-label', (el, { modifiers }) => {
    el.classList.add(
      'flex',
      'items-center',
      'gap-2',
      'text-sm',
      'leading-none',
      'font-medium',
      'select-none',
      'group-data-[disabled=true]:pointer-events-none',
      'group-data-[disabled=true]:opacity-50',
      'peer-disabled:cursor-not-allowed',
      'peer-disabled:opacity-50'
    );
    if (modifiers[0] === 'field') {
      el.classList.add(
        'group/field-label',
        'peer/field-label',
        'flex',
        'w-fit',
        'gap-2',
        'leading-snug',
        'group-data-[disabled=true]/field:opacity-50',
        'has-[>[data-slot=field]]:w-full',
        'has-[>[data-slot=field]]:flex-col',
        'has-[>[data-slot=field]]:rounded-md',
        'has-[>[data-slot=field]]:border',
        '[&>*]:data-[slot=field]:p-4',
        'has-data-[state=checked]:bg-primary/5',
        'has-data-[state=checked]:border-primary',
        'dark:has-data-[state=checked]:bg-primary/10'
      );
      el.setAttribute('data-slot', 'field-label');
    } else el.setAttribute('data-slot', 'label');
  });
}
