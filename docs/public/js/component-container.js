import Alpine from '/harmonia/node_modules/alpinejs/dist/module.esm.min.js';
import Harmonia from '/harmonia/harmonia/harmonia.esm.js';

class ComponentContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '/harmonia/harmonia/harmonia.css';
    this.shadowRoot.appendChild(style);
    this.container = document.createElement('div');
    this.container.classList.add('bg-background', 'text-foreground', 'p-6', 'border', 'rounded-md', 'overflow-hidden');
    this.container.setAttribute('v-pre', '');
    this.shadowRoot.appendChild(this.container);
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          this.classToggle();
        }
      });
    });
  }

  classToggle() {
    if (window.document.documentElement.classList.contains('dark')) {
      this.classList.add('dark');
    } else {
      this.classList.remove('dark');
    }
  }

  connectedCallback() {
    if (this.hasAttribute('data-class')) {
      this.container.classList.add(...this.getAttribute('data-class').split(' '));
    }
    if (this.hasAttribute('data-height')) {
      this.container.style.height = this.getAttribute('data-height');
    }
    this.classToggle();
    this.observer.observe(window.document.documentElement, { attributes: true });
    if (this.hasAttribute('data-html')) {
      fetch('/harmonia' + this.getAttribute('data-html'))
        .then((response) => {
          if (response.status === 200) return response.text();
          throw response;
        })
        .then((template) => {
          this.container.innerHTML = template;
          let staticScript = this.container.querySelector('script');
          if (staticScript) {
            const script = document.createElement('script');
            for (let a = 0; a < staticScript.attributes.length; a++) {
              script.setAttribute(staticScript.attributes[a].name, staticScript.attributes[a].value);
            }
            const scriptText = document.createTextNode(`function initJS(Alpine, container) {${staticScript.innerHTML}}`);
            script.appendChild(scriptText);
            staticScript.parentNode.replaceChild(script, staticScript);
            initJS(Alpine, this.container);
          }
          Harmonia.init(Alpine.plugin);
          Alpine.initTree(this.container);
        })
        .catch((response) => {
          console.error(response);
        });
    } else if (this.hasAttribute('data-js')) {
      this.container.append(...this.childNodes);
      import('/harmonia' + this.getAttribute('data-js')).then((mod) => {
        mod.initJS(Alpine, this.container);
        Harmonia.init(Alpine.plugin);
        Alpine.initTree(this.container);
      });
    } else {
      this.container.append(...this.childNodes);
      Harmonia.init(Alpine.plugin);
      Alpine.initTree(this.container);
    }
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }
}

customElements.define('component-container', ComponentContainer);
