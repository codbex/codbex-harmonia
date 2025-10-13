import { v4 as uuidv4 } from 'uuid';
import { computePosition, offset, flip, shift, arrow } from '@floating-ui/dom';

export default function (Alpine) {
  Alpine.directive('h-tooltip', (el, {}, { Alpine }) => {
    el._tooltip = Alpine.reactive({
      id: undefined,
      controls: `hpc${uuidv4()}`,
      shown: false,
    });
    el.setAttribute('data-slot', 'tooltip');
  });

  Alpine.directive('h-tooltip-trigger', (el, {}, { Alpine, cleanup }) => {
    const tooltip = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty('_tooltip'));

    if (!tooltip) {
      console.error('h-tooltip-trigger must be inside an h-tooltip element');
      return;
    }

    if (el.hasAttribute('id')) {
      tooltip._tooltip.id = el.getAttribute('id');
    } else {
      tooltip._tooltip.id = `hp${uuidv4()}`;
      el.setAttribute('id', tooltip._tooltip.id);
    }
    el.setAttribute('aria-describedby', tooltip._tooltip.controls);

    const handler = (event) => {
      tooltip._tooltip.shown = event.type === 'pointerenter';
    };

    el.addEventListener('pointerenter', handler);
    el.addEventListener('pointerleave', handler);

    cleanup(() => {
      el.removeEventListener('pointerenter', handler);
      el.removeEventListener('pointerleave', handler);
    });
  });

  Alpine.directive('h-tooltip-content', (el, {}, { effect, Alpine }) => {
    const tooltip = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty('_tooltip'));
    if (!tooltip) {
      console.error('h-tooltip-content must be inside an h-tooltip element');
      return;
    }
    el.classList.add('absolute', 'bg-foreground', 'text-background', 'z-50', 'w-fit', 'rounded-md', 'px-3', 'py-1.5', 'text-xs', 'text-balance');
    el.setAttribute('data-slot', 'tooltip-content');
    el.setAttribute('id', tooltip._tooltip.controls);

    const control = document.getElementById(tooltip._tooltip.id);

    const arrowEl = document.createElement('span');
    arrowEl.classList.add('absolute', 'bg-foreground', 'fill-foreground', 'z-50', 'size-2.5', 'rotate-45', 'rounded-[2px]');
    el.appendChild(arrowEl);

    function updatePosition() {
      computePosition(control, el, {
        placement: 'top',
        middleware: [offset(10), flip(), shift({ padding: 4 }), arrow({ element: arrowEl })],
      }).then(({ x, y, middlewareData, placement }) => {
        Object.assign(el.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
        if (middlewareData.arrow)
          Object.assign(arrowEl.style, {
            left: middlewareData.arrow.x != null ? `${middlewareData.arrow.x}px` : '',
            top: placement === 'top' ? `${el.offsetHeight - 5}px` : `-5px`,
          });
      });
    }

    effect(() => {
      if (tooltip._tooltip.shown) {
        el.classList.remove('hidden');
        updatePosition();
      } else {
        el.classList.add('hidden');
        Object.assign(el.style, {
          left: '0px',
          top: '0px',
        });
        Object.assign(arrowEl.style, {
          left: '0px',
          top: '0px',
        });
      }
    });
  });
}
