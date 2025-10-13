export default function (Alpine) {
  Alpine.directive('h-collapsible', (el, { expression }, { effect, evaluate, evaluateLater, Alpine }) => {
    el._collapsible = Alpine.reactive({
      expanded: expression ? evaluate(expression) : false,
    });

    if (expression) {
      const getExpanded = evaluateLater(expression);
      effect(() => {
        getExpanded((expanded) => {
          el._collapsible.expanded = expanded;
        });
      });
    }
  });

  Alpine.directive('h-collapsible-trigger', (el, { modifiers }, { effect, Alpine, cleanup }) => {
    const collapsible = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty('_collapsible'));

    if (!collapsible) {
      console.error('h-collapsible-trigger must be inside an h-collapsible element');
      return;
    }

    if (modifiers.includes('chevron')) {
      el.classList.add('[&_svg]:transition-transform');
      if (modifiers.includes('90')) el.classList.add('[&[data-state=open]>svg:not(:first-child):last-child]:rotate-90');
      else el.classList.add('[&[data-state=open]>svg:not(:first-child):last-child]:rotate-180');
    }

    const handler = () => {
      collapsible._collapsible.expanded = !collapsible._collapsible.expanded;
    };

    effect(() => {
      el.setAttribute('data-state', collapsible._collapsible.expanded ? 'open' : 'closed');
    });

    el.addEventListener('click', handler);

    cleanup(() => {
      el.removeEventListener('click', handler);
    });
  });

  Alpine.directive('h-collapsible-content', (el, {}, { effect, Alpine }) => {
    const collapsible = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty('_collapsible'));
    if (!collapsible) {
      console.error('h-collapsible-content must be inside an h-collapsible element');
      return;
    }
    el.classList.add('data-[state=closed]:hidden');
    effect(() => {
      el.setAttribute('data-state', collapsible._collapsible.expanded ? 'open' : 'closed');
    });
  });
}
