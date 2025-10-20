import { v4 as uuidv4 } from 'uuid';
import { computePosition, offset, flip, shift, size, autoUpdate } from '@floating-ui/dom';

export default function (Alpine) {
  Alpine.directive('h-popover', (el, { expression, modifiers }, { effect, evaluate, evaluateLater, Alpine }) => {
    el._popover = Alpine.reactive({
      id: undefined,
      controls: `hpc${uuidv4()}`,
      auto: modifiers.includes('auto'),
      expanded: expression ? evaluate(expression) : false,
    });
    el.setAttribute('data-slot', 'popover');

    if (expression) {
      const getExpanded = evaluateLater(expression);
      effect(() => {
        getExpanded((expanded) => {
          el._popover.expanded = expanded;
        });
      });
    }
  });

  Alpine.directive('h-popover-trigger', (el, { modifiers }, { effect, Alpine, cleanup }) => {
    const popover = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty('_popover'));

    if (!popover) {
      console.error('h-popover-trigger must be inside an h-popover element');
      return;
    }
    el.setAttribute('type', 'button');
    el.classList.add('w-full', 'h-full');
    if (modifiers.includes('chevron')) {
      el.classList.add('[&_svg]:transition-transform', '[&[data-state=open]>svg:not(:first-child):last-child]:rotate-180');
    }

    el.setAttribute('data-slot', 'popover-trigger');

    if (el.hasAttribute('id')) {
      popover._popover.id = el.getAttribute('id');
    } else {
      popover._popover.id = `hp${uuidv4()}`;
      el.setAttribute('id', popover._popover.id);
    }
    el.setAttribute('aria-controls', popover._popover.controls);
    el.setAttribute('aria-haspopup', 'dialog');

    const setAttributes = () => {
      el.setAttribute('data-state', popover._popover.expanded ? 'open' : 'closed');
      el.setAttribute('aria-expanded', popover._popover.expanded);
    };

    const close = () => {
      popover._popover.expanded = false;
    };

    const handler = () => {
      popover._popover.expanded = !popover._popover.expanded;
      setAttributes();
      Alpine.nextTick(() => {
        if (popover._popover.auto && popover._popover.expanded) {
          top.addEventListener('click', close, { once: true });
        }
      });
    };
    setAttributes();

    if (popover._popover.auto) {
      el.addEventListener('click', handler);

      cleanup(() => {
        el.removeEventListener('click', handler);
        top.removeEventListener('click', close);
      });
    } else {
      effect(() => {
        setAttributes();
      });
    }
  });

  Alpine.directive('h-popover-content', (el, { modifiers }, { effect, Alpine }) => {
    const popover = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty('_popover'));
    if (!popover) {
      console.error('h-popover-content must be inside an h-popover element');
      return;
    }
    el.classList.add('absolute', 'bg-popover', 'text-popover-foreground', 'data-[state=closed]:hidden', 'top-0', 'left-0', 'z-50', 'min-w-[1rem]', 'rounded-control', 'border', 'shadow-md', 'outline-hidden', 'overflow-scroll');
    el.setAttribute('data-slot', 'popover-content');
    el.setAttribute('role', 'dialog');
    el.setAttribute('tabindex', '-1');
    el.setAttribute('id', popover._popover.controls);
    el.setAttribute('aria-labelledby', popover._popover.id);
    el.setAttribute('data-state', popover._popover.expanded ? 'open' : 'closed');

    let noScroll = modifiers.includes('no-scroll');
    if (noScroll) {
      el.classList.remove('overflow-scroll');
      el.classList.add('overflow-none');
    }

    const control = document.getElementById(popover._popover.id);

    let autoUpdateCleanup;

    function updatePosition() {
      computePosition(control, el, {
        placement: el.getAttribute('data-align') || 'bottom-start',
        middleware: [
          offset(4),
          flip(),
          shift({ padding: 4 }),
          !noScroll
            ? size({
                apply({ availableWidth, availableHeight, elements }) {
                  Object.assign(elements.floating.style, {
                    maxWidth: `${Math.max(0, availableWidth) - 4}px`,
                    maxHeight: `${Math.max(0, availableHeight) - 4}px`,
                  });
                },
              })
            : undefined,
        ],
      }).then(({ x, y }) => {
        Object.assign(el.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }

    effect(() => {
      el.setAttribute('data-state', popover._popover.expanded ? 'open' : 'closed');
      if (popover._popover.expanded) {
        autoUpdateCleanup = autoUpdate(control, el, updatePosition);
      } else {
        if (autoUpdateCleanup) autoUpdateCleanup();
        Object.assign(el.style, {
          left: '0px',
          top: '0px',
        });
      }
    });
  });
}
