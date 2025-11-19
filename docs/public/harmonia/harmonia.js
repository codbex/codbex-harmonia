(() => {
  // node_modules/lucide/dist/esm/defaultAttributes.js
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };

  // node_modules/lucide/dist/esm/createElement.js
  var createSVGElement = ([tag, attrs, children]) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs).forEach((name) => {
      element.setAttribute(name, String(attrs[name]));
    });
    if (children?.length) {
      children.forEach((child) => {
        const childElement = createSVGElement(child);
        element.appendChild(childElement);
      });
    }
    return element;
  };
  var createElement = (iconNode, customAttrs = {}) => {
    const tag = "svg";
    const attrs = {
      ...defaultAttributes,
      ...customAttrs
    };
    return createSVGElement([tag, attrs, iconNode]);
  };

  // node_modules/lucide/dist/esm/icons/check.js
  var Check = [["path", { d: "M20 6 9 17l-5-5" }]];

  // node_modules/lucide/dist/esm/icons/chevron-down.js
  var ChevronDown = [["path", { d: "m6 9 6 6 6-6" }]];

  // node_modules/lucide/dist/esm/icons/search.js
  var Search = [
    ["path", { d: "m21 21-4.34-4.34" }],
    ["circle", { cx: "11", cy: "11", r: "8" }]
  ];

  // node_modules/uuid/dist/stringify.js
  var byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset4 = 0) {
    return (byteToHex[arr[offset4 + 0]] + byteToHex[arr[offset4 + 1]] + byteToHex[arr[offset4 + 2]] + byteToHex[arr[offset4 + 3]] + "-" + byteToHex[arr[offset4 + 4]] + byteToHex[arr[offset4 + 5]] + "-" + byteToHex[arr[offset4 + 6]] + byteToHex[arr[offset4 + 7]] + "-" + byteToHex[arr[offset4 + 8]] + byteToHex[arr[offset4 + 9]] + "-" + byteToHex[arr[offset4 + 10]] + byteToHex[arr[offset4 + 11]] + byteToHex[arr[offset4 + 12]] + byteToHex[arr[offset4 + 13]] + byteToHex[arr[offset4 + 14]] + byteToHex[arr[offset4 + 15]]).toLowerCase();
  }

  // node_modules/uuid/dist/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      if (typeof crypto === "undefined" || !crypto.getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
      getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
  }

  // node_modules/uuid/dist/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = { randomUUID };

  // node_modules/uuid/dist/v4.js
  function _v4(options, buf, offset4) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
      throw new Error("Random bytes length must be >= 16");
    }
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset4 = offset4 || 0;
      if (offset4 < 0 || offset4 + 16 > buf.length) {
        throw new RangeError(`UUID byte range ${offset4}:${offset4 + 15} is out of buffer bounds`);
      }
      for (let i = 0; i < 16; ++i) {
        buf[offset4 + i] = rnds[i];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  function v4(options, buf, offset4) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    return _v4(options, buf, offset4);
  }
  var v4_default = v4;

  // src/components/accordion.js
  function accordion_default(Alpine) {
    Alpine.directive("h-accordion", (el, { expression, modifiers }, { Alpine: Alpine2 }) => {
      el._accordion = modifiers.includes("single") ? Alpine2.reactive({
        single: true,
        expandedId: expression ?? ""
      }) : { single: false };
      el.setAttribute("data-slot", "accordion");
    });
    Alpine.directive("h-accordion-item", (el, { expression, modifiers }, { effect, Alpine: Alpine2 }) => {
      const accordion = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_accordion"));
      if (!accordion) {
        throw new Error("h-accordion-item must be inside an h-accordion");
      }
      el.classList.add("border-b", "last:border-b-0");
      el.setAttribute("data-slot", "accordion-item");
      const itemId = expression ?? `ha${v4_default()}`;
      function getIsExpanded() {
        if (accordion._accordion.single) {
          if (accordion._accordion.expandedId !== "") {
            return accordion._accordion.expandedId === itemId;
          } else if (modifiers.includes("default")) {
            accordion._accordion.expandedId = itemId;
            return true;
          }
          return false;
        }
        return modifiers.includes("default");
      }
      el._accordionItem = Alpine2.reactive({
        id: itemId,
        controls: `ha${v4_default()}`,
        expanded: getIsExpanded()
      });
      const setAttributes = () => {
        el.setAttribute("data-state", el._accordionItem.expanded ? "open" : "closed");
      };
      setAttributes();
      effect(setAttributes);
    });
    Alpine.directive("h-accordion-trigger", (el, { expression }, { effect, evaluateLater, Alpine: Alpine2, cleanup }) => {
      if (el.tagName.length !== 2 && !el.tagName.startsWith("H")) {
        throw new Error("h-accordion-trigger must be a header element");
      }
      const accordion = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_accordion"));
      const accordionItem = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_accordionItem"));
      if (!accordionItem || !accordion) {
        throw new Error("h-accordion-trigger must be inside an h-accordion-item, which must be inside an h-accordion");
      }
      el.classList.add("flex");
      el.setAttribute("tabIndex", "-1");
      const getLabel = evaluateLater(expression);
      const chevronDown = createElement(ChevronDown, {
        class: ["text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"],
        width: "16",
        height: "16",
        "aria-hidden": true,
        role: "presentation"
      });
      const button = document.createElement("button");
      button.setAttribute("type", "button");
      button.setAttribute("tabIndex", "0");
      button.setAttribute("data-slot", "accordion-trigger");
      button.classList.add(
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "flex",
        "flex-1",
        "items-start",
        "justify-between",
        "gap-4",
        "rounded-md",
        "py-4",
        "text-left",
        "text-sm",
        "font-medium",
        "transition-all",
        "outline-none",
        "hover:underline",
        "focus-visible:ring-[3px]",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "[&[data-state=open]>svg]:rotate-180"
      );
      el.appendChild(button);
      effect(() => {
        getLabel((label) => {
          button.innerText = label;
          button.appendChild(chevronDown);
        });
      });
      button.setAttribute("id", accordionItem._accordionItem.id);
      button.setAttribute("aria-controls", accordionItem._accordionItem.controls);
      const setAttributes = () => {
        button.setAttribute("data-state", accordionItem._accordionItem.expanded ? "open" : "closed");
        button.setAttribute("aria-expanded", accordionItem._accordionItem.expanded);
      };
      const handler2 = () => {
        accordionItem._accordionItem.expanded = !accordionItem._accordionItem.expanded;
        setAttributes();
        if (accordion._accordion.single) {
          accordion._accordion.expandedId = accordionItem._accordionItem.id;
        }
      };
      setAttributes();
      el.addEventListener("click", handler2);
      cleanup(() => {
        el.removeEventListener("click", handler2);
      });
      if (accordion._accordion.single) {
        effect(() => {
          if (accordion._accordion.expandedId !== accordionItem._accordionItem.id) {
            accordionItem._accordionItem.expanded = false;
            setAttributes();
          }
        });
      }
    });
    Alpine.directive("h-accordion-content", (el, {}, { effect, Alpine: Alpine2 }) => {
      el.classList.add("pt-0", "pb-4", "overflow-hidden", "text-sm", "data-[state=closed]:hidden");
      el.setAttribute("data-slot", "accordion-content");
      const parent = Alpine2.findClosest(el.parentElement, (parent2) => parent2.hasOwnProperty("_accordionItem"));
      if (parent) {
        el.setAttribute("id", parent._accordionItem.controls);
        el.setAttribute("aria-labelledby", parent._accordionItem.id);
        el.setAttribute("data-state", parent._accordionItem.expanded ? "open" : "closed");
        effect(() => {
          el.setAttribute("data-state", parent._accordionItem.expanded ? "open" : "closed");
        });
      }
    });
  }

  // src/components/button.js
  function button_default(Alpine) {
    Alpine.directive("h-button", (el, { modifiers }, { cleanup }) => {
      el.classList.add(
        "cursor-pointer",
        "inline-flex",
        "items-center",
        "justify-center",
        "gap-2",
        "whitespace-nowrap",
        "rounded-control",
        "text-sm",
        "font-medium",
        "transition-all",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "[&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-4",
        "shrink-0",
        "[&_svg]:shrink-0",
        "outline-none",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "focus-visible:ring-[3px]",
        "aria-invalid:ring-negative/20",
        "dark:aria-invalid:ring-negative/40",
        "aria-invalid:border-negative"
      );
      el.setAttribute("data-slot", "button");
      const inGroup = modifiers.includes("group");
      const variants = {
        default: ["bg-secondary", "text-secondary-foreground", "shadow-control", "hover:bg-secondary-hover", "active:bg-secondary-active", "aria-pressed:bg-secondary-active"],
        primary: ["bg-primary", "text-primary-foreground", "shadow-control", "hover:bg-primary-hover", "active:bg-primary-active", "aria-pressed:bg-primary-active"],
        positive: ["bg-positive", "text-positive-foreground", "shadow-control", "hover:bg-positive-hover", "active:bg-positive-active", "aria-pressed:bg-positive-active"],
        negative: ["bg-negative", "text-negative-foreground", "shadow-control", "hover:bg-negative-hover", "active:bg-negative-active", "aria-pressed:bg-negative-active"],
        warning: ["bg-warning", "text-warning-foreground", "shadow-control", "hover:bg-warning-hover", "active:bg-warning-active", "aria-pressed:bg-warning-active"],
        outline: ["border", "bg-background", "text-foreground", "shadow-none", "hover:bg-secondary", "hover:text-secondary-foreground", "active:bg-secondary-active", "aria-pressed:bg-secondary-active"],
        transparent: ["bg-transparent", "text-foreground", "shadow-none", "hover:bg-secondary", "hover:text-secondary-foreground", "active:bg-secondary-active", "aria-pressed:bg-secondary-active"],
        link: ["text-primary", "underline-offset-4", "hover:underline"]
      };
      const sizes = {
        default: ["h-9", "px-4", "py-2", "has-[>svg]:px-3"],
        xs: inGroup ? ["h-6", "gap-1", "px-2", "[&>svg:not([class*='size-'])]:size-3.5", "has-[>svg]:px-2"] : ["h-6.5", "gap-1.5", "px-2.5", "has-[>svg]:px-2.5"],
        sm: inGroup ? ["h-8", "px-2.5", "gap-1.5", "has-[>svg]:px-2.5"] : ["h-8", "gap-1.5", "px-3", "has-[>svg]:px-2.5"],
        lg: ["h-10", "px-6", "has-[>svg]:px-4"],
        "icon-xs": inGroup ? ["size-6", "p-0", "has-[>svg]:p-0"] : ["size-6.5"],
        "icon-sm": inGroup ? ["size-8", "p-0", "has-[>svg]:p-0"] : ["size-8"],
        icon: ["size-9"],
        "icon-lg": ["size-10"],
        "icon-tab": [
          "group-data-[orientation=horizontal]/tabs:aspect-square",
          "group-data-[orientation=horizontal]/tabs:w-auto",
          "group-data-[style=float]/tab-bar:group-data-[orientation=horizontal]/tabs:h-full",
          "group-data-[style=inline]/tab-bar:group-data-[orientation=horizontal]/tabs:h-[80%]",
          "group-data-[orientation=vertical]/tabs:h-9",
          "group-data-[style=float]/tab-bar:group-data-[orientation=vertical]/tabs:w-full",
          "group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:w-[80%]"
        ]
      };
      function setVariant(variant) {
        for (const [_, value] of Object.entries(variants)) {
          el.classList.remove(...value);
        }
        if (variants.hasOwnProperty(variant)) el.classList.add(...variants[variant]);
      }
      function setSize(size3) {
        if (sizes.hasOwnProperty(size3)) {
          el.classList.add(...sizes[size3]);
          el.setAttribute("data-size", size3);
          if (size3.startsWith("icon") && !el.hasAttribute("aria-labelledby") && !el.hasAttribute("aria-label")) {
            console.error('h-button: Icon-only buttons must have an "aria-label" or "aria-labelledby" attribute', el);
          }
        }
      }
      setVariant(el.getAttribute("data-variant") ?? "default");
      if (inGroup) {
        el.classList.remove("shadow-control", "inline-flex");
        el.classList.add("shadow-none", "flex");
        setSize(el.getAttribute("data-size") ?? "xs");
      } else setSize(el.getAttribute("data-size") ?? "default");
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes") {
            if (mutation.attributeName === "data-variant") setVariant(el.getAttribute("data-variant") ?? "default");
            else if (mutation.attributeName === "data-size") setSize(el.getAttribute("data-size") ?? (inGroup ? "xs" : "default"));
          }
        });
      });
      observer.observe(el, { attributes: true });
      cleanup(() => {
        observer.disconnect();
      });
    });
    Alpine.directive("h-button-group", (el) => {
      el.classList.add(
        "flex",
        "w-fit",
        "items-stretch",
        "[&>*]:focus-visible:z-10",
        "[&>*]:focus-visible:relative",
        "[&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit",
        "[&>input]:flex-1",
        "has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-control",
        "has-[>[data-slot=button-group]]:gap-2"
      );
      el.setAttribute("role", "group");
      el.setAttribute("data-slot", "button-group");
      const variants = {
        horizontal: ["[&>*:not(:first-child)]:rounded-l-none", "[&>*:not(:first-child)]:border-l-0", "[&>*:not(:last-child)]:rounded-r-none"],
        vertical: ["flex-col", "[&>*:not(:first-child)]:rounded-t-none", "[&>*:not(:first-child)]:border-t-0", "[&>*:not(:last-child)]:rounded-b-none"]
      };
      function setVariant(variant) {
        for (const [_, value] of Object.entries(variants)) {
          el.classList.remove(...value);
        }
        if (variants.hasOwnProperty(variant)) el.classList.add(...variants[variant]);
      }
      setVariant(el.getAttribute("data-orientation") ?? "horizontal");
    });
    Alpine.directive("h-button-group-text", (el) => {
      el.classList.add("bg-muted", "flex", "items-center", "gap-2", "rounded-control", "border", "px-4", "text-sm", "font-medium", "shadow-xs", "[&_svg]:pointer-events-none", "[&_svg:not([class*='size-'])]:size-4");
      el.setAttribute("data-slot", "button-group-text");
    });
    Alpine.directive("h-button-group-separator", (el) => {
      el.classList.add("bg-foreground/20", "shrink-0", "[[data-orientation=vertical]_&]:h-px", "[[data-orientation=vertical]_&]:w-full", "h-auto", "w-px", "relative", "!m-0", "self-stretch");
      el.setAttribute("role", "none");
      el.setAttribute("data-slot", "button-group-separator");
    });
  }

  // src/components/input.js
  function input_default(Alpine) {
    Alpine.directive("h-input", (el, { modifiers }) => {
      el.classList.add(
        "file:text-foreground",
        "placeholder:text-muted-foreground",
        "selection:bg-primary",
        "selection:text-primary-foreground",
        "bg-input-inner",
        "border-input",
        "w-full",
        "min-w-0",
        "rounded-control",
        "border",
        "[&:not([type='color'])]:px-3",
        "[&:not([type='color'])]:py-1",
        "[&[type='color']]:overflow-hidden",
        "[&::-moz-color-swatch]:border-0",
        "[&::-webkit-color-swatch]:border-0",
        "[&::-webkit-color-swatch-wrapper]:rounded-0",
        "[&::-webkit-color-swatch-wrapper]:p-0",
        "text-base",
        "shadow-control",
        "transition-[color,box-shadow]",
        "outline-none",
        "file:inline-flex",
        "file:h-7",
        "file:border-0",
        "file:bg-transparent",
        "file:text-sm",
        "file:font-medium",
        "disabled:pointer-events-none",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "md:text-sm",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "focus-visible:ring-[3px]",
        "aria-invalid:ring-negative/20",
        "dark:aria-invalid:ring-negative/40",
        "aria-invalid:border-negative"
      );
      if (modifiers.includes("group")) {
        el.classList.remove("rounded-control", "border", "bg-input-inner", "shadow-control", "focus-visible:ring-[3px]");
        el.classList.add("flex-1", "rounded-none", "border-0", "bg-transparent", "shadow-none", "focus-visible:ring-0");
        el.setAttribute("data-slot", "input-group-control");
      } else el.setAttribute("data-slot", "input");
      if (el.getAttribute("data-size") === "sm") el.classList.add("h-8");
      else if (el.getAttribute("data-size") === "xs") el.classList.add("h-6.5");
      else el.classList.add("h-9");
    });
    Alpine.directive("h-input-group", (el) => {
      el.classList.add(
        "group/input-group",
        "border-input",
        "bg-input-inner",
        "relative",
        "flex",
        "w-full",
        "items-center",
        "rounded-control",
        "border",
        "shadow-control",
        "transition-[color,box-shadow]",
        "outline-none",
        "h-9",
        "min-w-0",
        "has-[>textarea]:h-auto",
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto",
        "has-[>[data-align=block-start]]:flex-col",
        "has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto",
        "has-[>[data-align=block-end]]:flex-col",
        "has-[>[data-align=block-end]]:[&>input]:pt-3",
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring",
        "has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
        "has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        "has-[[data-slot][aria-invalid=true]]:ring-negative/20",
        "has-[[data-slot][aria-invalid=true]]:border-negative",
        "dark:has-[[data-slot][aria-invalid=true]]:ring-negative/40"
      );
      el.setAttribute("role", "group");
      el.setAttribute("data-slot", "input-group");
    });
    Alpine.directive("h-input-group-addon", (el, {}, { cleanup }) => {
      el.classList.add(
        "text-muted-foreground",
        "flex",
        "h-auto",
        "cursor-text",
        "items-center",
        "justify-center",
        "gap-2",
        "py-1.5",
        "text-sm",
        "font-medium",
        "select-none",
        "[&>svg:not([class*='size-'])]:size-4",
        "[&>[data-slot=tag]]:rounded-[calc(var(--radius)-5px)]",
        "data-[disabled=true]:opacity-50",
        "data-[disabled=true]:pointer-events-none"
      );
      el.setAttribute("role", "group");
      el.setAttribute("data-slot", "input-group-addon");
      const variants = {
        "inline-start": ["order-first", "pl-3", "has-[>button]:ml-[-0.45rem]", "has-[>[data-slot=tag]]:ml-[-0.35rem]"],
        "inline-end": ["order-last", "pr-3", "has-[>button]:mr-[-0.45rem]", "has-[>[data-slot=tag]]:mr-[-0.35rem]"],
        "block-start": ["order-first", "w-full", "justify-start", "px-3", "pt-3", "[.border-b]:pb-3", "group-has-[>input]/input-group:pt-2.5"],
        "block-end": ["order-last", "w-full", "justify-start", "px-3", "pb-3", "[.border-t]:pt-3", "group-has-[>input]/input-group:pb-2.5"]
      };
      function setVariant(variant) {
        if (variants.hasOwnProperty(variant)) el.classList.add(...variants[variant]);
      }
      setVariant(el.getAttribute("data-align") ?? "inline-start");
      const handler2 = (event) => {
        if (event.target.closest("button")) {
          return;
        }
        let input = event.currentTarget.parentElement?.querySelector("input");
        if (!input) input = event.currentTarget.parentElement?.querySelector("textarea");
        input?.focus();
      };
      el.addEventListener("click", handler2);
      cleanup(() => {
        el.removeEventListener("click", handler2);
      });
    });
    Alpine.directive("h-input-group-text", (el) => {
      el.classList.add("text-muted-foreground", "flex", "items-center", "gap-2", "text-sm", "[&_svg]:pointer-events-none", "[&_svg:not([class*='size-'])]:size-4");
      el.setAttribute("data-slot", "label");
    });
  }

  // src/components/card.js
  function card_default(Alpine) {
    Alpine.directive("h-card", (el) => {
      el.classList.add("bg-card", "text-card-foreground", "vbox", "gap-6", "rounded-xl", "border", "py-6", "shadow-sm");
      el.setAttribute("data-slot", "card");
    });
    Alpine.directive("h-card-header", (el) => {
      el.classList.add("@container/card-header", "grid", "auto-rows-min", "grid-rows-[auto_auto]", "items-start", "gap-2", "px-6", "has-data-[slot=card-action]:grid-cols-[1fr_auto]", "[.border-b]:pb-6");
      el.setAttribute("data-slot", "card-header");
    });
    Alpine.directive("h-card-title", (el) => {
      el.classList.add("leading-none", "font-semibold");
      el.setAttribute("data-slot", "card-title");
    });
    Alpine.directive("h-card-description", (el) => {
      el.classList.add("text-muted-foreground", "text-sm");
      el.setAttribute("data-slot", "card-description");
    });
    Alpine.directive("h-card-action", (el) => {
      el.classList.add("col-start-2", "row-span-2", "row-start-1", "self-start", "justify-self-end");
      el.setAttribute("data-slot", "card-action");
    });
    Alpine.directive("h-card-content", (el) => {
      el.classList.add("px-6");
      el.setAttribute("data-slot", "card-content");
    });
    Alpine.directive("h-card-footer", (el) => {
      el.classList.add("flex", "items-center", "px-6", "[.border-t]:pt-6");
      el.setAttribute("data-slot", "card-footer");
    });
  }

  // src/components/label.js
  function label_default(Alpine) {
    Alpine.directive("h-label", (el, { modifiers }) => {
      el.classList.add(
        "flex",
        "items-center",
        "gap-2",
        "text-sm",
        "leading-none",
        "font-medium",
        "select-none",
        "group-data-[disabled=true]:pointer-events-none",
        "group-data-[disabled=true]:opacity-50",
        "peer-disabled:cursor-not-allowed",
        "peer-disabled:opacity-50"
      );
      if (modifiers[0] === "field") {
        el.classList.add(
          "group/field-label",
          "peer/field-label",
          "flex",
          "w-fit",
          "gap-2",
          "leading-snug",
          "group-data-[disabled=true]/field:opacity-50",
          "has-[>[data-slot=field]]:w-full",
          "has-[>[data-slot=field]]:flex-col",
          "has-[>[data-slot=field]]:rounded-md",
          "has-[>[data-slot=field]]:border",
          "[&>*]:data-[slot=field]:p-4"
        );
        el.setAttribute("data-slot", "field-label");
      } else el.setAttribute("data-slot", "label");
    });
  }

  // src/components/textarea.js
  function textarea_default(Alpine) {
    Alpine.directive("h-textarea", (el, { modifiers }) => {
      el.classList.add(
        "border-input",
        "placeholder:text-muted-foreground",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "aria-invalid:ring-negative/20",
        "dark:aria-invalid:ring-negative/40",
        "aria-invalid:border-negative",
        "bg-input-inner",
        "flex",
        "field-sizing-content",
        "min-h-16",
        "w-full",
        "rounded-control",
        "border",
        "px-3",
        "py-2",
        "text-base",
        "shadow-control",
        "transition-[color,box-shadow]",
        "outline-none",
        "focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "md:text-sm"
      );
      if (modifiers.includes("group")) {
        el.classList.remove("rounded-control", "border", "bg-input-inner", "py-2", "shadow-control", "focus-visible:ring-[3px]");
        el.classList.add("flex-1", "resize-none", "rounded-none", "border-0", "bg-transparent", "py-3", "shadow-none", "focus-visible:ring-0");
        el.setAttribute("data-slot", "input-group-control");
      } else el.setAttribute("data-slot", "textarea");
    });
  }

  // src/components/checkbox.js
  function checkbox_default(Alpine) {
    Alpine.directive("h-checkbox", (el, {}, { cleanup }) => {
      el.classList.add(
        "appearance-none",
        "border-input",
        "bg-input-inner",
        "data-[state=checked]:bg-primary",
        "data-[state=checked]:text-primary-foreground",
        "data-[state=checked]:border-primary",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "aria-invalid:ring-negative/20",
        "dark:aria-invalid:ring-negative/40",
        "aria-invalid:border-negative",
        "size-4",
        "shrink-0",
        "rounded-[4px]",
        "border",
        "shadow-control",
        "transition-all",
        "outline-none",
        "focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "overflow-hidden",
        "before:block",
        "before:bg-transparent",
        "before:border-l-2",
        "before:border-b-2",
        "before:border-primary-foreground",
        "before:pointer-events-none",
        "before:w-2.5",
        "before:h-1.5",
        "before:rounded-[0.125rem]",
        "before:-rotate-45",
        "before:translate-x-0.5",
        "before:translate-y-0.75",
        "data-[state=unchecked]:before:hidden"
      );
      el.setAttribute("data-slot", "checkbox");
      function setState() {
        el.setAttribute("data-state", el.checked ? "checked" : "unchecked");
      }
      setState();
      el.addEventListener("change", setState);
      cleanup(() => {
        el.removeEventListener("change", setState);
      });
    });
  }

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var floor = Math.floor;
  var createCoords = (v) => ({
    x: v,
    y: v
  });
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  var oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
  function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  var lrPlacement = ["left", "right"];
  var rlPlacement = ["right", "left"];
  var tbPlacement = ["top", "bottom"];
  var btPlacement = ["bottom", "top"];
  function getSideList(side, isStart, rtl) {
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rlPlacement : lrPlacement;
        return isStart ? lrPlacement : rlPlacement;
      case "left":
      case "right":
        return isStart ? tbPlacement : btPlacement;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x,
      y,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      x,
      y
    };
  }

  // node_modules/@floating-ui/core/dist/floating-ui.core.mjs
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x,
      y,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var arrow = (options) => ({
    name: "arrow",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        platform: platform2,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x,
        y
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset4 = clamp(min$1, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset4,
          centerOffset: center - offset4 - alignmentOffset,
          ...shouldAddOffset && {
            alignmentOffset
          }
        },
        reset: shouldAddOffset
      };
    }
  });
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
            if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
            // overflows the main axis.
            overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  var originSides = /* @__PURE__ */ new Set(["left", "top"]);
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  var shift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y2
              } = _ref;
              return {
                x: x2,
                y: y2
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        };
      }
    };
  };
  var size = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const {
          apply = () => {
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
          availableWidth = maximumClippingWidth;
        }
        if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle2(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
  }
  var tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function isTableElement(element) {
    return tableElements.has(getNodeName(element));
  }
  var topLayerSelectors = [":popover-open", ":modal"];
  function isTopLayer(element) {
    return topLayerSelectors.some((selector) => {
      try {
        return element.matches(selector);
      } catch (_e) {
        return false;
      }
    });
  }
  var transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
  var willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
  var containValues = ["paint", "layout", "strict", "content"];
  function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
    return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  var lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
  }
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
  function getCssDimensions(element) {
    const css = getComputedStyle2(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;
    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }
  var noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle2(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top2 = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top2;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
      x,
      y
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle2(body).direction === "rtl") {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  var SCROLLBAR_MAX = 25;
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    if (windowScrollbarX <= 0) {
      const doc = html.ownerDocument;
      const body = doc.body;
      const bodyStyles = getComputedStyle(body);
      const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
      const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
      if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
        width -= clippingStableScrollbarWidth;
      }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
      width += windowScrollbarX;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top2 = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top2 * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle2(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle2(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    function setLeftRTLScrollbarOffset() {
      offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        setLeftRTLScrollbarOffset();
      }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
      setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x,
      y,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle2(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  var getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle2(element).direction === "rtl";
  }
  var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
  }
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const {
        left,
        top: top2,
        width,
        height
      } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top2);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top2 + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          refresh();
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (_e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update);
        ancestorResize && ancestor.removeEventListener("resize", update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  var offset2 = offset;
  var shift2 = shift;
  var flip2 = flip;
  var size2 = size;
  var arrow2 = arrow;
  var computePosition2 = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  // src/components/popover.js
  function popover_default(Alpine) {
    Alpine.directive("h-popover", (el, { expression, modifiers }, { effect, evaluate: evaluate2, evaluateLater, Alpine: Alpine2 }) => {
      el._popover = Alpine2.reactive({
        id: void 0,
        controls: `hpc${v4_default()}`,
        auto: modifiers.includes("auto"),
        expanded: expression ? evaluate2(expression) : false
      });
      el.setAttribute("data-slot", "popover");
      if (expression) {
        const getExpanded = evaluateLater(expression);
        effect(() => {
          getExpanded((expanded) => {
            el._popover.expanded = expanded;
          });
        });
      }
    });
    Alpine.directive("h-popover-trigger", (el, { modifiers }, { effect, Alpine: Alpine2, cleanup }) => {
      const popover = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_popover"));
      if (!popover) {
        throw new Error("h-popover-trigger must be inside an h-popover element");
      }
      el.setAttribute("type", "button");
      if (modifiers.includes("chevron")) {
        el.classList.add("[&_svg]:transition-transform", "[&[data-state=open]>svg:not(:first-child):last-child]:rotate-180");
      }
      if (!el.hasAttribute("data-slot")) el.setAttribute("data-slot", "popover-trigger");
      if (el.hasAttribute("id")) {
        popover._popover.id = el.getAttribute("id");
      } else {
        popover._popover.id = `hp${v4_default()}`;
        el.setAttribute("id", popover._popover.id);
      }
      el.setAttribute("aria-controls", popover._popover.controls);
      el.setAttribute("aria-haspopup", "dialog");
      const setAttributes = () => {
        el.setAttribute("data-state", popover._popover.expanded ? "open" : "closed");
        el.setAttribute("aria-expanded", popover._popover.expanded);
      };
      const close = () => {
        popover._popover.expanded = false;
      };
      const handler2 = () => {
        popover._popover.expanded = !popover._popover.expanded;
        setAttributes();
        Alpine2.nextTick(() => {
          if (popover._popover.auto && popover._popover.expanded) {
            top.addEventListener("click", close, { once: true });
          }
        });
      };
      setAttributes();
      if (popover._popover.auto) {
        el.addEventListener("click", handler2);
        cleanup(() => {
          el.removeEventListener("click", handler2);
          top.removeEventListener("click", close);
        });
      } else {
        effect(() => {
          setAttributes();
        });
      }
    });
    Alpine.directive("h-popover-content", (el, { modifiers }, { effect, Alpine: Alpine2 }) => {
      const popover = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_popover"));
      if (!popover) {
        throw new Error("h-popover-content must be inside an h-popover element");
      }
      el.classList.add("absolute", "bg-popover", "text-popover-foreground", "data-[state=closed]:hidden", "top-0", "left-0", "z-50", "min-w-[1rem]", "rounded-control", "border", "shadow-md", "outline-hidden", "overflow-scroll");
      el.setAttribute("data-slot", "popover-content");
      el.setAttribute("role", "dialog");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("id", popover._popover.controls);
      el.setAttribute("aria-labelledby", popover._popover.id);
      el.setAttribute("data-state", popover._popover.expanded ? "open" : "closed");
      let noScroll = modifiers.includes("no-scroll");
      if (noScroll) {
        el.classList.remove("overflow-scroll");
        el.classList.add("overflow-none");
      }
      const control = popover.querySelector(`#${popover._popover.id}`);
      if (!control) {
        throw new Error("h-popover-content: trigger not found");
      }
      let autoUpdateCleanup;
      function updatePosition() {
        computePosition2(control, el, {
          placement: el.getAttribute("data-align") || "bottom-start",
          middleware: [
            offset2(4),
            flip2(),
            shift2({ padding: 4 }),
            !noScroll ? size2({
              apply({ availableWidth, availableHeight, elements }) {
                Object.assign(elements.floating.style, {
                  maxWidth: `${Math.max(0, availableWidth) - 4}px`,
                  maxHeight: `${Math.max(0, availableHeight) - 4}px`
                });
              }
            }) : void 0
          ]
        }).then(({ x, y }) => {
          Object.assign(el.style, {
            left: `${x}px`,
            top: `${y}px`
          });
        });
      }
      effect(() => {
        el.setAttribute("data-state", popover._popover.expanded ? "open" : "closed");
        if (popover._popover.expanded) {
          autoUpdateCleanup = autoUpdate(control, el, updatePosition);
        } else {
          if (autoUpdateCleanup) autoUpdateCleanup();
          Object.assign(el.style, {
            left: "0px",
            top: "0px"
          });
        }
      });
    });
  }

  // src/components/avatar.js
  function avatar_default(Alpine) {
    Alpine.directive("h-avatar", (el, {}, { Alpine: Alpine2 }) => {
      el.classList.add(
        "relative",
        "bg-secondary",
        "text-secondary-foreground",
        "fill-secondary-foreground",
        "hover:bg-secondary-hover",
        "active:bg-secondary-active",
        "[[data-slot=toolbar]:not([data-variant=transparent])_&]:border",
        "has-[img]:border-0",
        "flex",
        "size-8",
        "shrink-0",
        "overflow-hidden",
        "rounded-full",
        "items-center",
        "justify-center",
        "text-sm",
        "[&>svg]:size-5"
      );
      el.setAttribute("data-slot", "avatar");
      el._avatar = Alpine2.reactive({
        fallback: false
      });
    });
    Alpine.directive("h-avatar-image", (el, {}, { cleanup }) => {
      const avatar = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_avatar"));
      if (!avatar) {
        throw new Error("h-avatar-image must be inside an h-avatar element");
      }
      el.classList.add("aspect-square", "size-full");
      el.setAttribute("data-slot", "avatar-image");
      el.setAttribute("role", "img");
      let interval;
      function fallback(active = false) {
        if (active) el.classList.add("hidden");
        else el.classList.remove("hidden");
        avatar._avatar.fallback = active;
      }
      function completeCheck() {
        if (el.complete) {
          clearInterval(interval);
          fallback(el.naturalHeight === 0);
        }
      }
      if (el.complete && el.naturalHeight === 0) {
        fallback(true);
      } else {
        interval = setInterval(completeCheck, 10);
      }
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes") {
            if (mutation.attributeName === "src") interval = setInterval(completeCheck, 10);
          }
        });
      });
      observer.observe(el, { attributes: true });
      cleanup(() => {
        if (interval) clearInterval(interval);
        observer.disconnect();
      });
    });
    Alpine.directive("h-avatar-fallback", (el, {}, { effect }) => {
      const avatar = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_avatar"));
      if (!avatar) {
        throw new Error("h-avatar-fallback must be inside an h-avatar element");
      }
      el.classList.add("hidden", "bg-muted", "flex", "size-full", "items-center", "justify-center");
      el.setAttribute("data-slot", "avatar-fallback");
      effect(() => {
        if (avatar._avatar.fallback) el.classList.remove("hidden");
        else el.classList.add("hidden");
      });
    });
  }

  // src/components/badge.js
  function badge_default(Alpine) {
    Alpine.directive("h-badge", (el, {}, { cleanup }) => {
      el.classList.add(
        "[a&]:cursor-pointer",
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-md",
        "border",
        "px-2",
        "py-0.5",
        "text-xs",
        "font-medium",
        "w-fit",
        "whitespace-nowrap",
        "shrink-0",
        "[&>svg]:size-3",
        "gap-1",
        "[&>svg]:pointer-events-none",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "focus-visible:ring-[3px]",
        "aria-invalid:ring-negative/20",
        "dark:aria-invalid:ring-negative/40",
        "aria-invalid:border-negative",
        "transition-[color,box-shadow]",
        "overflow-hidden"
      );
      el.setAttribute("data-slot", "badge");
      const variants = {
        default: ["border-transparent", "bg-secondary", "text-secondary-foreground", "[a&]:hover:bg-secondary-hover", "[a&]:active:bg-secondary-active"],
        primary: ["border-transparent", "bg-primary", "text-primary-foreground", "[a&]:hover:bg-primary-hover", "[a&]:active:bg-primary-active"],
        positive: ["border-transparent", "bg-positive", "text-positive-foreground", "[a&]:hover:bg-positive-hover", "[a&]:active:bg-positive-active"],
        negative: ["border-transparent", "bg-negative", "text-negative-foreground", "[a&]:hover:bg-negative-hover", "[a&]:active:bg-negative-active"],
        warning: ["border-transparent", "bg-warning", "text-warning-foreground", "[a&]:hover:bg-warning-hover", "[a&]:active:bg-warning-active"],
        information: ["border-transparent", "bg-information", "text-information-foreground", "[a&]:hover:bg-information-hover", "[a&]:active:bg-information-active"],
        outline: ["bg-transparent", "text-foreground", "[a&]:hover:bg-secondary", "[a&]:hover:text-secondary-foreground", "[a&]:active:bg-secondary-active"]
      };
      function setVariant(variant) {
        for (const [_, value] of Object.entries(variants)) {
          el.classList.remove(...value);
        }
        if (variants.hasOwnProperty(variant)) el.classList.add(...variants[variant]);
      }
      setVariant(el.getAttribute("data-variant") ?? "default");
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "data-variant") {
            setVariant(el.getAttribute("data-variant") ?? "default");
          }
        });
      });
      observer.observe(el, { attributes: true });
      cleanup(() => {
        observer.disconnect();
      });
    });
  }

  // src/components/select.js
  var FilterType = Object.freeze({
    "starts-with": 0,
    contains: 1,
    "contains-each": 2,
    none: 3
  });
  function select_default(Alpine) {
    Alpine.directive("h-select", (el, {}, { Alpine: Alpine2 }) => {
      el._select = Alpine2.reactive({
        id: void 0,
        controls: `hsc${v4_default()}`,
        expanded: false,
        model: void 0,
        multiple: false,
        label: [],
        search: "",
        filterType: FilterType["starts-with"]
      });
      el.setAttribute("data-slot", "select");
    });
    Alpine.directive("h-select-trigger", (el, {}, { effect, cleanup, Alpine: Alpine2 }) => {
      const select = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_select"));
      if (!select) {
        throw new Error("h-select-trigger must be inside an h-select element");
      } else if (el.hasOwnProperty("_x_model")) {
        select._select.multiple = Array.isArray(el._x_model.get());
        select._select.model = el._x_model.get();
      }
      el.setAttribute("type", "button");
      const selectValue = document.createElement("span");
      selectValue.setAttribute("data-slot", "select-value");
      selectValue.classList.add("pointer-events-none");
      function getPlaceholder() {
        if (!el.value) {
          const value = el.getAttribute("placeholder");
          if (value) {
            selectValue.innerText = value;
            selectValue.classList.add("text-muted-foreground");
          } else {
            selectValue.classList.remove("text-muted-foreground");
          }
        }
      }
      getPlaceholder();
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes") {
            if (mutation.attributeName === "value") {
              el.dispatchEvent(new Event("change", { bubbles: true }));
              if (el.value) selectValue.classList.remove("text-muted-foreground");
            } else if (mutation.attributeName === "placeholder" && !select._select.label.length) {
              getPlaceholder();
            }
          }
        });
      });
      observer.observe(el, { attributes: true });
      effect(() => {
        if (select._select.label.length === 1) {
          selectValue.innerText = select._select.label[0];
        } else if (select._select.label.length > 1) {
          selectValue.innerText = select._select.label.join(", ");
        } else {
          getPlaceholder();
        }
      });
      el.classList.add(
        "[&>*]:pointer-events-none",
        "cursor-pointer",
        "border-input",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "aria-invalid:ring-negative/20",
        "dark:aria-invalid:ring-negative/40",
        "aria-invalid:border-negative",
        "hover:bg-secondary-hover",
        "active:bg-secondary-active",
        "flex",
        "w-full",
        "items-center",
        "justify-between",
        "gap-2",
        "rounded-control",
        "border",
        "bg-input-inner",
        "px-3",
        "text-sm",
        "whitespace-nowrap",
        "shadow-control",
        "transition-[color,box-shadow]",
        "outline-none",
        "focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "*:data-[slot=select-value]:line-clamp-1",
        "*:data-[slot=select-value]:flex",
        "*:data-[slot=select-value]:items-center",
        "*:data-[slot=select-value]:gap-2",
        "[&_svg]:pointer-events-none",
        "[&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4",
        "[&_svg]:size-4",
        "[&_svg]:opacity-50",
        "[&[data-state=open]>svg]:rotate-180"
      );
      el.setAttribute("data-slot", "select-trigger");
      if (el.hasAttribute("id")) {
        select._select.id = el.getAttribute("id");
      } else {
        select._select.id = `hs${v4_default()}`;
        el.setAttribute("id", select._select.id);
      }
      el.setAttribute("aria-controls", select._select.controls);
      el.setAttribute("aria-haspopup", "listbox");
      el.setAttribute("aria-autocomplete", "none");
      el.setAttribute("role", "combobox");
      const sizes = {
        default: ["h-9", "py-2"],
        xs: ["h-6.5", "py-[0.188rem]"],
        sm: ["h-8", "py-1.5"]
      };
      function setSize(size3) {
        for (const [_, value] of Object.entries(sizes)) {
          el.classList.remove(...value);
        }
        if (sizes.hasOwnProperty(size3)) {
          el.classList.add(...sizes[size3]);
        }
      }
      if (!el.hasAttribute("data-size")) el.setAttribute("data-size", "default");
      setSize(el.getAttribute("data-size"));
      effect(() => {
        el.setAttribute("data-state", select._select.expanded ? "open" : "closed");
        el.setAttribute("aria-expanded", select._select.expanded);
      });
      const close = () => {
        select._select.expanded = false;
      };
      let content;
      let options;
      const shiftFocus = (event) => {
        switch (event.key) {
          case "Down":
          case "ArrowDown":
            for (let o = 0; o < options.length; o++) {
              if (options[o] === document.activeElement) {
                if (o < options.length - 1) {
                  options[o + 1].focus();
                } else options[0].focus();
                return;
              }
            }
            options[0].focus();
            break;
          case "Up":
          case "ArrowUp":
            for (let o = options.length - 1; o >= 0; o--) {
              if (options[o] === document.activeElement) {
                if (o !== 0) {
                  options[o - 1].focus();
                } else options[options.length - 1].focus();
                return;
              }
            }
            options[options.length - 1].focus();
            break;
          case "Enter":
          case "Escape":
            handler2();
            el.focus();
            break;
          case "Tab":
            handler2();
            break;
        }
      };
      const handler2 = () => {
        select._select.expanded = !select._select.expanded;
        if (select._select.expanded) {
          if (!content) content = select.querySelector(`#${select._select.controls}`);
          options = content.querySelectorAll("[role=option]");
        }
        Alpine2.nextTick(() => {
          if (select._select.expanded) {
            top.addEventListener("click", close, { once: true });
            el.parentElement.addEventListener("keydown", shiftFocus);
          } else {
            top.removeEventListener("click", close);
            el.parentElement.removeEventListener("keydown", shiftFocus);
            options = null;
          }
        });
      };
      el.addEventListener("click", handler2);
      const chevronDown = createElement(ChevronDown, {
        class: ["opacity-50 size-4 transition-transform duration-200"],
        width: "16",
        height: "16",
        "aria-hidden": true,
        role: "presentation"
      });
      el.appendChild(selectValue);
      el.appendChild(chevronDown);
      cleanup(() => {
        el.removeEventListener("click", handler2);
        el.parentElement.removeEventListener("keydown", shiftFocus);
        top.removeEventListener("click", close);
        observer.disconnect();
      });
    });
    Alpine.directive("h-select-content", (el, {}, { effect, Alpine: Alpine2 }) => {
      const select = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_select"));
      if (!select) {
        throw new Error("h-select-content must be inside an h-select element");
      }
      el.classList.add("absolute", "bg-popover", "text-popover-foreground", "data-[state=closed]:hidden", "p-1", "top-0", "left-0", "z-50", "min-w-[1rem]", "overflow-x-hidden", "overflow-y-auto", "rounded-control", "border", "shadow-md");
      el.setAttribute("data-slot", "select-content");
      el.setAttribute("role", "listbox");
      el.setAttribute("role", "presentation");
      el.setAttribute("id", select._select.controls);
      el.setAttribute("tabindex", "-1");
      el.setAttribute("aria-labelledby", select._select.id);
      el.setAttribute("data-state", select._select.expanded ? "open" : "closed");
      const control = select.querySelector(`#${select._select.id}`);
      if (!control) {
        throw new Error("h-select-content: trigger not found");
      }
      let autoUpdateCleanup;
      function updatePosition() {
        computePosition2(control, el, {
          placement: el.getAttribute("data-align") || "bottom-start",
          middleware: [
            offset2(4),
            flip2(),
            shift2({ padding: 4 }),
            size2({
              apply({ availableWidth, availableHeight, elements }) {
                Object.assign(elements.floating.style, {
                  maxWidth: `${Math.max(0, availableWidth) - 4}px`,
                  maxHeight: `${Math.max(0, availableHeight) - 4}px`
                });
              }
            })
          ]
        }).then(({ x, y }) => {
          Object.assign(el.style, {
            left: `${x}px`,
            top: `${y}px`
          });
        });
      }
      effect(() => {
        el.setAttribute("data-state", select._select.expanded ? "open" : "closed");
        if (select._select.expanded) {
          autoUpdateCleanup = autoUpdate(control, el, updatePosition);
        } else {
          if (autoUpdateCleanup) autoUpdateCleanup();
          Object.assign(el.style, {
            left: "0px",
            top: "0px"
          });
        }
      });
    });
    Alpine.directive("h-select-search", (el, { modifiers }, { effect, cleanup }) => {
      const select = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_select"));
      if (!select) {
        throw new Error("h-select-search must be inside an h-select element");
      } else select._select.filterType = FilterType[modifiers[0]] ?? FilterType["starts-with"];
      el.classList.add("flex", "h-8", "items-center", "gap-2", "border-b", "px-2");
      el.setAttribute("data-slot", "select-search");
      el.setAttribute("aria-autocomplete", select._select.filterType === FilterType.none ? "both" : "list");
      el.setAttribute("aria-controls", select._select.controls);
      el.setAttribute("aria-haspopup", "listbox");
      el.setAttribute("role", "combobox");
      el.setAttribute("autocomplete", "off");
      el.setAttribute("autocorrect", "off");
      el.setAttribute("spellcheck", "false");
      const searchIcon = createElement(Search, { class: ["size-4 shrink-0 opacity-50"], width: "16", height: "16", "aria-hidden": true, role: "presentation" });
      const searchInput = document.createElement("input");
      searchInput.setAttribute("type", "text");
      searchInput.setAttribute("data-slot", "select-input");
      searchInput.classList.add("placeholder:text-muted-foreground", "flex", "h-10", "w-full", "rounded-md", "bg-transparent", "py-3", "text-sm", "outline-hidden", "disabled:cursor-not-allowed", "disabled:opacity-50");
      el.appendChild(searchIcon);
      el.appendChild(searchInput);
      function handler2(event) {
        if (event.type === "keydown" && event.key === "Escape") return;
        event.stopPropagation();
      }
      el.addEventListener("click", handler2);
      el.addEventListener("keydown", handler2);
      if (select._select.filterType !== FilterType.none) {
        let onInput2 = function() {
          select._select.search = searchInput.value.toLowerCase();
        };
        searchInput.addEventListener("keyup", onInput2);
      }
      effect(() => {
        if (select._select.expanded) searchInput.focus({ preventScroll: true });
        el.setAttribute("aria-expanded", select._select.expanded);
      });
      cleanup(() => {
        el.removeEventListener("click", handler2);
        el.removeEventListener("keydown", handler2);
        if (select._select.filterType !== FilterType.none) searchInput.removeEventListener("keyup", onInput);
      });
    });
    Alpine.directive("h-select-group", (el, {}, { effect }) => {
      el.setAttribute("data-slot", "select-group");
      el._selectGroup = Alpine.reactive({
        labelledby: void 0
      });
      effect(() => {
        if (el._selectGroup.labelledby) {
          el.setAttribute("aria-labelledby", el._selectGroup.labelledby);
        }
      });
    });
    Alpine.directive("h-select-label", (el) => {
      el.classList.add("text-muted-foreground", "px-2", "py-1.5", "text-xs");
      el.setAttribute("data-slot", "select-label");
      const selectGroup = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_selectGroup"));
      if (selectGroup) {
        const id = `hsl${v4_default()}`;
        el.setAttribute("id", id);
        selectGroup._selectGroup.labelledby = id;
      }
    });
    Alpine.directive("h-select-option", (el, { expression }, { effect, evaluateLater, cleanup }) => {
      const select = Alpine.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_select"));
      if (!select) {
        throw new Error("h-select-option must be inside an h-select element");
      }
      el.classList.add(
        "focus:bg-primary",
        "focus:text-primary-foreground",
        "hover:bg-primary",
        "hover:text-primary-foreground",
        "[&_svg:not([class*='text-'])]:text-muted-foreground",
        "focus:[&_svg:not([class*='text-'])]:text-primary-foreground",
        "hover:[&_svg:not([class*='text-'])]:text-primary-foreground",
        "relative",
        "flex",
        "w-full",
        "cursor-default",
        "items-center",
        "gap-2",
        "rounded-control",
        "py-1.5",
        "pr-8",
        "pl-2",
        "text-sm",
        "outline-hidden",
        "select-none",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-50",
        "[&_svg]:pointer-events-none",
        "[&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4",
        "*:[span]:last:flex",
        "*:[span]:last:items-center",
        "*:[span]:last:gap-2"
      );
      el.setAttribute("data-slot", "select-option");
      el.setAttribute("tabindex", "-1");
      const id = `hso${v4_default()}`;
      el.setAttribute("role", "option");
      el.setAttribute("aria-labelledby", id);
      const indicatorEl = document.createElement("span");
      const labelEl = document.createElement("span");
      labelEl.setAttribute("id", id);
      indicatorEl.classList.add("absolute", "right-2", "flex", "size-3.5", "items-center", "justify-center", "invisible");
      indicatorEl.setAttribute("aria-hidden", "true");
      const check = createElement(Check, { class: ["size-4"], width: "16", height: "16", "aria-hidden": true, role: "presentation" });
      indicatorEl.appendChild(check);
      el.appendChild(indicatorEl);
      el.appendChild(labelEl);
      function getValue() {
        if (el.hasOwnProperty("_x_bindings") && el._x_bindings.hasOwnProperty("value")) return el._x_bindings.value;
        else return el.getAttribute("value");
      }
      const getLabel = evaluateLater(expression);
      effect(() => {
        getLabel((label) => {
          if (select._select.multiple && select._select.model.includes(getValue())) {
            select._select.label[select._select.label.indexOf(labelEl.innerText)] = label;
          } else if (select._select.model === getValue()) {
            select._select.label[0] = label;
          }
          labelEl.innerText = label;
        });
      });
      effect(() => {
        if (select._select.search) {
          if (select._select.filterType === FilterType["starts-with"]) {
            if (!labelEl.innerText.toLowerCase().startsWith(select._select.search)) {
              el.classList.add("hidden");
            } else el.classList.remove("hidden");
          } else if (select._select.filterType === FilterType.contains) {
            if (!labelEl.innerText.toLowerCase().includes(select._select.search)) {
              el.classList.add("hidden");
            } else el.classList.remove("hidden");
          } else if (select._select.filterType === FilterType["contains-each"]) {
            const terms = select._select.search.split(" ");
            const label = labelEl.innerText.toLowerCase();
            if (!terms.every((term) => label.includes(term))) el.classList.add("hidden");
            else el.classList.remove("hidden");
          } else {
            el.classList.remove("hidden");
          }
        } else el.classList.remove("hidden");
      });
      function setSelectedState(selected) {
        if (selected) {
          indicatorEl.classList.remove("invisible");
          el.setAttribute("aria-selected", "true");
          if (!select._select.label.length) {
            select._select.label.push(labelEl.innerText);
          } else if (!select._select.label.includes(labelEl.innerText)) {
            if (select._select.multiple) select._select.label.push(labelEl.innerText);
            else select._select.label[0] = labelEl.innerText;
          }
        } else {
          indicatorEl.classList.add("invisible");
          el.setAttribute("aria-selected", "false");
        }
      }
      function removeLabel() {
        const lIndex = select._select.label.indexOf(labelEl.innerText);
        if (lIndex > -1) select._select.label.splice(lIndex, 1);
      }
      effect(() => {
        if (select._select.multiple) {
          setSelectedState(select._select.model.includes(getValue()));
        } else {
          setSelectedState(select._select.model === getValue());
        }
      });
      const handler2 = (event) => {
        if (event.type === "keydown" && event.key === "Enter" || event.type === "click") {
          if (select._select.multiple) {
            const vIndex = select._select.model.indexOf(getValue());
            if (vIndex > -1) {
              select._select.model.splice(vIndex, 1);
              removeLabel();
            } else {
              select._select.model.push(getValue());
            }
          } else if (select._select.model !== getValue()) {
            select._select.model = getValue();
          } else {
            select._select.model = "";
            removeLabel();
          }
        }
      };
      el.addEventListener("click", handler2);
      el.addEventListener("keydown", handler2);
      cleanup(() => {
        el.removeEventListener("click", handler2);
        el.removeEventListener("keydown", handler2);
      });
    });
    Alpine.directive("h-select-separator", (el) => {
      el.classList.add("bg-border", "pointer-events-none", "-mx-1", "my-1", "h-px");
      el.setAttribute("data-slot", "select-separator");
      el.setAttribute("aria-hidden", "true");
      el.setAttribute("role", "none");
    });
  }

  // src/components/alert.js
  function alert_default(Alpine) {
    Alpine.directive("h-alert", (el, { modifiers }, { cleanup }) => {
      el.classList.add(
        "relative",
        "w-full",
        "rounded-lg",
        "bg-card",
        "border",
        "px-3",
        "py-2",
        "text-sm",
        "grid",
        "has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr_auto]",
        "grid-cols-[0_1fr_auto]",
        "has-[>svg]:gap-x-3",
        "gap-y-0.5",
        "items-center",
        "[&>svg]:size-4",
        "[&>svg]:text-current",
        modifiers.includes("floating") ? "shadow-alert" : void 0
      );
      el.setAttribute("data-slot", "alert");
      el.setAttribute("role", "alert");
      const variants = {
        default: ["text-foreground"],
        positive: ["text-positive"],
        negative: ["text-negative"],
        warning: ["text-warning"],
        information: ["text-information"]
      };
      function setVariant(variant) {
        for (const [_, value] of Object.entries(variants)) {
          el.classList.remove(...value);
        }
        if (variants.hasOwnProperty(variant)) el.classList.add(...variants[variant]);
      }
      setVariant(el.getAttribute("data-variant") ?? "default");
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "data-variant") {
            setVariant(el.getAttribute("data-variant") ?? "default");
          }
        });
      });
      observer.observe(el, { attributes: true });
      cleanup(() => {
        observer.disconnect();
      });
    });
    Alpine.directive("h-alert-title", (el) => {
      el.classList.add("col-start-2", "line-clamp-1", "min-h-4", "font-medium", "tracking-tight");
      el.setAttribute("data-slot", "alert-title");
    });
    Alpine.directive("h-alert-description", (el) => {
      el.classList.add("text-muted-foreground", "col-start-2", "vbox", "gap-1", "text-sm", "[&_p]:leading-relaxed");
      el.setAttribute("data-slot", "alert-description");
    });
    Alpine.directive("h-alert-actions", (el) => {
      el.classList.add("col-start-3", "row-start-1");
      el.setAttribute("data-slot", "alert-actions");
    });
  }

  // src/components/radio.js
  function radio_default(Alpine) {
    Alpine.directive("h-radio", (el) => {
      el.classList.add(
        "appearance-none",
        "border-input",
        "bg-input-inner",
        "text-primary",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "aria-invalid:ring-negative/20",
        "dark:aria-invalid:ring-negative/40",
        "aria-invalid:border-negative",
        "aspect-square",
        "size-4",
        "shrink-0",
        "rounded-full",
        "border",
        "shadow-control",
        "transition-color",
        "duration-200",
        "outline-none",
        "focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "before:block",
        "before:bg-clip-padding",
        "before:rounded-full",
        "before:h-full",
        "before:w-full",
        "before:bg-primary",
        "before:border-input-inner",
        "before:border-3",
        "not-checked:before:hidden"
      );
      el.setAttribute("data-slot", "radio");
    });
  }

  // node_modules/nouislider/dist/nouislider.mjs
  var PipsMode;
  (function(PipsMode2) {
    PipsMode2["Range"] = "range";
    PipsMode2["Steps"] = "steps";
    PipsMode2["Positions"] = "positions";
    PipsMode2["Count"] = "count";
    PipsMode2["Values"] = "values";
  })(PipsMode || (PipsMode = {}));
  var PipsType;
  (function(PipsType2) {
    PipsType2[PipsType2["None"] = -1] = "None";
    PipsType2[PipsType2["NoValue"] = 0] = "NoValue";
    PipsType2[PipsType2["LargeValue"] = 1] = "LargeValue";
    PipsType2[PipsType2["SmallValue"] = 2] = "SmallValue";
  })(PipsType || (PipsType = {}));
  function isValidFormatter(entry) {
    return isValidPartialFormatter(entry) && typeof entry.from === "function";
  }
  function isValidPartialFormatter(entry) {
    return typeof entry === "object" && typeof entry.to === "function";
  }
  function removeElement(el) {
    el.parentElement.removeChild(el);
  }
  function isSet(value) {
    return value !== null && value !== void 0;
  }
  function preventDefault(e) {
    e.preventDefault();
  }
  function unique(array) {
    return array.filter(function(a) {
      return !this[a] ? this[a] = true : false;
    }, {});
  }
  function closest(value, to) {
    return Math.round(value / to) * to;
  }
  function offset3(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc);
    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
      pageOffset.x = 0;
    }
    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
  }
  function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
  }
  function addClassFor(element, className, duration) {
    if (duration > 0) {
      addClass(element, className);
      setTimeout(function() {
        removeClass(element, className);
      }, duration);
    }
  }
  function limit(a) {
    return Math.max(Math.min(a, 100), 0);
  }
  function asArray(a) {
    return Array.isArray(a) ? a : [a];
  }
  function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
  }
  function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
      el.classList.add(className);
    } else {
      el.className += " " + className;
    }
  }
  function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
  }
  function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== void 0;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
    return {
      x,
      y
    };
  }
  function getActions() {
    return window.navigator.pointerEnabled ? {
      start: "pointerdown",
      move: "pointermove",
      end: "pointerup"
    } : window.navigator.msPointerEnabled ? {
      start: "MSPointerDown",
      move: "MSPointerMove",
      end: "MSPointerUp"
    } : {
      start: "mousedown touchstart",
      move: "mousemove touchmove",
      end: "mouseup touchend"
    };
  }
  function getSupportsPassive() {
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {
    }
    return supportsPassive;
  }
  function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
  }
  function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
  }
  function fromPercentage(range, value, startRange) {
    return value * 100 / (range[startRange + 1] - range[startRange]);
  }
  function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
  }
  function isPercentage(range, value) {
    return value * (range[1] - range[0]) / 100 + range[0];
  }
  function getJ(value, arr) {
    var j = 1;
    while (value >= arr[j]) {
      j += 1;
    }
    return j;
  }
  function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
      return 100;
    }
    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
  }
  function fromStepping(xVal, xPct, value) {
    if (value >= 100) {
      return xVal.slice(-1)[0];
    }
    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
  }
  function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
      return value;
    }
    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j];
    if (snap) {
      if (value - a > (b - a) / 2) {
        return b;
      }
      return a;
    }
    if (!xSteps[j - 1]) {
      return value;
    }
    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
  }
  var Spectrum = (
    /** @class */
    (function() {
      function Spectrum2(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [];
        this.xNumSteps = [];
        this.xHighestCompleteStep = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.snap = snap;
        var index;
        var ordered = [];
        Object.keys(entry).forEach(function(index2) {
          ordered.push([asArray(entry[index2]), index2]);
        });
        ordered.sort(function(a, b) {
          return a[0][0] - b[0][0];
        });
        for (index = 0; index < ordered.length; index++) {
          this.handleEntryPoint(ordered[index][1], ordered[index][0]);
        }
        this.xNumSteps = this.xSteps.slice(0);
        for (index = 0; index < this.xNumSteps.length; index++) {
          this.handleStepPoint(index, this.xNumSteps[index]);
        }
      }
      Spectrum2.prototype.getDistance = function(value) {
        var distances = [];
        for (var index = 0; index < this.xNumSteps.length - 1; index++) {
          distances[index] = fromPercentage(this.xVal, value, index);
        }
        return distances;
      };
      Spectrum2.prototype.getAbsoluteDistance = function(value, distances, direction) {
        var xPct_index = 0;
        if (value < this.xPct[this.xPct.length - 1]) {
          while (value > this.xPct[xPct_index + 1]) {
            xPct_index++;
          }
        } else if (value === this.xPct[this.xPct.length - 1]) {
          xPct_index = this.xPct.length - 2;
        }
        if (!direction && value === this.xPct[xPct_index + 1]) {
          xPct_index++;
        }
        if (distances === null) {
          distances = [];
        }
        var start_factor;
        var rest_factor = 1;
        var rest_rel_distance = distances[xPct_index];
        var range_pct = 0;
        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;
        if (direction) {
          start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        } else {
          start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        while (rest_rel_distance > 0) {
          range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
          if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
            rel_range_distance = range_pct * start_factor;
            rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
            start_factor = 1;
          } else {
            rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
            rest_factor = 0;
          }
          if (direction) {
            abs_distance_counter = abs_distance_counter - rel_range_distance;
            if (this.xPct.length + range_counter >= 1) {
              range_counter--;
            }
          } else {
            abs_distance_counter = abs_distance_counter + rel_range_distance;
            if (this.xPct.length - range_counter >= 1) {
              range_counter++;
            }
          }
          rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }
        return value + abs_distance_counter;
      };
      Spectrum2.prototype.toStepping = function(value) {
        value = toStepping(this.xVal, this.xPct, value);
        return value;
      };
      Spectrum2.prototype.fromStepping = function(value) {
        return fromStepping(this.xVal, this.xPct, value);
      };
      Spectrum2.prototype.getStep = function(value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);
        return value;
      };
      Spectrum2.prototype.getDefaultStep = function(value, isDown, size3) {
        var j = getJ(value, this.xPct);
        if (value === 100 || isDown && value === this.xPct[j - 1]) {
          j = Math.max(j - 1, 1);
        }
        return (this.xVal[j] - this.xVal[j - 1]) / size3;
      };
      Spectrum2.prototype.getNearbySteps = function(value) {
        var j = getJ(value, this.xPct);
        return {
          stepBefore: {
            startValue: this.xVal[j - 2],
            step: this.xNumSteps[j - 2],
            highestStep: this.xHighestCompleteStep[j - 2]
          },
          thisStep: {
            startValue: this.xVal[j - 1],
            step: this.xNumSteps[j - 1],
            highestStep: this.xHighestCompleteStep[j - 1]
          },
          stepAfter: {
            startValue: this.xVal[j],
            step: this.xNumSteps[j],
            highestStep: this.xHighestCompleteStep[j]
          }
        };
      };
      Spectrum2.prototype.countStepDecimals = function() {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
      };
      Spectrum2.prototype.hasNoSize = function() {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
      };
      Spectrum2.prototype.convert = function(value) {
        return this.getStep(this.toStepping(value));
      };
      Spectrum2.prototype.handleEntryPoint = function(index, value) {
        var percentage;
        if (index === "min") {
          percentage = 0;
        } else if (index === "max") {
          percentage = 100;
        } else {
          percentage = parseFloat(index);
        }
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
          throw new Error("noUiSlider: 'range' value isn't numeric.");
        }
        this.xPct.push(percentage);
        this.xVal.push(value[0]);
        var value1 = Number(value[1]);
        if (!percentage) {
          if (!isNaN(value1)) {
            this.xSteps[0] = value1;
          }
        } else {
          this.xSteps.push(isNaN(value1) ? false : value1);
        }
        this.xHighestCompleteStep.push(0);
      };
      Spectrum2.prototype.handleStepPoint = function(i, n) {
        if (!n) {
          return;
        }
        if (this.xVal[i] === this.xVal[i + 1]) {
          this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
          return;
        }
        this.xSteps[i] = fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
        this.xHighestCompleteStep[i] = step;
      };
      return Spectrum2;
    })()
  );
  var defaultFormatter = {
    to: function(value) {
      return value === void 0 ? "" : value.toFixed(2);
    },
    from: Number
  };
  var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub"
  };
  var INTERNAL_EVENT_NS = {
    tooltips: ".__tooltips",
    aria: ".__aria"
  };
  function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider: 'step' is not numeric.");
    }
    parsed.singleStep = entry;
  }
  function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    }
    parsed.keyboardPageMultiplier = entry;
  }
  function testKeyboardMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    }
    parsed.keyboardMultiplier = entry;
  }
  function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    }
    parsed.keyboardDefaultStep = entry;
  }
  function testRange(parsed, entry) {
    if (typeof entry !== "object" || Array.isArray(entry)) {
      throw new Error("noUiSlider: 'range' is not an object.");
    }
    if (entry.min === void 0 || entry.max === void 0) {
      throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    }
    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
  }
  function testStart(parsed, entry) {
    entry = asArray(entry);
    if (!Array.isArray(entry) || !entry.length) {
      throw new Error("noUiSlider: 'start' option is incorrect.");
    }
    parsed.handles = entry.length;
    parsed.start = entry;
  }
  function testSnap(parsed, entry) {
    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }
    parsed.snap = entry;
  }
  function testAnimate(parsed, entry) {
    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }
    parsed.animate = entry;
  }
  function testAnimationDuration(parsed, entry) {
    if (typeof entry !== "number") {
      throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    }
    parsed.animationDuration = entry;
  }
  function testConnect(parsed, entry) {
    var connect = [false];
    var i;
    if (entry === "lower") {
      entry = [true, false];
    } else if (entry === "upper") {
      entry = [false, true];
    }
    if (entry === true || entry === false) {
      for (i = 1; i < parsed.handles; i++) {
        connect.push(entry);
      }
      connect.push(false);
    } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
      throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
    } else {
      connect = entry;
    }
    parsed.connect = connect;
  }
  function testOrientation(parsed, entry) {
    switch (entry) {
      case "horizontal":
        parsed.ort = 0;
        break;
      case "vertical":
        parsed.ort = 1;
        break;
      default:
        throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
  }
  function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider: 'margin' option must be numeric.");
    }
    if (entry === 0) {
      return;
    }
    parsed.margin = parsed.spectrum.getDistance(entry);
  }
  function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider: 'limit' option must be numeric.");
    }
    parsed.limit = parsed.spectrum.getDistance(entry);
    if (!parsed.limit || parsed.handles < 2) {
      throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
  }
  function testPadding(parsed, entry) {
    var index;
    if (!isNumeric(entry) && !Array.isArray(entry)) {
      throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
      throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (entry === 0) {
      return;
    }
    if (!Array.isArray(entry)) {
      entry = [entry, entry];
    }
    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
      if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
        throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
      }
    }
    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
    if (totalPadding / (lastValue - firstValue) > 1) {
      throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
  }
  function testDirection(parsed, entry) {
    switch (entry) {
      case "ltr":
        parsed.dir = 0;
        break;
      case "rtl":
        parsed.dir = 1;
        break;
      default:
        throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
  }
  function testBehaviour(parsed, entry) {
    if (typeof entry !== "string") {
      throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
    }
    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;
    var invertConnects = entry.indexOf("invert-connects") >= 0;
    var dragAll = entry.indexOf("drag-all") >= 0;
    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
    if (fixed) {
      if (parsed.handles !== 2) {
        throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
      }
      testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }
    if (invertConnects && parsed.handles !== 2) {
      throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
    }
    if (unconstrained && (parsed.margin || parsed.limit)) {
      throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
    }
    parsed.events = {
      tap: tap || snap,
      drag,
      dragAll,
      smoothSteps,
      fixed,
      snap,
      hover,
      unconstrained,
      invertConnects
    };
  }
  function testTooltips(parsed, entry) {
    if (entry === false) {
      return;
    }
    if (entry === true || isValidPartialFormatter(entry)) {
      parsed.tooltips = [];
      for (var i = 0; i < parsed.handles; i++) {
        parsed.tooltips.push(entry);
      }
    } else {
      entry = asArray(entry);
      if (entry.length !== parsed.handles) {
        throw new Error("noUiSlider: must pass a formatter for all handles.");
      }
      entry.forEach(function(formatter) {
        if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
          throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
        }
      });
      parsed.tooltips = entry;
    }
  }
  function testHandleAttributes(parsed, entry) {
    if (entry.length !== parsed.handles) {
      throw new Error("noUiSlider: must pass a attributes for all handles.");
    }
    parsed.handleAttributes = entry;
  }
  function testAriaFormat(parsed, entry) {
    if (!isValidPartialFormatter(entry)) {
      throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    }
    parsed.ariaFormat = entry;
  }
  function testFormat(parsed, entry) {
    if (!isValidFormatter(entry)) {
      throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }
    parsed.format = entry;
  }
  function testKeyboardSupport(parsed, entry) {
    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
    }
    parsed.keyboardSupport = entry;
  }
  function testDocumentElement(parsed, entry) {
    parsed.documentElement = entry;
  }
  function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
      throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    }
    parsed.cssPrefix = entry;
  }
  function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
      throw new Error("noUiSlider: 'cssClasses' must be an object.");
    }
    if (typeof parsed.cssPrefix === "string") {
      parsed.cssClasses = {};
      Object.keys(entry).forEach(function(key) {
        parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
      });
    } else {
      parsed.cssClasses = entry;
    }
  }
  function testOptions(options) {
    var parsed = {
      margin: null,
      limit: null,
      padding: null,
      animate: true,
      animationDuration: 300,
      ariaFormat: defaultFormatter,
      format: defaultFormatter
    };
    var tests = {
      step: { r: false, t: testStep },
      keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
      keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
      keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
      start: { r: true, t: testStart },
      connect: { r: true, t: testConnect },
      direction: { r: true, t: testDirection },
      snap: { r: false, t: testSnap },
      animate: { r: false, t: testAnimate },
      animationDuration: { r: false, t: testAnimationDuration },
      range: { r: true, t: testRange },
      orientation: { r: false, t: testOrientation },
      margin: { r: false, t: testMargin },
      limit: { r: false, t: testLimit },
      padding: { r: false, t: testPadding },
      behaviour: { r: true, t: testBehaviour },
      ariaFormat: { r: false, t: testAriaFormat },
      format: { r: false, t: testFormat },
      tooltips: { r: false, t: testTooltips },
      keyboardSupport: { r: true, t: testKeyboardSupport },
      documentElement: { r: false, t: testDocumentElement },
      cssPrefix: { r: true, t: testCssPrefix },
      cssClasses: { r: true, t: testCssClasses },
      handleAttributes: { r: false, t: testHandleAttributes }
    };
    var defaults = {
      connect: false,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
      keyboardSupport: true,
      cssPrefix: "noUi-",
      cssClasses,
      keyboardPageMultiplier: 5,
      keyboardMultiplier: 1,
      keyboardDefaultStep: 10
    };
    if (options.format && !options.ariaFormat) {
      options.ariaFormat = options.format;
    }
    Object.keys(tests).forEach(function(name) {
      if (!isSet(options[name]) && defaults[name] === void 0) {
        if (tests[name].r) {
          throw new Error("noUiSlider: '" + name + "' is required.");
        }
        return;
      }
      tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    });
    parsed.pips = options.pips;
    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== void 0;
    var noPrefix = d.style.transform !== void 0;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
    var styles = [
      ["left", "top"],
      ["right", "bottom"]
    ];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
  }
  function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
    var scope_Target = target;
    var scope_Base;
    var scope_ConnectBase;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips;
    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {};
    var scope_ConnectsInverted = false;
    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body;
    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
    function addNodeTo(addTarget, className) {
      var div = scope_Document.createElement("div");
      if (className) {
        addClass(div, className);
      }
      addTarget.appendChild(div);
      return div;
    }
    function addOrigin(base, handleNumber) {
      var origin = addNodeTo(base, options.cssClasses.origin);
      var handle = addNodeTo(origin, options.cssClasses.handle);
      addNodeTo(handle, options.cssClasses.touchArea);
      handle.setAttribute("data-handle", String(handleNumber));
      if (options.keyboardSupport) {
        handle.setAttribute("tabindex", "0");
        handle.addEventListener("keydown", function(event) {
          return eventKeydown(event, handleNumber);
        });
      }
      if (options.handleAttributes !== void 0) {
        var attributes_1 = options.handleAttributes[handleNumber];
        Object.keys(attributes_1).forEach(function(attribute) {
          handle.setAttribute(attribute, attributes_1[attribute]);
        });
      }
      handle.setAttribute("role", "slider");
      handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
      if (handleNumber === 0) {
        addClass(handle, options.cssClasses.handleLower);
      } else if (handleNumber === options.handles - 1) {
        addClass(handle, options.cssClasses.handleUpper);
      }
      origin.handle = handle;
      return origin;
    }
    function addConnect(base, add) {
      if (!add) {
        return false;
      }
      return addNodeTo(base, options.cssClasses.connect);
    }
    function addElements(connectOptions, base) {
      scope_ConnectBase = addNodeTo(base, options.cssClasses.connects);
      scope_Handles = [];
      scope_Connects = [];
      scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[0]));
      for (var i = 0; i < options.handles; i++) {
        scope_Handles.push(addOrigin(base, i));
        scope_HandleNumbers[i] = i;
        scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[i + 1]));
      }
    }
    function addSlider(addTarget) {
      addClass(addTarget, options.cssClasses.target);
      if (options.dir === 0) {
        addClass(addTarget, options.cssClasses.ltr);
      } else {
        addClass(addTarget, options.cssClasses.rtl);
      }
      if (options.ort === 0) {
        addClass(addTarget, options.cssClasses.horizontal);
      } else {
        addClass(addTarget, options.cssClasses.vertical);
      }
      var textDirection = getComputedStyle(addTarget).direction;
      if (textDirection === "rtl") {
        addClass(addTarget, options.cssClasses.textDirectionRtl);
      } else {
        addClass(addTarget, options.cssClasses.textDirectionLtr);
      }
      return addNodeTo(addTarget, options.cssClasses.base);
    }
    function addTooltip(handle, handleNumber) {
      if (!options.tooltips || !options.tooltips[handleNumber]) {
        return false;
      }
      return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }
    function isSliderDisabled() {
      return scope_Target.hasAttribute("disabled");
    }
    function isHandleDisabled(handleNumber) {
      var handleOrigin = scope_Handles[handleNumber];
      return handleOrigin.hasAttribute("disabled");
    }
    function disable(handleNumber) {
      if (handleNumber !== null && handleNumber !== void 0) {
        scope_Handles[handleNumber].setAttribute("disabled", "");
        scope_Handles[handleNumber].handle.removeAttribute("tabindex");
      } else {
        scope_Target.setAttribute("disabled", "");
        scope_Handles.forEach(function(handle) {
          handle.handle.removeAttribute("tabindex");
        });
      }
    }
    function enable(handleNumber) {
      if (handleNumber !== null && handleNumber !== void 0) {
        scope_Handles[handleNumber].removeAttribute("disabled");
        scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
      } else {
        scope_Target.removeAttribute("disabled");
        scope_Handles.forEach(function(handle) {
          handle.removeAttribute("disabled");
          handle.handle.setAttribute("tabindex", "0");
        });
      }
    }
    function removeTooltips() {
      if (scope_Tooltips) {
        removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
        scope_Tooltips.forEach(function(tooltip) {
          if (tooltip) {
            removeElement(tooltip);
          }
        });
        scope_Tooltips = null;
      }
    }
    function tooltips() {
      removeTooltips();
      scope_Tooltips = scope_Handles.map(addTooltip);
      bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function(values, handleNumber, unencoded) {
        if (!scope_Tooltips || !options.tooltips) {
          return;
        }
        if (scope_Tooltips[handleNumber] === false) {
          return;
        }
        var formattedValue = values[handleNumber];
        if (options.tooltips[handleNumber] !== true) {
          formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
        }
        scope_Tooltips[handleNumber].innerHTML = formattedValue;
      });
    }
    function aria() {
      removeEvent("update" + INTERNAL_EVENT_NS.aria);
      bindEvent("update" + INTERNAL_EVENT_NS.aria, function(values, handleNumber, unencoded, tap, positions) {
        scope_HandleNumbers.forEach(function(index) {
          var handle = scope_Handles[index];
          var min2 = checkHandlePosition(scope_Locations, index, 0, true, true, true);
          var max2 = checkHandlePosition(scope_Locations, index, 100, true, true, true);
          var now = positions[index];
          var text = String(options.ariaFormat.to(unencoded[index]));
          min2 = scope_Spectrum.fromStepping(min2).toFixed(1);
          max2 = scope_Spectrum.fromStepping(max2).toFixed(1);
          now = scope_Spectrum.fromStepping(now).toFixed(1);
          handle.children[0].setAttribute("aria-valuemin", min2);
          handle.children[0].setAttribute("aria-valuemax", max2);
          handle.children[0].setAttribute("aria-valuenow", now);
          handle.children[0].setAttribute("aria-valuetext", text);
        });
      });
    }
    function getGroup(pips2) {
      if (pips2.mode === PipsMode.Range || pips2.mode === PipsMode.Steps) {
        return scope_Spectrum.xVal;
      }
      if (pips2.mode === PipsMode.Count) {
        if (pips2.values < 2) {
          throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
        }
        var interval = pips2.values - 1;
        var spread = 100 / interval;
        var values = [];
        while (interval--) {
          values[interval] = interval * spread;
        }
        values.push(100);
        return mapToRange(values, pips2.stepped);
      }
      if (pips2.mode === PipsMode.Positions) {
        return mapToRange(pips2.values, pips2.stepped);
      }
      if (pips2.mode === PipsMode.Values) {
        if (pips2.stepped) {
          return pips2.values.map(function(value) {
            return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
          });
        }
        return pips2.values;
      }
      return [];
    }
    function mapToRange(values, stepped) {
      return values.map(function(value) {
        return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
      });
    }
    function generateSpread(pips2) {
      function safeIncrement(value, increment) {
        return Number((value + increment).toFixed(7));
      }
      var group = getGroup(pips2);
      var indexes = {};
      var firstInRange = scope_Spectrum.xVal[0];
      var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
      var ignoreFirst = false;
      var ignoreLast = false;
      var prevPct = 0;
      group = unique(group.slice().sort(function(a, b) {
        return a - b;
      }));
      if (group[0] !== firstInRange) {
        group.unshift(firstInRange);
        ignoreFirst = true;
      }
      if (group[group.length - 1] !== lastInRange) {
        group.push(lastInRange);
        ignoreLast = true;
      }
      group.forEach(function(current, index) {
        var step;
        var i;
        var q;
        var low = current;
        var high = group[index + 1];
        var newPct;
        var pctDifference;
        var pctPos;
        var type;
        var steps;
        var realSteps;
        var stepSize;
        var isSteps = pips2.mode === PipsMode.Steps;
        if (isSteps) {
          step = scope_Spectrum.xNumSteps[index];
        }
        if (!step) {
          step = high - low;
        }
        if (high === void 0) {
          high = low;
        }
        step = Math.max(step, 1e-7);
        for (i = low; i <= high; i = safeIncrement(i, step)) {
          newPct = scope_Spectrum.toStepping(i);
          pctDifference = newPct - prevPct;
          steps = pctDifference / (pips2.density || 1);
          realSteps = Math.round(steps);
          stepSize = pctDifference / realSteps;
          for (q = 1; q <= realSteps; q += 1) {
            pctPos = prevPct + q * stepSize;
            indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
          }
          type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
          if (!index && ignoreFirst && i !== high) {
            type = 0;
          }
          if (!(i === high && ignoreLast)) {
            indexes[newPct.toFixed(5)] = [i, type];
          }
          prevPct = newPct;
        }
      });
      return indexes;
    }
    function addMarking(spread, filterFunc, formatter) {
      var _a, _b;
      var element = scope_Document.createElement("div");
      var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, _a);
      var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, _b);
      var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
      var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
      addClass(element, options.cssClasses.pips);
      addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
      function getClasses(type, source) {
        var a = source === options.cssClasses.value;
        var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
        var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
        return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
      }
      function addSpread(offset4, value, type) {
        type = filterFunc ? filterFunc(value, type) : type;
        if (type === PipsType.None) {
          return;
        }
        var node = addNodeTo(element, false);
        node.className = getClasses(type, options.cssClasses.marker);
        node.style[options.style] = offset4 + "%";
        if (type > PipsType.NoValue) {
          node = addNodeTo(element, false);
          node.className = getClasses(type, options.cssClasses.value);
          node.setAttribute("data-value", String(value));
          node.style[options.style] = offset4 + "%";
          node.innerHTML = String(formatter.to(value));
        }
      }
      Object.keys(spread).forEach(function(offset4) {
        addSpread(offset4, spread[offset4][0], spread[offset4][1]);
      });
      return element;
    }
    function removePips() {
      if (scope_Pips) {
        removeElement(scope_Pips);
        scope_Pips = null;
      }
    }
    function pips(pips2) {
      removePips();
      var spread = generateSpread(pips2);
      var filter = pips2.filter;
      var format = pips2.format || {
        to: function(value) {
          return String(Math.round(value));
        }
      };
      scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
      return scope_Pips;
    }
    function baseSize() {
      var rect = scope_Base.getBoundingClientRect();
      var alt = "offset" + ["Width", "Height"][options.ort];
      return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    }
    function attachEvent(events, element, callback, data) {
      var method = function(event) {
        var e = fixEvent(event, data.pageOffset, data.target || element);
        if (!e) {
          return false;
        }
        if (isSliderDisabled() && !data.doNotReject) {
          return false;
        }
        if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
          return false;
        }
        if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) {
          return false;
        }
        if (data.hover && e.buttons) {
          return false;
        }
        if (!supportsPassive) {
          e.preventDefault();
        }
        e.calcPoint = e.points[options.ort];
        callback(e, data);
        return;
      };
      var methods = [];
      events.split(" ").forEach(function(eventName) {
        element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
        methods.push([eventName, method]);
      });
      return methods;
    }
    function fixEvent(e, pageOffset, eventTarget) {
      var touch = e.type.indexOf("touch") === 0;
      var mouse = e.type.indexOf("mouse") === 0;
      var pointer = e.type.indexOf("pointer") === 0;
      var x = 0;
      var y = 0;
      if (e.type.indexOf("MSPointer") === 0) {
        pointer = true;
      }
      if (e.type === "mousedown" && !e.buttons && !e.touches) {
        return false;
      }
      if (touch) {
        var isTouchOnTarget = function(checkTouch) {
          var target2 = checkTouch.target;
          return target2 === eventTarget || eventTarget.contains(target2) || e.composed && e.composedPath().shift() === eventTarget;
        };
        if (e.type === "touchstart") {
          var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
          if (targetTouches.length > 1) {
            return false;
          }
          x = targetTouches[0].pageX;
          y = targetTouches[0].pageY;
        } else {
          var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
          if (!targetTouch) {
            return false;
          }
          x = targetTouch.pageX;
          y = targetTouch.pageY;
        }
      }
      pageOffset = pageOffset || getPageOffset(scope_Document);
      if (mouse || pointer) {
        x = e.clientX + pageOffset.x;
        y = e.clientY + pageOffset.y;
      }
      e.pageOffset = pageOffset;
      e.points = [x, y];
      e.cursor = mouse || pointer;
      return e;
    }
    function calcPointToPercentage(calcPoint) {
      var location = calcPoint - offset3(scope_Base, options.ort);
      var proposal = location * 100 / baseSize();
      proposal = limit(proposal);
      return options.dir ? 100 - proposal : proposal;
    }
    function getClosestHandle(clickedPosition) {
      var smallestDifference = 100;
      var handleNumber = false;
      scope_Handles.forEach(function(handle, index) {
        if (isHandleDisabled(index)) {
          return;
        }
        var handlePosition = scope_Locations[index];
        var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
        var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
        var isCloser = differenceWithThisHandle < smallestDifference;
        var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
        if (isCloser || isCloserAfter || clickAtEdge) {
          handleNumber = index;
          smallestDifference = differenceWithThisHandle;
        }
      });
      return handleNumber;
    }
    function documentLeave(event, data) {
      if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
        eventEnd(event, data);
      }
    }
    function eventMove(event, data) {
      if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
        return eventEnd(event, data);
      }
      var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
      var proposal = movement * 100 / data.baseSize;
      moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
    }
    function eventEnd(event, data) {
      if (data.handle) {
        removeClass(data.handle, options.cssClasses.active);
        scope_ActiveHandlesCount -= 1;
      }
      data.listeners.forEach(function(c) {
        scope_DocumentElement.removeEventListener(c[0], c[1]);
      });
      if (scope_ActiveHandlesCount === 0) {
        removeClass(scope_Target, options.cssClasses.drag);
        setZindex();
        if (event.cursor) {
          scope_Body.style.cursor = "";
          scope_Body.removeEventListener("selectstart", preventDefault);
        }
      }
      if (options.events.smoothSteps) {
        data.handleNumbers.forEach(function(handleNumber) {
          setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
        });
        data.handleNumbers.forEach(function(handleNumber) {
          fireEvent("update", handleNumber);
        });
      }
      data.handleNumbers.forEach(function(handleNumber) {
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        fireEvent("end", handleNumber);
      });
    }
    function eventStart(event, data) {
      if (data.handleNumbers.some(isHandleDisabled)) {
        return;
      }
      var handle;
      if (data.handleNumbers.length === 1) {
        var handleOrigin = scope_Handles[data.handleNumbers[0]];
        handle = handleOrigin.children[0];
        scope_ActiveHandlesCount += 1;
        addClass(handle, options.cssClasses.active);
      }
      event.stopPropagation();
      var listeners = [];
      var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
        // The event target has changed so we need to propagate the original one so that we keep
        // relying on it to extract target touches.
        target: event.target,
        handle,
        connect: data.connect,
        listeners,
        startCalcPoint: event.calcPoint,
        baseSize: baseSize(),
        pageOffset: event.pageOffset,
        handleNumbers: data.handleNumbers,
        buttonsProperty: event.buttons,
        locations: scope_Locations.slice()
      });
      var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
        target: event.target,
        handle,
        listeners,
        doNotReject: true,
        handleNumbers: data.handleNumbers
      });
      var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
        target: event.target,
        handle,
        listeners,
        doNotReject: true,
        handleNumbers: data.handleNumbers
      });
      listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
      if (event.cursor) {
        scope_Body.style.cursor = getComputedStyle(event.target).cursor;
        if (scope_Handles.length > 1) {
          addClass(scope_Target, options.cssClasses.drag);
        }
        scope_Body.addEventListener("selectstart", preventDefault, false);
      }
      data.handleNumbers.forEach(function(handleNumber) {
        fireEvent("start", handleNumber);
      });
    }
    function eventTap(event) {
      event.stopPropagation();
      var proposal = calcPointToPercentage(event.calcPoint);
      var handleNumber = getClosestHandle(proposal);
      if (handleNumber === false) {
        return;
      }
      if (!options.events.snap) {
        addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
      }
      setHandle(handleNumber, proposal, true, true);
      setZindex();
      fireEvent("slide", handleNumber, true);
      fireEvent("update", handleNumber, true);
      if (!options.events.snap) {
        fireEvent("change", handleNumber, true);
        fireEvent("set", handleNumber, true);
      } else {
        eventStart(event, { handleNumbers: [handleNumber] });
      }
    }
    function eventHover(event) {
      var proposal = calcPointToPercentage(event.calcPoint);
      var to = scope_Spectrum.getStep(proposal);
      var value = scope_Spectrum.fromStepping(to);
      Object.keys(scope_Events).forEach(function(targetEvent) {
        if ("hover" === targetEvent.split(".")[0]) {
          scope_Events[targetEvent].forEach(function(callback) {
            callback.call(scope_Self, value);
          });
        }
      });
    }
    function eventKeydown(event, handleNumber) {
      if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
        return false;
      }
      var horizontalKeys = ["Left", "Right"];
      var verticalKeys = ["Down", "Up"];
      var largeStepKeys = ["PageDown", "PageUp"];
      var edgeKeys = ["Home", "End"];
      if (options.dir && !options.ort) {
        horizontalKeys.reverse();
      } else if (options.ort && !options.dir) {
        verticalKeys.reverse();
        largeStepKeys.reverse();
      }
      var key = event.key.replace("Arrow", "");
      var isLargeDown = key === largeStepKeys[0];
      var isLargeUp = key === largeStepKeys[1];
      var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
      var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
      var isMin = key === edgeKeys[0];
      var isMax = key === edgeKeys[1];
      if (!isDown && !isUp && !isMin && !isMax) {
        return true;
      }
      event.preventDefault();
      var to;
      if (isUp || isDown) {
        var direction = isDown ? 0 : 1;
        var steps = getNextStepsForHandle(handleNumber);
        var step = steps[direction];
        if (step === null) {
          return false;
        }
        if (step === false) {
          step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
        }
        if (isLargeUp || isLargeDown) {
          step *= options.keyboardPageMultiplier;
        } else {
          step *= options.keyboardMultiplier;
        }
        step = Math.max(step, 1e-7);
        step = (isDown ? -1 : 1) * step;
        to = scope_Values[handleNumber] + step;
      } else if (isMax) {
        to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
      } else {
        to = options.spectrum.xVal[0];
      }
      setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
      fireEvent("slide", handleNumber);
      fireEvent("update", handleNumber);
      fireEvent("change", handleNumber);
      fireEvent("set", handleNumber);
      return false;
    }
    function bindSliderEvents(behaviour) {
      if (!behaviour.fixed) {
        scope_Handles.forEach(function(handle, index) {
          attachEvent(actions.start, handle.children[0], eventStart, {
            handleNumbers: [index]
          });
        });
      }
      if (behaviour.tap) {
        attachEvent(actions.start, scope_Base, eventTap, {});
      }
      if (behaviour.hover) {
        attachEvent(actions.move, scope_Base, eventHover, {
          hover: true
        });
      }
      if (behaviour.drag) {
        scope_Connects.forEach(function(connect, index) {
          if (connect === false || index === 0 || index === scope_Connects.length - 1) {
            return;
          }
          var handleBefore = scope_Handles[index - 1];
          var handleAfter = scope_Handles[index];
          var eventHolders = [connect];
          var handlesToDrag = [handleBefore, handleAfter];
          var handleNumbersToDrag = [index - 1, index];
          addClass(connect, options.cssClasses.draggable);
          if (behaviour.fixed) {
            eventHolders.push(handleBefore.children[0]);
            eventHolders.push(handleAfter.children[0]);
          }
          if (behaviour.dragAll) {
            handlesToDrag = scope_Handles;
            handleNumbersToDrag = scope_HandleNumbers;
          }
          eventHolders.forEach(function(eventHolder) {
            attachEvent(actions.start, eventHolder, eventStart, {
              handles: handlesToDrag,
              handleNumbers: handleNumbersToDrag,
              connect
            });
          });
        });
      }
    }
    function bindEvent(namespacedEvent, callback) {
      scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
      scope_Events[namespacedEvent].push(callback);
      if (namespacedEvent.split(".")[0] === "update") {
        scope_Handles.forEach(function(a, index) {
          fireEvent("update", index);
        });
      }
    }
    function isInternalNamespace(namespace) {
      return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
    }
    function removeEvent(namespacedEvent) {
      var event = namespacedEvent && namespacedEvent.split(".")[0];
      var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
      Object.keys(scope_Events).forEach(function(bind) {
        var tEvent = bind.split(".")[0];
        var tNamespace = bind.substring(tEvent.length);
        if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
          if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
            delete scope_Events[bind];
          }
        }
      });
    }
    function fireEvent(eventName, handleNumber, tap) {
      Object.keys(scope_Events).forEach(function(targetEvent) {
        var eventType = targetEvent.split(".")[0];
        if (eventName === eventType) {
          scope_Events[targetEvent].forEach(function(callback) {
            callback.call(
              // Use the slider public API as the scope ('this')
              scope_Self,
              // Return values as array, so arg_1[arg_2] is always valid.
              scope_Values.map(options.format.to),
              // Handle index, 0 or 1
              handleNumber,
              // Un-formatted slider values
              scope_Values.slice(),
              // Event is fired by tap, true or false
              tap || false,
              // Left offset of the handle, in relation to the slider
              scope_Locations.slice(),
              // add the slider public API to an accessible parameter when this is unavailable
              scope_Self
            );
          });
        }
      });
    }
    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
      var distance;
      if (scope_Handles.length > 1 && !options.events.unconstrained) {
        if (lookBackward && handleNumber > 0) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
          to = Math.max(to, distance);
        }
        if (lookForward && handleNumber < scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
          to = Math.min(to, distance);
        }
      }
      if (scope_Handles.length > 1 && options.limit) {
        if (lookBackward && handleNumber > 0) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
          to = Math.min(to, distance);
        }
        if (lookForward && handleNumber < scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
          to = Math.max(to, distance);
        }
      }
      if (options.padding) {
        if (handleNumber === 0) {
          distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
          to = Math.max(to, distance);
        }
        if (handleNumber === scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
          to = Math.min(to, distance);
        }
      }
      if (!smoothSteps) {
        to = scope_Spectrum.getStep(to);
      }
      to = limit(to);
      if (to === reference[handleNumber] && !getValue) {
        return false;
      }
      return to;
    }
    function inRuleOrder(v, a) {
      var o = options.ort;
      return (o ? a : v) + ", " + (o ? v : a);
    }
    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
      var proposals = locations.slice();
      var firstHandle = handleNumbers[0];
      var smoothSteps = options.events.smoothSteps;
      var b = [!upward, upward];
      var f = [upward, !upward];
      handleNumbers = handleNumbers.slice();
      if (upward) {
        handleNumbers.reverse();
      }
      if (handleNumbers.length > 1) {
        handleNumbers.forEach(function(handleNumber, o) {
          var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
          if (to === false) {
            proposal = 0;
          } else {
            proposal = to - proposals[handleNumber];
            proposals[handleNumber] = to;
          }
        });
      } else {
        b = f = [true];
      }
      var state = false;
      handleNumbers.forEach(function(handleNumber, o) {
        state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
      });
      if (state) {
        handleNumbers.forEach(function(handleNumber) {
          fireEvent("update", handleNumber);
          fireEvent("slide", handleNumber);
        });
        if (connect != void 0) {
          fireEvent("drag", firstHandle);
        }
      }
    }
    function transformDirection(a, b) {
      return options.dir ? 100 - a - b : a;
    }
    function updateHandlePosition(handleNumber, to) {
      scope_Locations[handleNumber] = to;
      scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
      var translation = transformDirection(to, 0) - scope_DirOffset;
      var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
      scope_Handles[handleNumber].style[options.transformRule] = translateRule;
      if (options.events.invertConnects && scope_Locations.length > 1) {
        var handlesAreInOrder = scope_Locations.every(function(position, index, locations) {
          return index === 0 || position >= locations[index - 1];
        });
        if (scope_ConnectsInverted !== !handlesAreInOrder) {
          invertConnects();
          return;
        }
      }
      updateConnect(handleNumber);
      updateConnect(handleNumber + 1);
      if (scope_ConnectsInverted) {
        updateConnect(handleNumber - 1);
        updateConnect(handleNumber + 2);
      }
    }
    function setZindex() {
      scope_HandleNumbers.forEach(function(handleNumber) {
        var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
        var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
        scope_Handles[handleNumber].style.zIndex = String(zIndex);
      });
    }
    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
      if (!exactInput) {
        to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
      }
      if (to === false) {
        return false;
      }
      updateHandlePosition(handleNumber, to);
      return true;
    }
    function updateConnect(index) {
      if (!scope_Connects[index]) {
        return;
      }
      var locations = scope_Locations.slice();
      if (scope_ConnectsInverted) {
        locations.sort(function(a, b) {
          return a - b;
        });
      }
      var l = 0;
      var h = 100;
      if (index !== 0) {
        l = locations[index - 1];
      }
      if (index !== scope_Connects.length - 1) {
        h = locations[index];
      }
      var connectWidth = h - l;
      var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
      var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
      scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
    }
    function resolveToValue(to, handleNumber) {
      if (to === null || to === false || to === void 0) {
        return scope_Locations[handleNumber];
      }
      if (typeof to === "number") {
        to = String(to);
      }
      to = options.format.from(to);
      if (to !== false) {
        to = scope_Spectrum.toStepping(to);
      }
      if (to === false || isNaN(to)) {
        return scope_Locations[handleNumber];
      }
      return to;
    }
    function valueSet(input, fireSetEvent, exactInput) {
      var values = asArray(input);
      var isInit = scope_Locations[0] === void 0;
      fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
      if (options.animate && !isInit) {
        addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
      }
      scope_HandleNumbers.forEach(function(handleNumber) {
        setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
      });
      var i = scope_HandleNumbers.length === 1 ? 0 : 1;
      if (isInit && scope_Spectrum.hasNoSize()) {
        exactInput = true;
        scope_Locations[0] = 0;
        if (scope_HandleNumbers.length > 1) {
          var space_1 = 100 / (scope_HandleNumbers.length - 1);
          scope_HandleNumbers.forEach(function(handleNumber) {
            scope_Locations[handleNumber] = handleNumber * space_1;
          });
        }
      }
      for (; i < scope_HandleNumbers.length; ++i) {
        scope_HandleNumbers.forEach(function(handleNumber) {
          setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
        });
      }
      setZindex();
      scope_HandleNumbers.forEach(function(handleNumber) {
        fireEvent("update", handleNumber);
        if (values[handleNumber] !== null && fireSetEvent) {
          fireEvent("set", handleNumber);
        }
      });
    }
    function valueReset(fireSetEvent) {
      valueSet(options.start, fireSetEvent);
    }
    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
      handleNumber = Number(handleNumber);
      if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
        throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
      }
      setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
      fireEvent("update", handleNumber);
      if (fireSetEvent) {
        fireEvent("set", handleNumber);
      }
    }
    function valueGet(unencoded) {
      if (unencoded === void 0) {
        unencoded = false;
      }
      if (unencoded) {
        return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
      }
      var values = scope_Values.map(options.format.to);
      if (values.length === 1) {
        return values[0];
      }
      return values;
    }
    function destroy() {
      removeEvent(INTERNAL_EVENT_NS.aria);
      removeEvent(INTERNAL_EVENT_NS.tooltips);
      Object.keys(options.cssClasses).forEach(function(key) {
        removeClass(scope_Target, options.cssClasses[key]);
      });
      while (scope_Target.firstChild) {
        scope_Target.removeChild(scope_Target.firstChild);
      }
      delete scope_Target.noUiSlider;
    }
    function getNextStepsForHandle(handleNumber) {
      var location = scope_Locations[handleNumber];
      var nearbySteps = scope_Spectrum.getNearbySteps(location);
      var value = scope_Values[handleNumber];
      var increment = nearbySteps.thisStep.step;
      var decrement = null;
      if (options.snap) {
        return [
          value - nearbySteps.stepBefore.startValue || null,
          nearbySteps.stepAfter.startValue - value || null
        ];
      }
      if (increment !== false) {
        if (value + increment > nearbySteps.stepAfter.startValue) {
          increment = nearbySteps.stepAfter.startValue - value;
        }
      }
      if (value > nearbySteps.thisStep.startValue) {
        decrement = nearbySteps.thisStep.step;
      } else if (nearbySteps.stepBefore.step === false) {
        decrement = false;
      } else {
        decrement = value - nearbySteps.stepBefore.highestStep;
      }
      if (location === 100) {
        increment = null;
      } else if (location === 0) {
        decrement = null;
      }
      var stepDecimals = scope_Spectrum.countStepDecimals();
      if (increment !== null && increment !== false) {
        increment = Number(increment.toFixed(stepDecimals));
      }
      if (decrement !== null && decrement !== false) {
        decrement = Number(decrement.toFixed(stepDecimals));
      }
      return [decrement, increment];
    }
    function getNextSteps() {
      return scope_HandleNumbers.map(getNextStepsForHandle);
    }
    function updateOptions(optionsToUpdate, fireSetEvent) {
      var v = valueGet();
      var updateAble = [
        "margin",
        "limit",
        "padding",
        "range",
        "animate",
        "snap",
        "step",
        "format",
        "pips",
        "tooltips",
        "connect"
      ];
      updateAble.forEach(function(name) {
        if (optionsToUpdate[name] !== void 0) {
          originalOptions[name] = optionsToUpdate[name];
        }
      });
      var newOptions = testOptions(originalOptions);
      updateAble.forEach(function(name) {
        if (optionsToUpdate[name] !== void 0) {
          options[name] = newOptions[name];
        }
      });
      scope_Spectrum = newOptions.spectrum;
      options.margin = newOptions.margin;
      options.limit = newOptions.limit;
      options.padding = newOptions.padding;
      if (options.pips) {
        pips(options.pips);
      } else {
        removePips();
      }
      if (options.tooltips) {
        tooltips();
      } else {
        removeTooltips();
      }
      scope_Locations = [];
      valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
      if (optionsToUpdate.connect) {
        updateConnectOption();
      }
    }
    function updateConnectOption() {
      while (scope_ConnectBase.firstChild) {
        scope_ConnectBase.removeChild(scope_ConnectBase.firstChild);
      }
      for (var i = 0; i <= options.handles; i++) {
        scope_Connects[i] = addConnect(scope_ConnectBase, options.connect[i]);
        updateConnect(i);
      }
      bindSliderEvents({ drag: options.events.drag, fixed: true });
    }
    function invertConnects() {
      scope_ConnectsInverted = !scope_ConnectsInverted;
      testConnect(
        options,
        // inverse the connect boolean array
        options.connect.map(function(b) {
          return !b;
        })
      );
      updateConnectOption();
    }
    function setupSlider() {
      scope_Base = addSlider(scope_Target);
      addElements(options.connect, scope_Base);
      bindSliderEvents(options.events);
      valueSet(options.start);
      if (options.pips) {
        pips(options.pips);
      }
      if (options.tooltips) {
        tooltips();
      }
      aria();
    }
    setupSlider();
    var scope_Self = {
      destroy,
      steps: getNextSteps,
      on: bindEvent,
      off: removeEvent,
      get: valueGet,
      set: valueSet,
      setHandle: valueSetHandle,
      reset: valueReset,
      disable,
      enable,
      // Exposed for unit testing, don't use this in your application.
      __moveHandles: function(upward, proposal, handleNumbers) {
        moveHandles(upward, proposal, scope_Locations, handleNumbers);
      },
      options: originalOptions,
      updateOptions,
      target: scope_Target,
      removePips,
      removeTooltips,
      getPositions: function() {
        return scope_Locations.slice();
      },
      getTooltips: function() {
        return scope_Tooltips;
      },
      getOrigins: function() {
        return scope_Handles;
      },
      pips
      // Issue #594
    };
    return scope_Self;
  }
  function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
      throw new Error("noUiSlider: create requires a single element, got: " + target);
    }
    if (target.noUiSlider) {
      throw new Error("noUiSlider: Slider was already initialized.");
    }
    var options = testOptions(originalOptions);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
  }

  // src/components/range.js
  function range_default(Alpine) {
    Alpine.directive("h-range", (el, { expression }, { evaluate: evaluate2, cleanup }) => {
      el.classList.add("harmonia-slider");
      el.setAttribute("data-slot", "range");
      initialize(el, evaluate2(expression));
      if (el.hasOwnProperty("_x_model")) {
        el.noUiSlider.on("change", (values) => {
          el._x_model.set(values);
          el.dispatchEvent(new Event("change", { bubbles: true }));
        });
        cleanup(() => {
          el.noUiSlider.off("change");
        });
      }
    });
  }

  // src/components/switch.js
  function switch_default(Alpine) {
    Alpine.directive("h-switch", (el, {}, { cleanup }) => {
      el.classList.add(
        "appearance-none",
        "peer",
        "data-[state=checked]:bg-primary",
        "data-[state=unchecked]:bg-input",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "inline-flex",
        "data-[size=sm]:h-5",
        "data-[size=sm]:w-8",
        "h-6",
        "w-10",
        "shrink-0",
        "items-center",
        "rounded-full",
        "border",
        "border-transparent",
        "shadow-control",
        "transition-all",
        "duration-200",
        "outline-none",
        "focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "before:block",
        "before:bg-background",
        "before:pointer-events-none",
        "data-[size=sm]:before:size-4",
        "before:size-5",
        "before:rounded-full",
        "before:ring-0",
        "before:transition-transform",
        "before:duration-200",
        "data-[state=checked]:before:translate-x-[calc(100%-3px)]",
        "data-[state=unchecked]:before:translate-x-[1px]"
      );
      el.setAttribute("data-slot", "switch");
      function setState() {
        el.setAttribute("data-state", el.checked ? "checked" : "unchecked");
      }
      setState();
      el.addEventListener("change", setState);
      cleanup(() => {
        el.removeEventListener("change", setState);
      });
    });
  }

  // src/components/sidebar.js
  function sidebar_default(Alpine) {
    Alpine.directive("h-sidebar", (el, { modifiers }) => {
      el.classList.add("group/sidebar", "bg-sidebar", "text-sidebar-foreground", "border-sidebar-border", "vbox", "h-full", "w-(--sidebar-width,16rem)");
      if (modifiers.includes("floating")) {
        el.classList.add("border", "rounded-lg", "shadow-sm", "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]");
      } else el.classList.add("group-data-[collapsible=icon]:w-(--sidebar-width-icon)");
      if (modifiers.includes("right")) el.classList.add("border-l");
      else el.classList.add("border-r");
      el.setAttribute("data-slot", "sidebar");
    });
    Alpine.directive("h-sidebar-header", (el) => {
      el.classList.add("vbox", "gap-2", "p-2");
      el.setAttribute("data-slot", "sidebar-header");
    });
    Alpine.directive("h-sidebar-content", (el) => {
      el.classList.add("vbox", "min-h-0", "flex-1", "gap-2", "overflow-auto", "group-data-[collapsible=icon]:overflow-hidden");
      el.setAttribute("data-slot", "sidebar-content");
    });
    Alpine.directive("h-sidebar-group", (el) => {
      el.classList.add("relative", "vbox", "w-full", "min-w-0", "p-2");
      el.setAttribute("data-slot", "sidebar-group");
    });
    Alpine.directive("h-sidebar-group-label", (el, { modifiers }) => {
      el.classList.add(
        "text-sidebar-foreground/70",
        "ring-sidebar-ring",
        "flex",
        "h-8",
        "shrink-0",
        "items-center",
        "rounded-md",
        "px-2",
        "text-xs",
        "font-medium",
        "outline-hidden",
        "transition-[margin,opacity]",
        "duration-200",
        "ease-linear",
        "focus-visible:ring-2",
        "[&>svg]:size-4",
        "[&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8",
        "group-data-[collapsible=icon]:opacity-0"
      );
      if (modifiers.includes("action")) el.classList.add("hover:bg-secondary-hover", "active:bg-secondary-active");
      el.setAttribute("data-slot", "sidebar-group-label");
    });
    Alpine.directive("h-sidebar-group-action", (el) => {
      el.classList.add(
        "text-sidebar-foreground",
        "ring-sidebar-ring",
        "hover:bg-sidebar-secondary",
        "hover:text-sidebar-secondary-foreground",
        "absolute",
        "top-3.5",
        "right-3",
        "flex",
        "aspect-square",
        "w-5",
        "items-center",
        "justify-center",
        "rounded-md",
        "p-0",
        "outline-hidden",
        "transition-transform",
        "focus-visible:ring-2",
        "[&>svg]:size-4",
        "[&>svg]:shrink-0",
        "after:absolute",
        "after:-inset-2",
        "md:after:hidden",
        "group-data-[collapsible=icon]:hidden"
      );
      el.setAttribute("data-slot", "sidebar-group-action");
    });
    Alpine.directive("h-sidebar-group-content", (el) => {
      el.classList.add("w-full", "text-sm");
      el.setAttribute("data-slot", "sidebar-group-content");
    });
    Alpine.directive("h-sidebar-menu", (el) => {
      el.classList.add("vbox", "w-full", "min-w-0", "gap-1");
      el.setAttribute("data-slot", "sidebar-menu");
    });
    Alpine.directive("h-sidebar-menu-item", (el) => {
      el.classList.add("group/menu-item", "relative");
      el.setAttribute("data-slot", "sidebar-menu-item");
    });
    Alpine.directive("h-sidebar-menu-button", (el) => {
      el.classList.add(
        "peer/menu-button",
        "flex",
        "w-full",
        "items-center",
        "gap-2",
        "overflow-hidden",
        "rounded-md",
        "p-2",
        "text-left",
        "text-sm",
        "align-middle",
        "outline-hidden",
        "ring-sidebar-ring",
        "transition-[width,height,padding]",
        "hover:bg-sidebar-secondary",
        "hover:text-sidebar-secondary-foreground",
        "focus-visible:ring-2",
        "active:bg-sidebar-primary",
        "active:text-sidebar-primary-foreground",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "group-has-data-[sidebar=menu-action]/menu-item:pr-8",
        "aria-disabled:pointer-events-none",
        "aria-disabled:opacity-50",
        "data-[active=true]:bg-sidebar-primary",
        "data-[active=true]:font-medium",
        "data-[active=true]:text-sidebar-primary-foreground",
        "data-[state=open]:hover:bg-sidebar-secondary",
        "data-[state=open]:hover:text-sidebar-secondary-foreground",
        "group-data-[collapsible=icon]:size-8!",
        "group-data-[collapsible=icon]:p-2!",
        "[&>span]:truncate",
        "[&>span]:align-middle",
        "[&>svg]:size-4",
        "[&>svg]:shrink-0",
        "[&>svg:not(:first-child):last-child]:ml-auto"
      );
      if (!el.hasAttribute("data-slot")) el.setAttribute("data-slot", "sidebar-menu-button");
      const sizes = {
        default: ["h-8", "text-sm"],
        sm: ["h-7", "text-xs"],
        lg: ["h-12", "text-sm", "group-data-[collapsible=icon]:p-0!"]
      };
      function setSize(size3) {
        if (sizes.hasOwnProperty(size3)) {
          el.classList.add(...sizes[size3]);
        }
      }
      if (!el.hasAttribute("data-size")) el.setAttribute("data-size", "default");
      setSize(el.getAttribute("data-size"));
    });
    Alpine.directive("h-sidebar-menu-action", (el, { modifiers }) => {
      el.classList.add(
        "text-sidebar-foreground",
        "ring-sidebar-ring",
        "hover:bg-sidebar-secondary",
        "hover:text-sidebar-secondary-foreground",
        "peer-hover/menu-button:text-sidebar-secondary-foreground",
        "absolute",
        "top-1.5",
        "right-1.5",
        "flex",
        "aspect-square",
        "w-5",
        "items-center",
        "justify-center",
        "rounded-md",
        "p-0",
        "outline-hidden",
        "transition-transform",
        "focus-visible:ring-2",
        "[&>svg]:size-4",
        "[&>svg]:shrink-0",
        "after:absolute",
        "after:-inset-2",
        "md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden"
      );
      if (modifiers.includes("autohide")) {
        el.classList.add("peer-data-[active=true]/menu-button:text-sidebar-secondary-foreground", "group-focus-within/menu-item:opacity-100", "group-hover/menu-item:opacity-100", "data-[state=open]:opacity-100", "md:opacity-0");
      }
      el.setAttribute("data-slot", "sidebar-menu-action");
    });
    Alpine.directive("h-sidebar-menu-badge", (el) => {
      el.classList.add(
        "text-sidebar-foreground",
        "pointer-events-none",
        "absolute",
        "right-1.5",
        "flex",
        "h-5",
        "min-w-5",
        "items-center",
        "justify-center",
        "rounded-md",
        "px-1",
        "text-xs",
        "font-medium",
        "tabular-nums",
        "select-none",
        "peer-hover/menu-button:text-sidebar-secondary-foreground",
        "peer-data-[active=true]/menu-button:text-sidebar-primary-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden"
      );
      el.setAttribute("data-slot", "sidebar-menu-badge");
    });
    Alpine.directive("h-sidebar-menu-skeleton", (el, { modifiers }) => {
      el.classList.add("flex", "h-8", "items-center", "gap-2", "rounded-md", "px-2");
      if (modifiers.includes("icon")) {
        const icon = document.createElement("div");
        icon.classList.add("size-4", "rounded-md", "bg-sidebar-secondary", "animate-pulse", "rounded-md");
        el.appendChild(icon);
      }
      const skeleton = document.createElement("div");
      skeleton.classList.add("h-4", "flex-1", "bg-sidebar-secondary", "animate-pulse", "rounded-md");
      skeleton.style.maxWidth = `${Math.floor(Math.random() * 40) + 50}%`;
      el.appendChild(skeleton);
      el.setAttribute("data-slot", "sidebar-menu-skeleton");
    });
    Alpine.directive("h-sidebar-separator", (el) => {
      el.classList.add("bg-sidebar-border", "w-auto", "bg-border", "shrink-0", "h-px", "w-full");
      el.setAttribute("data-slot", "sidebar-separator");
      el.setAttribute("role", "none");
    });
    Alpine.directive("h-sidebar-menu-sub", (el, { modifiers }) => {
      el.classList.add("vbox", "min-w-0", "translate-x-px", "gap-1", "py-0.5", "group-data-[collapsible=icon]:hidden");
      if (!modifiers.includes("flat")) {
        el.classList.add("border-sidebar-border", "mx-3.5", "border-l", "px-2.5");
      }
      el.setAttribute("data-slot", "sidebar-menu-sub");
    });
    Alpine.directive("h-sidebar-menu-sub-item", (el) => {
      el.classList.add("group/menu-sub-item", "relative");
      el.setAttribute("data-slot", "sidebar-menu-sub-item");
    });
    Alpine.directive("h-sidebar-menu-sub-button", (el) => {
      el.classList.add(
        "text-sidebar-foreground",
        "ring-sidebar-ring",
        "hover:bg-sidebar-secondary",
        "hover:text-sidebar-secondary-foreground",
        "active:bg-primary-secondary",
        "active:text-sidebar-primary-foreground",
        "[&>svg]:text-sidebar-secondary-foreground",
        "flex",
        "h-7",
        "w-full",
        "min-w-0",
        "-translate-x-px",
        "items-center",
        "gap-2",
        "overflow-hidden",
        "rounded-md",
        "px-2",
        "align-middle",
        "outline-hidden",
        "focus-visible:ring-2",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "aria-disabled:pointer-events-none",
        "aria-disabled:opacity-50",
        "[&>span]:truncate",
        "[&>span]:align-middle",
        "[&>svg]:size-4",
        "[&>svg]:shrink-0",
        "[&>svg:not(:first-child):last-child]:ml-auto",
        "data-[active=true]:bg-sidebar-primary",
        "data-[active=true]:text-sidebar-primary-foreground",
        "group-data-[collapsible=icon]:hidden"
      );
      el.setAttribute("data-slot", "sidebar-menu-sub-button");
      const sizes = {
        sm: ["text-xs"],
        md: ["text-sm"]
      };
      function setSize(size3) {
        if (sizes.hasOwnProperty(size3)) {
          el.classList.add(...sizes[size3]);
        }
      }
      if (!el.hasAttribute("data-size")) el.setAttribute("data-size", "md");
      setSize(el.getAttribute("data-size"));
    });
    Alpine.directive("h-sidebar-footer", (el) => {
      el.classList.add("vbox", "gap-2", "p-2");
      el.setAttribute("data-slot", "sidebar-footer");
    });
  }

  // src/components/separator.js
  function separator_default(Alpine) {
    Alpine.directive("h-separator", (el) => {
      el.classList.add(
        "bg-border",
        "shrink-0",
        "data-[orientation=horizontal]:h-px",
        "data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full",
        "data-[orientation=vertical]:w-px",
        "data-[orientation=vertical]:[[data-slot=input-group]_&]:h-auto",
        "data-[orientation=vertical]:[[data-slot=input-group]_&]:self-stretch",
        "data-[orientation=horizontal]:[[data-slot=input-group]_&]:w-auto",
        "data-[orientation=horizontal]:[[data-slot=input-group]_&]:grow"
      );
      el.setAttribute("role", "none");
      el.setAttribute("data-slot", "separator");
    });
  }

  // src/components/skeleton.js
  function skeleton_default(Alpine) {
    Alpine.directive("h-skeleton", (el, { modifiers }) => {
      el.classList.add("bg-secondary", "animate-pulse");
      if (modifiers.includes("control")) {
        el.classList.add("rounded-control");
      } else if (modifiers.includes("card")) {
        el.classList.add("rounded-xl");
      } else if (modifiers.includes("avatar")) {
        el.classList.add("rounded-full", "size-8");
      } else el.classList.add("rounded-md");
      el.setAttribute("data-slot", "skeleton");
    });
  }

  // src/components/collapsible.js
  function collapsible_default(Alpine) {
    Alpine.directive("h-collapsible", (el, { expression }, { effect, evaluate: evaluate2, evaluateLater, Alpine: Alpine2 }) => {
      el._collapsible = Alpine2.reactive({
        expanded: expression ? evaluate2(expression) : false
      });
      if (!el.hasAttribute("data-slot")) el.setAttribute("data-slot", "collapsible");
      if (expression) {
        const getExpanded = evaluateLater(expression);
        effect(() => {
          getExpanded((expanded) => {
            el._collapsible.expanded = expanded;
          });
        });
      }
    });
    Alpine.directive("h-collapsible-trigger", (el, { modifiers }, { effect, Alpine: Alpine2, cleanup }) => {
      const collapsible = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_collapsible"));
      if (!collapsible) {
        throw new Error("h-collapsible-trigger must be inside an h-collapsible element");
      }
      if (!el.hasAttribute("data-slot")) el.setAttribute("data-slot", "collapsible-trigger");
      if (modifiers.includes("chevron")) {
        el.classList.add("[&_svg]:transition-transform");
        if (modifiers.includes("90")) el.classList.add("[&[data-state=open]>svg:not(:first-child):last-child]:rotate-90", "[&[data-state=open]>svg:only-child]:rotate-90");
        else el.classList.add("[&[data-state=open]>svg:not(:first-child):last-child]:rotate-180", "[&[data-state=open]>svg:only-child]:rotate-180");
      }
      const handler2 = () => {
        collapsible._collapsible.expanded = !collapsible._collapsible.expanded;
      };
      effect(() => {
        el.setAttribute("data-state", collapsible._collapsible.expanded ? "open" : "closed");
      });
      el.addEventListener("click", handler2);
      cleanup(() => {
        el.removeEventListener("click", handler2);
      });
    });
    Alpine.directive("h-collapsible-content", (el, {}, { effect, Alpine: Alpine2 }) => {
      const collapsible = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_collapsible"));
      if (!collapsible) {
        throw new Error("h-collapsible-content must be inside an h-collapsible element");
      }
      if (!el.hasAttribute("data-slot")) el.setAttribute("data-slot", "collapsible-content");
      el.classList.add("data-[state=closed]:hidden");
      effect(() => {
        el.setAttribute("data-state", collapsible._collapsible.expanded ? "open" : "closed");
      });
    });
  }

  // src/components/tile.js
  function tile_default(Alpine) {
    Alpine.directive("h-tile-group", (el) => {
      el.classList.add("group/tile-group", "gap-2");
      el.setAttribute("role", "list");
      el.setAttribute("data-slot", "tile-group");
    });
    Alpine.directive("h-tile", (el) => {
      el.classList.add(
        "group/tile",
        "flex",
        "items-center",
        "text-sm",
        "rounded-xl",
        "transition-colors",
        "[a]:hover:bg-secondary-hover",
        "[a]:hover:text-secondary-foreground",
        "[a]:transition-colors",
        "duration-100",
        "flex-wrap",
        "outline-none",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "focus-visible:ring-[3px]"
      );
      el.setAttribute("data-slot", "tile");
      const sizes = {
        default: ["p-4", "gap-4"],
        sm: ["py-3", "px-4", "gap-2.5"]
      };
      function setSize(size3) {
        el.classList.add(...sizes[size3]);
        el.setAttribute("data-size", size3);
      }
      switch (el.getAttribute("data-variant")) {
        case "outline":
          el.classList.add("border", "border-border");
          break;
        case "shadow":
          el.classList.add("border", "shadow-sm");
          break;
        case "muted":
          el.classList.add("bg-muted");
          break;
        default:
          el.classList.add("border", "bg-transparent", "border-transparent");
      }
      if (el.getAttribute("data-size") === "sm") {
        setSize("sm");
      } else setSize("sm");
    });
    Alpine.directive("h-tile-header", (el) => {
      el.classList.add("flex", "basis-full", "items-center", "justify-between", "gap-2");
      el.setAttribute("data-slot", "tile-header");
    });
    Alpine.directive("h-tile-media", (el) => {
      el.classList.add("flex", "shrink-0", "items-center", "justify-center", "gap-2", "group-has-[[data-slot=tile-description]]/tile:self-start", "[&_svg]:pointer-events-none", "group-has-[[data-slot=tile-description]]/tile:translate-y-0.5");
      el.setAttribute("role", "list");
      el.setAttribute("data-slot", "tile-media");
      switch (el.getAttribute("data-variant")) {
        case "icon":
          el.classList.add("size-8", "border", "rounded-xl", "bg-muted", "[&_svg:not([class*='size-'])]:size-4");
          break;
        case "image":
          el.classList.add("size-10", "rounded-xl", "overflow-hidden", "[&_img]:size-full", "[&_img]:object-cover");
          break;
        default:
          el.classList.add("bg-transparent");
      }
    });
    Alpine.directive("h-tile-content", (el) => {
      el.classList.add("vbox", "flex-1", "gap-1", "[&+[data-slot=tile-content]]:flex-none");
      el.setAttribute("data-slot", "tile-content");
    });
    Alpine.directive("h-tile-title", (el) => {
      el.classList.add("flex", "w-fit", "items-center", "gap-2", "text-sm", "leading-snug", "font-medium");
      el.setAttribute("data-slot", "tile-title");
    });
    Alpine.directive("h-tile-description", (el) => {
      el.classList.add("text-muted-foreground", "line-clamp-2", "text-sm", "leading-normal", "font-normal", "text-balance", "[&>a:hover]:text-primary", "[&>a]:underline", "[&>a]:underline-offset-4");
      el.setAttribute("data-slot", "tile-description");
    });
    Alpine.directive("h-tile-actions", (el) => {
      el.classList.add("flex", "items-center", "gap-2");
      el.setAttribute("data-slot", "tile-actions");
    });
    Alpine.directive("h-tile-footer", (el) => {
      el.classList.add("flex", "basis-full", "items-center", "justify-between", "gap-2");
      el.setAttribute("data-slot", "tile-footer");
    });
  }

  // src/components/tag.js
  function tag_default(Alpine) {
    Alpine.directive("h-tag", (el) => {
      el.classList.add(
        "bg-muted",
        "text-muted-foreground",
        "pointer-events-none",
        "inline-flex",
        "h-5",
        "w-fit",
        "min-w-5",
        "items-center",
        "justify-center",
        "gap-1",
        "rounded-sm",
        "px-1",
        "font-sans",
        "text-xs",
        "font-medium",
        "select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20",
        "[[data-slot=tooltip-content]_&]:text-background",
        "dark:[[data-slot=tooltip-content]_&]:bg-background/10"
      );
      el.setAttribute("data-slot", "tag");
    });
    Alpine.directive("h-tag-group", (el) => {
      el.classList.add("inline-flex", "items-center", "gap-1");
      el.setAttribute("data-slot", "tag-group");
    });
  }

  // src/components/icon.js
  function icon_default(Alpine) {
    Alpine.directive("h-icon", (el) => {
      if (el.tagName.toLowerCase() !== "svg") {
        throw new Error("h-icon works only on svg elements");
      } else if (!el.hasAttribute("role")) {
        throw new Error("h-icon must have a role");
      } else if (el.getAttribute("role") === "img" && !el.hasAttribute("aria-labelledby") && !el.hasAttribute("aria-label")) {
        throw new Error('h-icon: svg images with the role of img must have an "aria-label" or "aria-labelledby" attribute');
      }
      el.classList.add("fill-current");
      el.setAttribute("data-slot", "icon");
      if (el.hasAttribute("data-link")) {
        fetch(el.getAttribute("data-link")).then((response) => {
          if (response.status === 200) return response.text();
          throw response;
        }).then((content) => {
          const parser = new DOMParser();
          const svg = parser.parseFromString(content, "image/svg+xml");
          for (let a = 0; a < svg.firstElementChild.attributes.length; a++) {
            el.setAttribute(svg.firstElementChild.attributes[a].name, svg.firstElementChild.attributes[a].value);
          }
          el.append(...svg.firstElementChild.children);
        }).catch((response) => {
          console.error(response);
        });
      }
    });
  }

  // src/components/info-page.js
  function info_page_default(Alpine) {
    Alpine.directive("h-info-page", (el) => {
      el.classList.add("vbox", "min-w-0", "flex-1", "items-center", "justify-center", "gap-6", "rounded-lg", "border-dashed", "p-6", "text-center", "text-balance", "md:p-12");
      el.setAttribute("data-slot", "info-page");
    });
    Alpine.directive("h-info-page-header", (el) => {
      el.classList.add("vbox", "max-w-sm", "items-center", "gap-2", "text-center");
      el.setAttribute("data-slot", "info-page-header");
    });
    Alpine.directive("h-info-page-media", (el, { modifiers }) => {
      el.classList.add("hbox", "shrink-0", "items-center", "justify-center", "mb-2", "[&_svg]:pointer-events-none", "[&_svg]:shrink-0");
      if (modifiers.includes("icon")) el.classList.add("bg-muted", "text-foreground", "size-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "[&_svg:not([class*='size-'])]:size-6");
      else el.classList.add("bg-transparent");
      el.setAttribute("data-slot", "info-page-media");
    });
    Alpine.directive("h-info-page-title", (el) => {
      el.classList.add("text-lg", "font-medium", "tracking-tight");
      el.setAttribute("data-slot", "info-page-title");
    });
    Alpine.directive("h-info-page-description", (el) => {
      el.classList.add("text-muted-foreground", "[&>a:hover]:text-primary", "text-sm/relaxed", "[&>a]:underline", "[&>a]:underline-offset-4");
      el.setAttribute("data-slot", "info-page-description");
    });
    Alpine.directive("h-info-page-content", (el) => {
      el.classList.add("vbox", "w-full", "max-w-sm", "min-w-0", "items-center", "gap-4", "text-sm", "text-balance");
      el.setAttribute("data-slot", "info-page-description");
    });
  }

  // src/components/spinner.js
  function spinner_default(Alpine) {
    Alpine.directive("h-spinner", (el) => {
      el.classList.add("size-4", "border-2", "border-x-primary", "border-b-primary", "border-t-transparent", "rounded-full", "animate-spin");
      el.setAttribute("role", "status");
      el.setAttribute("data-slot", "spinner");
      if (!el.hasAttribute("aria-label")) el.setAttribute("aria-label", "Loading");
    });
  }

  // src/components/fieldset.js
  function fieldset_default(Alpine) {
    Alpine.directive("h-fieldset", (el) => {
      el.classList.add("vbox", "gap-6", "has-[>[data-slot=checkbox-group]]:gap-3", "has-[>[data-slot=radio-group]]:gap-3");
      el.setAttribute("data-slot", "fieldset");
    });
    Alpine.directive("h-legend", (el, { modifiers }) => {
      el.classList.add("mb-3", "font-medium", modifiers.includes("label") ? "text-sm" : "text-base");
      el.setAttribute("data-slot", "legend");
    });
    Alpine.directive("h-field-group", (el) => {
      el.classList.add("group/field-group", "@container/field-group", "vbox", "w-full", "gap-7", "data-[slot=checkbox-group]:gap-3", "[&>[data-slot=field-group]]:gap-4");
      el.setAttribute("data-slot", "field-group");
    });
    Alpine.directive("h-field", (el) => {
      el.classList.add("group/field", "w-full", "gap-3", "data-[invalid=true]:text-negative");
      switch (el.getAttribute("data-orientation")) {
        case "horizontal":
          el.classList.add("hbox", "items-center", "[&>[data-slot=field-label]]:flex-auto", "has-[>[data-slot=field-content]]:items-start", "has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px");
          break;
        case "responsive":
          el.classList.add(
            "vbox",
            "[&>*]:w-full",
            "[&>.sr-only]:w-auto",
            "@md/field-group:flex-row",
            "@md/field-group:items-center",
            "@md/field-group:[&>*]:w-auto",
            "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
            "@md/field-group:has-[>[data-slot=field-content]]:items-start",
            "@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
          );
          break;
        default:
          el.classList.add("vbox", "[&>*]:w-full", "[&>.sr-only]:w-auto");
      }
      el.setAttribute("role", "group");
      el.setAttribute("data-slot", "field");
    });
    Alpine.directive("h-field-content", (el) => {
      el.classList.add("group/field-content", "vbox", "flex-1", "gap-1.5", "leading-snug");
      el.setAttribute("data-slot", "field-content");
    });
    Alpine.directive("h-field-title", (el) => {
      el.classList.add("flex", "w-fit", "items-center", "gap-2", "text-sm", "leading-snug", "font-medium", "group-data-[disabled=true]/field:opacity-50");
      el.setAttribute("data-slot", "field-title");
    });
    Alpine.directive("h-field-description", (el) => {
      el.classList.add(
        "text-muted-foreground",
        "text-sm",
        "leading-normal",
        "font-normal",
        "group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0",
        "nth-last-2:-mt-1",
        "[[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary",
        "[&>a]:underline",
        "[&>a]:underline-offset-4"
      );
      el.setAttribute("data-slot", "field-description");
    });
    Alpine.directive("h-field-error", (el) => {
      el.classList.add("text-negative", "text-sm", "font-normal");
      el.setAttribute("data-slot", "field-error");
    });
  }

  // src/components/tooltip.js
  function tooltip_default(Alpine) {
    Alpine.directive("h-tooltip", (el, {}, { Alpine: Alpine2 }) => {
      el._tooltip = Alpine2.reactive({
        id: void 0,
        controls: `hpc${v4_default()}`,
        shown: false
      });
      el.setAttribute("data-slot", "tooltip");
    });
    Alpine.directive("h-tooltip-trigger", (el, {}, { Alpine: Alpine2, cleanup }) => {
      const tooltip = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_tooltip"));
      if (!tooltip) {
        throw new Error("h-tooltip-trigger must be inside an h-tooltip element");
      }
      if (el.hasAttribute("id")) {
        tooltip._tooltip.id = el.getAttribute("id");
      } else {
        tooltip._tooltip.id = `hp${v4_default()}`;
        el.setAttribute("id", tooltip._tooltip.id);
      }
      el.setAttribute("aria-describedby", tooltip._tooltip.controls);
      const handler2 = (event) => {
        tooltip._tooltip.shown = event.type === "pointerenter";
      };
      el.addEventListener("pointerenter", handler2);
      el.addEventListener("pointerleave", handler2);
      cleanup(() => {
        el.removeEventListener("pointerenter", handler2);
        el.removeEventListener("pointerleave", handler2);
      });
    });
    Alpine.directive("h-tooltip-content", (el, {}, { effect, Alpine: Alpine2 }) => {
      const tooltip = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_tooltip"));
      if (!tooltip) {
        throw new Error("h-tooltip-content must be inside an h-tooltip element");
      }
      el.classList.add("absolute", "bg-foreground", "text-background", "z-50", "w-fit", "rounded-md", "px-3", "py-1.5", "text-xs", "text-balance");
      el.setAttribute("data-slot", "tooltip-content");
      el.setAttribute("id", tooltip._tooltip.controls);
      const control = tooltip.querySelector(`#${tooltip._tooltip.id}`);
      const arrowEl = document.createElement("span");
      arrowEl.classList.add("absolute", "bg-foreground", "fill-foreground", "z-50", "size-2.5", "rotate-45", "rounded-[2px]");
      el.appendChild(arrowEl);
      function updatePosition() {
        computePosition2(control, el, {
          placement: "top",
          middleware: [offset2(10), flip2(), shift2({ padding: 4 }), arrow2({ element: arrowEl })]
        }).then(({ x, y, middlewareData, placement }) => {
          Object.assign(el.style, {
            left: `${x}px`,
            top: `${y}px`
          });
          if (middlewareData.arrow)
            Object.assign(arrowEl.style, {
              left: middlewareData.arrow.x != null ? `${middlewareData.arrow.x}px` : "",
              top: placement === "top" ? `${el.offsetHeight - 5}px` : `-5px`
            });
        });
      }
      effect(() => {
        if (tooltip._tooltip.shown) {
          el.classList.remove("hidden");
          updatePosition();
        } else {
          el.classList.add("hidden");
          Object.assign(el.style, {
            left: "0px",
            top: "0px"
          });
          Object.assign(arrowEl.style, {
            left: "0px",
            top: "0px"
          });
        }
      });
    });
  }

  // src/components/progress.js
  function progress_default(Alpine) {
    Alpine.directive("h-progress", (el, { expression }, { effect, evaluateLater }) => {
      el.classList.add("bg-secondary", "relative", "h-2", "w-full", "overflow-hidden", "rounded-full");
      el.setAttribute("data-slot", "progress");
      const indicator = document.createElement("div");
      indicator.classList.add("bg-primary", "h-full", "w-full", "flex-1", "transition-all", "rounded-full");
      indicator.setAttribute("data-slot", "progress-indicator");
      Object.assign(indicator.style, {
        transform: `translateX(-${100 - 0}%)`
      });
      el.appendChild(indicator);
      const getProgress = evaluateLater(expression);
      effect(() => {
        getProgress((progress) => {
          Object.assign(indicator.style, {
            transform: `translateX(-${100 - (progress ?? 0)}%)`
          });
        });
      });
    });
  }

  // src/components/pagination.js
  function pagination_default(Alpine) {
    Alpine.directive("h-pagination", (el) => {
      el.classList.add("mx-auto", "flex", "w-full", "justify-center");
      el.setAttribute("role", "navigation");
      el.setAttribute("aria-label", "pagination");
      el.setAttribute("data-slot", "pagination");
    });
    Alpine.directive("h-pagination-content", (el) => {
      el.classList.add("hbox", "items-center", "gap-1");
      el.setAttribute("data-slot", "pagination-content");
    });
    Alpine.directive("h-pagination-item", (el) => {
      el.setAttribute("data-slot", "pagination-item");
    });
    Alpine.directive("h-pagination-link", (el, { modifiers, expression }, { effect, evaluateLater }) => {
      el.classList.add(
        "inline-flex",
        "items-center",
        "justify-center",
        "whitespace-nowrap",
        "rounded-control",
        "text-sm",
        "font-medium",
        "transition-all",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "[&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-4",
        "shrink-0",
        "[&_svg]:shrink-0",
        "outline-none",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "focus-visible:ring-[3px]",
        "h-9",
        "min-w-9",
        "text-foreground",
        "hover:bg-secondary",
        "hover:text-secondary-foreground",
        "active:bg-secondary-active"
      );
      if (modifiers[0]) {
        el.classList.add("gap-1", "px-2.5", modifiers[0] === "previous" ? "sm:pl-2.5" : "sm:pr-2.5");
      } else {
        const getActive = evaluateLater(expression);
        effect(() => {
          getActive((active) => {
            if (active) {
              el.classList.remove("bg-transparent");
              el.classList.add("border", "bg-background");
              el.setAttribute("aria-current", "page");
            } else {
              el.classList.add("bg-transparent");
              el.classList.remove("border", "bg-background");
              el.setAttribute("aria-current", false);
            }
          });
        });
      }
      el.setAttribute("data-slot", "pagination-link");
    });
    Alpine.directive("h-pagination-link-label", (el) => {
      el.classList.add("hidden", "sm:block");
    });
    Alpine.directive("h-pagination-ellipsis", (el) => {
      el.classList.add("flex", "size-9", "items-center", "justify-center");
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttributeNS(null, "width", "16");
      svg.setAttributeNS(null, "height", "16");
      svg.setAttributeNS(null, "viewBox", "0 0 16 16");
      svg.setAttributeNS(null, "fill", "currentColor");
      svg.setAttributeNS(null, "class", "size-4");
      const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle1.setAttributeNS(null, "cx", "2");
      circle1.setAttributeNS(null, "cy", "8");
      circle1.setAttributeNS(null, "r", "1.5");
      svg.appendChild(circle1);
      const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle2.setAttributeNS(null, "cx", "8");
      circle2.setAttributeNS(null, "cy", "8");
      circle2.setAttributeNS(null, "r", "1.5");
      svg.appendChild(circle2);
      const circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle3.setAttributeNS(null, "cx", "14");
      circle3.setAttributeNS(null, "cy", "8");
      circle3.setAttributeNS(null, "r", "1.5");
      svg.appendChild(circle3);
      el.appendChild(svg);
      el.setAttribute("data-slot", "pagination-ellipsis");
    });
  }

  // src/components/tabs.js
  function tabs_default(Alpine) {
    Alpine.directive("h-tabs", (el) => {
      el.classList.add("group/tabs", "flex", "data-[orientation=horizontal]:flex-col", "data-[orientation=vertical]:flex-row");
      el.setAttribute("data-slot", "tabs");
    });
    Alpine.directive("h-tab-bar", (el) => {
      el.classList.add(
        "group/tab-bar",
        "flex",
        "gap-1.5",
        "bg-object-header",
        "text-object-header-foreground",
        "group-data-[orientation=horizontal]/tabs:flex-row",
        "group-data-[orientation=vertical]/tabs:flex-col",
        "data-[style=inline]:group-data-[orientation=horizontal]/tabs:inset-shadow-[0_-.063rem_var(--border)]",
        "data-[style=inline]:group-data-[orientation=vertical]/tabs:inset-shadow-[-.063rem_0_var(--border)]",
        "data-[style=inline]:group-data-[orientation=horizontal]/tabs:h-11",
        "data-[style=inline]:data-[size=sm]:group-data-[orientation=horizontal]/tabs:h-8",
        "data-[style=float]:border",
        "data-[style=float]:rounded-lg",
        "data-[style=float]:p-[3px]"
      );
      el.setAttribute("data-slot", "tab-bar");
    });
    Alpine.directive("h-tab-list", (el) => {
      el.classList.add(
        "text-muted-foreground",
        "flex",
        "items-start",
        "justify-start",
        "group-data-[orientation=horizontal]/tabs:flex-row",
        "group-data-[orientation=vertical]/tabs:flex-col",
        "group-data-[orientation=vertical]/tabs:h-fit",
        "group-data-[style=inline]/tab-bar:gap-2",
        "group-data-[style=float]/tab-bar:gap-1"
      );
      el.setAttribute("role", "tablist");
      el.setAttribute("data-slot", "tab-list");
    });
    Alpine.directive("h-tab", (el) => {
      el.classList.add(
        "cursor-pointer",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "focus-visible:outline-ring",
        "text-muted-foreground",
        "hover:text-foreground",
        "aria-selected:text-foreground",
        "inline-flex",
        "group-data-[orientation=vertical]/tabs:w-full",
        "group-data-[orientation=vertical]/tabs:h-9",
        "group-data-[orientation=vertical]/tabs:group-data-[size=sm]/tab-bar:h-8",
        "group-data-[orientation=horizontal]/tabs:h-full",
        "items-center",
        "justify-start",
        "gap-1.5",
        "px-2",
        "py-1",
        "text-sm",
        "font-medium",
        "whitespace-nowrap",
        "transition-[color,box-shadow]",
        "group-data-[style=float]/tab-bar:rounded-md",
        "group-data-[style=float]/tab-bar:border",
        "group-data-[style=float]/tab-bar:border-transparent",
        "group-data-[style=float]/tab-bar:aria-selected:bg-background",
        "group-data-[style=float]/tab-bar:aria-selected:border-border",
        "group-data-[style=float]/tab-bar:hover:bg-background",
        "group-data-[style=float]/tab-bar:hover:border-border",
        "group-data-[style=inline]/tab-bar:border-0",
        "group-data-[style=inline]/tab-bar:group-data-[orientation=horizontal]/tabs:hover:inset-shadow-[0_-.188rem_var(--border)]",
        "group-data-[style=inline]/tab-bar:group-data-[orientation=horizontal]/tabs:aria-selected:inset-shadow-[0_-.125rem_var(--primary)]",
        "group-data-[style=inline]/tab-bar:group-data-[orientation=horizontal]/tabs:hover:aria-selected:inset-shadow-[0_-.188rem_var(--primary)]",
        "group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:px-3.5",
        "group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:hover:inset-shadow-[-.188rem_0_var(--border)]",
        "group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:aria-selected:inset-shadow-[-.125rem_0_var(--primary)]",
        "group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:hover:aria-selected:inset-shadow-[-.188rem_0_var(--primary)]",
        "focus-visible:ring-[3px]",
        "focus-visible:outline-1",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "[&_svg]:pointer-events-none",
        "[&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4"
      );
      el.setAttribute("role", "tab");
      el.setAttribute("data-slot", "tab");
      if (!el.hasAttribute("id")) throw new Error("h-tab: Tabs must have an id");
      if (!el.hasAttribute("aria-controls")) throw new Error("h-tab: aria-controls must be set to the tab-content id.");
    });
    Alpine.directive("h-tab-action", (el) => {
      el.classList.add("cursor-pointer", "ml-auto", "rounded-md", "text-foreground", "hover:bg-secondary", "hover:text-secondary-foreground", "active:bg-secondary-active");
      el.setAttribute("role", "button");
      el.setAttribute("data-slot", "tab-action");
    });
    Alpine.directive("h-tab-list-actions", (el, { modifiers }) => {
      el.classList.add("flex", "gap-1.5", "items-center", "justify-center");
      if (modifiers.includes("end"))
        el.classList.add(
          "group-data-[orientation=horizontal]/tabs:ml-auto",
          "group-data-[style=inline]/tab-bar:group-data-[orientation=horizontal]/tabs:mr-1.5",
          "group-data-[orientation=vertical]/tabs:mt-auto",
          "group-data-[style=inline]/tab-bar:group-data-[orientation=vertical]/tabs:mb-1.5"
        );
      el.setAttribute("data-slot", "tab-list-actions");
    });
    Alpine.directive("h-tabs-content", (el) => {
      el.classList.add("flex-1", "outline-none");
      el.setAttribute("role", "tabpanel");
      el.setAttribute("tabindex", "0");
      el.setAttribute("data-slot", "tabs-content");
      if (!el.hasAttribute("id")) throw new Error("h-tabs-content: Tab content must have an id");
      if (!el.hasAttribute("aria-labelledby")) throw new Error("h-tabs-content: aria-labelledby must be set to the tab id.");
    });
  }

  // src/components/text.js
  function text_default(Alpine) {
    Alpine.directive("h-text", (el, { modifiers }) => {
      switch (modifiers[0]) {
        case "h1":
          el.classList.add("text-4xl", "font-extrabold", "tracking-tight");
          break;
        case "h2":
          el.classList.add("text-3xl", "font-semibold", "tracking-tight");
          break;
        case "h3":
          el.classList.add("text-2xl", "font-semibold", "tracking-tight");
          break;
        case "h4":
          el.classList.add("text-xl", "font-semibold", "tracking-tight");
          break;
        case "h5":
          el.classList.add("text-base", "font-semibold", "tracking-tight");
          break;
        case "h6":
          el.classList.add("text-sm", "font-semibold", "tracking-tight");
          break;
        case "blockquote":
          el.classList.add("mt-6", "border-l-2", "pl-6", "italic");
          break;
        case "code":
          el.classList.add("bg-muted", "relative", "rounded", "px-[0.3rem]", "py-[0.2rem]", "font-mono", "text-sm", "font-semibold");
          break;
        case "lead":
          el.classList.add("text-muted-foreground", "text-xl");
          break;
        case "lg":
          el.classList.add("text-lg", "font-semibold");
          break;
        case "sm":
          el.classList.add("text-sm", "leading-none", "font-medium");
          break;
        case "xs":
          el.classList.add("text-xs", "leading-none", "font-medium");
          break;
        case "muted":
          el.classList.add("text-muted-foreground", "text-sm");
          break;
        default:
          el.classList.add("leading-7");
      }
    });
  }

  // src/components/dialog.js
  function dialog_default(Alpine) {
    Alpine.directive("h-dialog-overlay", (el, {}, { cleanup }) => {
      el.classList.add("hidden", "data-[open=true]:block", "fixed", "inset-0", "z-50", "bg-black/60");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("data-slot", "dialog-overlay");
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "data-open" && el.getAttribute("data-open") === "true") {
            const inputs = el.getElementsByTagName("INPUT");
            if (inputs.length) {
              for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].autofocus) {
                  inputs[i].focus();
                  return;
                }
              }
              inputs[0].focus();
            } else {
              const buttons = el.getElementsByTagName("BUTTON");
              if (buttons.length) {
                buttons[0].focus();
              }
            }
          }
        });
      });
      observer.observe(el, { attributes: true });
      cleanup(() => {
        observer.disconnect();
      });
    });
    Alpine.directive("h-dialog", (el) => {
      el.classList.add(
        "relative",
        "bg-background",
        "fixed",
        "top-[50%]",
        "left-[50%]",
        "z-50",
        "grid",
        "w-full",
        "max-w-[calc(100%-2rem)]",
        "translate-x-[-50%]",
        "translate-y-[-50%]",
        "gap-4",
        "rounded-lg",
        "border",
        "p-4",
        "shadow-lg",
        "sm:max-w-lg"
      );
      el.setAttribute("role", "dialog");
      el.setAttribute("data-slot", "dialog");
      if (!el.hasAttribute("aria-labelledby")) {
        console.error('h-dialog: attribute "aria-labelledby" is missing');
      }
      if (!el.hasAttribute("aria-describedby")) {
        console.error('h-dialog: attribute "aria-describedby" is missing');
      }
    });
    Alpine.directive("h-dialog-header", (el) => {
      el.classList.add("grid", "grid-cols-[1fr_auto]", "place-items-start", "gap-2", "text-center", "sm:text-left");
      el.setAttribute("data-slot", "dialog-header");
    });
    Alpine.directive("h-dialog-title", (el) => {
      el.classList.add("text-lg", "leading-none", "font-semibold");
      el.setAttribute("data-slot", "dialog-title");
    });
    Alpine.directive("h-dialog-close", (el) => {
      el.classList.add(
        "ring-offset-background",
        "focus:ring-ring",
        "rounded-xs",
        "opacity-70",
        "transition-opacity",
        "hover:opacity-100",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:outline-hidden",
        "disabled:pointer-events-none",
        "[&_svg]:pointer-events-none",
        "[&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4"
      );
      el.setAttribute("data-slot", "dialog-close");
    });
    Alpine.directive("h-dialog-description", (el) => {
      el.classList.add("col-span-full", "text-muted-foreground", "text-sm");
      el.setAttribute("data-slot", "dialog-description");
    });
    Alpine.directive("h-dialog-footer", (el) => {
      el.classList.add("flex", "flex-col-reverse", "gap-2", "sm:flex-row", "sm:justify-end");
      el.setAttribute("data-slot", "dialog-footer");
    });
  }

  // src/components/table.js
  function table_default(Alpine) {
    Alpine.directive("h-table-container", (el, { modifiers }) => {
      if (modifiers.includes("scroll")) {
        el.classList.add("overflow-scroll", "[&_thead]:sticky", "[&_thead]:top-0", "[&_thead]:z-10", "[&_tfoot]:sticky", "[&_tfoot]:bottom-0", "[&_tfoot]:z-10", "[&_tbody_tr_th]:sticky", "[&_tbody_tr_th]:left-0", "[&_tbody_tr_th]:z-5");
      } else {
        el.classList.add("relative", "w-full", "overflow-x-auto");
      }
      el.setAttribute("data-slot", "table");
      if (el.getAttribute("data-border") === "true") {
        el.classList.add("border", "rounded-md");
      }
    });
    Alpine.directive("h-table", (el) => {
      el.classList.add("group", "w-full", "caption-bottom", "text-sm", "border-separate", "border-spacing-0");
      if (el.getAttribute("data-fixed") === "true") el.classList.add("table-fixed");
      el.setAttribute("data-slot", "table");
      switch (el.getAttribute("data-borders")) {
        case "rows":
          el.classList.add("[&_tr_td]:border-b", "[&_tr_th]:border-b", "first:[&_tfoot_tr_td]:border-t", "first:[&_tfoot_tr_th]:border-t");
          break;
        case "columns":
          el.classList.add("[&_tr]:divide-x");
          break;
        case "both":
          el.classList.add("[&_tr_td]:border-b", "[&_tr_th]:border-b", "first:[&_tfoot_tr_td]:border-t", "first:[&_tfoot_tr_th]:border-t", "[&_tr]:divide-x");
          break;
      }
    });
    Alpine.directive("h-table-header", (el) => {
      el.classList.add("bg-table-header");
      el.setAttribute("data-slot", "table-header");
    });
    Alpine.directive("h-table-head", (el) => {
      el.classList.add("text-foreground", "h-10", "px-2", "text-left", "align-middle", "font-medium", "whitespace-nowrap", "[&:has([role=checkbox])]:pr-0", "[&>[role=checkbox]]:flex", "[&>[role=checkbox]]:items-center");
      el.setAttribute("data-slot", "table-head");
    });
    Alpine.directive("h-table-cell", (el) => {
      el.classList.add("p-2", "align-middle", "whitespace-nowrap", "[&:has([role=checkbox])]:pr-0", "[&>[role=checkbox]]:flex", "[&>[role=checkbox]]:items-center");
      el.setAttribute("data-slot", "table-cell");
    });
    Alpine.directive("h-table-body", (el) => {
      el.classList.add("[&_tr:last-child_td]:border-b-0", "[&_tr:last-child_th]:border-b-0", "[&_tr_th]:bg-table-header", "[&_tr:hover_th]:bg-table-hover", "[&_tr:hover_th]:text-table-hover-foreground");
      el.setAttribute("data-slot", "table-body");
    });
    Alpine.directive("h-table-row", (el) => {
      el.classList.add("hover:bg-table-hover", "hover:text-table-hover-foreground", "data-[state=selected]:bg-muted");
      el.setAttribute("data-slot", "table-row");
    });
    Alpine.directive("h-table-caption", (el) => {
      el.classList.add("text-muted-foreground", "py-2", "text-sm", "border-t");
      el.setAttribute("data-slot", "table-caption");
    });
    Alpine.directive("h-table-footer", (el) => {
      el.classList.add("bg-table-header", "font-medium", "last:[&>tr_td]:border-b-0", "last:[&>tr_th]:border-b-0");
      el.setAttribute("data-slot", "table-footer");
    });
  }

  // src/components/menu.js
  function menu_default(Alpine) {
    Alpine.directive("h-menu-trigger", (el, { modifiers }) => {
      el._menu_trigger = {
        isDropdown: modifiers.includes("dropdown")
      };
    });
    Alpine.directive("h-menu", (el, { modifiers }, { cleanup, Alpine: Alpine2 }) => {
      el.classList.add("hidden", "fixed", "bg-popover", "text-popover-foreground", "font-normal", "z-50", "min-w-[8rem]", "overflow-x-hidden", "overflow-y-auto", "rounded-md", "p-1", "shadow-md", "border", "outline-none");
      el.setAttribute("role", "menu");
      el.setAttribute("aria-orientation", "vertical");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("data-slot", "menu");
      if (!el.hasAttribute("aria-labelledby") && !el.hasAttribute("aria-label")) {
        throw new Error('h-menu: must have an "aria-label" or "aria-labelledby" attribute');
      }
      const menuTrigger = Alpine2.findClosest(el.parentElement, (parent) => parent.hasOwnProperty("_menu_trigger"));
      if (!menuTrigger) {
        throw new Error("h-menu: menu must be inside an h-menu-trigger");
      }
      let isSubmenu = modifiers.includes("sub");
      let menuSubItem;
      if (isSubmenu) menuSubItem = Alpine2.findClosest(el.parentElement, (parent) => parent.getAttribute("data-slot") === "menu-sub");
      function listenForTrigger(listen) {
        if (listen) {
          if (menuTrigger._menu_trigger.isDropdown) menuTrigger.addEventListener("click", openDropdown);
          else menuTrigger.addEventListener("contextmenu", onContextmenu);
        } else {
          if (menuTrigger._menu_trigger.isDropdown) menuTrigger.removeEventListener("click", openDropdown);
          else menuTrigger.removeEventListener("contextmenu", onContextmenu);
        }
      }
      function close(parent = false) {
        el.pauseKeyEvents = false;
        el.classList.add("hidden");
        Object.assign(el.style, {
          left: "0px",
          top: "0px"
        });
        top.removeEventListener("contextmenu", onClick);
        top.removeEventListener("click", onClick);
        el.removeEventListener("keydown", onKeydown);
        if (isSubmenu) {
          if (parent) {
            menuSubItem._menu_sub.closeTree();
          }
        } else {
          listenForTrigger(true);
        }
      }
      el._menu = { close };
      function isPrintableCharacter(str) {
        return str.length === 1 && /\S/.test(str);
      }
      function getFirstChar(text) {
        const clean = text.replaceAll("\n", "").trim();
        if (clean) return clean[0].toLowerCase();
        return "";
      }
      function findMatching(str, items) {
        for (let i = 0; i < items.length; i++) {
          if (getFirstChar(items[i].textContent).startsWith(str.toLowerCase())) {
            items[i].focus();
            return true;
          }
        }
        return false;
      }
      function onClick(event) {
        if (event.type === "contextmenu") event.preventDefault();
        close(isSubmenu);
      }
      el.pauseKeyEvents = false;
      function onKeydown(event) {
        if (!el.pauseKeyEvents) {
          let menuitem;
          switch (event.key) {
            case "Left":
            case "ArrowLeft":
            case "Esc":
            case "Escape":
              close();
              if (isSubmenu) {
                setTimeout(() => menuSubItem.focus(), 0);
              }
              break;
            case "Tab":
            case " ":
            case "Enter":
              if (event.key !== "Tab") {
                event.preventDefault();
                event.target.click();
              }
              close();
              if (isSubmenu) {
                menuSubItem._menu_sub.closeTree();
              }
              break;
            case "Down":
            case "ArrowDown":
              event.preventDefault();
              menuitem = el.querySelector(':scope > [role^=menuitem][tabIndex="0"] ~ [role^=menuitem][tabIndex="-1"]');
              if (!menuitem) menuitem = el.querySelector('[role^=menuitem][tabIndex="-1"]');
              if (menuitem) {
                menuitem.focus();
              }
              break;
            case "Up":
            case "ArrowUp":
              event.preventDefault();
              let menuitems = el.querySelectorAll(':scope > [role^=menuitem][tabIndex="-1"]:has(~ [role^=menuitem][tabIndex="0"])');
              if (menuitems.length) {
                menuitem = menuitems[menuitems.length - 1];
              } else {
                menuitem = el.querySelector(':scope > [role^=menuitem][tabIndex="-1"]:last-of-type');
              }
              if (menuitem) {
                menuitem.focus();
              }
              break;
            case "Home":
            case "PageUp":
              event.preventDefault();
              menuitem = el.querySelector(':scope > [role^=menuitem][tabIndex="-1"]:first-of-type');
              if (menuitem) {
                menuitem.focus();
              }
              break;
            case "End":
            case "PageDown":
              event.preventDefault();
              menuitem = el.querySelector(':scope > [role^=menuitem][tabIndex="-1"]:last-of-type');
              if (menuitem) {
                menuitem.focus();
              }
              break;
            default:
              if (isPrintableCharacter(event.key)) {
                let items = el.querySelectorAll(':scope > [role^=menuitem][tabindex="0"] ~ [role^=menuitem]');
                if (!findMatching(event.key, items)) {
                  items = el.querySelectorAll(':scope > [role^=menuitem][tabindex="-1"]');
                  findMatching(event.key, items);
                }
              }
          }
        }
      }
      function open(parent) {
        if (el.classList.contains("hidden")) {
          let getPlacement = function() {
            if (isSubmenu) {
              return "right-start";
            } else if (menuTrigger._menu_trigger.isDropdown) {
              return el.getAttribute("data-align") || "bottom-start";
            }
            return "right-start";
          };
          el.classList.remove("hidden");
          el.pauseKeyEvents = false;
          computePosition2(parent, el, {
            placement: getPlacement(),
            strategy: "fixed",
            middleware: [
              offset2(isSubmenu ? 0 : 4),
              flip2(),
              shift2({ padding: 4 }),
              size2({
                apply({ availableWidth, availableHeight, elements }) {
                  Object.assign(elements.floating.style, {
                    maxWidth: `${Math.max(0, availableWidth) - 4}px`,
                    maxHeight: `${Math.max(0, availableHeight) - 4}px`
                  });
                }
              })
            ]
          }).then(({ x, y }) => {
            Object.assign(el.style, {
              left: `${x}px`,
              top: `${y}px`
            });
            if (!isSubmenu) Alpine2.nextTick(() => el.focus());
            setTimeout(() => {
              top.addEventListener("contextmenu", onClick);
              top.addEventListener("click", onClick);
              el.addEventListener("keydown", onKeydown);
            }, 0);
          });
        }
      }
      function openDropdown() {
        open(menuTrigger);
      }
      function onContextmenu(event) {
        event.preventDefault();
        open({
          getBoundingClientRect() {
            return {
              width: 0,
              height: 0,
              x: event.clientX,
              y: event.clientY,
              top: event.clientY,
              left: event.clientX,
              right: event.clientX,
              bottom: event.clientY
            };
          }
        });
        listenForTrigger(false);
      }
      if (isSubmenu) {
        menuSubItem._menu_sub.open = open;
        menuSubItem._menu_sub.close = close;
      } else {
        listenForTrigger(true);
      }
      cleanup(() => {
        listenForTrigger(false);
        top.removeEventListener("click", onClick);
        top.removeEventListener("contextmenu", onClick);
        el.removeEventListener("keydown", onKeydown);
      });
    });
    Alpine.directive("h-menu-item", (el, {}, { cleanup, Alpine: Alpine2 }) => {
      el.classList.add(
        "focus:bg-secondary-hover",
        "hover:bg-secondary-hover",
        "data-[variant=negative]:text-negative",
        "data-[variant=negative]:focus:bg-negative/10",
        "data-[variant=negative]:hover:bg-negative/10",
        "data-[variant=negative]:focus:text-negative",
        "data-[variant=negative]:hover:text-negative",
        "data-[variant=negative]:*:[svg]:!text-negative",
        "[&_svg:not([class*='text-'])]:text-muted-foreground",
        "relative",
        "flex",
        "cursor-default",
        "items-center",
        "gap-2",
        "rounded-sm",
        "px-2",
        "py-1.5",
        "text-sm",
        "outline-hidden",
        "select-none",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-50",
        "data-[inset=true]:pl-8",
        "[&_svg]:pointer-events-none",
        "[&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4"
      );
      el.setAttribute("role", "menuitem");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("data-slot", "menu-item");
      const menu = Alpine2.findClosest(el.parentElement, (parent) => parent.getAttribute("role") === "menu");
      function focusOut(event) {
        el.setAttribute("tabindex", "-1");
        if (event.type === "mouseleave") menu.focus();
      }
      function focusIn() {
        el.setAttribute("tabindex", "0");
        el.addEventListener("blur", focusOut);
        el.addEventListener("mouseleave", focusOut);
      }
      el.addEventListener("mouseenter", focusIn);
      el.addEventListener("focus", focusIn);
      cleanup(() => {
        el.removeEventListener("mouseenter", focusIn);
        el.removeEventListener("focus", focusIn);
        el.removeEventListener("blur", focusOut);
        el.removeEventListener("mouseleave", focusOut);
      });
    });
    Alpine.directive("h-menu-sub", (el, {}, { cleanup, Alpine: Alpine2 }) => {
      el.classList.add(
        "focus:bg-secondary-hover",
        "hover:bg-secondary-hover",
        "aria-expanded:bg-secondary-hover",
        "[&_svg:not([class*='text-'])]:text-muted-foreground",
        "relative",
        "flex",
        "cursor-default",
        "items-center",
        "gap-2",
        "rounded-sm",
        "px-2",
        "py-1.5",
        "text-sm",
        "outline-hidden",
        "select-none",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-50",
        "data-[inset=true]:pl-8",
        "[&_svg]:pointer-events-none",
        "[&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4",
        "after:block",
        "after:bg-transparent",
        "after:border-t-[0.063rem]",
        "after:border-r-[0.063rem]",
        "after:border-muted-foreground",
        "after:pointer-events-none",
        "after:size-[0.438rem]",
        "after:rounded-[0.063rem]",
        "after:rotate-45",
        "after:ml-auto",
        "after:-translate-x-0.75"
      );
      el.setAttribute("role", "menuitem");
      el.setAttribute("aria-haspopup", "true");
      el.setAttribute("aria-expanded", "false");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("data-slot", "menu-sub");
      const parentMenu = Alpine2.findClosest(el.parentElement, (parent) => parent.getAttribute("role") === "menu");
      if (!parentMenu) throw new Error("h-menu-sub: Menu sub item must have a parent");
      el._menu_sub = {
        open: void 0,
        close: void 0,
        expanded: false,
        closeTree() {
          el.setAttribute("aria-expanded", "false");
          this.expanded = false;
          el.removeEventListener("keydown", onKeydown);
          parentMenu.pauseKeyEvents = false;
          parentMenu._menu.close(true);
        }
      };
      const keyEvents = ["Right", "ArrowRight", "Enter", " "];
      function onKeydown(event) {
        if (keyEvents.includes(event.key)) {
          event.stopPropagation();
          event.preventDefault();
          el.removeEventListener("keydown", onKeydown);
          const submenuitem = el.querySelector('[role^=menuitem][tabIndex="-1"]:first-of-type');
          if (submenuitem) {
            el.setAttribute("aria-expanded", "true");
            el._menu_sub.open(el);
            parentMenu.pauseKeyEvents = true;
            Alpine2.nextTick(() => {
              submenuitem.focus();
              el._menu_sub.expanded = true;
            });
          }
        }
      }
      function focusOut(event) {
        el.setAttribute("tabindex", "-1");
        if (event.type === "mouseleave") {
          el._menu_sub.close();
          el._menu_sub.expanded = false;
          parentMenu.pauseKeyEvents = false;
          el.setAttribute("aria-expanded", "false");
          parentMenu.focus();
        } else if (el._menu_sub.expanded) {
          el.setAttribute("aria-expanded", "false");
          el._menu_sub.close();
          el._menu_sub.expanded = false;
          parentMenu.pauseKeyEvents = false;
          el.removeEventListener("keydown", onKeydown);
        }
      }
      function focusIn(event) {
        el.setAttribute("tabindex", "0");
        if (event.type === "mouseenter") {
          el.setAttribute("aria-expanded", "true");
          el.addEventListener("mouseleave", focusOut);
          el._menu_sub.open(el);
          el._menu_sub.expanded = true;
        } else {
          if (el._menu_sub.expanded) {
            el.setAttribute("aria-expanded", "false");
            el._menu_sub.expanded = false;
            parentMenu.pauseKeyEvents = false;
          }
          el.addEventListener("keydown", onKeydown);
          el.addEventListener("blur", focusOut);
        }
      }
      el.addEventListener("mouseenter", focusIn);
      el.addEventListener("focus", focusIn);
      cleanup(() => {
        el.removeEventListener("mouseenter", focusIn);
        el.removeEventListener("focus", focusIn);
        el.removeEventListener("blur", focusOut);
        el.removeEventListener("mouseleave", focusOut);
      });
    });
    Alpine.directive("h-menu-item-secondary", (el) => {
      el.classList.add("text-muted-foreground", "ml-auto", "text-xs", "tracking-widest");
      el.setAttribute("data-slot", "menu-item-secondary");
    });
    Alpine.directive("h-menu-separator", (el) => {
      el.classList.add("bg-border", "-mx-1", "my-1", "h-px");
      el.setAttribute("role", "presentation");
      el.setAttribute("data-slot", "menu-separator");
    });
    Alpine.directive("h-menu-label", (el) => {
      el.classList.add("text-foreground", "px-2", "py-1.5", "text-sm", "font-semibold", "text-left", "data-[inset=true]:pl-8");
      el.setAttribute("data-slot", "menu-label");
    });
    Alpine.directive("h-menu-checkbox-item", (el, {}, { cleanup, Alpine: Alpine2 }) => {
      el.classList.add(
        "focus:bg-secondary-hover",
        "hover:bg-secondary-hover",
        "relative",
        "flex",
        "cursor-default",
        "items-center",
        "gap-2",
        "rounded-sm",
        "pr-2",
        "pl-3.5",
        "py-1.5",
        "text-sm",
        "outline-hidden",
        "select-none",
        "aria-[disabled=true]:pointer-events-none",
        "aria-[disabled=true]:cursor-not-allowed",
        "aria-[disabled=true]:opacity-50",
        "transition-all",
        "overflow-hidden",
        "before:invisible",
        "before:bg-transparent",
        "before:border-l-2",
        "before:border-b-2",
        "before:border-foreground",
        "before:pointer-events-none",
        "before:w-2.5",
        "before:h-1.5",
        "before:rounded-[0.125rem]",
        "before:-rotate-45",
        "before:-translate-x-0.75",
        "aria-[checked=true]:before:visible"
      );
      el.setAttribute("tabindex", "-1");
      el.setAttribute("role", "menuitemcheckbox");
      el.setAttribute("data-slot", "menu-checkbox-item");
      function setState(checked, dispatch = true) {
        el.setAttribute("aria-checked", checked);
        if (dispatch)
          setTimeout(() => {
            el.dispatchEvent(new Event("change", { bubbles: true }));
          }, 0);
      }
      if (el.hasOwnProperty("_x_model")) {
        let handler2 = function(event) {
          if (event.type === "keydown") {
            if (event.key !== " " && event.key !== "Enter") {
              return;
            } else if (event.key === " ") {
              event.preventDefault();
            }
          }
          el._x_model.set(!el._x_model.get());
          setState(el._x_model.get());
        };
        setState(el._x_model.get(), false);
        el.addEventListener("click", handler2);
        el.addEventListener("keydown", handler2);
      }
      const menu = Alpine2.findClosest(el.parentElement, (parent) => parent.getAttribute("role") === "menu");
      function focusOut(event) {
        el.setAttribute("tabindex", "-1");
        if (event.type === "mouseleave") menu.focus();
      }
      function focusIn() {
        el.setAttribute("tabindex", "0");
        el.addEventListener("blur", focusOut);
        el.addEventListener("mouseleave", focusOut);
      }
      el.addEventListener("mouseenter", focusIn);
      el.addEventListener("focus", focusIn);
      cleanup(() => {
        if (el.hasOwnProperty("_x_model")) {
          el.removeEventListener("click", handler);
          el.removeEventListener("keydown", handler);
        }
        el.removeEventListener("mouseenter", focusIn);
        el.removeEventListener("focus", focusIn);
        el.removeEventListener("blur", focusOut);
        el.removeEventListener("mouseleave", focusOut);
      });
    });
    Alpine.directive("h-menu-radio-item", (el, { expression }, { effect, evaluateLater, cleanup, Alpine: Alpine2 }) => {
      el.classList.add(
        "focus:bg-secondary-hover",
        "hover:bg-secondary-hover",
        "relative",
        "flex",
        "cursor-default",
        "items-center",
        "gap-2",
        "rounded-sm",
        "pr-2",
        "pl-3.5",
        "py-1.5",
        "text-sm",
        "outline-hidden",
        "select-none",
        "aria-[disabled=true]:pointer-events-none",
        "aria-[disabled=true]:cursor-not-allowed",
        "aria-[disabled=true]:opacity-50",
        "transition-all",
        "overflow-hidden",
        "before:invisible",
        "before:bg-foreground",
        "before:pointer-events-none",
        "before:size-2",
        "before:rounded-full",
        "before:-translate-x-0.75",
        "aria-[checked=true]:before:visible"
      );
      el.setAttribute("tabindex", "-1");
      el.setAttribute("type", "radio");
      el.setAttribute("role", "menuitemradio");
      el.setAttribute("data-slot", "menu-radio-item");
      const getValue = evaluateLater(expression);
      let value;
      effect(() => {
        getValue((val) => value = val);
      });
      function setState(checked, dispatch = true) {
        el.setAttribute("aria-checked", checked);
        if (dispatch) el.dispatchEvent(new Event("change", { bubbles: true }));
      }
      if (el.hasOwnProperty("_x_model")) {
        let handler2 = function(event) {
          if (event.type === "keydown") {
            if (event.key !== " " && event.key !== "Enter") {
              return;
            } else if (event.key === " ") {
              event.preventDefault();
            }
          }
          if (el._x_model.get() !== value) {
            el._x_model.set(value);
          }
        };
        effect(() => {
          setState(el._x_model.get() === value);
        });
        el.addEventListener("click", handler2);
        el.addEventListener("keydown", handler2);
      }
      const menu = Alpine2.findClosest(el.parentElement, (parent) => parent.getAttribute("role") === "menu");
      function focusOut(event) {
        el.setAttribute("tabindex", "-1");
        if (event.type === "mouseleave") menu.focus();
      }
      function focusIn() {
        el.setAttribute("tabindex", "0");
        el.addEventListener("blur", focusOut);
        el.addEventListener("mouseleave", focusOut);
      }
      el.addEventListener("mouseenter", focusIn);
      el.addEventListener("focus", focusIn);
      cleanup(() => {
        if (el.hasOwnProperty("_x_model")) {
          el.removeEventListener("click", handler);
          el.removeEventListener("keydown", handler);
        }
        el.removeEventListener("mouseenter", focusIn);
        el.removeEventListener("focus", focusIn);
        el.removeEventListener("blur", focusOut);
        el.removeEventListener("mouseleave", focusOut);
      });
    });
  }

  // src/components/toolbar.js
  function toolbar_default(Alpine) {
    Alpine.directive("h-toolbar", (el, { modifiers }) => {
      el.classList.add(
        "bg-object-header",
        "text-object-header-foreground",
        "hbox",
        "shrink-0",
        "items-center",
        "px-2",
        "gap-1",
        modifiers.includes("footer") ? "border-t" : "border-b",
        "w-full",
        "h-11",
        "data-[size=sm]:h-8",
        "data-[variant=transparent]:bg-transparent",
        "data-[variant=transparent]:text-foreground"
      );
      el.setAttribute("data-slot", "toolbar");
    });
    Alpine.directive("h-toolbar-image", (el) => {
      el.classList.add("size-8", "[[data-size=sm]_&]:size-6");
      el.setAttribute("data-slot", "toolbar-image");
    });
    Alpine.directive("h-toolbar-title", (el) => {
      el.classList.add("text", "[[data-size=sm]_&]:text-sm", "font-medium", "whitespace-nowrap", "text-ellipsis", "overflow-hidden");
      el.setAttribute("data-slot", "toolbar-title");
    });
    Alpine.directive("h-toolbar-spacer", (el) => {
      el.classList.add("flex-[1_auto]", "h-full");
      el.setAttribute("data-slot", "toolbar-spacer");
    });
    Alpine.directive("h-toolbar-separator", (el) => {
      el.classList.add("w-px", "h-8", "[[data-size=sm]_&]:h-6", "border-l");
      el.setAttribute("data-slot", "toolbar-separator");
    });
  }

  // src/utils/theme.js
  var colorSchemeKey = "codbex.harmonia.colorMode";
  var savedScheme = localStorage.getItem(colorSchemeKey);
  var colorSchemeChange = (event) => {
    if (event.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  var initColorScheme = () => {
    if (savedScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedScheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      }
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", colorSchemeChange);
    }
  };
  var setColorScheme = (mode) => {
    if (mode === "dark") {
      localStorage.setItem(colorSchemeKey, "dark");
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", colorSchemeChange);
    } else if (mode === "light") {
      localStorage.setItem(colorSchemeKey, "light");
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", colorSchemeChange);
    } else {
      localStorage.setItem(colorSchemeKey, "auto");
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", colorSchemeChange);
    }
  };
  initColorScheme();

  // src/index.js
  window.Harmonia = { setColorScheme };
  document.addEventListener("alpine:init", () => {
    window.Alpine.plugin(accordion_default);
    window.Alpine.plugin(button_default);
    window.Alpine.plugin(input_default);
    window.Alpine.plugin(card_default);
    window.Alpine.plugin(label_default);
    window.Alpine.plugin(textarea_default);
    window.Alpine.plugin(checkbox_default);
    window.Alpine.plugin(popover_default);
    window.Alpine.plugin(avatar_default);
    window.Alpine.plugin(badge_default);
    window.Alpine.plugin(select_default);
    window.Alpine.plugin(alert_default);
    window.Alpine.plugin(radio_default);
    window.Alpine.plugin(range_default);
    window.Alpine.plugin(switch_default);
    window.Alpine.plugin(sidebar_default);
    window.Alpine.plugin(separator_default);
    window.Alpine.plugin(skeleton_default);
    window.Alpine.plugin(collapsible_default);
    window.Alpine.plugin(tile_default);
    window.Alpine.plugin(tag_default);
    window.Alpine.plugin(icon_default);
    window.Alpine.plugin(info_page_default);
    window.Alpine.plugin(spinner_default);
    window.Alpine.plugin(fieldset_default);
    window.Alpine.plugin(tooltip_default);
    window.Alpine.plugin(progress_default);
    window.Alpine.plugin(pagination_default);
    window.Alpine.plugin(tabs_default);
    window.Alpine.plugin(text_default);
    window.Alpine.plugin(dialog_default);
    window.Alpine.plugin(table_default);
    window.Alpine.plugin(menu_default);
    window.Alpine.plugin(toolbar_default);
  });
})();
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/createElement.js:
lucide/dist/esm/icons/check.js:
lucide/dist/esm/icons/chevron-down.js:
lucide/dist/esm/icons/search.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.544.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
