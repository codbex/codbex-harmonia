export default function (Alpine) {
  Alpine.directive('h-tabs', (el) => {
    el.classList.add('group/tabs', 'flex', 'data-[orientation=horizontal]:flex-col', 'data-[orientation=vertical]:flex-row');
    el.setAttribute('data-slot', 'tabs');
  });

  Alpine.directive('h-tab-bar', (el) => {
    el.classList.add(
      'group/tab-bar',
      'flex',
      'gap-1.5',
      'bg-object-header',
      'text-object-header-foreground',
      'group-data-[orientation=horizontal]/tabs:flex-row',
      'group-data-[orientation=vertical]/tabs:flex-col',
      'data-[style=inline]:group-data-[orientation=horizontal]/tabs:inset-shadow-[0_-.063rem_var(--border)]',
      'data-[style=inline]:group-data-[orientation=vertical]/tabs:inset-shadow-[-.063rem_0_var(--border)]',
      'data-[style=inline]:group-data-[orientation=horizontal]/tabs:h-11',
      'data-[style=inline]:data-[size=sm]:group-data-[orientation=horizontal]/tabs:h-8',
      'data-[style=float]:border',
      'data-[style=float]:rounded-lg',
      'data-[style=float]:p-[3px]'
    );
    el.setAttribute('data-slot', 'tab-bar');
  });

  Alpine.directive('h-tab-list', (el) => {
    el.classList.add(
      'text-muted-foreground',
      'flex',
      'items-start',
      'justify-start',
      'group-data-[orientation=horizontal]/tabs:flex-row',
      'group-data-[orientation=vertical]/tabs:flex-col',
      'group-data-[orientation=vertical]/tabs:h-fit',
      'group-data-[style=inline]/tab-bar:gap-2',
      'group-data-[style=float]/tab-bar:gap-1'
    );
    el.setAttribute('role', 'tablist');
    el.setAttribute('data-slot', 'tab-list');
  });

  Alpine.directive('h-tab', (el) => {
    el.classList.add(
      'cursor-pointer',
      'focus-visible:border-ring',
      'focus-visible:ring-ring/50',
      'focus-visible:outline-ring',
      'text-muted-foreground',
      'hover:text-foreground',
      'aria-selected:text-foreground',
      'inline-flex',
      'group-data-[orientation=vertical]/tabs:w-full',
      'group-data-[orientation=vertical]/tabs:h-9',
      'group-data-[orientation=vertical]/tabs:group-data-[size=sm]/tab-bar:h-8',
      'group-data-[orientation=horizontal]/tabs:h-full',
      'items-center',
      'justify-start',
      'gap-1.5',
      'px-2',
      'py-1',
      'text-sm',
      'font-medium',
      'whitespace-nowrap',
      'transition-[color,box-shadow]',
      'group-data-[style=float]/tab-bar:rounded-md',
      'group-data-[style=float]/tab-bar:border',
      'group-data-[style=float]/tab-bar:border-transparent',
      'group-data-[style=float]/tab-bar:aria-selected:bg-background',
      'group-data-[style=float]/tab-bar:aria-selected:border-border',
      'group-data-[style=float]/tab-bar:hover:bg-background',
      'group-data-[style=float]/tab-bar:hover:border-border',
      'group-data-[style=inline]/tab-bar:border-0',
      'group-data-[style=inline]/tab-bar:group-data-[orientation=horizontal]/tabs:hover:inset-shadow-[0_-.188rem_var(--border)]',
      'group-data-[style=inline]/tab-bar:group-data-[orientation=horizontal]/tabs:aria-selected:inset-shadow-[0_-.125rem_var(--primary)]',
      'group-data-[style=inline]/tab-bar:group-data-[orientation=horizontal]/tabs:hover:aria-selected:inset-shadow-[0_-.188rem_var(--primary)]',
      'group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:px-3.5',
      'group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:hover:inset-shadow-[-.188rem_0_var(--border)]',
      'group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:aria-selected:inset-shadow-[-.125rem_0_var(--primary)]',
      'group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:hover:aria-selected:inset-shadow-[-.188rem_0_var(--primary)]',
      'focus-visible:ring-[3px]',
      'focus-visible:outline-1',
      'disabled:pointer-events-none',
      'disabled:opacity-50',
      '[&_svg]:pointer-events-none',
      '[&_svg]:shrink-0',
      "[&_svg:not([class*='size-'])]:size-4"
    );
    el.setAttribute('role', 'tab');
    el.setAttribute('data-slot', 'tab');
    if (!el.hasAttribute('id')) throw new Error('h-tab: Tabs must have an id');
    if (!el.hasAttribute('aria-controls')) throw new Error('h-tab: aria-controls must be set to the tab-content id.');
  });

  Alpine.directive('h-tab-action', (el) => {
    el.classList.add('cursor-pointer', 'ml-auto', 'rounded-md', 'text-foreground', 'hover:bg-secondary', 'hover:text-secondary-foreground', 'active:bg-secondary-active');
    el.setAttribute('role', 'button');
    el.setAttribute('data-slot', 'tab-action');
  });

  Alpine.directive('h-tab-list-actions', (el, { modifiers }) => {
    el.classList.add('flex', 'gap-1.5', 'items-center', 'justify-center');
    if (modifiers.includes('end'))
      el.classList.add(
        'group-data-[orientation=horizontal]/tabs:ml-auto',
        'group-data-[style=inline]/tab-bar:group-data-[orientation=horizontal]/tabs:mr-1.5',
        'group-data-[orientation=vertical]/tabs:mt-auto',
        'group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:mb-1.5'
      );
    el.setAttribute('data-slot', 'tab-list-actions');
  });

  Alpine.directive('h-tabs-content', (el) => {
    el.classList.add('flex-1', 'outline-none');
    el.setAttribute('role', 'tabpanel');
    el.setAttribute('tabindex', '0');
    el.setAttribute('data-slot', 'tabs-content');
    if (!el.hasAttribute('id')) throw new Error('h-tabs-content: Tab content must have an id');
    if (!el.hasAttribute('aria-labelledby')) throw new Error('h-tabs-content: aria-labelledby must be set to the tab id.');
  });
}
