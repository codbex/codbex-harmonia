var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/lucide/dist/cjs/lucide.js
var require_lucide = __commonJS({
  "node_modules/lucide/dist/cjs/lucide.js"(exports) {
    "use strict";
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
    var createElement3 = (iconNode, customAttrs = {}) => {
      const tag = "svg";
      const attrs = {
        ...defaultAttributes,
        ...customAttrs
      };
      return createSVGElement([tag, attrs, iconNode]);
    };
    var getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
      attrs[attr.name] = attr.value;
      return attrs;
    }, {});
    var getClassNames = (attrs) => {
      if (typeof attrs === "string") return attrs;
      if (!attrs || !attrs.class) return "";
      if (attrs.class && typeof attrs.class === "string") {
        return attrs.class.split(" ");
      }
      if (attrs.class && Array.isArray(attrs.class)) {
        return attrs.class;
      }
      return "";
    };
    var combineClassNames = (arrayOfClassnames) => {
      const classNameArray = arrayOfClassnames.flatMap(getClassNames);
      return classNameArray.map((classItem) => classItem.trim()).filter(Boolean).filter((value, index, self2) => self2.indexOf(value) === index).join(" ");
    };
    var toPascalCase = (string) => string.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
    var replaceElement = (element, { nameAttr, icons, attrs }) => {
      const iconName = element.getAttribute(nameAttr);
      if (iconName == null) return;
      const ComponentName = toPascalCase(iconName);
      const iconNode = icons[ComponentName];
      if (!iconNode) {
        return console.warn(
          `${element.outerHTML} icon name was not found in the provided icons object.`
        );
      }
      const elementAttrs = getAttrs(element);
      const iconAttrs = {
        ...defaultAttributes,
        "data-lucide": iconName,
        ...attrs,
        ...elementAttrs
      };
      const classNames = combineClassNames(["lucide", `lucide-${iconName}`, elementAttrs, attrs]);
      if (classNames) {
        Object.assign(iconAttrs, {
          class: classNames
        });
      }
      const svgElement = createElement3(iconNode, iconAttrs);
      return element.parentNode?.replaceChild(svgElement, element);
    };
    var AArrowDown = [
      ["path", { d: "m14 12 4 4 4-4" }],
      ["path", { d: "M18 16V7" }],
      ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }],
      ["path", { d: "M3.304 13h6.392" }]
    ];
    var AArrowUp = [
      ["path", { d: "m14 11 4-4 4 4" }],
      ["path", { d: "M18 16V7" }],
      ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }],
      ["path", { d: "M3.304 13h6.392" }]
    ];
    var ALargeSmall = [
      ["path", { d: "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" }],
      ["path", { d: "M15.697 14h5.606" }],
      ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }],
      ["path", { d: "M3.304 13h6.392" }]
    ];
    var Accessibility = [
      ["circle", { cx: "16", cy: "4", r: "1" }],
      ["path", { d: "m18 19 1-7-6 1" }],
      ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5" }],
      ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6" }],
      ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6" }]
    ];
    var Activity = [
      [
        "path",
        {
          d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
        }
      ]
    ];
    var AirVent = [
      ["path", { d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12" }],
      ["path", { d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M6 8h12" }],
      ["path", { d: "M6.6 15.572A2 2 0 1 0 10 17v-5" }]
    ];
    var Airplay = [
      ["path", { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }],
      ["path", { d: "m12 15 5 6H7Z" }]
    ];
    var AlarmClockCheck = [
      ["circle", { cx: "12", cy: "13", r: "8" }],
      ["path", { d: "M5 3 2 6" }],
      ["path", { d: "m22 6-3-3" }],
      ["path", { d: "M6.38 18.7 4 21" }],
      ["path", { d: "M17.64 18.67 20 21" }],
      ["path", { d: "m9 13 2 2 4-4" }]
    ];
    var AlarmClockMinus = [
      ["circle", { cx: "12", cy: "13", r: "8" }],
      ["path", { d: "M5 3 2 6" }],
      ["path", { d: "m22 6-3-3" }],
      ["path", { d: "M6.38 18.7 4 21" }],
      ["path", { d: "M17.64 18.67 20 21" }],
      ["path", { d: "M9 13h6" }]
    ];
    var AlarmClockOff = [
      ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26" }],
      ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15" }],
      ["path", { d: "m22 6-3-3" }],
      ["path", { d: "M6.26 18.67 4 21" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M4 4 2 6" }]
    ];
    var AlarmClockPlus = [
      ["circle", { cx: "12", cy: "13", r: "8" }],
      ["path", { d: "M5 3 2 6" }],
      ["path", { d: "m22 6-3-3" }],
      ["path", { d: "M6.38 18.7 4 21" }],
      ["path", { d: "M17.64 18.67 20 21" }],
      ["path", { d: "M12 10v6" }],
      ["path", { d: "M9 13h6" }]
    ];
    var AlarmClock = [
      ["circle", { cx: "12", cy: "13", r: "8" }],
      ["path", { d: "M12 9v4l2 2" }],
      ["path", { d: "M5 3 2 6" }],
      ["path", { d: "m22 6-3-3" }],
      ["path", { d: "M6.38 18.7 4 21" }],
      ["path", { d: "M17.64 18.67 20 21" }]
    ];
    var AlarmSmoke = [
      ["path", { d: "M11 21c0-2.5 2-2.5 2-5" }],
      ["path", { d: "M16 21c0-2.5 2-2.5 2-5" }],
      ["path", { d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" }],
      ["path", { d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" }],
      ["path", { d: "M6 21c0-2.5 2-2.5 2-5" }]
    ];
    var Album = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["polyline", { points: "11 3 11 11 14 8 17 11 17 3" }]
    ];
    var AlignCenterHorizontal = [
      ["path", { d: "M2 12h20" }],
      ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }],
      ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }],
      ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" }]
    ];
    var AlignCenterVertical = [
      ["path", { d: "M12 2v20" }],
      ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }],
      ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }],
      ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }],
      ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }]
    ];
    var AlignEndHorizontal = [
      ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2" }],
      ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2" }],
      ["path", { d: "M22 22H2" }]
    ];
    var AlignEndVertical = [
      ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2" }],
      ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2" }],
      ["path", { d: "M22 22V2" }]
    ];
    var AlignHorizontalDistributeCenter = [
      ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
      ["path", { d: "M17 22v-5" }],
      ["path", { d: "M17 7V2" }],
      ["path", { d: "M7 22v-3" }],
      ["path", { d: "M7 5V2" }]
    ];
    var AlignHorizontalDistributeEnd = [
      ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
      ["path", { d: "M10 2v20" }],
      ["path", { d: "M20 2v20" }]
    ];
    var AlignHorizontalDistributeStart = [
      ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
      ["path", { d: "M4 2v20" }],
      ["path", { d: "M14 2v20" }]
    ];
    var AlignHorizontalJustifyCenter = [
      ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }],
      ["path", { d: "M12 2v20" }]
    ];
    var AlignHorizontalJustifyEnd = [
      ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2" }],
      ["path", { d: "M22 2v20" }]
    ];
    var AlignHorizontalJustifyStart = [
      ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }],
      ["path", { d: "M2 2v20" }]
    ];
    var AlignHorizontalSpaceAround = [
      ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2" }],
      ["path", { d: "M4 22V2" }],
      ["path", { d: "M20 22V2" }]
    ];
    var AlignHorizontalSpaceBetween = [
      ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2" }],
      ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2" }],
      ["path", { d: "M3 2v20" }],
      ["path", { d: "M21 2v20" }]
    ];
    var AlignStartHorizontal = [
      ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2" }],
      ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2" }],
      ["path", { d: "M22 2H2" }]
    ];
    var AlignStartVertical = [
      ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2" }],
      ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2" }],
      ["path", { d: "M2 2v20" }]
    ];
    var AlignVerticalDistributeCenter = [
      ["path", { d: "M22 17h-3" }],
      ["path", { d: "M22 7h-5" }],
      ["path", { d: "M5 17H2" }],
      ["path", { d: "M7 7H2" }],
      ["rect", { x: "5", y: "14", width: "14", height: "6", rx: "2" }],
      ["rect", { x: "7", y: "4", width: "10", height: "6", rx: "2" }]
    ];
    var AlignVerticalDistributeEnd = [
      ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
      ["path", { d: "M2 20h20" }],
      ["path", { d: "M2 10h20" }]
    ];
    var AlignVerticalDistributeStart = [
      ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
      ["path", { d: "M2 14h20" }],
      ["path", { d: "M2 4h20" }]
    ];
    var AlignVerticalJustifyCenter = [
      ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }],
      ["path", { d: "M2 12h20" }]
    ];
    var AlignVerticalJustifyEnd = [
      ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }],
      ["path", { d: "M2 22h20" }]
    ];
    var AlignVerticalJustifyStart = [
      ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2" }],
      ["path", { d: "M2 2h20" }]
    ];
    var AlignVerticalSpaceAround = [
      ["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2" }],
      ["path", { d: "M22 20H2" }],
      ["path", { d: "M22 4H2" }]
    ];
    var AlignVerticalSpaceBetween = [
      ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2" }],
      ["path", { d: "M2 21h20" }],
      ["path", { d: "M2 3h20" }]
    ];
    var Ambulance = [
      ["path", { d: "M10 10H6" }],
      ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }],
      [
        "path",
        {
          d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
        }
      ],
      ["path", { d: "M8 8v4" }],
      ["path", { d: "M9 18h6" }],
      ["circle", { cx: "17", cy: "18", r: "2" }],
      ["circle", { cx: "7", cy: "18", r: "2" }]
    ];
    var Ampersand = [
      [
        "path",
        {
          d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
        }
      ],
      ["path", { d: "M16 12h3" }]
    ];
    var Ampersands = [
      [
        "path",
        { d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }
      ],
      [
        "path",
        { d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }
      ]
    ];
    var Amphora = [
      ["path", { d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" }],
      ["path", { d: "M10 5H8a2 2 0 0 0 0 4h.68" }],
      ["path", { d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" }],
      ["path", { d: "M14 5h2a2 2 0 0 1 0 4h-.68" }],
      ["path", { d: "M18 22H6" }],
      ["path", { d: "M9 2h6" }]
    ];
    var Anchor = [
      ["path", { d: "M12 22V8" }],
      ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3" }],
      ["circle", { cx: "12", cy: "5", r: "3" }]
    ];
    var Angry = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }],
      ["path", { d: "M7.5 8 10 9" }],
      ["path", { d: "m14 9 2.5-1" }],
      ["path", { d: "M9 10h.01" }],
      ["path", { d: "M15 10h.01" }]
    ];
    var Annoyed = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M8 15h8" }],
      ["path", { d: "M8 9h2" }],
      ["path", { d: "M14 9h2" }]
    ];
    var Antenna = [
      ["path", { d: "M2 12 7 2" }],
      ["path", { d: "m7 12 5-10" }],
      ["path", { d: "m12 12 5-10" }],
      ["path", { d: "m17 12 5-10" }],
      ["path", { d: "M4.5 7h15" }],
      ["path", { d: "M12 16v6" }]
    ];
    var Anvil = [
      ["path", { d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" }],
      ["path", { d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" }],
      ["path", { d: "M9 12v5" }],
      ["path", { d: "M15 12v5" }],
      ["path", { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" }]
    ];
    var Aperture = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m14.31 8 5.74 9.94" }],
      ["path", { d: "M9.69 8h11.48" }],
      ["path", { d: "m7.38 12 5.74-9.94" }],
      ["path", { d: "M9.69 16 3.95 6.06" }],
      ["path", { d: "M14.31 16H2.83" }],
      ["path", { d: "m16.62 12-5.74 9.94" }]
    ];
    var AppWindowMac = [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M6 8h.01" }],
      ["path", { d: "M10 8h.01" }],
      ["path", { d: "M14 8h.01" }]
    ];
    var AppWindow = [
      ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }],
      ["path", { d: "M10 4v4" }],
      ["path", { d: "M2 8h20" }],
      ["path", { d: "M6 4v4" }]
    ];
    var Apple = [
      ["path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0" }],
      [
        "path",
        {
          d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"
        }
      ]
    ];
    var ArchiveRestore = [
      ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
      ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2" }],
      ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "m9 15 3-3 3 3" }],
      ["path", { d: "M12 12v9" }]
    ];
    var ArchiveX = [
      ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
      ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
      ["path", { d: "m9.5 17 5-5" }],
      ["path", { d: "m9.5 12 5 5" }]
    ];
    var Armchair = [
      ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }],
      [
        "path",
        {
          d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
        }
      ],
      ["path", { d: "M5 18v2" }],
      ["path", { d: "M19 18v2" }]
    ];
    var Archive = [
      ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
      ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
      ["path", { d: "M10 12h4" }]
    ];
    var ArrowBigDownDash = [
      [
        "path",
        {
          d: "M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M9 4h6" }]
    ];
    var ArrowBigDown = [
      [
        "path",
        {
          d: "M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"
        }
      ]
    ];
    var ArrowBigLeftDash = [
      [
        "path",
        {
          d: "M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"
        }
      ],
      ["path", { d: "M20 9v6" }]
    ];
    var ArrowBigLeft = [
      [
        "path",
        {
          d: "M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"
        }
      ]
    ];
    var ArrowBigRightDash = [
      [
        "path",
        {
          d: "M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"
        }
      ],
      ["path", { d: "M4 9v6" }]
    ];
    var ArrowBigRight = [
      [
        "path",
        {
          d: "M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"
        }
      ]
    ];
    var ArrowBigUpDash = [
      [
        "path",
        {
          d: "M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"
        }
      ],
      ["path", { d: "M9 20h6" }]
    ];
    var ArrowBigUp = [
      [
        "path",
        {
          d: "M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"
        }
      ]
    ];
    var ArrowDown01 = [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }],
      ["path", { d: "M17 20v-6h-2" }],
      ["path", { d: "M15 20h4" }]
    ];
    var ArrowDown10 = [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["path", { d: "M17 10V4h-2" }],
      ["path", { d: "M15 10h4" }],
      ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]
    ];
    var ArrowDownAZ = [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["path", { d: "M20 8h-5" }],
      ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }],
      ["path", { d: "M15 14h5l-5 6h5" }]
    ];
    var ArrowDownFromLine = [
      ["path", { d: "M19 3H5" }],
      ["path", { d: "M12 21V7" }],
      ["path", { d: "m6 15 6 6 6-6" }]
    ];
    var ArrowDownNarrowWide = [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["path", { d: "M11 4h4" }],
      ["path", { d: "M11 8h7" }],
      ["path", { d: "M11 12h10" }]
    ];
    var ArrowDownLeft = [
      ["path", { d: "M17 7 7 17" }],
      ["path", { d: "M17 17H7V7" }]
    ];
    var ArrowDownRight = [
      ["path", { d: "m7 7 10 10" }],
      ["path", { d: "M17 7v10H7" }]
    ];
    var ArrowDownToDot = [
      ["path", { d: "M12 2v14" }],
      ["path", { d: "m19 9-7 7-7-7" }],
      ["circle", { cx: "12", cy: "21", r: "1" }]
    ];
    var ArrowDownToLine = [
      ["path", { d: "M12 17V3" }],
      ["path", { d: "m6 11 6 6 6-6" }],
      ["path", { d: "M19 21H5" }]
    ];
    var ArrowDownUp = [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["path", { d: "m21 8-4-4-4 4" }],
      ["path", { d: "M17 4v16" }]
    ];
    var ArrowDownWideNarrow = [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 20V4" }],
      ["path", { d: "M11 4h10" }],
      ["path", { d: "M11 8h7" }],
      ["path", { d: "M11 12h4" }]
    ];
    var ArrowDown = [
      ["path", { d: "M12 5v14" }],
      ["path", { d: "m19 12-7 7-7-7" }]
    ];
    var ArrowDownZA = [
      ["path", { d: "m3 16 4 4 4-4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M15 4h5l-5 6h5" }],
      ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }],
      ["path", { d: "M20 18h-5" }]
    ];
    var ArrowLeftFromLine = [
      ["path", { d: "m9 6-6 6 6 6" }],
      ["path", { d: "M3 12h14" }],
      ["path", { d: "M21 19V5" }]
    ];
    var ArrowLeftRight = [
      ["path", { d: "M8 3 4 7l4 4" }],
      ["path", { d: "M4 7h16" }],
      ["path", { d: "m16 21 4-4-4-4" }],
      ["path", { d: "M20 17H4" }]
    ];
    var ArrowLeftToLine = [
      ["path", { d: "M3 19V5" }],
      ["path", { d: "m13 6-6 6 6 6" }],
      ["path", { d: "M7 12h14" }]
    ];
    var ArrowLeft = [
      ["path", { d: "m12 19-7-7 7-7" }],
      ["path", { d: "M19 12H5" }]
    ];
    var ArrowRightFromLine = [
      ["path", { d: "M3 5v14" }],
      ["path", { d: "M21 12H7" }],
      ["path", { d: "m15 18 6-6-6-6" }]
    ];
    var ArrowRightLeft = [
      ["path", { d: "m16 3 4 4-4 4" }],
      ["path", { d: "M20 7H4" }],
      ["path", { d: "m8 21-4-4 4-4" }],
      ["path", { d: "M4 17h16" }]
    ];
    var ArrowRightToLine = [
      ["path", { d: "M17 12H3" }],
      ["path", { d: "m11 18 6-6-6-6" }],
      ["path", { d: "M21 5v14" }]
    ];
    var ArrowRight = [
      ["path", { d: "M5 12h14" }],
      ["path", { d: "m12 5 7 7-7 7" }]
    ];
    var ArrowUp01 = [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }],
      ["path", { d: "M17 20v-6h-2" }],
      ["path", { d: "M15 20h4" }]
    ];
    var ArrowUp10 = [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M17 10V4h-2" }],
      ["path", { d: "M15 10h4" }],
      ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]
    ];
    var ArrowUpAZ = [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M20 8h-5" }],
      ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }],
      ["path", { d: "M15 14h5l-5 6h5" }]
    ];
    var ArrowUpDown = [
      ["path", { d: "m21 16-4 4-4-4" }],
      ["path", { d: "M17 20V4" }],
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }]
    ];
    var ArrowUpFromDot = [
      ["path", { d: "m5 9 7-7 7 7" }],
      ["path", { d: "M12 16V2" }],
      ["circle", { cx: "12", cy: "21", r: "1" }]
    ];
    var ArrowUpFromLine = [
      ["path", { d: "m18 9-6-6-6 6" }],
      ["path", { d: "M12 3v14" }],
      ["path", { d: "M5 21h14" }]
    ];
    var ArrowUpLeft = [
      ["path", { d: "M7 17V7h10" }],
      ["path", { d: "M17 17 7 7" }]
    ];
    var ArrowUpNarrowWide = [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M11 12h4" }],
      ["path", { d: "M11 16h7" }],
      ["path", { d: "M11 20h10" }]
    ];
    var ArrowUpRight = [
      ["path", { d: "M7 7h10v10" }],
      ["path", { d: "M7 17 17 7" }]
    ];
    var ArrowUpToLine = [
      ["path", { d: "M5 3h14" }],
      ["path", { d: "m18 13-6-6-6 6" }],
      ["path", { d: "M12 7v14" }]
    ];
    var ArrowUpWideNarrow = [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M11 12h10" }],
      ["path", { d: "M11 16h7" }],
      ["path", { d: "M11 20h4" }]
    ];
    var ArrowUpZA = [
      ["path", { d: "m3 8 4-4 4 4" }],
      ["path", { d: "M7 4v16" }],
      ["path", { d: "M15 4h5l-5 6h5" }],
      ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }],
      ["path", { d: "M20 18h-5" }]
    ];
    var ArrowUp = [
      ["path", { d: "m5 12 7-7 7 7" }],
      ["path", { d: "M12 19V5" }]
    ];
    var ArrowsUpFromLine = [
      ["path", { d: "m4 6 3-3 3 3" }],
      ["path", { d: "M7 17V3" }],
      ["path", { d: "m14 6 3-3 3 3" }],
      ["path", { d: "M17 17V3" }],
      ["path", { d: "M4 21h16" }]
    ];
    var Asterisk = [
      ["path", { d: "M12 6v12" }],
      ["path", { d: "M17.196 9 6.804 15" }],
      ["path", { d: "m6.804 9 10.392 6" }]
    ];
    var AtSign = [
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]
    ];
    var Atom = [
      ["circle", { cx: "12", cy: "12", r: "1" }],
      [
        "path",
        {
          d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
        }
      ],
      [
        "path",
        {
          d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
        }
      ]
    ];
    var AudioLines = [
      ["path", { d: "M2 10v3" }],
      ["path", { d: "M6 6v11" }],
      ["path", { d: "M10 3v18" }],
      ["path", { d: "M14 8v7" }],
      ["path", { d: "M18 5v13" }],
      ["path", { d: "M22 10v3" }]
    ];
    var Award = [
      [
        "path",
        {
          d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
        }
      ],
      ["circle", { cx: "12", cy: "8", r: "6" }]
    ];
    var AudioWaveform = [
      [
        "path",
        {
          d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
        }
      ]
    ];
    var Axe = [
      ["path", { d: "m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9" }],
      [
        "path",
        {
          d: "M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z"
        }
      ]
    ];
    var Axis3d = [
      ["path", { d: "M13.5 10.5 15 9" }],
      ["path", { d: "M4 4v15a1 1 0 0 0 1 1h15" }],
      ["path", { d: "M4.293 19.707 6 18" }],
      ["path", { d: "m9 15 1.5-1.5" }]
    ];
    var Baby = [
      ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }],
      ["path", { d: "M15 12h.01" }],
      [
        "path",
        {
          d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
        }
      ],
      ["path", { d: "M9 12h.01" }]
    ];
    var Backpack = [
      ["path", { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }],
      ["path", { d: "M8 10h8" }],
      ["path", { d: "M8 18h8" }],
      ["path", { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" }],
      ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }]
    ];
    var BadgeAlert = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
    ];
    var BadgeCheck = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4" }]
    ];
    var BadgeDollarSign = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
      ["path", { d: "M12 18V6" }]
    ];
    var BadgeCent = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M12 7v10" }],
      ["path", { d: "M15.4 10a4 4 0 1 0 0 4" }]
    ];
    var BadgeEuro = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M7 12h5" }],
      ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]
    ];
    var BadgeIndianRupee = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M8 8h8" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8" }]
    ];
    var BadgeInfo = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "16", y2: "12" }],
      ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8" }]
    ];
    var BadgeJapaneseYen = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "m9 8 3 3v7" }],
      ["path", { d: "m12 11 3-3" }],
      ["path", { d: "M9 12h6" }],
      ["path", { d: "M9 16h6" }]
    ];
    var BadgeMinus = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
    ];
    var BadgePercent = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "M9 9h.01" }],
      ["path", { d: "M15 15h.01" }]
    ];
    var BadgePlus = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "16" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
    ];
    var BadgeQuestionMark = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
      ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17" }]
    ];
    var BadgePoundSterling = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M8 12h4" }],
      ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0" }],
      ["path", { d: "M8 16h7" }]
    ];
    var BadgeRussianRuble = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M9 16h5" }],
      ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9" }]
    ];
    var BadgeSwissFranc = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { d: "M11 17V8h4" }],
      ["path", { d: "M11 12h3" }],
      ["path", { d: "M9 16h4" }]
    ];
    var BadgeTurkishLira = [
      ["path", { d: "M11 7v10a5 5 0 0 0 5-5" }],
      ["path", { d: "m15 8-6 3" }],
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"
        }
      ]
    ];
    var BadgeX = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }],
      ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]
    ];
    var Badge = [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ]
    ];
    var BaggageClaim = [
      ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }],
      ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }],
      ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1" }],
      ["circle", { cx: "18", cy: "20", r: "2" }],
      ["circle", { cx: "9", cy: "20", r: "2" }]
    ];
    var Ban = [
      ["path", { d: "M4.929 4.929 19.07 19.071" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Banana = [
      ["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" }],
      [
        "path",
        {
          d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
        }
      ]
    ];
    var Bandage = [
      ["path", { d: "M10 10.01h.01" }],
      ["path", { d: "M10 14.01h.01" }],
      ["path", { d: "M14 10.01h.01" }],
      ["path", { d: "M14 14.01h.01" }],
      ["path", { d: "M18 6v11.5" }],
      ["path", { d: "M6 6v12" }],
      ["rect", { x: "2", y: "6", width: "20", height: "12", rx: "2" }]
    ];
    var BanknoteArrowDown = [
      ["path", { d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }],
      ["path", { d: "m16 19 3 3 3-3" }],
      ["path", { d: "M18 12h.01" }],
      ["path", { d: "M19 16v6" }],
      ["path", { d: "M6 12h.01" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ];
    var BanknoteArrowUp = [
      ["path", { d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }],
      ["path", { d: "M18 12h.01" }],
      ["path", { d: "M19 22v-6" }],
      ["path", { d: "m22 19-3-3-3 3" }],
      ["path", { d: "M6 12h.01" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ];
    var BanknoteX = [
      ["path", { d: "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }],
      ["path", { d: "m17 17 5 5" }],
      ["path", { d: "M18 12h.01" }],
      ["path", { d: "m22 17-5 5" }],
      ["path", { d: "M6 12h.01" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ];
    var Banknote = [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }],
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "M6 12h.01M18 12h.01" }]
    ];
    var Barcode = [
      ["path", { d: "M3 5v14" }],
      ["path", { d: "M8 5v14" }],
      ["path", { d: "M12 5v14" }],
      ["path", { d: "M17 5v14" }],
      ["path", { d: "M21 5v14" }]
    ];
    var Barrel = [
      ["path", { d: "M10 3a41 41 0 0 0 0 18" }],
      ["path", { d: "M14 3a41 41 0 0 1 0 18" }],
      [
        "path",
        {
          d: "M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z"
        }
      ],
      ["path", { d: "M3.84 17h16.32" }],
      ["path", { d: "M3.84 7h16.32" }]
    ];
    var Baseline = [
      ["path", { d: "M4 20h16" }],
      ["path", { d: "m6 16 6-12 6 12" }],
      ["path", { d: "M8 12h8" }]
    ];
    var Bath = [
      ["path", { d: "M10 4 8 6" }],
      ["path", { d: "M17 19v2" }],
      ["path", { d: "M2 12h20" }],
      ["path", { d: "M7 19v2" }],
      ["path", { d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" }]
    ];
    var BatteryCharging = [
      ["path", { d: "m11 7-3 5h4l-3 5" }],
      ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" }],
      ["path", { d: "M22 14v-4" }],
      ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" }]
    ];
    var BatteryFull = [
      ["path", { d: "M10 10v4" }],
      ["path", { d: "M14 10v4" }],
      ["path", { d: "M22 14v-4" }],
      ["path", { d: "M6 10v4" }],
      ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }]
    ];
    var BatteryLow = [
      ["path", { d: "M22 14v-4" }],
      ["path", { d: "M6 14v-4" }],
      ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }]
    ];
    var BatteryMedium = [
      ["path", { d: "M10 14v-4" }],
      ["path", { d: "M22 14v-4" }],
      ["path", { d: "M6 14v-4" }],
      ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }]
    ];
    var BatteryPlus = [
      ["path", { d: "M10 9v6" }],
      ["path", { d: "M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" }],
      ["path", { d: "M22 14v-4" }],
      ["path", { d: "M7 12h6" }],
      ["path", { d: "M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" }]
    ];
    var BatteryWarning = [
      ["path", { d: "M10 17h.01" }],
      ["path", { d: "M10 7v6" }],
      ["path", { d: "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M22 14v-4" }],
      ["path", { d: "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }]
    ];
    var Battery = [
      ["path", { d: "M 22 14 L 22 10" }],
      ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }]
    ];
    var Beaker = [
      ["path", { d: "M4.5 3h15" }],
      ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }],
      ["path", { d: "M6 14h12" }]
    ];
    var BeanOff = [
      ["path", { d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" }],
      ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" }],
      ["path", { d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Bean = [
      [
        "path",
        {
          d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
        }
      ],
      ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28" }]
    ];
    var BedDouble = [
      ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }],
      ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }],
      ["path", { d: "M12 4v6" }],
      ["path", { d: "M2 18h20" }]
    ];
    var BedSingle = [
      ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }],
      ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }],
      ["path", { d: "M3 18h18" }]
    ];
    var Bed = [
      ["path", { d: "M2 4v16" }],
      ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }],
      ["path", { d: "M2 17h20" }],
      ["path", { d: "M6 8v9" }]
    ];
    var Beef = [
      [
        "path",
        {
          d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"
        }
      ],
      [
        "path",
        {
          d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
        }
      ],
      ["circle", { cx: "12.5", cy: "8.5", r: "2.5" }]
    ];
    var BeerOff = [
      ["path", { d: "M13 13v5" }],
      ["path", { d: "M17 11.47V8" }],
      ["path", { d: "M17 11h1a3 3 0 0 1 2.745 4.211" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" }],
      ["path", { d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" }],
      [
        "path",
        {
          d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"
        }
      ],
      ["path", { d: "M9 14.6V18" }]
    ];
    var Beer = [
      ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1" }],
      ["path", { d: "M9 12v6" }],
      ["path", { d: "M13 12v6" }],
      [
        "path",
        {
          d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
        }
      ],
      ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }]
    ];
    var BellDot = [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
      [
        "path",
        {
          d: "M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"
        }
      ],
      ["circle", { cx: "18", cy: "8", r: "3" }]
    ];
    var BellElectric = [
      ["path", { d: "M18.518 17.347A7 7 0 0 1 14 19" }],
      ["path", { d: "M18.8 4A11 11 0 0 1 20 9" }],
      ["path", { d: "M9 9h.01" }],
      ["circle", { cx: "20", cy: "16", r: "2" }],
      ["circle", { cx: "9", cy: "9", r: "7" }],
      ["rect", { x: "4", y: "16", width: "10", height: "6", rx: "2" }]
    ];
    var BellMinus = [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
      ["path", { d: "M15 8h6" }],
      [
        "path",
        {
          d: "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"
        }
      ]
    ];
    var BellOff = [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
      ["path", { d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" }]
    ];
    var BellPlus = [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
      ["path", { d: "M15 8h6" }],
      ["path", { d: "M18 5v6" }],
      [
        "path",
        {
          d: "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"
        }
      ]
    ];
    var BellRing = [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
      ["path", { d: "M22 8c0-2.3-.8-4.3-2-6" }],
      [
        "path",
        {
          d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
        }
      ],
      ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8" }]
    ];
    var Bell = [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
      [
        "path",
        {
          d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
        }
      ]
    ];
    var BetweenHorizontalEnd = [
      ["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1" }],
      ["path", { d: "m22 15-3-3 3-3" }],
      ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1" }]
    ];
    var BetweenHorizontalStart = [
      ["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1" }],
      ["path", { d: "m2 9 3 3-3 3" }],
      ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1" }]
    ];
    var BetweenVerticalEnd = [
      ["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1" }],
      ["path", { d: "m9 22 3-3 3 3" }],
      ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1" }]
    ];
    var BetweenVerticalStart = [
      ["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1" }],
      ["path", { d: "m15 2-3 3-3-3" }],
      ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1" }]
    ];
    var Bike = [
      ["circle", { cx: "18.5", cy: "17.5", r: "3.5" }],
      ["circle", { cx: "5.5", cy: "17.5", r: "3.5" }],
      ["circle", { cx: "15", cy: "5", r: "1" }],
      ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2" }]
    ];
    var BicepsFlexed = [
      [
        "path",
        {
          d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"
        }
      ],
      ["path", { d: "M15 14a5 5 0 0 0-7.584 2" }],
      ["path", { d: "M9.964 6.825C8.019 7.977 9.5 13 8 15" }]
    ];
    var Binary = [
      ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2" }],
      ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2" }],
      ["path", { d: "M6 20h4" }],
      ["path", { d: "M14 10h4" }],
      ["path", { d: "M6 14h2v6" }],
      ["path", { d: "M14 4h2v6" }]
    ];
    var Binoculars = [
      ["path", { d: "M10 10h4" }],
      ["path", { d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }],
      [
        "path",
        {
          d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"
        }
      ],
      ["path", { d: "M 22 16 L 2 16" }],
      [
        "path",
        {
          d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"
        }
      ],
      ["path", { d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" }]
    ];
    var Biohazard = [
      ["circle", { cx: "12", cy: "11.9", r: "2" }],
      ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }],
      ["path", { d: "m8.9 10.1 1.4.8" }],
      ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }],
      ["path", { d: "m15.1 10.1-1.4.8" }],
      ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }],
      ["path", { d: "M12 13.9v1.6" }],
      ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0" }],
      ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }],
      ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5" }]
    ];
    var Bird = [
      ["path", { d: "M16 7h.01" }],
      ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }],
      ["path", { d: "m20 7 2 .5-2 .5" }],
      ["path", { d: "M10 18v3" }],
      ["path", { d: "M14 17.75V21" }],
      ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61" }]
    ];
    var Bitcoin = [
      [
        "path",
        {
          d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
        }
      ]
    ];
    var Blend = [
      ["circle", { cx: "9", cy: "9", r: "7" }],
      ["circle", { cx: "15", cy: "15", r: "7" }]
    ];
    var Blinds = [
      ["path", { d: "M3 3h18" }],
      ["path", { d: "M20 7H8" }],
      ["path", { d: "M20 11H8" }],
      ["path", { d: "M10 19h10" }],
      ["path", { d: "M8 15h12" }],
      ["path", { d: "M4 3v14" }],
      ["circle", { cx: "4", cy: "19", r: "2" }]
    ];
    var Blocks = [
      [
        "path",
        {
          d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"
        }
      ],
      ["rect", { x: "14", y: "2", width: "8", height: "8", rx: "1" }]
    ];
    var BluetoothConnected = [
      ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }],
      ["line", { x1: "18", x2: "21", y1: "12", y2: "12" }],
      ["line", { x1: "3", x2: "6", y1: "12", y2: "12" }]
    ];
    var BluetoothOff = [
      ["path", { d: "m17 17-5 5V12l-5 5" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M14.5 9.5 17 7l-5-5v4.5" }]
    ];
    var BluetoothSearching = [
      ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }],
      ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66" }],
      ["path", { d: "M18 12h.01" }]
    ];
    var Bold = [
      ["path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }]
    ];
    var Bluetooth = [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }]];
    var Bolt = [
      [
        "path",
        {
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "4" }]
    ];
    var Bomb = [
      ["circle", { cx: "11", cy: "13", r: "9" }],
      [
        "path",
        { d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" }
      ],
      ["path", { d: "m22 2-1.5 1.5" }]
    ];
    var Bone = [
      [
        "path",
        {
          d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
        }
      ]
    ];
    var BookA = [
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["path", { d: "m8 13 4-7 4 7" }],
      ["path", { d: "M9.1 11h5.7" }]
    ];
    var BookAlert = [
      ["path", { d: "M12 13h.01" }],
      ["path", { d: "M12 6v3" }],
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ]
    ];
    var BookAudio = [
      ["path", { d: "M12 6v7" }],
      ["path", { d: "M16 8v3" }],
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["path", { d: "M8 8v3" }]
    ];
    var BookCheck = [
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["path", { d: "m9 9.5 2 2 4-4" }]
    ];
    var BookCopy = [
      ["path", { d: "M5 7a2 2 0 0 0-2 2v11" }],
      ["path", { d: "M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21" }],
      [
        "path",
        { d: "M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10" }
      ]
    ];
    var BookDashed = [
      ["path", { d: "M12 17h1.5" }],
      ["path", { d: "M12 22h1.5" }],
      ["path", { d: "M12 2h1.5" }],
      ["path", { d: "M17.5 22H19a1 1 0 0 0 1-1" }],
      ["path", { d: "M17.5 2H19a1 1 0 0 1 1 1v1.5" }],
      ["path", { d: "M20 14v3h-2.5" }],
      ["path", { d: "M20 8.5V10" }],
      ["path", { d: "M4 10V8.5" }],
      ["path", { d: "M4 19.5V14" }],
      ["path", { d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8" }],
      ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8" }]
    ];
    var BookDown = [
      ["path", { d: "M12 13V7" }],
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["path", { d: "m9 10 3 3 3-3" }]
    ];
    var BookHeadphones = [
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2" }],
      ["circle", { cx: "15", cy: "12", r: "1" }],
      ["circle", { cx: "9", cy: "12", r: "1" }]
    ];
    var BookHeart = [
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      [
        "path",
        {
          d: "M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"
        }
      ]
    ];
    var BookImage = [
      ["path", { d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" }],
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["circle", { cx: "10", cy: "8", r: "2" }]
    ];
    var BookKey = [
      ["path", { d: "m19 3 1 1" }],
      ["path", { d: "m20 2-4.5 4.5" }],
      ["path", { d: "M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844" }],
      ["circle", { cx: "14", cy: "8", r: "2" }]
    ];
    var BookLock = [
      ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2" }],
      ["path", { d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }],
      ["rect", { x: "12", y: "6", width: "8", height: "5", rx: "1" }]
    ];
    var BookMarked = [
      ["path", { d: "M10 2v8l3-3 3 3V2" }],
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ]
    ];
    var BookMinus = [
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["path", { d: "M9 10h6" }]
    ];
    var BookOpenCheck = [
      ["path", { d: "M12 21V7" }],
      ["path", { d: "m16 12 2 2 4-4" }],
      [
        "path",
        {
          d: "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"
        }
      ]
    ];
    var BookOpenText = [
      ["path", { d: "M12 7v14" }],
      ["path", { d: "M16 12h2" }],
      ["path", { d: "M16 8h2" }],
      [
        "path",
        {
          d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
        }
      ],
      ["path", { d: "M6 12h2" }],
      ["path", { d: "M6 8h2" }]
    ];
    var BookOpen = [
      ["path", { d: "M12 7v14" }],
      [
        "path",
        {
          d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
        }
      ]
    ];
    var BookPlus = [
      ["path", { d: "M12 7v6" }],
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["path", { d: "M9 10h6" }]
    ];
    var BookText = [
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["path", { d: "M8 11h8" }],
      ["path", { d: "M8 7h6" }]
    ];
    var BookType = [
      ["path", { d: "M10 13h4" }],
      ["path", { d: "M12 6v7" }],
      ["path", { d: "M16 8V6H8v2" }],
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ]
    ];
    var BookUp2 = [
      ["path", { d: "M12 13V7" }],
      ["path", { d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }],
      ["path", { d: "m9 10 3-3 3 3" }],
      ["path", { d: "m9 5 3-3 3 3" }]
    ];
    var BookUp = [
      ["path", { d: "M12 13V7" }],
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["path", { d: "m9 10 3-3 3 3" }]
    ];
    var BookUser = [
      ["path", { d: "M15 13a3 3 0 1 0-6 0" }],
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["circle", { cx: "12", cy: "8", r: "2" }]
    ];
    var BookX = [
      ["path", { d: "m14.5 7-5 5" }],
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ],
      ["path", { d: "m9.5 7 5 5" }]
    ];
    var Book = [
      [
        "path",
        { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
      ]
    ];
    var BookmarkCheck = [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }],
      ["path", { d: "m9 10 2 2 4-4" }]
    ];
    var BookmarkMinus = [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }],
      ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]
    ];
    var BookmarkPlus = [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }],
      ["line", { x1: "12", x2: "12", y1: "7", y2: "13" }],
      ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]
    ];
    var BookmarkX = [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }],
      ["path", { d: "m14.5 7.5-5 5" }],
      ["path", { d: "m9.5 7.5 5 5" }]
    ];
    var Bookmark = [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }]];
    var BoomBox = [
      ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }],
      ["path", { d: "M8 8v1" }],
      ["path", { d: "M12 8v1" }],
      ["path", { d: "M16 8v1" }],
      ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2" }],
      ["circle", { cx: "8", cy: "15", r: "2" }],
      ["circle", { cx: "16", cy: "15", r: "2" }]
    ];
    var BotMessageSquare = [
      ["path", { d: "M12 6V2H8" }],
      ["path", { d: "M15 11v2" }],
      ["path", { d: "M2 12h2" }],
      ["path", { d: "M20 12h2" }],
      [
        "path",
        {
          d: "M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "M9 11v2" }]
    ];
    var BotOff = [
      ["path", { d: "M13.67 8H18a2 2 0 0 1 2 2v4.33" }],
      ["path", { d: "M2 14h2" }],
      ["path", { d: "M20 14h2" }],
      ["path", { d: "M22 22 2 2" }],
      ["path", { d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" }],
      ["path", { d: "M9 13v2" }],
      ["path", { d: "M9.67 4H12v2.33" }]
    ];
    var Bot = [
      ["path", { d: "M12 8V4H8" }],
      ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }],
      ["path", { d: "M2 14h2" }],
      ["path", { d: "M20 14h2" }],
      ["path", { d: "M15 13v2" }],
      ["path", { d: "M9 13v2" }]
    ];
    var BottleWine = [
      [
        "path",
        {
          d: "M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z"
        }
      ],
      ["path", { d: "M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" }]
    ];
    var BowArrow = [
      ["path", { d: "M17 3h4v4" }],
      ["path", { d: "M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17" }],
      ["path", { d: "M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05" }],
      [
        "path",
        {
          d: "M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z"
        }
      ],
      ["path", { d: "M9.707 14.293 21 3" }]
    ];
    var Box = [
      [
        "path",
        {
          d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
        }
      ],
      ["path", { d: "m3.3 7 8.7 5 8.7-5" }],
      ["path", { d: "M12 22V12" }]
    ];
    var Boxes = [
      [
        "path",
        {
          d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
        }
      ],
      ["path", { d: "m7 16.5-4.74-2.85" }],
      ["path", { d: "m7 16.5 5-3" }],
      ["path", { d: "M7 16.5v5.17" }],
      [
        "path",
        {
          d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
        }
      ],
      ["path", { d: "m17 16.5-5-3" }],
      ["path", { d: "m17 16.5 4.74-2.85" }],
      ["path", { d: "M17 16.5v5.17" }],
      [
        "path",
        {
          d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
        }
      ],
      ["path", { d: "M12 8 7.26 5.15" }],
      ["path", { d: "m12 8 4.74-2.85" }],
      ["path", { d: "M12 13.5V8" }]
    ];
    var Braces = [
      ["path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }],
      ["path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" }]
    ];
    var Brackets = [
      ["path", { d: "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" }],
      ["path", { d: "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" }]
    ];
    var BrainCircuit = [
      [
        "path",
        { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }
      ],
      ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4" }],
      ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
      ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }],
      ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }],
      ["path", { d: "M12 13h4" }],
      ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1" }],
      ["path", { d: "M12 8h8" }],
      ["path", { d: "M16 8V5a2 2 0 0 1 2-2" }],
      ["circle", { cx: "16", cy: "13", r: ".5" }],
      ["circle", { cx: "18", cy: "3", r: ".5" }],
      ["circle", { cx: "20", cy: "21", r: ".5" }],
      ["circle", { cx: "20", cy: "8", r: ".5" }]
    ];
    var BrainCog = [
      ["path", { d: "m10.852 14.772-.383.923" }],
      ["path", { d: "m10.852 9.228-.383-.923" }],
      ["path", { d: "m13.148 14.772.382.924" }],
      ["path", { d: "m13.531 8.305-.383.923" }],
      ["path", { d: "m14.772 10.852.923-.383" }],
      ["path", { d: "m14.772 13.148.923.383" }],
      [
        "path",
        {
          d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"
        }
      ],
      ["path", { d: "M17.998 5.125a4 4 0 0 1 2.525 5.771" }],
      ["path", { d: "M19.505 10.294a4 4 0 0 1-1.5 7.706" }],
      [
        "path",
        { d: "M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516" }
      ],
      ["path", { d: "M4.5 10.291A4 4 0 0 0 6 18" }],
      ["path", { d: "M6.002 5.125a3 3 0 0 0 .4 1.375" }],
      ["path", { d: "m9.228 10.852-.923-.383" }],
      ["path", { d: "m9.228 13.148-.923.383" }],
      ["circle", { cx: "12", cy: "12", r: "3" }]
    ];
    var Brain = [
      ["path", { d: "M12 18V5" }],
      ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" }],
      ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" }],
      ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77" }],
      ["path", { d: "M18 18a4 4 0 0 0 2-7.464" }],
      ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" }],
      ["path", { d: "M6 18a4 4 0 0 1-2-7.464" }],
      ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77" }]
    ];
    var BrickWallFire = [
      ["path", { d: "M16 3v2.107" }],
      [
        "path",
        {
          d: "M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"
        }
      ],
      ["path", { d: "M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" }],
      ["path", { d: "M3 15h5.253" }],
      ["path", { d: "M3 9h8.228" }],
      ["path", { d: "M8 15v6" }],
      ["path", { d: "M8 3v6" }]
    ];
    var BrickWallShield = [
      ["path", { d: "M12 9v1.258" }],
      ["path", { d: "M16 3v5.46" }],
      ["path", { d: "M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75" }],
      [
        "path",
        {
          d: "M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"
        }
      ],
      ["path", { d: "M3 15h7" }],
      ["path", { d: "M3 9h12.142" }],
      ["path", { d: "M8 15v6" }],
      ["path", { d: "M8 3v6" }]
    ];
    var BrickWall = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M12 9v6" }],
      ["path", { d: "M16 15v6" }],
      ["path", { d: "M16 3v6" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "M8 15v6" }],
      ["path", { d: "M8 3v6" }]
    ];
    var BriefcaseBusiness = [
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0" }],
      ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
    ];
    var BriefcaseConveyorBelt = [
      ["path", { d: "M10 20v2" }],
      ["path", { d: "M14 20v2" }],
      ["path", { d: "M18 20v2" }],
      ["path", { d: "M21 20H3" }],
      ["path", { d: "M6 20v2" }],
      ["path", { d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" }],
      ["rect", { x: "4", y: "6", width: "16", height: "10", rx: "2" }]
    ];
    var BriefcaseMedical = [
      ["path", { d: "M12 11v4" }],
      ["path", { d: "M14 13h-4" }],
      ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M18 6v14" }],
      ["path", { d: "M6 6v14" }],
      ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
    ];
    var Briefcase = [
      ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }],
      ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
    ];
    var BringToFront = [
      ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2" }],
      ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }],
      ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" }]
    ];
    var BrushCleaning = [
      ["path", { d: "m16 22-1-4" }],
      [
        "path",
        {
          d: "M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1"
        }
      ],
      ["path", { d: "M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z" }],
      ["path", { d: "m8 22 1-4" }]
    ];
    var Brush = [
      ["path", { d: "m11 10 3 3" }],
      ["path", { d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" }],
      ["path", { d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" }]
    ];
    var Bubbles = [
      ["path", { d: "M7.2 14.8a2 2 0 0 1 2 2" }],
      ["circle", { cx: "18.5", cy: "8.5", r: "3.5" }],
      ["circle", { cx: "7.5", cy: "16.5", r: "5.5" }],
      ["circle", { cx: "7.5", cy: "4.5", r: "2.5" }]
    ];
    var BugOff = [
      ["path", { d: "M12 20v-8" }],
      ["path", { d: "M14.12 3.88 16 2" }],
      ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" }],
      ["path", { d: "M18 12.34V11a4 4 0 0 0-4-4h-1.3" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97" }],
      ["path", { d: "M22 13h-3.34" }],
      ["path", { d: "M3 21a4 4 0 0 1 3.81-4" }],
      ["path", { d: "M6 13H2" }],
      ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" }]
    ];
    var BugPlay = [
      ["path", { d: "M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97" }],
      [
        "path",
        {
          d: "M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"
        }
      ],
      ["path", { d: "M14.12 3.88 16 2" }],
      ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97" }],
      ["path", { d: "M3 21a4 4 0 0 1 3.81-4" }],
      ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97" }],
      ["path", { d: "M6 13H2" }],
      ["path", { d: "m8 2 1.88 1.88" }],
      ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13" }]
    ];
    var Bug = [
      ["path", { d: "M12 20v-9" }],
      ["path", { d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" }],
      ["path", { d: "M14.12 3.88 16 2" }],
      ["path", { d: "M21 21a4 4 0 0 0-3.81-4" }],
      ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97" }],
      ["path", { d: "M22 13h-4" }],
      ["path", { d: "M3 21a4 4 0 0 1 3.81-4" }],
      ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97" }],
      ["path", { d: "M6 13H2" }],
      ["path", { d: "m8 2 1.88 1.88" }],
      ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13" }]
    ];
    var Building2 = [
      ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }],
      ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }],
      ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M10 6h4" }],
      ["path", { d: "M10 10h4" }],
      ["path", { d: "M10 14h4" }],
      ["path", { d: "M10 18h4" }]
    ];
    var BusFront = [
      ["path", { d: "M4 6 2 7" }],
      ["path", { d: "M10 6h4" }],
      ["path", { d: "m22 7-2-1" }],
      ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }],
      ["path", { d: "M4 11h16" }],
      ["path", { d: "M8 15h.01" }],
      ["path", { d: "M16 15h.01" }],
      ["path", { d: "M6 19v2" }],
      ["path", { d: "M18 21v-2" }]
    ];
    var Building = [
      ["path", { d: "M12 10h.01" }],
      ["path", { d: "M12 14h.01" }],
      ["path", { d: "M12 6h.01" }],
      ["path", { d: "M16 10h.01" }],
      ["path", { d: "M16 14h.01" }],
      ["path", { d: "M16 6h.01" }],
      ["path", { d: "M8 10h.01" }],
      ["path", { d: "M8 14h.01" }],
      ["path", { d: "M8 6h.01" }],
      ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" }],
      ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]
    ];
    var Bus = [
      ["path", { d: "M8 6v6" }],
      ["path", { d: "M15 6v6" }],
      ["path", { d: "M2 12h19.6" }],
      [
        "path",
        {
          d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
        }
      ],
      ["circle", { cx: "7", cy: "18", r: "2" }],
      ["path", { d: "M9 18h5" }],
      ["circle", { cx: "16", cy: "18", r: "2" }]
    ];
    var CableCar = [
      ["path", { d: "M10 3h.01" }],
      ["path", { d: "M14 2h.01" }],
      ["path", { d: "m2 9 20-5" }],
      ["path", { d: "M12 12V6.5" }],
      ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3" }],
      ["path", { d: "M9 12v5" }],
      ["path", { d: "M15 12v5" }],
      ["path", { d: "M4 17h16" }]
    ];
    var Cable = [
      ["path", { d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" }],
      ["path", { d: "M17 21v-2" }],
      ["path", { d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" }],
      ["path", { d: "M21 21v-2" }],
      ["path", { d: "M3 5V3" }],
      ["path", { d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" }],
      ["path", { d: "M7 5V3" }]
    ];
    var CakeSlice = [
      ["path", { d: "M16 13H3" }],
      ["path", { d: "M16 17H3" }],
      [
        "path",
        {
          d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"
        }
      ],
      ["circle", { cx: "9", cy: "7", r: "2" }]
    ];
    var Calculator = [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
      ["line", { x1: "8", x2: "16", y1: "6", y2: "6" }],
      ["line", { x1: "16", x2: "16", y1: "14", y2: "18" }],
      ["path", { d: "M16 10h.01" }],
      ["path", { d: "M12 10h.01" }],
      ["path", { d: "M8 10h.01" }],
      ["path", { d: "M12 14h.01" }],
      ["path", { d: "M8 14h.01" }],
      ["path", { d: "M12 18h.01" }],
      ["path", { d: "M8 18h.01" }]
    ];
    var Calendar1 = [
      ["path", { d: "M11 14h1v4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }],
      ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }]
    ];
    var Cake = [
      ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }],
      ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }],
      ["path", { d: "M2 21h20" }],
      ["path", { d: "M7 8v3" }],
      ["path", { d: "M12 8v3" }],
      ["path", { d: "M17 8v3" }],
      ["path", { d: "M7 4h.01" }],
      ["path", { d: "M12 4h.01" }],
      ["path", { d: "M17 4h.01" }]
    ];
    var CalendarArrowDown = [
      ["path", { d: "m14 18 4 4 4-4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M18 14v8" }],
      ["path", { d: "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }]
    ];
    var CalendarArrowUp = [
      ["path", { d: "m14 18 4-4 4 4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M18 22v-8" }],
      ["path", { d: "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }]
    ];
    var CalendarCheck2 = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "m16 20 2 2 4-4" }]
    ];
    var CalendarCheck = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "m9 16 2 2 4-4" }]
    ];
    var CalendarClock = [
      ["path", { d: "M16 14v2.2l1.6 1" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" }],
      ["path", { d: "M3 10h5" }],
      ["path", { d: "M8 2v4" }],
      ["circle", { cx: "16", cy: "16", r: "6" }]
    ];
    var CalendarCog = [
      ["path", { d: "m15.228 16.852-.923-.383" }],
      ["path", { d: "m15.228 19.148-.923.383" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "m16.47 14.305.382.923" }],
      ["path", { d: "m16.852 20.772-.383.924" }],
      ["path", { d: "m19.148 15.228.383-.923" }],
      ["path", { d: "m19.53 21.696-.382-.924" }],
      ["path", { d: "m20.772 16.852.924-.383" }],
      ["path", { d: "m20.772 19.148.924.383" }],
      ["path", { d: "M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }],
      ["circle", { cx: "18", cy: "18", r: "3" }]
    ];
    var CalendarDays = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 14h.01" }],
      ["path", { d: "M12 14h.01" }],
      ["path", { d: "M16 14h.01" }],
      ["path", { d: "M8 18h.01" }],
      ["path", { d: "M12 18h.01" }],
      ["path", { d: "M16 18h.01" }]
    ];
    var CalendarFold = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M15 22v-4a2 2 0 0 1 2-2h4" }]
    ];
    var CalendarHeart = [
      ["path", { d: "M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125" }],
      [
        "path",
        {
          d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"
        }
      ],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }]
    ];
    var CalendarMinus2 = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M10 16h4" }]
    ];
    var CalendarMinus = [
      ["path", { d: "M16 19h6" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }]
    ];
    var CalendarOff = [
      ["path", { d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" }],
      ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M3 10h7" }],
      ["path", { d: "M21 10h-5.5" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var CalendarPlus2 = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M10 16h4" }],
      ["path", { d: "M12 14v4" }]
    ];
    var CalendarPlus = [
      ["path", { d: "M16 19h6" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M19 16v6" }],
      ["path", { d: "M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }]
    ];
    var CalendarRange = [
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M17 14h-6" }],
      ["path", { d: "M13 18H7" }],
      ["path", { d: "M7 14h.01" }],
      ["path", { d: "M17 18h.01" }]
    ];
    var CalendarSync = [
      ["path", { d: "M11 10v4h4" }],
      ["path", { d: "m11 14 1.535-1.605a5 5 0 0 1 8 1.5" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "m21 18-1.535 1.605a5 5 0 0 1-8-1.5" }],
      ["path", { d: "M21 22v-4h-4" }],
      ["path", { d: "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" }],
      ["path", { d: "M3 10h4" }],
      ["path", { d: "M8 2v4" }]
    ];
    var CalendarSearch = [
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" }],
      ["path", { d: "m22 22-1.875-1.875" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "M8 2v4" }],
      ["circle", { cx: "18", cy: "18", r: "3" }]
    ];
    var CalendarX2 = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "m17 22 5-5" }],
      ["path", { d: "m17 17 5 5" }]
    ];
    var CalendarX = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }],
      ["path", { d: "m14 14-4 4" }],
      ["path", { d: "m10 14 4 4" }]
    ];
    var Calendar = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
      ["path", { d: "M3 10h18" }]
    ];
    var CameraOff = [
      ["path", { d: "M14.564 14.558a3 3 0 1 1-4.122-4.121" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" }],
      [
        "path",
        {
          d: "M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344"
        }
      ]
    ];
    var Camera = [
      [
        "path",
        {
          d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"
        }
      ],
      ["circle", { cx: "12", cy: "13", r: "3" }]
    ];
    var CandyCane = [
      [
        "path",
        { d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" }
      ],
      ["path", { d: "M17.75 7 15 2.1" }],
      ["path", { d: "M10.9 4.8 13 9" }],
      ["path", { d: "m7.9 9.7 2 4.4" }],
      ["path", { d: "M4.9 14.7 7 18.9" }]
    ];
    var CandyOff = [
      ["path", { d: "M10 10v7.9" }],
      ["path", { d: "M11.802 6.145a5 5 0 0 1 6.053 6.053" }],
      ["path", { d: "M14 6.1v2.243" }],
      ["path", { d: "m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965" }],
      [
        "path",
        {
          d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"
        }
      ],
      ["path", { d: "m2 2 20 20" }],
      [
        "path",
        {
          d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"
        }
      ]
    ];
    var Candy = [
      ["path", { d: "M10 7v10.9" }],
      ["path", { d: "M14 6.1V17" }],
      [
        "path",
        {
          d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"
        }
      ],
      [
        "path",
        {
          d: "M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07"
        }
      ],
      [
        "path",
        {
          d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"
        }
      ]
    ];
    var CaptionsOff = [
      ["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5" }],
      ["path", { d: "M17 11h-.5" }],
      ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M7 11h4" }],
      ["path", { d: "M7 15h2.5" }]
    ];
    var Captions = [
      ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2" }],
      ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4" }]
    ];
    var Cannabis = [
      ["path", { d: "M12 22v-4" }],
      [
        "path",
        {
          d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"
        }
      ]
    ];
    var CarFront = [
      ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }],
      ["path", { d: "M7 14h.01" }],
      ["path", { d: "M17 14h.01" }],
      ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }],
      ["path", { d: "M5 18v2" }],
      ["path", { d: "M19 18v2" }]
    ];
    var CarTaxiFront = [
      ["path", { d: "M10 2h4" }],
      ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }],
      ["path", { d: "M7 14h.01" }],
      ["path", { d: "M17 14h.01" }],
      ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }],
      ["path", { d: "M5 18v2" }],
      ["path", { d: "M19 18v2" }]
    ];
    var Car = [
      [
        "path",
        {
          d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
        }
      ],
      ["circle", { cx: "7", cy: "17", r: "2" }],
      ["path", { d: "M9 17h6" }],
      ["circle", { cx: "17", cy: "17", r: "2" }]
    ];
    var Caravan = [
      ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }],
      ["path", { d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" }],
      ["path", { d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" }],
      ["circle", { cx: "8", cy: "19", r: "2" }]
    ];
    var CardSim = [
      ["path", { d: "M12 14v4" }],
      [
        "path",
        {
          d: "M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
        }
      ],
      ["path", { d: "M8 14h8" }],
      ["rect", { x: "8", y: "10", width: "8", height: "8", rx: "1" }]
    ];
    var Carrot = [
      [
        "path",
        {
          d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
        }
      ],
      ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }],
      ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" }]
    ];
    var CaseLower = [
      ["path", { d: "M10 9v7" }],
      ["path", { d: "M14 6v10" }],
      ["circle", { cx: "17.5", cy: "12.5", r: "3.5" }],
      ["circle", { cx: "6.5", cy: "12.5", r: "3.5" }]
    ];
    var CaseSensitive = [
      ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }],
      ["path", { d: "M22 9v7" }],
      ["path", { d: "M3.304 13h6.392" }],
      ["circle", { cx: "18.5", cy: "12.5", r: "3.5" }]
    ];
    var CaseUpper = [
      [
        "path",
        { d: "M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5" }
      ],
      ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }],
      ["path", { d: "M3.304 13h6.392" }]
    ];
    var CassetteTape = [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["circle", { cx: "8", cy: "10", r: "2" }],
      ["path", { d: "M8 12h8" }],
      ["circle", { cx: "16", cy: "10", r: "2" }],
      ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }]
    ];
    var Cast = [
      ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }],
      ["path", { d: "M2 12a9 9 0 0 1 8 8" }],
      ["path", { d: "M2 16a5 5 0 0 1 4 4" }],
      ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20" }]
    ];
    var Castle = [
      ["path", { d: "M10 5V3" }],
      ["path", { d: "M14 5V3" }],
      ["path", { d: "M15 21v-3a3 3 0 0 0-6 0v3" }],
      ["path", { d: "M18 3v8" }],
      ["path", { d: "M18 5H6" }],
      ["path", { d: "M22 11H2" }],
      ["path", { d: "M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" }],
      ["path", { d: "M6 3v8" }]
    ];
    var Cat = [
      [
        "path",
        {
          d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
        }
      ],
      ["path", { d: "M8 14v.5" }],
      ["path", { d: "M16 14v.5" }],
      ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z" }]
    ];
    var Cctv = [
      [
        "path",
        { d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" }
      ],
      [
        "path",
        {
          d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"
        }
      ],
      ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" }],
      ["path", { d: "M2 21v-4" }],
      ["path", { d: "M7 9h.01" }]
    ];
    var ChartArea = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      [
        "path",
        {
          d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
        }
      ]
    ];
    var ChartBarBig = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }],
      ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]
    ];
    var ChartBarDecreasing = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M7 11h8" }],
      ["path", { d: "M7 16h3" }],
      ["path", { d: "M7 6h12" }]
    ];
    var ChartBarIncreasing = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M7 11h8" }],
      ["path", { d: "M7 16h12" }],
      ["path", { d: "M7 6h3" }]
    ];
    var ChartBarStacked = [
      ["path", { d: "M11 13v4" }],
      ["path", { d: "M15 5v4" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }],
      ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]
    ];
    var ChartBar = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M7 16h8" }],
      ["path", { d: "M7 11h12" }],
      ["path", { d: "M7 6h3" }]
    ];
    var ChartCandlestick = [
      ["path", { d: "M9 5v4" }],
      ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1" }],
      ["path", { d: "M9 15v2" }],
      ["path", { d: "M17 3v2" }],
      ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1" }],
      ["path", { d: "M17 13v3" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]
    ];
    var ChartColumnBig = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }],
      ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]
    ];
    var ChartColumnDecreasing = [
      ["path", { d: "M13 17V9" }],
      ["path", { d: "M18 17v-3" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M8 17V5" }]
    ];
    var ChartColumnIncreasing = [
      ["path", { d: "M13 17V9" }],
      ["path", { d: "M18 17V5" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M8 17v-3" }]
    ];
    var ChartColumnStacked = [
      ["path", { d: "M11 13H7" }],
      ["path", { d: "M19 9h-4" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }],
      ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]
    ];
    var ChartColumn = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M18 17V9" }],
      ["path", { d: "M13 17V5" }],
      ["path", { d: "M8 17v-3" }]
    ];
    var ChartGantt = [
      ["path", { d: "M10 6h8" }],
      ["path", { d: "M12 16h6" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M8 11h7" }]
    ];
    var ChartLine = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "m19 9-5 5-4-4-3 3" }]
    ];
    var ChartNetwork = [
      ["path", { d: "m13.11 7.664 1.78 2.672" }],
      ["path", { d: "m14.162 12.788-3.324 1.424" }],
      ["path", { d: "m20 4-6.06 1.515" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["circle", { cx: "12", cy: "6", r: "2" }],
      ["circle", { cx: "16", cy: "12", r: "2" }],
      ["circle", { cx: "9", cy: "15", r: "2" }]
    ];
    var ChartNoAxesColumnDecreasing = [
      ["path", { d: "M5 21V3" }],
      ["path", { d: "M12 21V9" }],
      ["path", { d: "M19 21v-6" }]
    ];
    var ChartNoAxesColumnIncreasing = [
      ["path", { d: "M5 21v-6" }],
      ["path", { d: "M12 21V9" }],
      ["path", { d: "M19 21V3" }]
    ];
    var ChartNoAxesColumn = [
      ["path", { d: "M5 21v-6" }],
      ["path", { d: "M12 21V3" }],
      ["path", { d: "M19 21V9" }]
    ];
    var ChartNoAxesCombined = [
      ["path", { d: "M12 16v5" }],
      ["path", { d: "M16 14v7" }],
      ["path", { d: "M20 10v11" }],
      ["path", { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" }],
      ["path", { d: "M4 18v3" }],
      ["path", { d: "M8 14v7" }]
    ];
    var ChartNoAxesGantt = [
      ["path", { d: "M6 5h12" }],
      ["path", { d: "M4 12h10" }],
      ["path", { d: "M12 19h8" }]
    ];
    var ChartPie = [
      [
        "path",
        {
          d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
        }
      ],
      ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }]
    ];
    var ChartScatter = [
      ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor" }],
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]
    ];
    var ChartSpline = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
      ["path", { d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" }]
    ];
    var CheckCheck = [
      ["path", { d: "M18 6 7 17l-5-5" }],
      ["path", { d: "m22 10-7.5 7.5L13 16" }]
    ];
    var CheckLine = [
      ["path", { d: "M20 4L9 15" }],
      ["path", { d: "M21 19L3 19" }],
      ["path", { d: "M9 15L4 10" }]
    ];
    var Check2 = [["path", { d: "M20 6 9 17l-5-5" }]];
    var ChefHat = [
      [
        "path",
        {
          d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
        }
      ],
      ["path", { d: "M6 17h12" }]
    ];
    var Cherry = [
      ["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }],
      ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }],
      ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" }],
      ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" }]
    ];
    var ChevronFirst = [
      ["path", { d: "m17 18-6-6 6-6" }],
      ["path", { d: "M7 6v12" }]
    ];
    var ChevronDown3 = [["path", { d: "m6 9 6 6 6-6" }]];
    var ChevronLeft = [["path", { d: "m15 18-6-6 6-6" }]];
    var ChevronRight = [["path", { d: "m9 18 6-6-6-6" }]];
    var ChevronLast = [
      ["path", { d: "m7 18 6-6-6-6" }],
      ["path", { d: "M17 6v12" }]
    ];
    var ChevronUp = [["path", { d: "m18 15-6-6-6 6" }]];
    var ChevronsDownUp = [
      ["path", { d: "m7 20 5-5 5 5" }],
      ["path", { d: "m7 4 5 5 5-5" }]
    ];
    var ChevronsDown = [
      ["path", { d: "m7 6 5 5 5-5" }],
      ["path", { d: "m7 13 5 5 5-5" }]
    ];
    var ChevronsLeftRightEllipsis = [
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M16 12h.01" }],
      ["path", { d: "m17 7 5 5-5 5" }],
      ["path", { d: "m7 7-5 5 5 5" }],
      ["path", { d: "M8 12h.01" }]
    ];
    var ChevronsLeftRight = [
      ["path", { d: "m9 7-5 5 5 5" }],
      ["path", { d: "m15 7 5 5-5 5" }]
    ];
    var ChevronsLeft = [
      ["path", { d: "m11 17-5-5 5-5" }],
      ["path", { d: "m18 17-5-5 5-5" }]
    ];
    var ChevronsRightLeft = [
      ["path", { d: "m20 17-5-5 5-5" }],
      ["path", { d: "m4 17 5-5-5-5" }]
    ];
    var ChevronsRight = [
      ["path", { d: "m6 17 5-5-5-5" }],
      ["path", { d: "m13 17 5-5-5-5" }]
    ];
    var ChevronsUpDown = [
      ["path", { d: "m7 15 5 5 5-5" }],
      ["path", { d: "m7 9 5-5 5 5" }]
    ];
    var ChevronsUp = [
      ["path", { d: "m17 11-5-5-5 5" }],
      ["path", { d: "m17 18-5-5-5 5" }]
    ];
    var Chromium = [
      ["path", { d: "M10.88 21.94 15.46 14" }],
      ["path", { d: "M21.17 8H12" }],
      ["path", { d: "M3.95 6.06 8.54 14" }],
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "12", r: "4" }]
    ];
    var Church = [
      ["path", { d: "M10 9h4" }],
      ["path", { d: "M12 7v5" }],
      ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }],
      [
        "path",
        {
          d: "m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9"
        }
      ],
      ["path", { d: "M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" }]
    ];
    var CigaretteOff = [
      ["path", { d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" }],
      ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" }],
      ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }],
      ["path", { d: "M7 12v4" }]
    ];
    var Cigarette = [
      ["path", { d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" }],
      ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }],
      ["path", { d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }],
      ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }],
      ["path", { d: "M7 12v4" }]
    ];
    var CircleAlert = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
    ];
    var CircleArrowDown = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 8v8" }],
      ["path", { d: "m8 12 4 4 4-4" }]
    ];
    var CircleArrowLeft = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m12 8-4 4 4 4" }],
      ["path", { d: "M16 12H8" }]
    ];
    var CircleArrowOutDownLeft = [
      ["path", { d: "M2 12a10 10 0 1 1 10 10" }],
      ["path", { d: "m2 22 10-10" }],
      ["path", { d: "M8 22H2v-6" }]
    ];
    var CircleArrowOutDownRight = [
      ["path", { d: "M12 22a10 10 0 1 1 10-10" }],
      ["path", { d: "M22 22 12 12" }],
      ["path", { d: "M22 16v6h-6" }]
    ];
    var CircleArrowOutUpLeft = [
      ["path", { d: "M2 8V2h6" }],
      ["path", { d: "m2 2 10 10" }],
      ["path", { d: "M12 2A10 10 0 1 1 2 12" }]
    ];
    var CircleArrowOutUpRight = [
      ["path", { d: "M22 12A10 10 0 1 1 12 2" }],
      ["path", { d: "M22 2 12 12" }],
      ["path", { d: "M16 2h6v6" }]
    ];
    var CircleArrowRight = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m12 16 4-4-4-4" }],
      ["path", { d: "M8 12h8" }]
    ];
    var CircleArrowUp = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m16 12-4-4-4 4" }],
      ["path", { d: "M12 16V8" }]
    ];
    var CircleCheckBig = [
      ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335" }],
      ["path", { d: "m9 11 3 3L22 4" }]
    ];
    var CircleCheck = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m9 12 2 2 4-4" }]
    ];
    var CircleChevronDown = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m16 10-4 4-4-4" }]
    ];
    var CircleChevronLeft = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m14 16-4-4 4-4" }]
    ];
    var CircleChevronRight = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m10 8 4 4-4 4" }]
    ];
    var CircleChevronUp = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m8 14 4-4 4 4" }]
    ];
    var CircleDashed = [
      ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0" }],
      ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0" }],
      ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7" }],
      ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8" }],
      ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69" }],
      ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8" }],
      ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69" }],
      ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7" }]
    ];
    var CircleDivide = [
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var CircleDollarSign = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
      ["path", { d: "M12 18V6" }]
    ];
    var CircleDotDashed = [
      ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }],
      ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }],
      ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }],
      ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }],
      ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }],
      ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }],
      ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }],
      ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }],
      ["circle", { cx: "12", cy: "12", r: "1" }]
    ];
    var CircleEllipsis = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M17 12h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M7 12h.01" }]
    ];
    var CircleDot = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "12", r: "1" }]
    ];
    var CircleEqual = [
      ["path", { d: "M7 10h10" }],
      ["path", { d: "M7 14h10" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var CircleFadingArrowUp = [
      ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }],
      ["path", { d: "m16 12-4-4-4 4" }],
      ["path", { d: "M12 16V8" }],
      ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }],
      ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }],
      ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }],
      ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]
    ];
    var CircleFadingPlus = [
      ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }],
      ["path", { d: "M12 8v8" }],
      ["path", { d: "M16 12H8" }],
      ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }],
      ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }],
      ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }],
      ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]
    ];
    var CircleGauge = [
      ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7" }],
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "M13.4 10.6 19 5" }]
    ];
    var CircleMinus = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M8 12h8" }]
    ];
    var CircleOff = [
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }],
      ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92" }]
    ];
    var CircleParkingOff = [
      ["path", { d: "M12.656 7H13a3 3 0 0 1 2.984 3.307" }],
      ["path", { d: "M13 13H9" }],
      ["path", { d: "M19.071 19.071A1 1 0 0 1 4.93 4.93" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M8.357 2.687a10 10 0 0 1 12.956 12.956" }],
      ["path", { d: "M9 17V9" }]
    ];
    var CircleParking = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]
    ];
    var CirclePause = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }],
      ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }]
    ];
    var CirclePercent = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "M9 9h.01" }],
      ["path", { d: "M15 15h.01" }]
    ];
    var CirclePlay = [
      [
        "path",
        {
          d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var CirclePoundSterling = [
      ["path", { d: "M10 16V9.5a1 1 0 0 1 5 0" }],
      ["path", { d: "M8 12h4" }],
      ["path", { d: "M8 16h7" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var CirclePlus = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "M12 8v8" }]
    ];
    var CirclePower = [
      ["path", { d: "M12 7v4" }],
      ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var CircleQuestionMark = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
      ["path", { d: "M12 17h.01" }]
    ];
    var CircleSlash2 = [
      ["path", { d: "M22 2 2 22" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var CircleSlash = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]
    ];
    var CircleSmall = [["circle", { cx: "12", cy: "12", r: "6" }]];
    var CircleStar = [
      [
        "path",
        {
          d: "M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var CircleStop = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }]
    ];
    var CircleUserRound = [
      ["path", { d: "M18 20a6 6 0 0 0-12 0" }],
      ["circle", { cx: "12", cy: "10", r: "4" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var CircleUser = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }]
    ];
    var CircleX = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "m9 9 6 6" }]
    ];
    var Circle = [["circle", { cx: "12", cy: "12", r: "10" }]];
    var CircuitBoard = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3" }],
      ["circle", { cx: "9", cy: "9", r: "2" }],
      ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4" }],
      ["circle", { cx: "15", cy: "15", r: "2" }]
    ];
    var Citrus = [
      [
        "path",
        { d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" }
      ],
      ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34" }],
      ["path", { d: "m14 10-5.5 5.5" }],
      ["path", { d: "M14 17.85V10H6.15" }]
    ];
    var Clapperboard = [
      ["path", { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" }],
      ["path", { d: "m6.2 5.3 3.1 3.9" }],
      ["path", { d: "m12.4 3.4 3.1 4" }],
      ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }]
    ];
    var ClipboardCheck = [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "m9 14 2 2 4-4" }]
    ];
    var ClipboardClock = [
      ["path", { d: "M16 14v2.2l1.6 1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v.832" }],
      ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }],
      ["circle", { cx: "16", cy: "16", r: "6" }],
      ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }]
    ];
    var ClipboardCopy = [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4" }],
      ["path", { d: "M21 14H11" }],
      ["path", { d: "m15 10-4 4 4 4" }]
    ];
    var ClipboardList = [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M12 11h4" }],
      ["path", { d: "M12 16h4" }],
      ["path", { d: "M8 11h.01" }],
      ["path", { d: "M8 16h.01" }]
    ];
    var ClipboardMinus = [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M9 14h6" }]
    ];
    var ClipboardPaste = [
      ["path", { d: "M11 14h10" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v1.344" }],
      ["path", { d: "m17 18 4-4-4-4" }],
      ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" }],
      ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }]
    ];
    var ClipboardPenLine = [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }],
      ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1" }],
      ["path", { d: "M8 18h1" }],
      [
        "path",
        {
          d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ]
    ];
    var ClipboardPen = [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" }],
      ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2" }],
      [
        "path",
        {
          d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ]
    ];
    var ClipboardPlus = [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M9 14h6" }],
      ["path", { d: "M12 17v-6" }]
    ];
    var ClipboardType = [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M9 12v-1h6v1" }],
      ["path", { d: "M11 17h2" }],
      ["path", { d: "M12 11v6" }]
    ];
    var ClipboardX = [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "m15 11-6 6" }],
      ["path", { d: "m9 11 6 6" }]
    ];
    var Clipboard = [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }]
    ];
    var Clock1 = [
      ["path", { d: "M12 6v6l2-4" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock10 = [
      ["path", { d: "M12 6v6l-4-2" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock11 = [
      ["path", { d: "M12 6v6l-2-4" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock12 = [
      ["path", { d: "M12 6v6" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock2 = [
      ["path", { d: "M12 6v6l4-2" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock3 = [
      ["path", { d: "M12 6v6h4" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock4 = [
      ["path", { d: "M12 6v6l4 2" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock5 = [
      ["path", { d: "M12 6v6l2 4" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock6 = [
      ["path", { d: "M12 6v10" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock7 = [
      ["path", { d: "M12 6v6l-2 4" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock8 = [
      ["path", { d: "M12 6v6l-4 2" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Clock9 = [
      ["path", { d: "M12 6v6H8" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var ClockAlert = [
      ["path", { d: "M12 6v6l4 2" }],
      ["path", { d: "M20 12v5" }],
      ["path", { d: "M20 21h.01" }],
      ["path", { d: "M21.25 8.2A10 10 0 1 0 16 21.16" }]
    ];
    var ClockArrowDown = [
      ["path", { d: "M12 6v6l2 1" }],
      ["path", { d: "M12.337 21.994a10 10 0 1 1 9.588-8.767" }],
      ["path", { d: "m14 18 4 4 4-4" }],
      ["path", { d: "M18 14v8" }]
    ];
    var ClockArrowUp = [
      ["path", { d: "M12 6v6l1.56.78" }],
      ["path", { d: "M13.227 21.925a10 10 0 1 1 8.767-9.588" }],
      ["path", { d: "m14 18 4-4 4 4" }],
      ["path", { d: "M18 22v-8" }]
    ];
    var ClockFading = [
      ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }],
      ["path", { d: "M12 6v6l4 2" }],
      ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }],
      ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }],
      ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }],
      ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]
    ];
    var ClockPlus = [
      ["path", { d: "M12 6v6l3.644 1.822" }],
      ["path", { d: "M16 19h6" }],
      ["path", { d: "M19 16v6" }],
      ["path", { d: "M21.92 13.267a10 10 0 1 0-8.653 8.653" }]
    ];
    var Clock = [
      ["path", { d: "M12 6v6l4 2" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var ClosedCaption = [
      ["path", { d: "M10 9.17a3 3 0 1 0 0 5.66" }],
      ["path", { d: "M17 9.17a3 3 0 1 0 0 5.66" }],
      ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]
    ];
    var CloudAlert = [
      ["path", { d: "M12 12v4" }],
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708" }]
    ];
    var CloudCheck = [
      ["path", { d: "m17 15-5.5 5.5L9 18" }],
      ["path", { d: "M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742" }]
    ];
    var CloudCog = [
      ["path", { d: "m10.852 19.772-.383.924" }],
      ["path", { d: "m13.148 14.228.383-.923" }],
      ["path", { d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" }],
      ["path", { d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" }],
      ["path", { d: "m14.772 15.852.923-.383" }],
      ["path", { d: "m14.772 18.148.923.383" }],
      ["path", { d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }],
      ["path", { d: "m9.228 15.852-.923-.383" }],
      ["path", { d: "m9.228 18.148-.923.383" }]
    ];
    var CloudDownload = [
      ["path", { d: "M12 13v8l-4-4" }],
      ["path", { d: "m12 21 4-4" }],
      ["path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" }]
    ];
    var CloudDrizzle = [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M8 19v1" }],
      ["path", { d: "M8 14v1" }],
      ["path", { d: "M16 19v1" }],
      ["path", { d: "M16 14v1" }],
      ["path", { d: "M12 21v1" }],
      ["path", { d: "M12 16v1" }]
    ];
    var CloudFog = [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M16 17H7" }],
      ["path", { d: "M17 21H9" }]
    ];
    var CloudHail = [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M16 14v2" }],
      ["path", { d: "M8 14v2" }],
      ["path", { d: "M16 20h.01" }],
      ["path", { d: "M8 20h.01" }],
      ["path", { d: "M12 16v2" }],
      ["path", { d: "M12 22h.01" }]
    ];
    var CloudLightning = [
      ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" }],
      ["path", { d: "m13 12-3 5h4l-3 5" }]
    ];
    var CloudMoonRain = [
      ["path", { d: "M11 20v2" }],
      [
        "path",
        {
          d: "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"
        }
      ],
      ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }],
      ["path", { d: "M7 19v2" }]
    ];
    var CloudOff = [
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" }],
      ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07" }]
    ];
    var CloudMoon = [
      ["path", { d: "M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z" }],
      [
        "path",
        {
          d: "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"
        }
      ]
    ];
    var CloudRainWind = [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "m9.2 22 3-7" }],
      ["path", { d: "m9 13-3 7" }],
      ["path", { d: "m17 13-3 7" }]
    ];
    var CloudRain = [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M16 14v6" }],
      ["path", { d: "M8 14v6" }],
      ["path", { d: "M12 16v6" }]
    ];
    var CloudSnow = [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "M8 15h.01" }],
      ["path", { d: "M8 19h.01" }],
      ["path", { d: "M12 17h.01" }],
      ["path", { d: "M12 21h.01" }],
      ["path", { d: "M16 15h.01" }],
      ["path", { d: "M16 19h.01" }]
    ];
    var CloudSunRain = [
      ["path", { d: "M12 2v2" }],
      ["path", { d: "m4.93 4.93 1.41 1.41" }],
      ["path", { d: "M20 12h2" }],
      ["path", { d: "m19.07 4.93-1.41 1.41" }],
      ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }],
      ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }],
      ["path", { d: "M11 20v2" }],
      ["path", { d: "M7 19v2" }]
    ];
    var CloudSun = [
      ["path", { d: "M12 2v2" }],
      ["path", { d: "m4.93 4.93 1.41 1.41" }],
      ["path", { d: "M20 12h2" }],
      ["path", { d: "m19.07 4.93-1.41 1.41" }],
      ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }],
      ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }]
    ];
    var CloudUpload = [
      ["path", { d: "M12 13v8" }],
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
      ["path", { d: "m8 17 4-4 4 4" }]
    ];
    var Cloud = [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }]];
    var Cloudy = [
      ["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }],
      ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" }]
    ];
    var Clover = [
      ["path", { d: "M16.17 7.83 2 22" }],
      [
        "path",
        {
          d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"
        }
      ],
      ["path", { d: "m7.83 7.83 8.34 8.34" }]
    ];
    var Club = [
      [
        "path",
        { d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" }
      ],
      ["path", { d: "M12 17.66L12 22" }]
    ];
    var CodeXml = [
      ["path", { d: "m18 16 4-4-4-4" }],
      ["path", { d: "m6 8-4 4 4 4" }],
      ["path", { d: "m14.5 4-5 16" }]
    ];
    var Code = [
      ["path", { d: "m16 18 6-6-6-6" }],
      ["path", { d: "m8 6-6 6 6 6" }]
    ];
    var Codepen = [
      ["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5" }],
      ["polyline", { points: "22 8.5 12 15.5 2 8.5" }],
      ["polyline", { points: "2 15.5 12 8.5 22 15.5" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5" }]
    ];
    var Codesandbox = [
      [
        "path",
        {
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        }
      ],
      ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21" }],
      ["polyline", { points: "7.5 19.79 7.5 14.6 3 12" }],
      ["polyline", { points: "21 12 16.5 14.6 16.5 19.79" }],
      ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }],
      ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12" }]
    ];
    var Coffee = [
      ["path", { d: "M10 2v2" }],
      ["path", { d: "M14 2v2" }],
      [
        "path",
        {
          d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
        }
      ],
      ["path", { d: "M6 2v2" }]
    ];
    var Cog = [
      ["path", { d: "M11 10.27 7 3.34" }],
      ["path", { d: "m11 13.73-4 6.93" }],
      ["path", { d: "M12 22v-2" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M14 12h8" }],
      ["path", { d: "m17 20.66-1-1.73" }],
      ["path", { d: "m17 3.34-1 1.73" }],
      ["path", { d: "M2 12h2" }],
      ["path", { d: "m20.66 17-1.73-1" }],
      ["path", { d: "m20.66 7-1.73 1" }],
      ["path", { d: "m3.34 17 1.73-1" }],
      ["path", { d: "m3.34 7 1.73 1" }],
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["circle", { cx: "12", cy: "12", r: "8" }]
    ];
    var Coins = [
      ["circle", { cx: "8", cy: "8", r: "6" }],
      ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18" }],
      ["path", { d: "M7 6h1v4" }],
      ["path", { d: "m16.71 13.88.7.71-2.82 2.82" }]
    ];
    var Columns2 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M12 3v18" }]
    ];
    var Columns3Cog = [
      ["path", { d: "M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" }],
      ["path", { d: "m14.3 19.6 1-.4" }],
      ["path", { d: "M15 3v7.5" }],
      ["path", { d: "m15.2 16.9-.9-.3" }],
      ["path", { d: "m16.6 21.7.3-.9" }],
      ["path", { d: "m16.8 15.3-.4-1" }],
      ["path", { d: "m19.1 15.2.3-.9" }],
      ["path", { d: "m19.6 21.7-.4-1" }],
      ["path", { d: "m20.7 16.8 1-.4" }],
      ["path", { d: "m21.7 19.4-.9-.3" }],
      ["path", { d: "M9 3v18" }],
      ["circle", { cx: "18", cy: "18", r: "3" }]
    ];
    var Columns3 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 3v18" }],
      ["path", { d: "M15 3v18" }]
    ];
    var Columns4 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7.5 3v18" }],
      ["path", { d: "M12 3v18" }],
      ["path", { d: "M16.5 3v18" }]
    ];
    var Combine = [
      ["path", { d: "M10 18H5a3 3 0 0 1-3-3v-1" }],
      ["path", { d: "M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }],
      ["path", { d: "M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }],
      ["path", { d: "m7 21 3-3-3-3" }],
      ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }],
      ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }]
    ];
    var Compass = [
      [
        "path",
        {
          d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Command = [
      ["path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" }]
    ];
    var Component = [
      [
        "path",
        {
          d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
        }
      ],
      [
        "path",
        {
          d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"
        }
      ],
      [
        "path",
        {
          d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"
        }
      ],
      [
        "path",
        {
          d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
        }
      ]
    ];
    var Computer = [
      ["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
      ["path", { d: "M6 18h2" }],
      ["path", { d: "M12 18h6" }]
    ];
    var ConciergeBell = [
      ["path", { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" }],
      ["path", { d: "M20 16a8 8 0 1 0-16 0" }],
      ["path", { d: "M12 4v4" }],
      ["path", { d: "M10 4h4" }]
    ];
    var Cone = [
      ["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }],
      ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3" }]
    ];
    var Construction = [
      ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1" }],
      ["path", { d: "M17 14v7" }],
      ["path", { d: "M7 14v7" }],
      ["path", { d: "M17 3v3" }],
      ["path", { d: "M7 3v3" }],
      ["path", { d: "M10 14 2.3 6.3" }],
      ["path", { d: "m14 6 7.7 7.7" }],
      ["path", { d: "m8 6 8 8" }]
    ];
    var ContactRound = [
      ["path", { d: "M16 2v2" }],
      ["path", { d: "M17.915 22a6 6 0 0 0-12 0" }],
      ["path", { d: "M8 2v2" }],
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }]
    ];
    var Contact = [
      ["path", { d: "M16 2v2" }],
      ["path", { d: "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M8 2v2" }],
      ["circle", { cx: "12", cy: "11", r: "3" }],
      ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }]
    ];
    var Container = [
      [
        "path",
        {
          d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
        }
      ],
      ["path", { d: "M10 21.9V14L2.1 9.1" }],
      ["path", { d: "m10 14 11.9-6.9" }],
      ["path", { d: "M14 19.8v-8.1" }],
      ["path", { d: "M18 17.5V9.4" }]
    ];
    var Contrast = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 18a6 6 0 0 0 0-12v12z" }]
    ];
    var Cookie = [
      ["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" }],
      ["path", { d: "M8.5 8.5v.01" }],
      ["path", { d: "M16 15.5v.01" }],
      ["path", { d: "M12 12v.01" }],
      ["path", { d: "M11 17v.01" }],
      ["path", { d: "M7 14v.01" }]
    ];
    var CookingPot = [
      ["path", { d: "M2 12h20" }],
      ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }],
      ["path", { d: "m4 8 16-4" }],
      ["path", { d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }]
    ];
    var CopyCheck = [
      ["path", { d: "m12 15 2 2 4-4" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ];
    var CopyMinus = [
      ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ];
    var CopyPlus = [
      ["line", { x1: "15", x2: "15", y1: "12", y2: "18" }],
      ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ];
    var CopySlash = [
      ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ];
    var CopyX = [
      ["line", { x1: "12", x2: "18", y1: "12", y2: "18" }],
      ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ];
    var Copy = [
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
    ];
    var Copyright = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66" }]
    ];
    var Copyleft = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66" }]
    ];
    var CornerDownLeft = [
      ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }],
      ["path", { d: "m9 10-5 5 5 5" }]
    ];
    var CornerDownRight = [
      ["path", { d: "m15 10 5 5-5 5" }],
      ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12" }]
    ];
    var CornerLeftDown = [
      ["path", { d: "m14 15-5 5-5-5" }],
      ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" }]
    ];
    var CornerLeftUp = [
      ["path", { d: "M14 9 9 4 4 9" }],
      ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4" }]
    ];
    var CornerRightDown = [
      ["path", { d: "m10 15 5 5 5-5" }],
      ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12" }]
    ];
    var CornerRightUp = [
      ["path", { d: "m10 9 5-5 5 5" }],
      ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4" }]
    ];
    var CornerUpLeft = [
      ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4" }],
      ["path", { d: "M9 14 4 9l5-5" }]
    ];
    var CornerUpRight = [
      ["path", { d: "m15 14 5-5-5-5" }],
      ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12" }]
    ];
    var Cpu = [
      ["path", { d: "M12 20v2" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M17 20v2" }],
      ["path", { d: "M17 2v2" }],
      ["path", { d: "M2 12h2" }],
      ["path", { d: "M2 17h2" }],
      ["path", { d: "M2 7h2" }],
      ["path", { d: "M20 12h2" }],
      ["path", { d: "M20 17h2" }],
      ["path", { d: "M20 7h2" }],
      ["path", { d: "M7 20v2" }],
      ["path", { d: "M7 2v2" }],
      ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }],
      ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }]
    ];
    var CreativeCommons = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }],
      ["path", { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }]
    ];
    var CreditCard = [
      ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10" }]
    ];
    var Croissant = [
      ["path", { d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" }],
      ["path", { d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" }],
      ["path", { d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" }],
      ["path", { d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" }],
      [
        "path",
        {
          d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676"
        }
      ]
    ];
    var Crop = [
      ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }],
      ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }]
    ];
    var Cross = [
      [
        "path",
        {
          d: "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"
        }
      ]
    ];
    var Crosshair = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["line", { x1: "22", x2: "18", y1: "12", y2: "12" }],
      ["line", { x1: "6", x2: "2", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "6", y2: "2" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "18" }]
    ];
    var Crown = [
      [
        "path",
        {
          d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
        }
      ],
      ["path", { d: "M5 21h14" }]
    ];
    var Cuboid = [
      [
        "path",
        {
          d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"
        }
      ],
      ["path", { d: "M10 22v-8L2.25 9.15" }],
      ["path", { d: "m10 14 11.77-6.87" }]
    ];
    var CupSoda = [
      ["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }],
      ["path", { d: "M5 8h14" }],
      ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }],
      ["path", { d: "m12 8 1-6h2" }]
    ];
    var Currency = [
      ["circle", { cx: "12", cy: "12", r: "8" }],
      ["line", { x1: "3", x2: "6", y1: "3", y2: "6" }],
      ["line", { x1: "21", x2: "18", y1: "3", y2: "6" }],
      ["line", { x1: "3", x2: "6", y1: "21", y2: "18" }],
      ["line", { x1: "21", x2: "18", y1: "21", y2: "18" }]
    ];
    var Cylinder = [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
      ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }]
    ];
    var Dam = [
      ["path", { d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
      ["path", { d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
      ["path", { d: "M2 10h4" }],
      ["path", { d: "M2 14h4" }],
      ["path", { d: "M2 18h4" }],
      ["path", { d: "M2 6h4" }],
      ["path", { d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" }]
    ];
    var DatabaseBackup = [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
      ["path", { d: "M3 12a9 3 0 0 0 5 2.69" }],
      ["path", { d: "M21 9.3V5" }],
      ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88" }],
      ["path", { d: "M12 12v4h4" }],
      ["path", { d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" }]
    ];
    var DatabaseZap = [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
      ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84" }],
      ["path", { d: "M21 5V8" }],
      ["path", { d: "M21 12L18 17H22L19 22" }],
      ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87" }]
    ];
    var Database = [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
      ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5" }],
      ["path", { d: "M3 12A9 3 0 0 0 21 12" }]
    ];
    var DecimalsArrowLeft = [
      ["path", { d: "m13 21-3-3 3-3" }],
      ["path", { d: "M20 18H10" }],
      ["path", { d: "M3 11h.01" }],
      ["rect", { x: "6", y: "3", width: "5", height: "8", rx: "2.5" }]
    ];
    var DecimalsArrowRight = [
      ["path", { d: "M10 18h10" }],
      ["path", { d: "m17 21 3-3-3-3" }],
      ["path", { d: "M3 11h.01" }],
      ["rect", { x: "15", y: "3", width: "5", height: "8", rx: "2.5" }],
      ["rect", { x: "6", y: "3", width: "5", height: "8", rx: "2.5" }]
    ];
    var Delete = [
      [
        "path",
        {
          d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
        }
      ],
      ["path", { d: "m12 9 6 6" }],
      ["path", { d: "m18 9-6 6" }]
    ];
    var Dessert = [
      [
        "path",
        {
          d: "M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826"
        }
      ],
      ["path", { d: "M20.804 14.869a9 9 0 0 1-17.608 0" }],
      ["circle", { cx: "12", cy: "4", r: "2" }]
    ];
    var Diameter = [
      ["circle", { cx: "19", cy: "19", r: "2" }],
      ["circle", { cx: "5", cy: "5", r: "2" }],
      ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86" }],
      ["path", { d: "m6.41 6.41 11.18 11.18" }],
      ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86" }]
    ];
    var DiamondMinus = [
      [
        "path",
        {
          d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
        }
      ],
      ["path", { d: "M8 12h8" }]
    ];
    var DiamondPercent = [
      [
        "path",
        {
          d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
        }
      ],
      ["path", { d: "M9.2 9.2h.01" }],
      ["path", { d: "m14.5 9.5-5 5" }],
      ["path", { d: "M14.7 14.8h.01" }]
    ];
    var DiamondPlus = [
      ["path", { d: "M12 8v8" }],
      [
        "path",
        {
          d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
        }
      ],
      ["path", { d: "M8 12h8" }]
    ];
    var Dice1 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M12 12h.01" }]
    ];
    var Diamond = [
      [
        "path",
        {
          d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
        }
      ]
    ];
    var Dice2 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M15 9h.01" }],
      ["path", { d: "M9 15h.01" }]
    ];
    var Dice3 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M16 8h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M8 16h.01" }]
    ];
    var Dice4 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M16 8h.01" }],
      ["path", { d: "M8 8h.01" }],
      ["path", { d: "M8 16h.01" }],
      ["path", { d: "M16 16h.01" }]
    ];
    var Dice5 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M16 8h.01" }],
      ["path", { d: "M8 8h.01" }],
      ["path", { d: "M8 16h.01" }],
      ["path", { d: "M16 16h.01" }],
      ["path", { d: "M12 12h.01" }]
    ];
    var Dice6 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M16 8h.01" }],
      ["path", { d: "M16 12h.01" }],
      ["path", { d: "M16 16h.01" }],
      ["path", { d: "M8 8h.01" }],
      ["path", { d: "M8 12h.01" }],
      ["path", { d: "M8 16h.01" }]
    ];
    var Dices = [
      ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2" }],
      ["path", { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "M10 14h.01" }],
      ["path", { d: "M15 6h.01" }],
      ["path", { d: "M18 9h.01" }]
    ];
    var Diff = [
      ["path", { d: "M12 3v14" }],
      ["path", { d: "M5 10h14" }],
      ["path", { d: "M5 21h14" }]
    ];
    var Disc2 = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["path", { d: "M12 12h.01" }]
    ];
    var Disc3 = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2" }],
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2" }]
    ];
    var DiscAlbum = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["circle", { cx: "12", cy: "12", r: "5" }],
      ["path", { d: "M12 12h.01" }]
    ];
    var Disc = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ];
    var Divide = [
      ["circle", { cx: "12", cy: "6", r: "1" }],
      ["line", { x1: "5", x2: "19", y1: "12", y2: "12" }],
      ["circle", { cx: "12", cy: "18", r: "1" }]
    ];
    var DnaOff = [
      ["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" }],
      ["path", { d: "m17 6-2.891-2.891" }],
      ["path", { d: "M2 15c3.333-3 6.667-3 10-3" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "m20 9 .891.891" }],
      ["path", { d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" }],
      ["path", { d: "M3.109 14.109 4 15" }],
      ["path", { d: "m6.5 12.5 1 1" }],
      ["path", { d: "m7 18 2.891 2.891" }],
      ["path", { d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" }]
    ];
    var Dna = [
      ["path", { d: "m10 16 1.5 1.5" }],
      ["path", { d: "m14 8-1.5-1.5" }],
      ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }],
      ["path", { d: "m16.5 10.5 1 1" }],
      ["path", { d: "m17 6-2.891-2.891" }],
      ["path", { d: "M2 15c6.667-6 13.333 0 20-6" }],
      ["path", { d: "m20 9 .891.891" }],
      ["path", { d: "M3.109 14.109 4 15" }],
      ["path", { d: "m6.5 12.5 1 1" }],
      ["path", { d: "m7 18 2.891 2.891" }],
      ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }]
    ];
    var Dog = [
      ["path", { d: "M11.25 16.25h1.5L12 17z" }],
      ["path", { d: "M16 14v.5" }],
      [
        "path",
        {
          d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"
        }
      ],
      ["path", { d: "M8 14v.5" }],
      [
        "path",
        {
          d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
        }
      ]
    ];
    var Dock = [
      ["path", { d: "M2 8h20" }],
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M6 16h12" }]
    ];
    var DollarSign = [
      ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }],
      ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }]
    ];
    var Donut = [
      [
        "path",
        {
          d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3" }]
    ];
    var DoorClosedLocked = [
      ["path", { d: "M10 12h.01" }],
      ["path", { d: "M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }],
      ["path", { d: "M2 20h8" }],
      ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2" }],
      ["rect", { x: "14", y: "17", width: "8", height: "5", rx: "1" }]
    ];
    var DoorClosed = [
      ["path", { d: "M10 12h.01" }],
      ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }],
      ["path", { d: "M2 20h20" }]
    ];
    var DoorOpen = [
      ["path", { d: "M11 20H2" }],
      [
        "path",
        {
          d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"
        }
      ],
      ["path", { d: "M11 4H8a2 2 0 0 0-2 2v14" }],
      ["path", { d: "M14 12h.01" }],
      ["path", { d: "M22 20h-3" }]
    ];
    var Download = [
      ["path", { d: "M12 15V3" }],
      ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
      ["path", { d: "m7 10 5 5 5-5" }]
    ];
    var Dot = [["circle", { cx: "12.1", cy: "12.1", r: "1" }]];
    var DraftingCompass = [
      ["path", { d: "m12.99 6.74 1.93 3.44" }],
      ["path", { d: "M19.136 12a10 10 0 0 1-14.271 0" }],
      ["path", { d: "m21 21-2.16-3.84" }],
      ["path", { d: "m3 21 8.02-14.26" }],
      ["circle", { cx: "12", cy: "5", r: "2" }]
    ];
    var Drama = [
      ["path", { d: "M10 11h.01" }],
      ["path", { d: "M14 6h.01" }],
      ["path", { d: "M18 6h.01" }],
      ["path", { d: "M6.5 13.1h.01" }],
      ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" }],
      ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0" }],
      [
        "path",
        {
          d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
        }
      ],
      ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" }]
    ];
    var Dribbble = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" }],
      ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" }],
      ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72" }]
    ];
    var Drill = [
      ["path", { d: "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" }],
      [
        "path",
        {
          d: "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"
        }
      ],
      ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" }],
      ["path", { d: "M18 6h4" }],
      ["path", { d: "m5 10-2 8" }],
      ["path", { d: "m7 18 2-8" }]
    ];
    var Drone = [
      ["path", { d: "M10 10 7 7" }],
      ["path", { d: "m10 14-3 3" }],
      ["path", { d: "m14 10 3-3" }],
      ["path", { d: "m14 14 3 3" }],
      ["path", { d: "M14.205 4.139a4 4 0 1 1 5.439 5.863" }],
      ["path", { d: "M19.637 14a4 4 0 1 1-5.432 5.868" }],
      ["path", { d: "M4.367 10a4 4 0 1 1 5.438-5.862" }],
      ["path", { d: "M9.795 19.862a4 4 0 1 1-5.429-5.873" }],
      ["rect", { x: "10", y: "8", width: "4", height: "8", rx: "1" }]
    ];
    var Droplet = [
      [
        "path",
        {
          d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
        }
      ]
    ];
    var DropletOff = [
      [
        "path",
        {
          d: "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"
        }
      ],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" }]
    ];
    var Droplets = [
      [
        "path",
        {
          d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
        }
      ],
      [
        "path",
        {
          d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
        }
      ]
    ];
    var Drum = [
      ["path", { d: "m2 2 8 8" }],
      ["path", { d: "m22 2-8 8" }],
      ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5" }],
      ["path", { d: "M7 13.4v7.9" }],
      ["path", { d: "M12 14v8" }],
      ["path", { d: "M17 13.4v7.9" }],
      ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9" }]
    ];
    var Drumstick = [
      ["path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }],
      ["path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" }]
    ];
    var Dumbbell = [
      [
        "path",
        {
          d: "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"
        }
      ],
      ["path", { d: "m2.5 21.5 1.4-1.4" }],
      ["path", { d: "m20.1 3.9 1.4-1.4" }],
      [
        "path",
        {
          d: "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"
        }
      ],
      ["path", { d: "m9.6 14.4 4.8-4.8" }]
    ];
    var Ear = [
      ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }],
      ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" }]
    ];
    var EarOff = [
      ["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" }],
      ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14" }],
      ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" }],
      ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var EarthLock = [
      ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3" }],
      ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }],
      ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }],
      ["path", { d: "M12 2a10 10 0 1 0 9.54 13" }],
      ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }],
      ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]
    ];
    var Earth = [
      ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }],
      [
        "path",
        { d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" }
      ],
      ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Eclipse = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 2a7 7 0 1 0 10 10" }]
    ];
    var EggFried = [
      ["circle", { cx: "11.5", cy: "12.5", r: "3.5" }],
      [
        "path",
        {
          d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
        }
      ]
    ];
    var EggOff = [
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" }],
      ["path", { d: "M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" }]
    ];
    var Egg = [["path", { d: "M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" }]];
    var EllipsisVertical = [
      ["circle", { cx: "12", cy: "12", r: "1" }],
      ["circle", { cx: "12", cy: "5", r: "1" }],
      ["circle", { cx: "12", cy: "19", r: "1" }]
    ];
    var Ellipsis = [
      ["circle", { cx: "12", cy: "12", r: "1" }],
      ["circle", { cx: "19", cy: "12", r: "1" }],
      ["circle", { cx: "5", cy: "12", r: "1" }]
    ];
    var EqualApproximately = [
      ["path", { d: "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }],
      ["path", { d: "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }]
    ];
    var EqualNot = [
      ["line", { x1: "5", x2: "19", y1: "9", y2: "9" }],
      ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }],
      ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]
    ];
    var Equal = [
      ["line", { x1: "5", x2: "19", y1: "9", y2: "9" }],
      ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }]
    ];
    var Eraser = [
      [
        "path",
        {
          d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"
        }
      ],
      ["path", { d: "m5.082 11.09 8.828 8.828" }]
    ];
    var EthernetPort = [
      [
        "path",
        { d: "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" }
      ],
      ["path", { d: "M6 8v1" }],
      ["path", { d: "M10 8v1" }],
      ["path", { d: "M14 8v1" }],
      ["path", { d: "M18 8v1" }]
    ];
    var Euro = [
      ["path", { d: "M4 10h12" }],
      ["path", { d: "M4 14h9" }],
      [
        "path",
        { d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" }
      ]
    ];
    var EvCharger = [
      ["path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" }],
      ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" }],
      ["path", { d: "M2 21h13" }],
      ["path", { d: "M3 7h11" }],
      ["path", { d: "m9 11-2 3h3l-2 3" }]
    ];
    var Expand = [
      ["path", { d: "m15 15 6 6" }],
      ["path", { d: "m15 9 6-6" }],
      ["path", { d: "M21 16v5h-5" }],
      ["path", { d: "M21 8V3h-5" }],
      ["path", { d: "M3 16v5h5" }],
      ["path", { d: "m3 21 6-6" }],
      ["path", { d: "M3 8V3h5" }],
      ["path", { d: "M9 9 3 3" }]
    ];
    var ExternalLink = [
      ["path", { d: "M15 3h6v6" }],
      ["path", { d: "M10 14 21 3" }],
      ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]
    ];
    var EyeClosed = [
      ["path", { d: "m15 18-.722-3.25" }],
      ["path", { d: "M2 8a10.645 10.645 0 0 0 20 0" }],
      ["path", { d: "m20 15-1.726-2.05" }],
      ["path", { d: "m4 15 1.726-2.05" }],
      ["path", { d: "m9 18 .722-3.25" }]
    ];
    var EyeOff = [
      [
        "path",
        {
          d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
        }
      ],
      ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }],
      [
        "path",
        {
          d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
        }
      ],
      ["path", { d: "m2 2 20 20" }]
    ];
    var Eye = [
      [
        "path",
        {
          d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3" }]
    ];
    var Facebook = [
      ["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }]
    ];
    var Factory = [
      ["path", { d: "M12 16h.01" }],
      ["path", { d: "M16 16h.01" }],
      [
        "path",
        {
          d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"
        }
      ],
      ["path", { d: "M8 16h.01" }]
    ];
    var Fan = [
      [
        "path",
        {
          d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
        }
      ],
      ["path", { d: "M12 12v.01" }]
    ];
    var Feather = [
      [
        "path",
        {
          d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"
        }
      ],
      ["path", { d: "M16 8 2 22" }],
      ["path", { d: "M17.5 15H9" }]
    ];
    var FastForward = [
      ["path", { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" }],
      ["path", { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" }]
    ];
    var Fence = [
      ["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }],
      ["path", { d: "M6 8h4" }],
      ["path", { d: "M6 18h4" }],
      ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }],
      ["path", { d: "M14 8h4" }],
      ["path", { d: "M14 18h4" }],
      ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }]
    ];
    var FerrisWheel = [
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "M12 2v4" }],
      ["path", { d: "m6.8 15-3.5 2" }],
      ["path", { d: "m20.7 7-3.5 2" }],
      ["path", { d: "M6.8 9 3.3 7" }],
      ["path", { d: "m20.7 17-3.5-2" }],
      ["path", { d: "m9 22 3-8 3 8" }],
      ["path", { d: "M8 22h8" }],
      ["path", { d: "M18 18.7a9 9 0 1 0-12 0" }]
    ];
    var Figma = [
      ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }],
      ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }],
      ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }],
      ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }],
      ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" }]
    ];
    var FileAudio2 = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "3", cy: "17", r: "1" }],
      ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3" }],
      ["circle", { cx: "9", cy: "17", r: "1" }]
    ];
    var FileArchive = [
      ["path", { d: "M10 12v-1" }],
      ["path", { d: "M10 18v-2" }],
      ["path", { d: "M10 7V6" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }],
      ["circle", { cx: "10", cy: "20", r: "2" }]
    ];
    var FileAudio = [
      ["path", { d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        { d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0" }
      ]
    ];
    var FileAxis3d = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m8 18 4-4" }],
      ["path", { d: "M8 10v8h8" }]
    ];
    var FileBadge2 = [
      [
        "path",
        {
          d: "m13.69 12.479 1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"
        }
      ],
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }],
      ["circle", { cx: "12", cy: "10", r: "3" }]
    ];
    var FileBadge = [
      ["path", { d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        {
          d: "m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"
        }
      ],
      ["circle", { cx: "5", cy: "14", r: "3" }]
    ];
    var FileBox = [
      ["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        {
          d: "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"
        }
      ],
      ["path", { d: "M7 17v5" }],
      ["path", { d: "M11.7 14.2 7 17l-4.7-2.8" }]
    ];
    var FileChartColumnIncreasing = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 18v-2" }],
      ["path", { d: "M12 18v-4" }],
      ["path", { d: "M16 18v-6" }]
    ];
    var FileChartColumn = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 18v-1" }],
      ["path", { d: "M12 18v-6" }],
      ["path", { d: "M16 18v-3" }]
    ];
    var FileChartLine = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m16 13-3.5 3.5-2-2L8 17" }]
    ];
    var FileChartPie = [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5" }],
      ["path", { d: "M4.017 11.512a6 6 0 1 0 8.466 8.475" }],
      [
        "path",
        {
          d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"
        }
      ]
    ];
    var FileCheck = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m9 15 2 2 4-4" }]
    ];
    var FileCheck2 = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m3 15 2 2 4-4" }]
    ];
    var FileClock = [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M8 14v2.2l1.6 1" }],
      ["circle", { cx: "8", cy: "16", r: "6" }]
    ];
    var FileCode2 = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m5 12-3 3 3 3" }],
      ["path", { d: "m9 18 3-3-3-3" }]
    ];
    var FileCode = [
      ["path", { d: "M10 12.5 8 15l2 2.5" }],
      ["path", { d: "m14 12.5 2 2.5-2 2.5" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }]
    ];
    var FileCog = [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m2.305 15.53.923-.382" }],
      ["path", { d: "m3.228 12.852-.924-.383" }],
      ["path", { d: "M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5" }],
      ["path", { d: "m4.852 11.228-.383-.923" }],
      ["path", { d: "m4.852 16.772-.383.924" }],
      ["path", { d: "m7.148 11.228.383-.923" }],
      ["path", { d: "m7.53 17.696-.382-.924" }],
      ["path", { d: "m8.772 12.852.923-.383" }],
      ["path", { d: "m8.772 15.148.923.383" }],
      ["circle", { cx: "6", cy: "14", r: "3" }]
    ];
    var FileDiff = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M9 10h6" }],
      ["path", { d: "M12 13V7" }],
      ["path", { d: "M9 17h6" }]
    ];
    var FileDigit = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["rect", { width: "4", height: "6", x: "2", y: "12", rx: "2" }],
      ["path", { d: "M10 12h2v6" }],
      ["path", { d: "M10 18h4" }]
    ];
    var FileDown = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M12 18v-6" }],
      ["path", { d: "m9 15 3 3 3-3" }]
    ];
    var FileImage = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "10", cy: "12", r: "2" }],
      ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" }]
    ];
    var FileHeart = [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        {
          d: "M2.62 13.8A2.25 2.25 0 1 1 6 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"
        }
      ],
      ["path", { d: "M4 6.005V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-1.9-1.376" }]
    ];
    var FileInput = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M2 15h10" }],
      ["path", { d: "m9 18 3-3-3-3" }]
    ];
    var FileJson2 = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }],
      ["path", { d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]
    ];
    var FileJson = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }],
      ["path", { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]
    ];
    var FileKey2 = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "4", cy: "16", r: "2" }],
      ["path", { d: "m10 10-4.5 4.5" }],
      ["path", { d: "m9 11 1 1" }]
    ];
    var FileKey = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["circle", { cx: "10", cy: "16", r: "2" }],
      ["path", { d: "m16 10-4.5 4.5" }],
      ["path", { d: "m15 11 1 1" }]
    ];
    var FileLock = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1" }],
      ["path", { d: "M10 12v-2a2 2 0 1 1 4 0v2" }]
    ];
    var FileLock2 = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["rect", { width: "8", height: "5", x: "2", y: "13", rx: "1" }],
      ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2" }]
    ];
    var FileMinus2 = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M3 15h6" }]
    ];
    var FileMinus = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M9 15h6" }]
    ];
    var FileMusic = [
      ["path", { d: "M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4" }],
      ["path", { d: "M8 18v-7.7L16 9v7" }],
      ["circle", { cx: "14", cy: "16", r: "2" }],
      ["circle", { cx: "6", cy: "18", r: "2" }]
    ];
    var FileOutput = [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" }],
      ["path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" }],
      ["path", { d: "m5 11-3 3" }],
      ["path", { d: "m5 17-3-3h10" }]
    ];
    var FilePenLine = [
      [
        "path",
        { d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" }
      ],
      [
        "path",
        {
          d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ],
      ["path", { d: "M8 18h1" }]
    ];
    var FilePen = [
      ["path", { d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        {
          d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ]
    ];
    var FilePlay = [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }],
      [
        "path",
        {
          d: "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z"
        }
      ]
    ];
    var FilePlus2 = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M3 15h6" }],
      ["path", { d: "M6 12v6" }]
    ];
    var FilePlus = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M9 15h6" }],
      ["path", { d: "M12 18v-6" }]
    ];
    var FileQuestionMark = [
      ["path", { d: "M12 17h.01" }],
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }],
      ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }]
    ];
    var FileScan = [
      ["path", { d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M16 14a2 2 0 0 0-2 2" }],
      ["path", { d: "M20 14a2 2 0 0 1 2 2" }],
      ["path", { d: "M20 22a2 2 0 0 0 2-2" }],
      ["path", { d: "M16 22a2 2 0 0 1-2-2" }]
    ];
    var FileSearch2 = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "11.5", cy: "14.5", r: "2.5" }],
      ["path", { d: "M13.3 16.3 15 18" }]
    ];
    var FileSearch = [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
      ["path", { d: "m9 18-1.5-1.5" }],
      ["circle", { cx: "5", cy: "14", r: "3" }]
    ];
    var FileSliders = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "M10 11v2" }],
      ["path", { d: "M8 17h8" }],
      ["path", { d: "M14 16v2" }]
    ];
    var FileSpreadsheet = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 13h2" }],
      ["path", { d: "M14 13h2" }],
      ["path", { d: "M8 17h2" }],
      ["path", { d: "M14 17h2" }]
    ];
    var FileStack = [
      ["path", { d: "M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" }],
      ["path", { d: "M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" }],
      [
        "path",
        {
          d: "M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"
        }
      ]
    ];
    var FileSymlink = [
      ["path", { d: "m10 18 3-3-3-3" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      [
        "path",
        { d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }
      ]
    ];
    var FileTerminal = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m8 16 2-2-2-2" }],
      ["path", { d: "M12 18h4" }]
    ];
    var FileText = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M10 9H8" }],
      ["path", { d: "M16 13H8" }],
      ["path", { d: "M16 17H8" }]
    ];
    var FileType2 = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M2 13v-1h6v1" }],
      ["path", { d: "M5 12v6" }],
      ["path", { d: "M4 18h2" }]
    ];
    var FileType = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M9 13v-1h6v1" }],
      ["path", { d: "M12 12v6" }],
      ["path", { d: "M11 18h2" }]
    ];
    var FileUp = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M12 12v6" }],
      ["path", { d: "m15 15-3-3-3 3" }]
    ];
    var FileUser = [
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M15 18a3 3 0 1 0-6 0" }],
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }],
      ["circle", { cx: "12", cy: "13", r: "2" }]
    ];
    var FileVideoCamera = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["rect", { width: "8", height: "6", x: "2", y: "12", rx: "1" }],
      [
        "path",
        { d: "m10 13.843 3.033-1.755a.645.645 0 0 1 .967.56v4.704a.645.645 0 0 1-.967.56L10 16.157" }
      ]
    ];
    var FileVolume2 = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 15h.01" }],
      ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3" }],
      ["path", { d: "M15 12a5 5 0 0 1 0 6" }]
    ];
    var FileVolume = [
      ["path", { d: "M11 11a5 5 0 0 1 0 6" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23" }],
      [
        "path",
        {
          d: "M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"
        }
      ]
    ];
    var FileWarning = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M12 9v4" }],
      ["path", { d: "M12 17h.01" }]
    ];
    var FileX2 = [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m8 12.5-5 5" }],
      ["path", { d: "m3 12.5 5 5" }]
    ];
    var FileX = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "m14.5 12.5-5 5" }],
      ["path", { d: "m9.5 12.5 5 5" }]
    ];
    var File = [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }]
    ];
    var Files = [
      [
        "path",
        {
          d: "M15 2a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 21 8v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
        }
      ],
      ["path", { d: "M15 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" }]
    ];
    var Film = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 3v18" }],
      ["path", { d: "M3 7.5h4" }],
      ["path", { d: "M3 12h18" }],
      ["path", { d: "M3 16.5h4" }],
      ["path", { d: "M17 3v18" }],
      ["path", { d: "M17 7.5h4" }],
      ["path", { d: "M17 16.5h4" }]
    ];
    var Fingerprint = [
      ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }],
      ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88" }],
      ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02" }],
      ["path", { d: "M2 12a10 10 0 0 1 18-6" }],
      ["path", { d: "M2 16h.01" }],
      ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6" }],
      ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" }],
      ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2" }],
      ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2" }]
    ];
    var FireExtinguisher = [
      ["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" }],
      ["path", { d: "M9 18h8" }],
      ["path", { d: "M18 3h-3" }],
      ["path", { d: "M11 3a6 6 0 0 0-6 6v11" }],
      ["path", { d: "M5 13h4" }],
      ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" }]
    ];
    var FishOff = [
      [
        "path",
        {
          d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"
        }
      ],
      [
        "path",
        {
          d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"
        }
      ],
      [
        "path",
        {
          d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"
        }
      ]
    ];
    var FishSymbol = [["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8" }]];
    var Fish = [
      [
        "path",
        {
          d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
        }
      ],
      ["path", { d: "M18 12v.5" }],
      ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }],
      [
        "path",
        {
          d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
        }
      ],
      ["path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }],
      ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" }]
    ];
    var FlagOff = [
      ["path", { d: "M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M4 22V4" }],
      ["path", { d: "M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" }]
    ];
    var FlagTriangleLeft = [
      ["path", { d: "M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5" }]
    ];
    var FlagTriangleRight = [
      ["path", { d: "M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5" }]
    ];
    var Flag = [
      [
        "path",
        {
          d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"
        }
      ]
    ];
    var FlameKindling = [
      [
        "path",
        {
          d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
        }
      ],
      ["path", { d: "m5 22 14-4" }],
      ["path", { d: "m5 18 14 4" }]
    ];
    var Flame = [
      [
        "path",
        {
          d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
        }
      ]
    ];
    var FlashlightOff = [
      ["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" }],
      ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1" }],
      ["line", { x1: "11", x2: "18", y1: "6", y2: "6" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Flashlight = [
      ["path", { d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z" }],
      ["line", { x1: "6", x2: "18", y1: "6", y2: "6" }],
      ["line", { x1: "12", x2: "12", y1: "12", y2: "12" }]
    ];
    var FlaskConicalOff = [
      ["path", { d: "M10 2v2.343" }],
      ["path", { d: "M14 2v6.343" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" }],
      ["path", { d: "M6.453 15H15" }],
      ["path", { d: "M8.5 2h7" }]
    ];
    var FlaskConical = [
      [
        "path",
        {
          d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
        }
      ],
      ["path", { d: "M6.453 15h11.094" }],
      ["path", { d: "M8.5 2h7" }]
    ];
    var FlaskRound = [
      ["path", { d: "M10 2v6.292a7 7 0 1 0 4 0V2" }],
      ["path", { d: "M5 15h14" }],
      ["path", { d: "M8.5 2h7" }]
    ];
    var FlipHorizontal2 = [
      ["path", { d: "m3 7 5 5-5 5V7" }],
      ["path", { d: "m21 7-5 5 5 5V7" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "M12 14v2" }],
      ["path", { d: "M12 8v2" }],
      ["path", { d: "M12 2v2" }]
    ];
    var FlipHorizontal = [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }],
      ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "M12 14v2" }],
      ["path", { d: "M12 8v2" }],
      ["path", { d: "M12 2v2" }]
    ];
    var FlipVertical2 = [
      ["path", { d: "m17 3-5 5-5-5h10" }],
      ["path", { d: "m17 21-5-5-5 5h10" }],
      ["path", { d: "M4 12H2" }],
      ["path", { d: "M10 12H8" }],
      ["path", { d: "M16 12h-2" }],
      ["path", { d: "M22 12h-2" }]
    ];
    var FlipVertical = [
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }],
      ["path", { d: "M4 12H2" }],
      ["path", { d: "M10 12H8" }],
      ["path", { d: "M16 12h-2" }],
      ["path", { d: "M22 12h-2" }]
    ];
    var Flower = [
      ["circle", { cx: "12", cy: "12", r: "3" }],
      [
        "path",
        {
          d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
        }
      ],
      ["path", { d: "M12 7.5V9" }],
      ["path", { d: "M7.5 12H9" }],
      ["path", { d: "M16.5 12H15" }],
      ["path", { d: "M12 16.5V15" }],
      ["path", { d: "m8 8 1.88 1.88" }],
      ["path", { d: "M14.12 9.88 16 8" }],
      ["path", { d: "m8 16 1.88-1.88" }],
      ["path", { d: "M14.12 14.12 16 16" }]
    ];
    var Flower2 = [
      [
        "path",
        {
          d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
        }
      ],
      ["circle", { cx: "12", cy: "8", r: "2" }],
      ["path", { d: "M12 10v12" }],
      ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }],
      ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }]
    ];
    var Focus = [
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
    ];
    var FoldHorizontal = [
      ["path", { d: "M2 12h6" }],
      ["path", { d: "M22 12h-6" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M12 8v2" }],
      ["path", { d: "M12 14v2" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "m19 9-3 3 3 3" }],
      ["path", { d: "m5 15 3-3-3-3" }]
    ];
    var FoldVertical = [
      ["path", { d: "M12 22v-6" }],
      ["path", { d: "M12 8V2" }],
      ["path", { d: "M4 12H2" }],
      ["path", { d: "M10 12H8" }],
      ["path", { d: "M16 12h-2" }],
      ["path", { d: "M22 12h-2" }],
      ["path", { d: "m15 19-3-3-3 3" }],
      ["path", { d: "m15 5-3 3-3-3" }]
    ];
    var FolderArchive = [
      ["circle", { cx: "15", cy: "19", r: "2" }],
      [
        "path",
        {
          d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
        }
      ],
      ["path", { d: "M15 11v-1" }],
      ["path", { d: "M15 17v-2" }]
    ];
    var FolderCheck = [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "m9 13 2 2 4-4" }]
    ];
    var FolderClock = [
      ["path", { d: "M16 14v2.2l1.6 1" }],
      [
        "path",
        {
          d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"
        }
      ],
      ["circle", { cx: "16", cy: "16", r: "6" }]
    ];
    var FolderClosed = [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M2 10h20" }]
    ];
    var FolderCode = [
      ["path", { d: "M10 10.5 8 13l2 2.5" }],
      ["path", { d: "m14 10.5 2 2.5-2 2.5" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"
        }
      ]
    ];
    var FolderCog = [
      [
        "path",
        {
          d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"
        }
      ],
      ["path", { d: "m14.305 19.53.923-.382" }],
      ["path", { d: "m15.228 16.852-.923-.383" }],
      ["path", { d: "m16.852 15.228-.383-.923" }],
      ["path", { d: "m16.852 20.772-.383.924" }],
      ["path", { d: "m19.148 15.228.383-.923" }],
      ["path", { d: "m19.53 21.696-.382-.924" }],
      ["path", { d: "m20.772 16.852.924-.383" }],
      ["path", { d: "m20.772 19.148.924.383" }],
      ["circle", { cx: "18", cy: "18", r: "3" }]
    ];
    var FolderDot = [
      [
        "path",
        {
          d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }
      ],
      ["circle", { cx: "12", cy: "13", r: "1" }]
    ];
    var FolderDown = [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M12 10v6" }],
      ["path", { d: "m15 13-3 3-3-3" }]
    ];
    var FolderGit2 = [
      [
        "path",
        {
          d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
        }
      ],
      ["circle", { cx: "13", cy: "12", r: "2" }],
      ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8" }],
      ["circle", { cx: "20", cy: "19", r: "2" }]
    ];
    var FolderHeart = [
      [
        "path",
        {
          d: "M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417"
        }
      ],
      [
        "path",
        {
          d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"
        }
      ]
    ];
    var FolderGit = [
      ["circle", { cx: "12", cy: "13", r: "2" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M14 13h3" }],
      ["path", { d: "M7 13h3" }]
    ];
    var FolderKanban = [
      [
        "path",
        {
          d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }
      ],
      ["path", { d: "M8 10v4" }],
      ["path", { d: "M12 10v2" }],
      ["path", { d: "M16 10v6" }]
    ];
    var FolderInput = [
      [
        "path",
        {
          d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
        }
      ],
      ["path", { d: "M2 13h10" }],
      ["path", { d: "m9 16 3-3-3-3" }]
    ];
    var FolderKey = [
      ["circle", { cx: "16", cy: "20", r: "2" }],
      [
        "path",
        {
          d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"
        }
      ],
      ["path", { d: "m22 14-4.5 4.5" }],
      ["path", { d: "m21 15 1 1" }]
    ];
    var FolderLock = [
      ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1" }],
      [
        "path",
        {
          d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"
        }
      ],
      ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2" }]
    ];
    var FolderMinus = [
      ["path", { d: "M9 13h6" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ]
    ];
    var FolderOpenDot = [
      [
        "path",
        {
          d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
        }
      ],
      ["circle", { cx: "14", cy: "15", r: "1" }]
    ];
    var FolderOpen = [
      [
        "path",
        {
          d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
        }
      ]
    ];
    var FolderOutput = [
      [
        "path",
        {
          d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"
        }
      ],
      ["path", { d: "M2 13h10" }],
      ["path", { d: "m5 10-3 3 3 3" }]
    ];
    var FolderPen = [
      [
        "path",
        {
          d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"
        }
      ],
      [
        "path",
        {
          d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ]
    ];
    var FolderRoot = [
      [
        "path",
        {
          d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }
      ],
      ["circle", { cx: "12", cy: "13", r: "2" }],
      ["path", { d: "M12 15v5" }]
    ];
    var FolderPlus = [
      ["path", { d: "M12 10v6" }],
      ["path", { d: "M9 13h6" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ]
    ];
    var FolderSearch2 = [
      ["circle", { cx: "11.5", cy: "12.5", r: "2.5" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M13.3 14.3 15 16" }]
    ];
    var FolderSearch = [
      [
        "path",
        {
          d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"
        }
      ],
      ["path", { d: "m21 21-1.9-1.9" }],
      ["circle", { cx: "17", cy: "17", r: "3" }]
    ];
    var FolderSymlink = [
      [
        "path",
        {
          d: "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
        }
      ],
      ["path", { d: "m8 16 3-3-3-3" }]
    ];
    var FolderSync = [
      [
        "path",
        {
          d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"
        }
      ],
      ["path", { d: "M12 10v4h4" }],
      ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5" }],
      ["path", { d: "M22 22v-4h-4" }],
      ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5" }]
    ];
    var FolderTree = [
      [
        "path",
        {
          d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
        }
      ],
      [
        "path",
        {
          d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
        }
      ],
      ["path", { d: "M3 5a2 2 0 0 0 2 2h3" }],
      ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3" }]
    ];
    var FolderX = [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "m9.5 10.5 5 5" }],
      ["path", { d: "m14.5 10.5-5 5" }]
    ];
    var FolderUp = [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ],
      ["path", { d: "M12 10v6" }],
      ["path", { d: "m9 13 3-3 3 3" }]
    ];
    var Folder = [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ]
    ];
    var Folders = [
      [
        "path",
        {
          d: "M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"
        }
      ],
      ["path", { d: "M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1" }]
    ];
    var Footprints = [
      [
        "path",
        {
          d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
        }
      ],
      [
        "path",
        {
          d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
        }
      ],
      ["path", { d: "M16 17h4" }],
      ["path", { d: "M4 13h4" }]
    ];
    var Forklift = [
      ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5" }],
      ["circle", { cx: "13", cy: "19", r: "2" }],
      ["circle", { cx: "5", cy: "19", r: "2" }],
      ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" }]
    ];
    var Frame = [
      ["line", { x1: "22", x2: "2", y1: "6", y2: "6" }],
      ["line", { x1: "22", x2: "2", y1: "18", y2: "18" }],
      ["line", { x1: "6", x2: "6", y1: "2", y2: "22" }],
      ["line", { x1: "18", x2: "18", y1: "2", y2: "22" }]
    ];
    var Forward = [
      ["path", { d: "m15 17 5-5-5-5" }],
      ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12" }]
    ];
    var Framer = [["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" }]];
    var Frown = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
    ];
    var Fuel = [
      ["path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" }],
      ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" }],
      ["path", { d: "M2 21h13" }],
      ["path", { d: "M3 9h11" }]
    ];
    var Fullscreen = [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1" }]
    ];
    var FunnelPlus = [
      [
        "path",
        {
          d: "M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"
        }
      ],
      ["path", { d: "M16 6h6" }],
      ["path", { d: "M19 3v6" }]
    ];
    var FunnelX = [
      [
        "path",
        {
          d: "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"
        }
      ],
      ["path", { d: "m16.5 3.5 5 5" }],
      ["path", { d: "m21.5 3.5-5 5" }]
    ];
    var Funnel = [
      [
        "path",
        {
          d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
        }
      ]
    ];
    var GalleryHorizontalEnd = [
      ["path", { d: "M2 7v10" }],
      ["path", { d: "M6 5v14" }],
      ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2" }]
    ];
    var GalleryHorizontal = [
      ["path", { d: "M2 3v18" }],
      ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2" }],
      ["path", { d: "M22 3v18" }]
    ];
    var GalleryVerticalEnd = [
      ["path", { d: "M7 2h10" }],
      ["path", { d: "M5 6h14" }],
      ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }]
    ];
    var GalleryThumbnails = [
      ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M4 21h1" }],
      ["path", { d: "M9 21h1" }],
      ["path", { d: "M14 21h1" }],
      ["path", { d: "M19 21h1" }]
    ];
    var GalleryVertical = [
      ["path", { d: "M3 2h18" }],
      ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2" }],
      ["path", { d: "M3 22h18" }]
    ];
    var Gamepad2 = [
      ["line", { x1: "6", x2: "10", y1: "11", y2: "11" }],
      ["line", { x1: "8", x2: "8", y1: "9", y2: "13" }],
      ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12" }],
      ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10" }],
      [
        "path",
        {
          d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
        }
      ]
    ];
    var Gamepad = [
      ["line", { x1: "6", x2: "10", y1: "12", y2: "12" }],
      ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
      ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13" }],
      ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11" }],
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
    ];
    var Gauge = [
      ["path", { d: "m12 14 4-4" }],
      ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }]
    ];
    var Gavel = [
      ["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }],
      ["path", { d: "m16 16 6-6" }],
      ["path", { d: "m21.5 10.5-8-8" }],
      ["path", { d: "m8 8 6-6" }],
      ["path", { d: "m8.5 7.5 8 8" }]
    ];
    var Gem = [
      ["path", { d: "M10.5 3 8 9l4 13 4-13-2.5-6" }],
      [
        "path",
        {
          d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"
        }
      ],
      ["path", { d: "M2 9h20" }]
    ];
    var GeorgianLari = [
      ["path", { d: "M11.5 21a7.5 7.5 0 1 1 7.35-9" }],
      ["path", { d: "M13 12V3" }],
      ["path", { d: "M4 21h16" }],
      ["path", { d: "M9 12V3" }]
    ];
    var Ghost = [
      ["path", { d: "M9 10h.01" }],
      ["path", { d: "M15 10h.01" }],
      ["path", { d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" }]
    ];
    var Gift = [
      ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1" }],
      ["path", { d: "M12 8v13" }],
      ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }],
      ["path", { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" }]
    ];
    var GitBranchPlus = [
      ["path", { d: "M6 3v12" }],
      ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
      ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
      ["path", { d: "M15 6a9 9 0 0 0-9 9" }],
      ["path", { d: "M18 15v6" }],
      ["path", { d: "M21 18h-6" }]
    ];
    var GitBranch = [
      ["line", { x1: "6", x2: "6", y1: "3", y2: "15" }],
      ["circle", { cx: "18", cy: "6", r: "3" }],
      ["circle", { cx: "6", cy: "18", r: "3" }],
      ["path", { d: "M18 9a9 9 0 0 1-9 9" }]
    ];
    var GitCommitHorizontal = [
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["line", { x1: "3", x2: "9", y1: "12", y2: "12" }],
      ["line", { x1: "15", x2: "21", y1: "12", y2: "12" }]
    ];
    var GitCommitVertical = [
      ["path", { d: "M12 3v6" }],
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "M12 15v6" }]
    ];
    var GitCompareArrows = [
      ["circle", { cx: "5", cy: "6", r: "3" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }],
      ["path", { d: "m15 9-3-3 3-3" }],
      ["circle", { cx: "19", cy: "18", r: "3" }],
      ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9" }],
      ["path", { d: "m9 15 3 3-3 3" }]
    ];
    var GitCompare = [
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }],
      ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9" }]
    ];
    var GitFork = [
      ["circle", { cx: "12", cy: "18", r: "3" }],
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["circle", { cx: "18", cy: "6", r: "3" }],
      ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }],
      ["path", { d: "M12 12v3" }]
    ];
    var GitGraph = [
      ["circle", { cx: "5", cy: "6", r: "3" }],
      ["path", { d: "M5 9v6" }],
      ["circle", { cx: "5", cy: "18", r: "3" }],
      ["path", { d: "M12 3v18" }],
      ["circle", { cx: "19", cy: "6", r: "3" }],
      ["path", { d: "M16 15.7A9 9 0 0 0 19 9" }]
    ];
    var GitMerge = [
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M6 21V9a9 9 0 0 0 9 9" }]
    ];
    var GitPullRequestArrow = [
      ["circle", { cx: "5", cy: "6", r: "3" }],
      ["path", { d: "M5 9v12" }],
      ["circle", { cx: "19", cy: "18", r: "3" }],
      ["path", { d: "m15 9-3-3 3-3" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }]
    ];
    var GitPullRequestClosed = [
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M6 9v12" }],
      ["path", { d: "m21 3-6 6" }],
      ["path", { d: "m21 9-6-6" }],
      ["path", { d: "M18 11.5V15" }],
      ["circle", { cx: "18", cy: "18", r: "3" }]
    ];
    var GitPullRequestCreateArrow = [
      ["circle", { cx: "5", cy: "6", r: "3" }],
      ["path", { d: "M5 9v12" }],
      ["path", { d: "m15 9-3-3 3-3" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M19 15v6" }],
      ["path", { d: "M22 18h-6" }]
    ];
    var GitPullRequestCreate = [
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M6 9v12" }],
      ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M18 15v6" }],
      ["path", { d: "M21 18h-6" }]
    ];
    var GitPullRequestDraft = [
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M18 6V5" }],
      ["path", { d: "M18 11v-1" }],
      ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]
    ];
    var GitPullRequest = [
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }],
      ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]
    ];
    var Github = [
      [
        "path",
        {
          d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
        }
      ],
      ["path", { d: "M9 18c-4.51 2-5-2-7-2" }]
    ];
    var Gitlab = [
      [
        "path",
        {
          d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
        }
      ]
    ];
    var GlassWater = [
      [
        "path",
        {
          d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"
        }
      ],
      ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" }]
    ];
    var Glasses = [
      ["circle", { cx: "6", cy: "15", r: "4" }],
      ["circle", { cx: "18", cy: "15", r: "4" }],
      ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }],
      ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }],
      ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }]
    ];
    var GlobeLock = [
      ["path", { d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" }],
      ["path", { d: "M2 12h8.5" }],
      ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }],
      ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]
    ];
    var Globe = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }],
      ["path", { d: "M2 12h20" }]
    ];
    var Goal = [
      ["path", { d: "M12 13V2l8 4-8 4" }],
      ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29" }],
      ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02" }]
    ];
    var GraduationCap = [
      [
        "path",
        {
          d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
        }
      ],
      ["path", { d: "M22 10v6" }],
      ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]
    ];
    var Gpu = [
      ["path", { d: "M2 21V3" }],
      ["path", { d: "M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26" }],
      ["path", { d: "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" }],
      ["circle", { cx: "16", cy: "11", r: "2" }],
      ["circle", { cx: "8", cy: "11", r: "2" }]
    ];
    var Grape = [
      ["path", { d: "M22 5V2l-5.89 5.89" }],
      ["circle", { cx: "16.6", cy: "15.89", r: "3" }],
      ["circle", { cx: "8.11", cy: "7.4", r: "3" }],
      ["circle", { cx: "12.35", cy: "11.65", r: "3" }],
      ["circle", { cx: "13.91", cy: "5.85", r: "3" }],
      ["circle", { cx: "18.15", cy: "10.09", r: "3" }],
      ["circle", { cx: "6.56", cy: "13.2", r: "3" }],
      ["circle", { cx: "10.8", cy: "17.44", r: "3" }],
      ["circle", { cx: "5", cy: "19", r: "3" }]
    ];
    var Grid2x2Check = [
      [
        "path",
        {
          d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
        }
      ],
      ["path", { d: "m16 19 2 2 4-4" }]
    ];
    var Grid2x2Plus = [
      [
        "path",
        {
          d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
        }
      ],
      ["path", { d: "M16 19h6" }],
      ["path", { d: "M19 22v-6" }]
    ];
    var Grid2x2X = [
      [
        "path",
        {
          d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
        }
      ],
      ["path", { d: "m16 16 5 5" }],
      ["path", { d: "m16 21 5-5" }]
    ];
    var Grid2x2 = [
      ["path", { d: "M12 3v18" }],
      ["path", { d: "M3 12h18" }],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
    ];
    var Grid3x2 = [
      ["path", { d: "M15 3v18" }],
      ["path", { d: "M3 12h18" }],
      ["path", { d: "M9 3v18" }],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
    ];
    var Grid3x3 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "M9 3v18" }],
      ["path", { d: "M15 3v18" }]
    ];
    var GripHorizontal = [
      ["circle", { cx: "12", cy: "9", r: "1" }],
      ["circle", { cx: "19", cy: "9", r: "1" }],
      ["circle", { cx: "5", cy: "9", r: "1" }],
      ["circle", { cx: "12", cy: "15", r: "1" }],
      ["circle", { cx: "19", cy: "15", r: "1" }],
      ["circle", { cx: "5", cy: "15", r: "1" }]
    ];
    var GripVertical = [
      ["circle", { cx: "9", cy: "12", r: "1" }],
      ["circle", { cx: "9", cy: "5", r: "1" }],
      ["circle", { cx: "9", cy: "19", r: "1" }],
      ["circle", { cx: "15", cy: "12", r: "1" }],
      ["circle", { cx: "15", cy: "5", r: "1" }],
      ["circle", { cx: "15", cy: "19", r: "1" }]
    ];
    var Grip = [
      ["circle", { cx: "12", cy: "5", r: "1" }],
      ["circle", { cx: "19", cy: "5", r: "1" }],
      ["circle", { cx: "5", cy: "5", r: "1" }],
      ["circle", { cx: "12", cy: "12", r: "1" }],
      ["circle", { cx: "19", cy: "12", r: "1" }],
      ["circle", { cx: "5", cy: "12", r: "1" }],
      ["circle", { cx: "12", cy: "19", r: "1" }],
      ["circle", { cx: "19", cy: "19", r: "1" }],
      ["circle", { cx: "5", cy: "19", r: "1" }]
    ];
    var Group = [
      ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2" }],
      ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2" }],
      ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2" }],
      ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2" }],
      ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1" }],
      ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1" }]
    ];
    var Guitar = [
      ["path", { d: "m11.9 12.1 4.514-4.514" }],
      [
        "path",
        {
          d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"
        }
      ],
      ["path", { d: "m6 16 2 2" }],
      [
        "path",
        {
          d: "M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"
        }
      ]
    ];
    var Ham = [
      ["path", { d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" }],
      [
        "path",
        { d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" }
      ],
      [
        "path",
        {
          d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"
        }
      ],
      ["path", { d: "m8.5 16.5-1-1" }]
    ];
    var Hamburger = [
      ["path", { d: "M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" }],
      ["path", { d: "M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" }],
      ["path", { d: "M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" }],
      ["path", { d: "m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }]
    ];
    var Hammer = [
      ["path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" }],
      ["path", { d: "m18 15 4-4" }],
      [
        "path",
        {
          d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
        }
      ]
    ];
    var HandCoins = [
      ["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }],
      [
        "path",
        {
          d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
        }
      ],
      ["path", { d: "m2 16 6 6" }],
      ["circle", { cx: "16", cy: "9", r: "2.9" }],
      ["circle", { cx: "6", cy: "5", r: "3" }]
    ];
    var HandFist = [
      [
        "path",
        {
          d: "M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0"
        }
      ],
      ["path", { d: "M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5" }],
      ["path", { d: "M9 5A2 2 0 1 0 5 5V10" }],
      ["path", { d: "M9 7V4A2 2 0 1 1 13 4V7.268" }]
    ];
    var HandHeart = [
      ["path", { d: "M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" }],
      [
        "path",
        {
          d: "m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95"
        }
      ],
      ["path", { d: "m2 15 6 6" }],
      [
        "path",
        { d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" }
      ]
    ];
    var HandGrab = [
      ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }],
      ["path", { d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }],
      ["path", { d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
      ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" }]
    ];
    var HandHelping = [
      ["path", { d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" }],
      [
        "path",
        {
          d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
        }
      ],
      ["path", { d: "m2 13 6 6" }]
    ];
    var HandMetal = [
      ["path", { d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }],
      ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2" }],
      ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9" }],
      [
        "path",
        {
          d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
        }
      ]
    ];
    var HandPlatter = [
      ["path", { d: "M12 3V2" }],
      [
        "path",
        {
          d: "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"
        }
      ],
      ["path", { d: "M2 14h12a2 2 0 0 1 0 4h-2" }],
      ["path", { d: "M4 10h16" }],
      ["path", { d: "M5 10a7 7 0 0 1 14 0" }],
      ["path", { d: "M5 14v6a1 1 0 0 1-1 1H2" }]
    ];
    var Hand = [
      ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
      ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }],
      ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }],
      [
        "path",
        {
          d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
        }
      ]
    ];
    var Handshake = [
      ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3" }],
      [
        "path",
        {
          d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
        }
      ],
      ["path", { d: "m21 3 1 11h-2" }],
      ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }],
      ["path", { d: "M3 4h8" }]
    ];
    var Handbag = [
      [
        "path",
        {
          d: "M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z"
        }
      ],
      ["path", { d: "M8 11V6a4 4 0 0 1 8 0v5" }]
    ];
    var HardDriveDownload = [
      ["path", { d: "M12 2v8" }],
      ["path", { d: "m16 6-4 4-4-4" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "M10 18h.01" }]
    ];
    var HardDriveUpload = [
      ["path", { d: "m16 6-4-4-4 4" }],
      ["path", { d: "M12 2v8" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "M10 18h.01" }]
    ];
    var HardDrive = [
      ["line", { x1: "22", x2: "2", y1: "12", y2: "12" }],
      [
        "path",
        {
          d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        }
      ],
      ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16" }],
      ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16" }]
    ];
    var HardHat = [
      ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }],
      ["path", { d: "M14 6a6 6 0 0 1 6 6v3" }],
      ["path", { d: "M4 15v-3a6 6 0 0 1 6-6" }],
      ["rect", { x: "2", y: "15", width: "20", height: "4", rx: "1" }]
    ];
    var Hash = [
      ["line", { x1: "4", x2: "20", y1: "9", y2: "9" }],
      ["line", { x1: "4", x2: "20", y1: "15", y2: "15" }],
      ["line", { x1: "10", x2: "8", y1: "3", y2: "21" }],
      ["line", { x1: "16", x2: "14", y1: "3", y2: "21" }]
    ];
    var HatGlasses = [
      ["path", { d: "M14 18a2 2 0 0 0-4 0" }],
      [
        "path",
        {
          d: "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"
        }
      ],
      ["path", { d: "M2 11h20" }],
      ["circle", { cx: "17", cy: "18", r: "3" }],
      ["circle", { cx: "7", cy: "18", r: "3" }]
    ];
    var Haze = [
      ["path", { d: "m5.2 6.2 1.4 1.4" }],
      ["path", { d: "M2 13h2" }],
      ["path", { d: "M20 13h2" }],
      ["path", { d: "m17.4 7.6 1.4-1.4" }],
      ["path", { d: "M22 17H2" }],
      ["path", { d: "M22 21H2" }],
      ["path", { d: "M16 13a4 4 0 0 0-8 0" }],
      ["path", { d: "M12 5V2.5" }]
    ];
    var HdmiPort = [
      [
        "path",
        { d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" }
      ],
      ["path", { d: "M7.5 12h9" }]
    ];
    var Heading1 = [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["path", { d: "m17 12 3-2v8" }]
    ];
    var Heading2 = [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }]
    ];
    var Heading3 = [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }],
      ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }]
    ];
    var Heading4 = [
      ["path", { d: "M12 18V6" }],
      ["path", { d: "M17 10v3a1 1 0 0 0 1 1h3" }],
      ["path", { d: "M21 10v8" }],
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }]
    ];
    var Heading5 = [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["path", { d: "M17 13v-3h4" }],
      ["path", { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" }]
    ];
    var Heading6 = [
      ["path", { d: "M4 12h8" }],
      ["path", { d: "M4 18V6" }],
      ["path", { d: "M12 18V6" }],
      ["circle", { cx: "19", cy: "16", r: "2" }],
      ["path", { d: "M20 10c-2 2-3 3.5-3 6" }]
    ];
    var Heading = [
      ["path", { d: "M6 12h12" }],
      ["path", { d: "M6 20V4" }],
      ["path", { d: "M18 20V4" }]
    ];
    var HeadphoneOff = [
      ["path", { d: "M21 14h-1.343" }],
      ["path", { d: "M9.128 3.47A9 9 0 0 1 21 12v3.343" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" }],
      ["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" }]
    ];
    var Headphones = [
      [
        "path",
        {
          d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
        }
      ]
    ];
    var Headset = [
      [
        "path",
        {
          d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
        }
      ],
      ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" }]
    ];
    var HeartCrack = [
      [
        "path",
        {
          d: "M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15"
        }
      ],
      [
        "path",
        {
          d: "M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z"
        }
      ]
    ];
    var HeartHandshake = [
      [
        "path",
        {
          d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"
        }
      ]
    ];
    var HeartMinus = [
      [
        "path",
        {
          d: "m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572"
        }
      ],
      ["path", { d: "M15 15h6" }]
    ];
    var HeartOff = [
      [
        "path",
        {
          d: "M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655"
        }
      ],
      [
        "path",
        {
          d: "m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761"
        }
      ],
      ["path", { d: "m2 2 20 20" }]
    ];
    var HeartPlus = [
      [
        "path",
        {
          d: "m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49"
        }
      ],
      ["path", { d: "M15 15h6" }],
      ["path", { d: "M18 12v6" }]
    ];
    var HeartPulse = [
      [
        "path",
        {
          d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
        }
      ],
      ["path", { d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" }]
    ];
    var Heart = [
      [
        "path",
        {
          d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
        }
      ]
    ];
    var Heater = [
      ["path", { d: "M11 8c2-3-2-3 0-6" }],
      ["path", { d: "M15.5 8c2-3-2-3 0-6" }],
      ["path", { d: "M6 10h.01" }],
      ["path", { d: "M6 14h.01" }],
      ["path", { d: "M10 16v-4" }],
      ["path", { d: "M14 16v-4" }],
      ["path", { d: "M18 16v-4" }],
      ["path", { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" }],
      ["path", { d: "M5 20v2" }],
      ["path", { d: "M19 20v2" }]
    ];
    var Hexagon = [
      [
        "path",
        {
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        }
      ]
    ];
    var Highlighter = [
      ["path", { d: "m9 11-6 6v3h9l3-3" }],
      ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" }]
    ];
    var History = [
      ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
      ["path", { d: "M3 3v5h5" }],
      ["path", { d: "M12 7v5l4 2" }]
    ];
    var HopOff = [
      ["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" }],
      [
        "path",
        { d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" }
      ],
      ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" }],
      [
        "path",
        { d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" }
      ],
      ["path", { d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" }],
      [
        "path",
        {
          d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"
        }
      ],
      [
        "path",
        { d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" }
      ],
      ["path", { d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var Hop = [
      [
        "path",
        { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" }
      ],
      [
        "path",
        {
          d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"
        }
      ],
      [
        "path",
        { d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" }
      ],
      [
        "path",
        { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" }
      ],
      [
        "path",
        { d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" }
      ],
      [
        "path",
        { d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" }
      ],
      ["path", { d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1" }],
      [
        "path",
        {
          d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"
        }
      ]
    ];
    var Hospital = [
      ["path", { d: "M12 7v4" }],
      ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }],
      ["path", { d: "M14 9h-4" }],
      ["path", { d: "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" }]
    ];
    var Hotel = [
      ["path", { d: "M10 22v-6.57" }],
      ["path", { d: "M12 11h.01" }],
      ["path", { d: "M12 7h.01" }],
      ["path", { d: "M14 15.43V22" }],
      ["path", { d: "M15 16a5 5 0 0 0-6 0" }],
      ["path", { d: "M16 11h.01" }],
      ["path", { d: "M16 7h.01" }],
      ["path", { d: "M8 11h.01" }],
      ["path", { d: "M8 7h.01" }],
      ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]
    ];
    var Hourglass = [
      ["path", { d: "M5 22h14" }],
      ["path", { d: "M5 2h14" }],
      ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" }],
      ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" }]
    ];
    var HouseHeart = [
      [
        "path",
        {
          d: "M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"
        }
      ],
      [
        "path",
        {
          d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        }
      ]
    ];
    var HousePlug = [
      ["path", { d: "M10 12V8.964" }],
      ["path", { d: "M14 12V8.964" }],
      ["path", { d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" }],
      [
        "path",
        {
          d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"
        }
      ]
    ];
    var HousePlus = [
      [
        "path",
        {
          d: "M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35"
        }
      ],
      ["path", { d: "M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" }],
      ["path", { d: "M15 18h6" }],
      ["path", { d: "M18 15v6" }]
    ];
    var House = [
      ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }],
      [
        "path",
        {
          d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        }
      ]
    ];
    var HouseWifi = [
      ["path", { d: "M9.5 13.866a4 4 0 0 1 5 .01" }],
      ["path", { d: "M12 17h.01" }],
      [
        "path",
        {
          d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        }
      ],
      ["path", { d: "M7 10.754a8 8 0 0 1 10 0" }]
    ];
    var IceCreamBowl = [
      [
        "path",
        { d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" }
      ],
      ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0" }],
      ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0" }]
    ];
    var IceCreamCone = [
      ["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }],
      ["path", { d: "M17 7A5 5 0 0 0 7 7" }],
      ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" }]
    ];
    var IdCardLanyard = [
      ["path", { d: "M13.5 8h-3" }],
      ["path", { d: "m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" }],
      ["path", { d: "M16.899 22A5 5 0 0 0 7.1 22" }],
      ["path", { d: "m9 2 3 6" }],
      ["circle", { cx: "12", cy: "15", r: "3" }]
    ];
    var IdCard = [
      ["path", { d: "M16 10h2" }],
      ["path", { d: "M16 14h2" }],
      ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0" }],
      ["circle", { cx: "9", cy: "11", r: "2" }],
      ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]
    ];
    var ImageDown = [
      [
        "path",
        {
          d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
        }
      ],
      ["path", { d: "m14 19 3 3v-5.5" }],
      ["path", { d: "m17 22 3-3" }],
      ["circle", { cx: "9", cy: "9", r: "2" }]
    ];
    var ImageOff = [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
      ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83" }],
      ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21" }],
      ["line", { x1: "18", x2: "21", y1: "12", y2: "15" }],
      ["path", { d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" }],
      ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }]
    ];
    var ImageMinus = [
      ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }],
      ["line", { x1: "16", x2: "22", y1: "5", y2: "5" }],
      ["circle", { cx: "9", cy: "9", r: "2" }],
      ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
    ];
    var ImagePlay = [
      [
        "path",
        {
          d: "M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"
        }
      ],
      ["path", { d: "M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }],
      ["path", { d: "m6 21 5-5" }],
      ["circle", { cx: "9", cy: "9", r: "2" }]
    ];
    var ImagePlus = [
      ["path", { d: "M16 5h6" }],
      ["path", { d: "M19 2v6" }],
      ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" }],
      ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }],
      ["circle", { cx: "9", cy: "9", r: "2" }]
    ];
    var ImageUp = [
      [
        "path",
        {
          d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
        }
      ],
      ["path", { d: "m14 19.5 3-3 3 3" }],
      ["path", { d: "M17 22v-5.5" }],
      ["circle", { cx: "9", cy: "9", r: "2" }]
    ];
    var ImageUpscale = [
      ["path", { d: "M16 3h5v5" }],
      ["path", { d: "M17 21h2a2 2 0 0 0 2-2" }],
      ["path", { d: "M21 12v3" }],
      ["path", { d: "m21 3-5 5" }],
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2" }],
      ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" }],
      ["path", { d: "M9 3h3" }],
      ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1" }]
    ];
    var Image = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["circle", { cx: "9", cy: "9", r: "2" }],
      ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
    ];
    var Images = [
      ["path", { d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" }],
      ["path", { d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" }],
      ["circle", { cx: "13", cy: "7", r: "1", fill: "currentColor" }],
      ["rect", { x: "8", y: "2", width: "14", height: "14", rx: "2" }]
    ];
    var Import = [
      ["path", { d: "M12 3v12" }],
      ["path", { d: "m8 11 4 4 4-4" }],
      ["path", { d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" }]
    ];
    var Inbox = [
      ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }],
      [
        "path",
        {
          d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        }
      ]
    ];
    var IndianRupee = [
      ["path", { d: "M6 3h12" }],
      ["path", { d: "M6 8h12" }],
      ["path", { d: "m6 13 8.5 8" }],
      ["path", { d: "M6 13h3" }],
      ["path", { d: "M9 13c6.667 0 6.667-10 0-10" }]
    ];
    var Infinity = [
      ["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" }]
    ];
    var Info = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 16v-4" }],
      ["path", { d: "M12 8h.01" }]
    ];
    var InspectionPanel = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 7h.01" }],
      ["path", { d: "M17 7h.01" }],
      ["path", { d: "M7 17h.01" }],
      ["path", { d: "M17 17h.01" }]
    ];
    var Instagram = [
      ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }],
      ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }],
      ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }]
    ];
    var Italic = [
      ["line", { x1: "19", x2: "10", y1: "4", y2: "4" }],
      ["line", { x1: "14", x2: "5", y1: "20", y2: "20" }],
      ["line", { x1: "15", x2: "9", y1: "4", y2: "20" }]
    ];
    var IterationCcw = [
      ["path", { d: "m16 14 4 4-4 4" }],
      ["path", { d: "M20 10a8 8 0 1 0-8 8h8" }]
    ];
    var IterationCw = [
      ["path", { d: "M4 10a8 8 0 1 1 8 8H4" }],
      ["path", { d: "m8 22-4-4 4-4" }]
    ];
    var JapaneseYen = [
      ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }],
      ["path", { d: "M6 15h12" }],
      ["path", { d: "M6 11h12" }]
    ];
    var Joystick = [
      ["path", { d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" }],
      ["path", { d: "M6 15v-2" }],
      ["path", { d: "M12 15V9" }],
      ["circle", { cx: "12", cy: "6", r: "3" }]
    ];
    var Kanban = [
      ["path", { d: "M5 3v14" }],
      ["path", { d: "M12 3v8" }],
      ["path", { d: "M19 3v18" }]
    ];
    var Kayak = [
      ["path", { d: "M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" }],
      [
        "path",
        {
          d: "M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61"
        }
      ],
      ["path", { d: "m6.707 6.707 10.586 10.586" }],
      ["path", { d: "M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" }]
    ];
    var KeyRound = [
      [
        "path",
        {
          d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
        }
      ],
      ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }]
    ];
    var KeySquare = [
      [
        "path",
        {
          d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"
        }
      ],
      ["path", { d: "m14 7 3 3" }],
      [
        "path",
        {
          d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"
        }
      ]
    ];
    var Key = [
      ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" }],
      ["path", { d: "m21 2-9.6 9.6" }],
      ["circle", { cx: "7.5", cy: "15.5", r: "5.5" }]
    ];
    var KeyboardMusic = [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M6 8h4" }],
      ["path", { d: "M14 8h.01" }],
      ["path", { d: "M18 8h.01" }],
      ["path", { d: "M2 12h20" }],
      ["path", { d: "M6 12v4" }],
      ["path", { d: "M10 12v4" }],
      ["path", { d: "M14 12v4" }],
      ["path", { d: "M18 12v4" }]
    ];
    var KeyboardOff = [
      ["path", { d: "M 20 4 A2 2 0 0 1 22 6" }],
      ["path", { d: "M 22 6 L 22 16.41" }],
      ["path", { d: "M 7 16 L 16 16" }],
      ["path", { d: "M 9.69 4 L 20 4" }],
      ["path", { d: "M14 8h.01" }],
      ["path", { d: "M18 8h.01" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }],
      ["path", { d: "M6 8h.01" }],
      ["path", { d: "M8 12h.01" }]
    ];
    var Keyboard = [
      ["path", { d: "M10 8h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M14 8h.01" }],
      ["path", { d: "M16 12h.01" }],
      ["path", { d: "M18 8h.01" }],
      ["path", { d: "M6 8h.01" }],
      ["path", { d: "M7 16h10" }],
      ["path", { d: "M8 12h.01" }],
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }]
    ];
    var LampCeiling = [
      ["path", { d: "M12 2v5" }],
      ["path", { d: "M14.829 15.998a3 3 0 1 1-5.658 0" }],
      [
        "path",
        {
          d: "M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z"
        }
      ]
    ];
    var LampDesk = [
      [
        "path",
        {
          d: "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z"
        }
      ],
      ["path", { d: "m14.207 4.793-3.414 3.414" }],
      ["path", { d: "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" }],
      ["path", { d: "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" }]
    ];
    var LampFloor = [
      ["path", { d: "M12 10v12" }],
      [
        "path",
        {
          d: "M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z"
        }
      ],
      ["path", { d: "M9 22h6" }]
    ];
    var LampWallDown = [
      [
        "path",
        {
          d: "M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z"
        }
      ],
      ["path", { d: "M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" }],
      ["path", { d: "M8 6h4a2 2 0 0 1 2 2v5" }]
    ];
    var LampWallUp = [
      [
        "path",
        {
          d: "M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z"
        }
      ],
      ["path", { d: "M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" }],
      ["path", { d: "M8 18h4a2 2 0 0 0 2-2v-5" }]
    ];
    var Lamp = [
      ["path", { d: "M12 12v6" }],
      [
        "path",
        {
          d: "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"
        }
      ],
      ["path", { d: "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" }]
    ];
    var LandPlot = [
      ["path", { d: "m12 8 6-3-6-3v10" }],
      [
        "path",
        {
          d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
        }
      ],
      ["path", { d: "m6.49 12.85 11.02 6.3" }],
      ["path", { d: "M17.51 12.85 6.5 19.15" }]
    ];
    var Landmark = [
      ["path", { d: "M10 18v-7" }],
      [
        "path",
        {
          d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"
        }
      ],
      ["path", { d: "M14 18v-7" }],
      ["path", { d: "M18 18v-7" }],
      ["path", { d: "M3 22h18" }],
      ["path", { d: "M6 18v-7" }]
    ];
    var Languages = [
      ["path", { d: "m5 8 6 6" }],
      ["path", { d: "m4 14 6-6 2-3" }],
      ["path", { d: "M2 5h12" }],
      ["path", { d: "M7 2h1" }],
      ["path", { d: "m22 22-5-10-5 10" }],
      ["path", { d: "M14 18h6" }]
    ];
    var LaptopMinimalCheck = [
      ["path", { d: "M2 20h20" }],
      ["path", { d: "m9 10 2 2 4-4" }],
      ["rect", { x: "3", y: "4", width: "18", height: "12", rx: "2" }]
    ];
    var LaptopMinimal = [
      ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2" }],
      ["line", { x1: "2", x2: "22", y1: "20", y2: "20" }]
    ];
    var Laptop = [
      [
        "path",
        {
          d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"
        }
      ],
      ["path", { d: "M20.054 15.987H3.946" }]
    ];
    var LassoSelect = [
      ["path", { d: "M7 22a5 5 0 0 1-2-4" }],
      ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91" }],
      [
        "path",
        { d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" }
      ],
      ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }],
      [
        "path",
        {
          d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"
        }
      ]
    ];
    var Lasso = [
      [
        "path",
        { d: "M3.704 14.467A10 8 0 0 1 2 10a10 8 0 0 1 20 0 10 8 0 0 1-10 8 10 8 0 0 1-5.181-1.158" }
      ],
      ["path", { d: "M7 22a5 5 0 0 1-2-3.994" }],
      ["circle", { cx: "5", cy: "16", r: "2" }]
    ];
    var Laugh = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
    ];
    var Layers2 = [
      [
        "path",
        {
          d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"
        }
      ],
      [
        "path",
        {
          d: "m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"
        }
      ]
    ];
    var Layers = [
      [
        "path",
        {
          d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
        }
      ],
      ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }],
      ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" }]
    ];
    var LayoutDashboard = [
      ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }],
      ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" }]
    ];
    var LayoutGrid = [
      ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }]
    ];
    var LayoutList = [
      ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
      ["path", { d: "M14 4h7" }],
      ["path", { d: "M14 9h7" }],
      ["path", { d: "M14 15h7" }],
      ["path", { d: "M14 20h7" }]
    ];
    var LayoutPanelLeft = [
      ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]
    ];
    var LayoutPanelTop = [
      ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]
    ];
    var LayoutTemplate = [
      ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1" }],
      ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1" }]
    ];
    var Leaf = [
      [
        "path",
        { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }
      ],
      ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]
    ];
    var LeafyGreen = [
      [
        "path",
        {
          d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
        }
      ],
      ["path", { d: "M2 22 17 7" }]
    ];
    var Lectern = [
      [
        "path",
        {
          d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"
        }
      ],
      ["path", { d: "M18 6V3a1 1 0 0 0-1-1h-3" }],
      ["rect", { width: "8", height: "12", x: "8", y: "10", rx: "1" }]
    ];
    var LibraryBig = [
      ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1" }],
      ["path", { d: "M7 3v18" }],
      [
        "path",
        {
          d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
        }
      ]
    ];
    var Library = [
      ["path", { d: "m16 6 4 14" }],
      ["path", { d: "M12 6v14" }],
      ["path", { d: "M8 8v12" }],
      ["path", { d: "M4 4v16" }]
    ];
    var LifeBuoy = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "m4.93 4.93 4.24 4.24" }],
      ["path", { d: "m14.83 9.17 4.24-4.24" }],
      ["path", { d: "m14.83 14.83 4.24 4.24" }],
      ["path", { d: "m9.17 14.83-4.24 4.24" }],
      ["circle", { cx: "12", cy: "12", r: "4" }]
    ];
    var Ligature = [
      ["path", { d: "M14 12h2v8" }],
      ["path", { d: "M14 20h4" }],
      ["path", { d: "M6 12h4" }],
      ["path", { d: "M6 20h4" }],
      ["path", { d: "M8 20V8a4 4 0 0 1 7.464-2" }]
    ];
    var LightbulbOff = [
      ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }],
      ["path", { d: "M9 18h6" }],
      ["path", { d: "M10 22h4" }]
    ];
    var Lightbulb = [
      [
        "path",
        {
          d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
        }
      ],
      ["path", { d: "M9 18h6" }],
      ["path", { d: "M10 22h4" }]
    ];
    var LineSquiggle = [
      [
        "path",
        { d: "M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2" }
      ]
    ];
    var Link2Off = [
      ["path", { d: "M9 17H7A5 5 0 0 1 7 7" }],
      ["path", { d: "M15 7h2a5 5 0 0 1 4 8" }],
      ["line", { x1: "8", x2: "12", y1: "12", y2: "12" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Link2 = [
      ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }],
      ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
    ];
    var Link = [
      ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }],
      ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]
    ];
    var Linkedin = [
      ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }],
      ["rect", { width: "4", height: "12", x: "2", y: "9" }],
      ["circle", { cx: "4", cy: "4", r: "2" }]
    ];
    var ListCheck = [
      ["path", { d: "M16 5H3" }],
      ["path", { d: "M16 12H3" }],
      ["path", { d: "M11 19H3" }],
      ["path", { d: "m15 18 2 2 4-4" }]
    ];
    var ListChecks = [
      ["path", { d: "M13 5h8" }],
      ["path", { d: "M13 12h8" }],
      ["path", { d: "M13 19h8" }],
      ["path", { d: "m3 17 2 2 4-4" }],
      ["path", { d: "m3 7 2 2 4-4" }]
    ];
    var ListChevronsDownUp = [
      ["path", { d: "M3 5h8" }],
      ["path", { d: "M3 12h8" }],
      ["path", { d: "M3 19h8" }],
      ["path", { d: "m15 5 3 3 3-3" }],
      ["path", { d: "m15 19 3-3 3 3" }]
    ];
    var ListChevronsUpDown = [
      ["path", { d: "M3 5h8" }],
      ["path", { d: "M3 12h8" }],
      ["path", { d: "M3 19h8" }],
      ["path", { d: "m15 8 3-3 3 3" }],
      ["path", { d: "m15 16 3 3 3-3" }]
    ];
    var ListCollapse = [
      ["path", { d: "M10 5h11" }],
      ["path", { d: "M10 12h11" }],
      ["path", { d: "M10 19h11" }],
      ["path", { d: "m3 10 3-3-3-3" }],
      ["path", { d: "m3 20 3-3-3-3" }]
    ];
    var ListEnd = [
      ["path", { d: "M16 5H3" }],
      ["path", { d: "M16 12H3" }],
      ["path", { d: "M9 19H3" }],
      ["path", { d: "m16 16-3 3 3 3" }],
      ["path", { d: "M21 5v12a2 2 0 0 1-2 2h-6" }]
    ];
    var ListFilter = [
      ["path", { d: "M2 5h20" }],
      ["path", { d: "M6 12h12" }],
      ["path", { d: "M9 19h6" }]
    ];
    var ListFilterPlus = [
      ["path", { d: "M12 5H2" }],
      ["path", { d: "M6 12h12" }],
      ["path", { d: "M9 19h6" }],
      ["path", { d: "M16 5h6" }],
      ["path", { d: "M19 8V2" }]
    ];
    var ListIndentDecrease = [
      ["path", { d: "M21 5H11" }],
      ["path", { d: "M21 12H11" }],
      ["path", { d: "M21 19H11" }],
      ["path", { d: "m7 8-4 4 4 4" }]
    ];
    var ListIndentIncrease = [
      ["path", { d: "M21 5H11" }],
      ["path", { d: "M21 12H11" }],
      ["path", { d: "M21 19H11" }],
      ["path", { d: "m3 8 4 4-4 4" }]
    ];
    var ListMinus = [
      ["path", { d: "M16 5H3" }],
      ["path", { d: "M11 12H3" }],
      ["path", { d: "M16 19H3" }],
      ["path", { d: "M21 12h-6" }]
    ];
    var ListOrdered = [
      ["path", { d: "M11 5h10" }],
      ["path", { d: "M11 12h10" }],
      ["path", { d: "M11 19h10" }],
      ["path", { d: "M4 4h1v5" }],
      ["path", { d: "M4 9h2" }],
      ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" }]
    ];
    var ListMusic = [
      ["path", { d: "M16 5H3" }],
      ["path", { d: "M11 12H3" }],
      ["path", { d: "M11 19H3" }],
      ["path", { d: "M21 16V5" }],
      ["circle", { cx: "18", cy: "16", r: "3" }]
    ];
    var ListPlus = [
      ["path", { d: "M16 5H3" }],
      ["path", { d: "M11 12H3" }],
      ["path", { d: "M16 19H3" }],
      ["path", { d: "M18 9v6" }],
      ["path", { d: "M21 12h-6" }]
    ];
    var ListRestart = [
      ["path", { d: "M21 5H3" }],
      ["path", { d: "M7 12H3" }],
      ["path", { d: "M7 19H3" }],
      ["path", { d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" }],
      ["path", { d: "M11 10v4h4" }]
    ];
    var ListStart = [
      ["path", { d: "M3 5h6" }],
      ["path", { d: "M3 12h13" }],
      ["path", { d: "M3 19h13" }],
      ["path", { d: "m16 8-3-3 3-3" }],
      ["path", { d: "M21 19V7a2 2 0 0 0-2-2h-6" }]
    ];
    var ListTodo = [
      ["path", { d: "M13 5h8" }],
      ["path", { d: "M13 12h8" }],
      ["path", { d: "M13 19h8" }],
      ["path", { d: "m3 17 2 2 4-4" }],
      ["rect", { x: "3", y: "4", width: "6", height: "6", rx: "1" }]
    ];
    var ListTree = [
      ["path", { d: "M8 5h13" }],
      ["path", { d: "M13 12h8" }],
      ["path", { d: "M13 19h8" }],
      ["path", { d: "M3 10a2 2 0 0 0 2 2h3" }],
      ["path", { d: "M3 5v12a2 2 0 0 0 2 2h3" }]
    ];
    var ListVideo = [
      ["path", { d: "M21 5H3" }],
      ["path", { d: "M10 12H3" }],
      ["path", { d: "M10 19H3" }],
      [
        "path",
        {
          d: "M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"
        }
      ]
    ];
    var ListX = [
      ["path", { d: "M16 5H3" }],
      ["path", { d: "M11 12H3" }],
      ["path", { d: "M16 19H3" }],
      ["path", { d: "m15.5 9.5 5 5" }],
      ["path", { d: "m20.5 9.5-5 5" }]
    ];
    var List = [
      ["path", { d: "M3 5h.01" }],
      ["path", { d: "M3 12h.01" }],
      ["path", { d: "M3 19h.01" }],
      ["path", { d: "M8 5h13" }],
      ["path", { d: "M8 12h13" }],
      ["path", { d: "M8 19h13" }]
    ];
    var LoaderCircle = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }]];
    var LoaderPinwheel = [
      ["path", { d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" }],
      ["path", { d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }],
      ["path", { d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Loader = [
      ["path", { d: "M12 2v4" }],
      ["path", { d: "m16.2 7.8 2.9-2.9" }],
      ["path", { d: "M18 12h4" }],
      ["path", { d: "m16.2 16.2 2.9 2.9" }],
      ["path", { d: "M12 18v4" }],
      ["path", { d: "m4.9 19.1 2.9-2.9" }],
      ["path", { d: "M2 12h4" }],
      ["path", { d: "m4.9 4.9 2.9 2.9" }]
    ];
    var LocateFixed = [
      ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
      ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
      ["circle", { cx: "12", cy: "12", r: "7" }],
      ["circle", { cx: "12", cy: "12", r: "3" }]
    ];
    var LocateOff = [
      ["path", { d: "M12 19v3" }],
      ["path", { d: "M12 2v3" }],
      ["path", { d: "M18.89 13.24a7 7 0 0 0-8.13-8.13" }],
      ["path", { d: "M19 12h3" }],
      ["path", { d: "M2 12h3" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M7.05 7.05a7 7 0 0 0 9.9 9.9" }]
    ];
    var Locate = [
      ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
      ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
      ["circle", { cx: "12", cy: "12", r: "7" }]
    ];
    var LockKeyholeOpen = [
      ["circle", { cx: "12", cy: "16", r: "1" }],
      ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }],
      ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5" }]
    ];
    var LockKeyhole = [
      ["circle", { cx: "12", cy: "16", r: "1" }],
      ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }],
      ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3" }]
    ];
    var LockOpen = [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }]
    ];
    var Lock = [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]
    ];
    var LogIn = [
      ["path", { d: "m10 17 5-5-5-5" }],
      ["path", { d: "M15 12H3" }],
      ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }]
    ];
    var LogOut = [
      ["path", { d: "m16 17 5-5-5-5" }],
      ["path", { d: "M21 12H9" }],
      ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
    ];
    var Logs = [
      ["path", { d: "M3 5h1" }],
      ["path", { d: "M3 12h1" }],
      ["path", { d: "M3 19h1" }],
      ["path", { d: "M8 5h1" }],
      ["path", { d: "M8 12h1" }],
      ["path", { d: "M8 19h1" }],
      ["path", { d: "M13 5h8" }],
      ["path", { d: "M13 12h8" }],
      ["path", { d: "M13 19h8" }]
    ];
    var Lollipop = [
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["path", { d: "m21 21-4.3-4.3" }],
      ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" }]
    ];
    var Luggage = [
      ["path", { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }],
      ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }],
      ["path", { d: "M10 20h4" }],
      ["circle", { cx: "16", cy: "20", r: "2" }],
      ["circle", { cx: "8", cy: "20", r: "2" }]
    ];
    var Magnet = [
      ["path", { d: "m12 15 4 4" }],
      [
        "path",
        {
          d: "M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z"
        }
      ],
      ["path", { d: "m5 8 4 4" }]
    ];
    var MailCheck = [
      ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "m16 19 2 2 4-4" }]
    ];
    var MailMinus = [
      ["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "M16 19h6" }]
    ];
    var MailOpen = [
      [
        "path",
        {
          d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
        }
      ],
      ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" }]
    ];
    var MailPlus = [
      ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "M19 16v6" }],
      ["path", { d: "M16 19h6" }]
    ];
    var MailQuestionMark = [
      ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" }],
      ["path", { d: "M20 22v.01" }]
    ];
    var MailSearch = [
      ["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }],
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["path", { d: "m22 22-1.5-1.5" }]
    ];
    var MailWarning = [
      ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "M20 14v4" }],
      ["path", { d: "M20 22v.01" }]
    ];
    var MailX = [
      ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
      ["path", { d: "m17 17 4 4" }],
      ["path", { d: "m21 17-4 4" }]
    ];
    var Mail = [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
      ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }]
    ];
    var Mailbox = [
      ["path", { d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" }],
      ["polyline", { points: "15,9 18,9 18,11" }],
      ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }],
      ["line", { x1: "6", x2: "7", y1: "10", y2: "10" }]
    ];
    var Mails = [
      ["path", { d: "M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" }],
      ["path", { d: "m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" }],
      ["rect", { x: "7", y: "3", width: "15", height: "12", rx: "2" }]
    ];
    var MapMinus = [
      [
        "path",
        {
          d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14"
        }
      ],
      ["path", { d: "M15 5.764V14" }],
      ["path", { d: "M21 18h-6" }],
      ["path", { d: "M9 3.236v15" }]
    ];
    var MapPinCheckInside = [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["path", { d: "m9 10 2 2 4-4" }]
    ];
    var MapPinCheck = [
      [
        "path",
        {
          d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "m16 18 2 2 4-4" }]
    ];
    var MapPinHouse = [
      [
        "path",
        {
          d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"
        }
      ],
      ["path", { d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" }],
      ["path", { d: "M18 22v-3" }],
      ["circle", { cx: "10", cy: "10", r: "3" }]
    ];
    var MapPinMinusInside = [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["path", { d: "M9 10h6" }]
    ];
    var MapPinMinus = [
      [
        "path",
        {
          d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M16 18h6" }]
    ];
    var MapPinOff = [
      ["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16" }],
      [
        "path",
        {
          d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"
        }
      ],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" }],
      ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74" }]
    ];
    var MapPinPen = [
      ["path", { d: "M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" }],
      [
        "path",
        {
          d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ],
      ["circle", { cx: "10", cy: "10", r: "3" }]
    ];
    var MapPinPlusInside = [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["path", { d: "M12 7v6" }],
      ["path", { d: "M9 10h6" }]
    ];
    var MapPinPlus = [
      [
        "path",
        {
          d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M16 18h6" }],
      ["path", { d: "M19 15v6" }]
    ];
    var MapPinXInside = [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["path", { d: "m14.5 7.5-5 5" }],
      ["path", { d: "m9.5 7.5 5 5" }]
    ];
    var MapPinX = [
      [
        "path",
        {
          d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "m21.5 15.5-5 5" }],
      ["path", { d: "m21.5 20.5-5-5" }]
    ];
    var MapPin = [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3" }]
    ];
    var MapPinned = [
      [
        "path",
        {
          d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
        }
      ],
      ["circle", { cx: "12", cy: "8", r: "2" }],
      [
        "path",
        {
          d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
        }
      ]
    ];
    var MapPlus = [
      [
        "path",
        {
          d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"
        }
      ],
      ["path", { d: "M15 5.764V12" }],
      ["path", { d: "M18 15v6" }],
      ["path", { d: "M21 18h-6" }],
      ["path", { d: "M9 3.236v15" }]
    ];
    var Map2 = [
      [
        "path",
        {
          d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
        }
      ],
      ["path", { d: "M15 5.764v15" }],
      ["path", { d: "M9 3.236v15" }]
    ];
    var MarsStroke = [
      ["path", { d: "m14 6 4 4" }],
      ["path", { d: "M17 3h4v4" }],
      ["path", { d: "m21 3-7.75 7.75" }],
      ["circle", { cx: "9", cy: "15", r: "6" }]
    ];
    var Mars = [
      ["path", { d: "M16 3h5v5" }],
      ["path", { d: "m21 3-6.75 6.75" }],
      ["circle", { cx: "10", cy: "14", r: "6" }]
    ];
    var Martini = [
      ["path", { d: "M8 22h8" }],
      ["path", { d: "M12 11v11" }],
      ["path", { d: "m19 3-7 8-7-8Z" }]
    ];
    var Maximize2 = [
      ["path", { d: "M15 3h6v6" }],
      ["path", { d: "m21 3-7 7" }],
      ["path", { d: "m3 21 7-7" }],
      ["path", { d: "M9 21H3v-6" }]
    ];
    var Maximize = [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
      ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
      ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]
    ];
    var Medal = [
      [
        "path",
        {
          d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
        }
      ],
      ["path", { d: "M11 12 5.12 2.2" }],
      ["path", { d: "m13 12 5.88-9.8" }],
      ["path", { d: "M8 7h8" }],
      ["circle", { cx: "12", cy: "17", r: "5" }],
      ["path", { d: "M12 18v-2h-.5" }]
    ];
    var MegaphoneOff = [
      ["path", { d: "M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344" }],
      ["path", { d: "M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }],
      ["path", { d: "M8 8v6" }]
    ];
    var Megaphone = [
      [
        "path",
        {
          d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
        }
      ],
      ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }],
      ["path", { d: "M8 6v8" }]
    ];
    var Meh = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["line", { x1: "8", x2: "16", y1: "15", y2: "15" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
    ];
    var MemoryStick = [
      ["path", { d: "M6 19v-3" }],
      ["path", { d: "M10 19v-3" }],
      ["path", { d: "M14 19v-3" }],
      ["path", { d: "M18 19v-3" }],
      ["path", { d: "M8 11V9" }],
      ["path", { d: "M16 11V9" }],
      ["path", { d: "M12 11V9" }],
      ["path", { d: "M2 15h20" }],
      [
        "path",
        {
          d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
        }
      ]
    ];
    var Menu = [
      ["path", { d: "M4 5h16" }],
      ["path", { d: "M4 12h16" }],
      ["path", { d: "M4 19h16" }]
    ];
    var Merge = [
      ["path", { d: "m8 6 4-4 4 4" }],
      ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }],
      ["path", { d: "m20 22-5-5" }]
    ];
    var MessageCircleCode = [
      ["path", { d: "m10 9-3 3 3 3" }],
      ["path", { d: "m14 15 3-3-3-3" }],
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        }
      ]
    ];
    var MessageCircleDashed = [
      ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0" }],
      ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0" }],
      ["path", { d: "M17.609 3.72a10 10 0 0 1 2.69 2.7" }],
      ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8" }],
      ["path", { d: "M20.28 17.61a10 10 0 0 1-2.7 2.69" }],
      ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8" }],
      ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69" }],
      ["path", { d: "m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98" }]
    ];
    var MessageCircleHeart = [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        }
      ],
      [
        "path",
        {
          d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z"
        }
      ]
    ];
    var MessageCircleMore = [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        }
      ],
      ["path", { d: "M8 12h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M16 12h.01" }]
    ];
    var MessageCircleOff = [
      ["path", { d: "m2 2 20 20" }],
      [
        "path",
        {
          d: "M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989"
        }
      ],
      ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }]
    ];
    var MessageCirclePlus = [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        }
      ],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "M12 8v8" }]
    ];
    var MessageCircleQuestionMark = [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        }
      ],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
      ["path", { d: "M12 17h.01" }]
    ];
    var MessageCircleReply = [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        }
      ],
      ["path", { d: "m10 15-3-3 3-3" }],
      ["path", { d: "M7 12h8a2 2 0 0 1 2 2v1" }]
    ];
    var MessageCircleWarning = [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        }
      ],
      ["path", { d: "M12 8v4" }],
      ["path", { d: "M12 16h.01" }]
    ];
    var MessageCircleX = [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        }
      ],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "m9 9 6 6" }]
    ];
    var MessageSquareCode = [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "m10 8-3 3 3 3" }],
      ["path", { d: "m14 14 3-3-3-3" }]
    ];
    var MessageCircle = [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        }
      ]
    ];
    var MessageSquareDashed = [
      ["path", { d: "M12 19h.01" }],
      ["path", { d: "M12 3h.01" }],
      ["path", { d: "M16 19h.01" }],
      ["path", { d: "M16 3h.01" }],
      ["path", { d: "M2 13h.01" }],
      ["path", { d: "M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8" }],
      ["path", { d: "M2 5a2 2 0 0 1 2-2" }],
      ["path", { d: "M2 9h.01" }],
      ["path", { d: "M20 3a2 2 0 0 1 2 2" }],
      ["path", { d: "M22 13h.01" }],
      ["path", { d: "M22 17a2 2 0 0 1-2 2" }],
      ["path", { d: "M22 9h.01" }],
      ["path", { d: "M8 3h.01" }]
    ];
    var MessageSquareDiff = [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "M10 15h4" }],
      ["path", { d: "M10 9h4" }],
      ["path", { d: "M12 7v4" }]
    ];
    var MessageSquareDot = [
      [
        "path",
        {
          d: "M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7"
        }
      ],
      ["circle", { cx: "19", cy: "6", r: "3" }]
    ];
    var MessageSquareHeart = [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      [
        "path",
        {
          d: "M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5"
        }
      ]
    ];
    var MessageSquareLock = [
      [
        "path",
        {
          d: "M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10"
        }
      ],
      ["path", { d: "M20 15v-2a2 2 0 0 0-4 0v2" }],
      ["rect", { x: "14", y: "15", width: "8", height: "5", rx: "1" }]
    ];
    var MessageSquareMore = [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "M12 11h.01" }],
      ["path", { d: "M16 11h.01" }],
      ["path", { d: "M8 11h.01" }]
    ];
    var MessageSquareOff = [
      [
        "path",
        {
          d: "M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826"
        }
      ],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M8.656 3H20a2 2 0 0 1 2 2v11.344" }]
    ];
    var MessageSquarePlus = [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "M12 8v6" }],
      ["path", { d: "M9 11h6" }]
    ];
    var MessageSquareQuote = [
      ["path", { d: "M14 14a2 2 0 0 0 2-2V8h-2" }],
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "M8 14a2 2 0 0 0 2-2V8H8" }]
    ];
    var MessageSquareReply = [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "m10 8-3 3 3 3" }],
      ["path", { d: "M17 14v-1a2 2 0 0 0-2-2H7" }]
    ];
    var MessageSquareText = [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "M7 11h10" }],
      ["path", { d: "M7 15h6" }],
      ["path", { d: "M7 7h8" }]
    ];
    var MessageSquareShare = [
      [
        "path",
        {
          d: "M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4"
        }
      ],
      ["path", { d: "M16 3h6v6" }],
      ["path", { d: "m16 9 6-6" }]
    ];
    var MessageSquareWarning = [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "M12 15h.01" }],
      ["path", { d: "M12 7v4" }]
    ];
    var MessageSquare = [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ]
    ];
    var MessageSquareX = [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "m14.5 8.5-5 5" }],
      ["path", { d: "m9.5 8.5 5 5" }]
    ];
    var MessagesSquare = [
      [
        "path",
        {
          d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
        }
      ],
      [
        "path",
        {
          d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"
        }
      ]
    ];
    var MicOff = [
      ["path", { d: "M12 19v3" }],
      ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33" }],
      ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2" }],
      ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12" }]
    ];
    var Mic = [
      ["path", { d: "M12 19v3" }],
      ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }],
      ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3" }]
    ];
    var Microchip = [
      ["path", { d: "M18 12h2" }],
      ["path", { d: "M18 16h2" }],
      ["path", { d: "M18 20h2" }],
      ["path", { d: "M18 4h2" }],
      ["path", { d: "M18 8h2" }],
      ["path", { d: "M4 12h2" }],
      ["path", { d: "M4 16h2" }],
      ["path", { d: "M4 20h2" }],
      ["path", { d: "M4 4h2" }],
      ["path", { d: "M4 8h2" }],
      [
        "path",
        {
          d: "M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"
        }
      ]
    ];
    var MicVocal = [
      ["path", { d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" }],
      [
        "path",
        {
          d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"
        }
      ],
      ["circle", { cx: "16", cy: "7", r: "5" }]
    ];
    var Microscope = [
      ["path", { d: "M6 18h8" }],
      ["path", { d: "M3 22h18" }],
      ["path", { d: "M14 22a7 7 0 1 0 0-14h-1" }],
      ["path", { d: "M9 14h2" }],
      ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }],
      ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]
    ];
    var Milestone = [
      ["path", { d: "M12 13v8" }],
      ["path", { d: "M12 3v3" }],
      [
        "path",
        {
          d: "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
        }
      ]
    ];
    var MilkOff = [
      ["path", { d: "M8 2h8" }],
      [
        "path",
        {
          d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"
        }
      ],
      ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Microwave = [
      ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2" }],
      ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1" }],
      ["path", { d: "M18 8v7" }],
      ["path", { d: "M6 19v2" }],
      ["path", { d: "M18 19v2" }]
    ];
    var Minimize2 = [
      ["path", { d: "m14 10 7-7" }],
      ["path", { d: "M20 10h-6V4" }],
      ["path", { d: "m3 21 7-7" }],
      ["path", { d: "M4 14h6v6" }]
    ];
    var Minimize = [
      ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }],
      ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }],
      ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]
    ];
    var Milk = [
      ["path", { d: "M8 2h8" }],
      [
        "path",
        {
          d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
        }
      ],
      ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }]
    ];
    var Minus = [["path", { d: "M5 12h14" }]];
    var MonitorCheck = [
      ["path", { d: "m9 10 2 2 4-4" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ];
    var MonitorCog = [
      ["path", { d: "M12 17v4" }],
      ["path", { d: "m14.305 7.53.923-.382" }],
      ["path", { d: "m15.228 4.852-.923-.383" }],
      ["path", { d: "m16.852 3.228-.383-.924" }],
      ["path", { d: "m16.852 8.772-.383.923" }],
      ["path", { d: "m19.148 3.228.383-.924" }],
      ["path", { d: "m19.53 9.696-.382-.924" }],
      ["path", { d: "m20.772 4.852.924-.383" }],
      ["path", { d: "m20.772 7.148.924.383" }],
      ["path", { d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }],
      ["path", { d: "M8 21h8" }],
      ["circle", { cx: "18", cy: "6", r: "3" }]
    ];
    var MonitorDot = [
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" }],
      ["path", { d: "M8 21h8" }],
      ["circle", { cx: "19", cy: "6", r: "3" }]
    ];
    var MonitorDown = [
      ["path", { d: "M12 13V7" }],
      ["path", { d: "m15 10-3 3-3-3" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ];
    var MonitorOff = [
      ["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" }],
      ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9" }],
      ["path", { d: "M8 21h8" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var MonitorPlay = [
      [
        "path",
        {
          d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"
        }
      ],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }],
      ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }]
    ];
    var MonitorPause = [
      ["path", { d: "M10 13V7" }],
      ["path", { d: "M14 13V7" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ];
    var MonitorSmartphone = [
      ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }],
      ["path", { d: "M10 19v-3.96 3.15" }],
      ["path", { d: "M7 19h5" }],
      ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2" }]
    ];
    var MonitorSpeaker = [
      ["path", { d: "M5.5 20H8" }],
      ["path", { d: "M17 9h.01" }],
      ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2" }],
      ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }],
      ["circle", { cx: "17", cy: "15", r: "1" }]
    ];
    var MonitorStop = [
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }],
      ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }],
      ["rect", { x: "9", y: "7", width: "6", height: "6", rx: "1" }]
    ];
    var MonitorUp = [
      ["path", { d: "m9 10 3-3 3 3" }],
      ["path", { d: "M12 13V7" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ];
    var MonitorX = [
      ["path", { d: "m14.5 12.5-5-5" }],
      ["path", { d: "m9.5 12.5 5-5" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }]
    ];
    var Monitor = [
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
      ["line", { x1: "8", x2: "16", y1: "21", y2: "21" }],
      ["line", { x1: "12", x2: "12", y1: "17", y2: "21" }]
    ];
    var MoonStar = [
      ["path", { d: "M18 5h4" }],
      ["path", { d: "M20 3v4" }],
      [
        "path",
        {
          d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
        }
      ]
    ];
    var Moon = [
      [
        "path",
        {
          d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
        }
      ]
    ];
    var MountainSnow = [
      ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }],
      ["path", { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" }]
    ];
    var Mountain = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }]];
    var MouseOff = [
      ["path", { d: "M12 6v.343" }],
      ["path", { d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }],
      ["path", { d: "M19 13.343V9A7 7 0 0 0 8.56 2.902" }],
      ["path", { d: "M22 22 2 2" }]
    ];
    var MousePointer2 = [
      [
        "path",
        {
          d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
        }
      ]
    ];
    var MousePointerBan = [
      [
        "path",
        {
          d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"
        }
      ],
      ["circle", { cx: "16", cy: "16", r: "6" }],
      ["path", { d: "m11.8 11.8 8.4 8.4" }]
    ];
    var MousePointerClick = [
      ["path", { d: "M14 4.1 12 6" }],
      ["path", { d: "m5.1 8-2.9-.8" }],
      ["path", { d: "m6 12-1.9 2" }],
      ["path", { d: "M7.2 2.2 8 5.1" }],
      [
        "path",
        {
          d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
        }
      ]
    ];
    var MousePointer = [
      ["path", { d: "M12.586 12.586 19 19" }],
      [
        "path",
        {
          d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
        }
      ]
    ];
    var Mouse = [
      ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7" }],
      ["path", { d: "M12 6v4" }]
    ];
    var Move3d = [
      ["path", { d: "M5 3v16h16" }],
      ["path", { d: "m5 19 6-6" }],
      ["path", { d: "m2 6 3-3 3 3" }],
      ["path", { d: "m18 16 3 3-3 3" }]
    ];
    var MoveDiagonal2 = [
      ["path", { d: "M19 13v6h-6" }],
      ["path", { d: "M5 11V5h6" }],
      ["path", { d: "m5 5 14 14" }]
    ];
    var MoveDiagonal = [
      ["path", { d: "M11 19H5v-6" }],
      ["path", { d: "M13 5h6v6" }],
      ["path", { d: "M19 5 5 19" }]
    ];
    var MoveDownLeft = [
      ["path", { d: "M11 19H5V13" }],
      ["path", { d: "M19 5L5 19" }]
    ];
    var MoveDownRight = [
      ["path", { d: "M19 13V19H13" }],
      ["path", { d: "M5 5L19 19" }]
    ];
    var MoveDown = [
      ["path", { d: "M8 18L12 22L16 18" }],
      ["path", { d: "M12 2V22" }]
    ];
    var MoveHorizontal = [
      ["path", { d: "m18 8 4 4-4 4" }],
      ["path", { d: "M2 12h20" }],
      ["path", { d: "m6 8-4 4 4 4" }]
    ];
    var MoveLeft = [
      ["path", { d: "M6 8L2 12L6 16" }],
      ["path", { d: "M2 12H22" }]
    ];
    var MoveRight = [
      ["path", { d: "M18 8L22 12L18 16" }],
      ["path", { d: "M2 12H22" }]
    ];
    var MoveUpLeft = [
      ["path", { d: "M5 11V5H11" }],
      ["path", { d: "M5 5L19 19" }]
    ];
    var MoveUpRight = [
      ["path", { d: "M13 5H19V11" }],
      ["path", { d: "M19 5L5 19" }]
    ];
    var MoveUp = [
      ["path", { d: "M8 6L12 2L16 6" }],
      ["path", { d: "M12 2V22" }]
    ];
    var MoveVertical = [
      ["path", { d: "M12 2v20" }],
      ["path", { d: "m8 18 4 4 4-4" }],
      ["path", { d: "m8 6 4-4 4 4" }]
    ];
    var Move = [
      ["path", { d: "M12 2v20" }],
      ["path", { d: "m15 19-3 3-3-3" }],
      ["path", { d: "m19 9 3 3-3 3" }],
      ["path", { d: "M2 12h20" }],
      ["path", { d: "m5 9-3 3 3 3" }],
      ["path", { d: "m9 5 3-3 3 3" }]
    ];
    var Music2 = [
      ["circle", { cx: "8", cy: "18", r: "4" }],
      ["path", { d: "M12 18V2l7 4" }]
    ];
    var Music3 = [
      ["circle", { cx: "12", cy: "18", r: "4" }],
      ["path", { d: "M16 18V2" }]
    ];
    var Music4 = [
      ["path", { d: "M9 18V5l12-2v13" }],
      ["path", { d: "m9 9 12-2" }],
      ["circle", { cx: "6", cy: "18", r: "3" }],
      ["circle", { cx: "18", cy: "16", r: "3" }]
    ];
    var Music = [
      ["path", { d: "M9 18V5l12-2v13" }],
      ["circle", { cx: "6", cy: "18", r: "3" }],
      ["circle", { cx: "18", cy: "16", r: "3" }]
    ];
    var Navigation2Off = [
      ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }],
      ["path", { d: "M14.53 8.88 12 2l-1.17 3.17" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Navigation2 = [["polygon", { points: "12 2 19 21 12 17 5 21 12 2" }]];
    var NavigationOff = [
      ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }],
      ["path", { d: "M17.39 11.73 22 2l-9.73 4.61" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Navigation = [["polygon", { points: "3 11 22 2 13 21 11 13 3 11" }]];
    var Network = [
      ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1" }],
      ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }],
      ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }],
      ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }],
      ["path", { d: "M12 12V8" }]
    ];
    var Newspaper = [
      ["path", { d: "M15 18h-5" }],
      ["path", { d: "M18 14h-8" }],
      [
        "path",
        {
          d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"
        }
      ],
      ["rect", { width: "8", height: "4", x: "10", y: "6", rx: "1" }]
    ];
    var Nfc = [
      ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36" }],
      ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58" }],
      ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" }],
      ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20" }]
    ];
    var NonBinary = [
      ["path", { d: "M12 2v10" }],
      ["path", { d: "m8.5 4 7 4" }],
      ["path", { d: "m8.5 8 7-4" }],
      ["circle", { cx: "12", cy: "17", r: "5" }]
    ];
    var NotebookPen = [
      ["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" }],
      ["path", { d: "M2 6h4" }],
      ["path", { d: "M2 10h4" }],
      ["path", { d: "M2 14h4" }],
      ["path", { d: "M2 18h4" }],
      [
        "path",
        {
          d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ]
    ];
    var NotebookTabs = [
      ["path", { d: "M2 6h4" }],
      ["path", { d: "M2 10h4" }],
      ["path", { d: "M2 14h4" }],
      ["path", { d: "M2 18h4" }],
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
      ["path", { d: "M15 2v20" }],
      ["path", { d: "M15 7h5" }],
      ["path", { d: "M15 12h5" }],
      ["path", { d: "M15 17h5" }]
    ];
    var NotebookText = [
      ["path", { d: "M2 6h4" }],
      ["path", { d: "M2 10h4" }],
      ["path", { d: "M2 14h4" }],
      ["path", { d: "M2 18h4" }],
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
      ["path", { d: "M9.5 8h5" }],
      ["path", { d: "M9.5 12H16" }],
      ["path", { d: "M9.5 16H14" }]
    ];
    var NotepadTextDashed = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M12 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M20 12v2" }],
      ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1" }],
      ["path", { d: "M13 22h-2" }],
      ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M4 14v-2" }],
      ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M8 10h6" }],
      ["path", { d: "M8 14h8" }],
      ["path", { d: "M8 18h5" }]
    ];
    var Notebook = [
      ["path", { d: "M2 6h4" }],
      ["path", { d: "M2 10h4" }],
      ["path", { d: "M2 14h4" }],
      ["path", { d: "M2 18h4" }],
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
      ["path", { d: "M16 2v20" }]
    ];
    var NotepadText = [
      ["path", { d: "M8 2v4" }],
      ["path", { d: "M12 2v4" }],
      ["path", { d: "M16 2v4" }],
      ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2" }],
      ["path", { d: "M8 10h6" }],
      ["path", { d: "M8 14h8" }],
      ["path", { d: "M8 18h5" }]
    ];
    var NutOff = [
      ["path", { d: "M12 4V2" }],
      [
        "path",
        {
          d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"
        }
      ],
      ["path", { d: "M19 10v3.343" }],
      [
        "path",
        {
          d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Nut = [
      ["path", { d: "M12 4V2" }],
      [
        "path",
        {
          d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"
        }
      ],
      [
        "path",
        {
          d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"
        }
      ]
    ];
    var OctagonAlert = [
      ["path", { d: "M12 16h.01" }],
      ["path", { d: "M12 8v4" }],
      [
        "path",
        {
          d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"
        }
      ]
    ];
    var OctagonMinus = [
      [
        "path",
        {
          d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
        }
      ],
      ["path", { d: "M8 12h8" }]
    ];
    var OctagonX = [
      ["path", { d: "m15 9-6 6" }],
      [
        "path",
        {
          d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
        }
      ],
      ["path", { d: "m9 9 6 6" }]
    ];
    var Octagon = [
      [
        "path",
        {
          d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
        }
      ]
    ];
    var OctagonPause = [
      ["path", { d: "M10 15V9" }],
      ["path", { d: "M14 15V9" }],
      [
        "path",
        {
          d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
        }
      ]
    ];
    var Omega = [
      [
        "path",
        {
          d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"
        }
      ]
    ];
    var Option = [
      ["path", { d: "M3 3h6l6 18h6" }],
      ["path", { d: "M14 3h7" }]
    ];
    var Orbit = [
      ["path", { d: "M20.341 6.484A10 10 0 0 1 10.266 21.85" }],
      ["path", { d: "M3.659 17.516A10 10 0 0 1 13.74 2.152" }],
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["circle", { cx: "19", cy: "5", r: "2" }],
      ["circle", { cx: "5", cy: "19", r: "2" }]
    ];
    var Package2 = [
      ["path", { d: "M12 3v6" }],
      [
        "path",
        {
          d: "M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z"
        }
      ],
      ["path", { d: "M3.054 9.013h17.893" }]
    ];
    var PackageCheck = [
      ["path", { d: "m16 16 2 2 4-4" }],
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
    ];
    var Origami = [
      ["path", { d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" }],
      [
        "path",
        { d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" }
      ],
      [
        "path",
        {
          d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"
        }
      ]
    ];
    var PackageMinus = [
      ["path", { d: "M16 16h6" }],
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
    ];
    var PackageOpen = [
      ["path", { d: "M12 22v-9" }],
      [
        "path",
        {
          d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"
        }
      ],
      [
        "path",
        {
          d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"
        }
      ],
      [
        "path",
        {
          d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"
        }
      ]
    ];
    var PackagePlus = [
      ["path", { d: "M16 16h6" }],
      ["path", { d: "M19 13v6" }],
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
    ];
    var PackageX = [
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }],
      ["path", { d: "m17 13 5 5m-5 0 5-5" }]
    ];
    var PackageSearch = [
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }],
      ["circle", { cx: "18.5", cy: "15.5", r: "2.5" }],
      ["path", { d: "M20.27 17.27 22 19" }]
    ];
    var Package = [
      [
        "path",
        {
          d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
        }
      ],
      ["path", { d: "M12 22V12" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7" }],
      ["path", { d: "m7.5 4.27 9 5.15" }]
    ];
    var PaintBucket = [
      ["path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }],
      ["path", { d: "m5 2 5 5" }],
      ["path", { d: "M2 13h15" }],
      ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" }]
    ];
    var PaintRoller = [
      ["rect", { width: "16", height: "6", x: "2", y: "2", rx: "2" }],
      ["path", { d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }],
      ["rect", { width: "4", height: "6", x: "8", y: "16", rx: "1" }]
    ];
    var PaintbrushVertical = [
      ["path", { d: "M10 2v2" }],
      ["path", { d: "M14 2v4" }],
      ["path", { d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" }],
      [
        "path",
        {
          d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"
        }
      ]
    ];
    var Paintbrush = [
      ["path", { d: "m14.622 17.897-10.68-2.913" }],
      [
        "path",
        {
          d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
        }
      ],
      [
        "path",
        {
          d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
        }
      ]
    ];
    var Palette = [
      [
        "path",
        {
          d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"
        }
      ],
      ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor" }],
      ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor" }]
    ];
    var Panda = [
      ["path", { d: "M11.25 17.25h1.5L12 18z" }],
      ["path", { d: "m15 12 2 2" }],
      ["path", { d: "M18 6.5a.5.5 0 0 0-.5-.5" }],
      [
        "path",
        {
          d: "M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83"
        }
      ],
      ["path", { d: "M6 6.5a.495.495 0 0 1 .5-.5" }],
      ["path", { d: "m9 12-2 2" }]
    ];
    var PanelBottomClose = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "m15 8-3 3-3-3" }]
    ];
    var PanelBottomDashed = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M14 15h1" }],
      ["path", { d: "M19 15h2" }],
      ["path", { d: "M3 15h2" }],
      ["path", { d: "M9 15h1" }]
    ];
    var PanelBottomOpen = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "m9 10 3-3 3 3" }]
    ];
    var PanelLeftClose = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 3v18" }],
      ["path", { d: "m16 15-3-3 3-3" }]
    ];
    var PanelBottom = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 15h18" }]
    ];
    var PanelLeftDashed = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 14v1" }],
      ["path", { d: "M9 19v2" }],
      ["path", { d: "M9 3v2" }],
      ["path", { d: "M9 9v1" }]
    ];
    var PanelLeftOpen = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 3v18" }],
      ["path", { d: "m14 9 3 3-3 3" }]
    ];
    var PanelLeftRightDashed = [
      ["path", { d: "M15 10V9" }],
      ["path", { d: "M15 15v-1" }],
      ["path", { d: "M15 21v-2" }],
      ["path", { d: "M15 5V3" }],
      ["path", { d: "M9 10V9" }],
      ["path", { d: "M9 15v-1" }],
      ["path", { d: "M9 21v-2" }],
      ["path", { d: "M9 5V3" }],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
    ];
    var PanelLeft = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 3v18" }]
    ];
    var PanelRightClose = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M15 3v18" }],
      ["path", { d: "m8 9 3 3-3 3" }]
    ];
    var PanelRightDashed = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M15 14v1" }],
      ["path", { d: "M15 19v2" }],
      ["path", { d: "M15 3v2" }],
      ["path", { d: "M15 9v1" }]
    ];
    var PanelRightOpen = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M15 3v18" }],
      ["path", { d: "m10 15-3-3 3-3" }]
    ];
    var PanelRight = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M15 3v18" }]
    ];
    var PanelTopBottomDashed = [
      ["path", { d: "M14 15h1" }],
      ["path", { d: "M14 9h1" }],
      ["path", { d: "M19 15h2" }],
      ["path", { d: "M19 9h2" }],
      ["path", { d: "M3 15h2" }],
      ["path", { d: "M3 9h2" }],
      ["path", { d: "M9 15h1" }],
      ["path", { d: "M9 9h1" }],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
    ];
    var PanelTopClose = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "m9 16 3-3 3 3" }]
    ];
    var PanelTopDashed = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M14 9h1" }],
      ["path", { d: "M19 9h2" }],
      ["path", { d: "M3 9h2" }],
      ["path", { d: "M9 9h1" }]
    ];
    var PanelTopOpen = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "m15 14-3 3-3-3" }]
    ];
    var PanelTop = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }]
    ];
    var PanelsLeftBottom = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 3v18" }],
      ["path", { d: "M9 15h12" }]
    ];
    var PanelsRightBottom = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 15h12" }],
      ["path", { d: "M15 3v18" }]
    ];
    var PanelsTopLeft = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "M9 21V9" }]
    ];
    var Paperclip = [
      [
        "path",
        {
          d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"
        }
      ]
    ];
    var Parentheses = [
      ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }],
      ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }]
    ];
    var ParkingMeter = [
      ["path", { d: "M11 15h2" }],
      ["path", { d: "M12 12v3" }],
      ["path", { d: "M12 19v3" }],
      [
        "path",
        {
          d: "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"
        }
      ],
      ["path", { d: "M9 9a3 3 0 1 1 6 0" }]
    ];
    var PartyPopper = [
      ["path", { d: "M5.8 11.3 2 22l10.7-3.79" }],
      ["path", { d: "M4 3h.01" }],
      ["path", { d: "M22 8h.01" }],
      ["path", { d: "M15 2h.01" }],
      ["path", { d: "M22 20h.01" }],
      [
        "path",
        {
          d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
        }
      ],
      ["path", { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" }],
      ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" }],
      [
        "path",
        {
          d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
        }
      ]
    ];
    var Pause = [
      ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1" }],
      ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1" }]
    ];
    var PawPrint = [
      ["circle", { cx: "11", cy: "4", r: "2" }],
      ["circle", { cx: "18", cy: "8", r: "2" }],
      ["circle", { cx: "20", cy: "16", r: "2" }],
      [
        "path",
        {
          d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
        }
      ]
    ];
    var PcCase = [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2" }],
      ["path", { d: "M15 14h.01" }],
      ["path", { d: "M9 6h6" }],
      ["path", { d: "M9 10h6" }]
    ];
    var PenLine = [
      ["path", { d: "M13 21h8" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        }
      ]
    ];
    var PenOff = [
      [
        "path",
        {
          d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
        }
      ],
      ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var PenTool = [
      [
        "path",
        {
          d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"
        }
      ],
      [
        "path",
        {
          d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"
        }
      ],
      ["path", { d: "m2.3 2.3 7.286 7.286" }],
      ["circle", { cx: "11", cy: "11", r: "2" }]
    ];
    var PencilLine = [
      ["path", { d: "M13 21h8" }],
      ["path", { d: "m15 5 4 4" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        }
      ]
    ];
    var Pen = [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        }
      ]
    ];
    var PencilOff = [
      [
        "path",
        {
          d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
        }
      ],
      ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }],
      ["path", { d: "m15 5 4 4" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var PencilRuler = [
      ["path", { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" }],
      ["path", { d: "m8 6 2-2" }],
      ["path", { d: "m18 16 2-2" }],
      ["path", { d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        }
      ],
      ["path", { d: "m15 5 4 4" }]
    ];
    var Pencil = [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        }
      ],
      ["path", { d: "m15 5 4 4" }]
    ];
    var Pentagon = [
      [
        "path",
        {
          d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"
        }
      ]
    ];
    var Percent = [
      ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }],
      ["circle", { cx: "6.5", cy: "6.5", r: "2.5" }],
      ["circle", { cx: "17.5", cy: "17.5", r: "2.5" }]
    ];
    var PersonStanding = [
      ["circle", { cx: "12", cy: "5", r: "1" }],
      ["path", { d: "m9 20 3-6 3 6" }],
      ["path", { d: "m6 8 6 2 6-2" }],
      ["path", { d: "M12 10v4" }]
    ];
    var PhilippinePeso = [
      ["path", { d: "M20 11H4" }],
      ["path", { d: "M20 7H4" }],
      ["path", { d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" }]
    ];
    var PhoneCall = [
      ["path", { d: "M13 2a9 9 0 0 1 9 9" }],
      ["path", { d: "M13 6a5 5 0 0 1 5 5" }],
      [
        "path",
        {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        }
      ]
    ];
    var PhoneForwarded = [
      ["path", { d: "M14 6h8" }],
      ["path", { d: "m18 2 4 4-4 4" }],
      [
        "path",
        {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        }
      ]
    ];
    var PhoneIncoming = [
      ["path", { d: "M16 2v6h6" }],
      ["path", { d: "m22 2-6 6" }],
      [
        "path",
        {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        }
      ]
    ];
    var PhoneMissed = [
      ["path", { d: "m16 2 6 6" }],
      ["path", { d: "m22 2-6 6" }],
      [
        "path",
        {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        }
      ]
    ];
    var PhoneOff = [
      [
        "path",
        {
          d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"
        }
      ],
      ["path", { d: "M22 2 2 22" }],
      [
        "path",
        {
          d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"
        }
      ]
    ];
    var PhoneOutgoing = [
      ["path", { d: "m16 8 6-6" }],
      ["path", { d: "M22 8V2h-6" }],
      [
        "path",
        {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        }
      ]
    ];
    var Phone = [
      [
        "path",
        {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        }
      ]
    ];
    var Pi = [
      ["line", { x1: "9", x2: "9", y1: "4", y2: "20" }],
      ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13" }],
      ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4" }]
    ];
    var Piano = [
      [
        "path",
        {
          d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"
        }
      ],
      ["path", { d: "M2 14h20" }],
      ["path", { d: "M6 14v4" }],
      ["path", { d: "M10 14v4" }],
      ["path", { d: "M14 14v4" }],
      ["path", { d: "M18 14v4" }]
    ];
    var Pickaxe = [
      ["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" }],
      [
        "path",
        {
          d: "M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"
        }
      ],
      [
        "path",
        {
          d: "M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"
        }
      ],
      [
        "path",
        {
          d: "M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"
        }
      ]
    ];
    var PictureInPicture2 = [
      ["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }],
      ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2" }]
    ];
    var PictureInPicture = [
      ["path", { d: "M2 10h6V4" }],
      ["path", { d: "m2 4 6 6" }],
      ["path", { d: "M21 10V7a2 2 0 0 0-2-2h-7" }],
      ["path", { d: "M3 14v2a2 2 0 0 0 2 2h3" }],
      ["rect", { x: "12", y: "14", width: "10", height: "7", rx: "1" }]
    ];
    var PiggyBank = [
      [
        "path",
        {
          d: "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"
        }
      ],
      ["path", { d: "M16 10h.01" }],
      ["path", { d: "M2 8v1a2 2 0 0 0 2 2h1" }]
    ];
    var PilcrowRight = [
      ["path", { d: "M10 3v11" }],
      ["path", { d: "M10 9H7a1 1 0 0 1 0-6h8" }],
      ["path", { d: "M14 3v11" }],
      ["path", { d: "m18 14 4 4H2" }],
      ["path", { d: "m22 18-4 4" }]
    ];
    var PilcrowLeft = [
      ["path", { d: "M14 3v11" }],
      ["path", { d: "M14 9h-3a3 3 0 0 1 0-6h9" }],
      ["path", { d: "M18 3v11" }],
      ["path", { d: "M22 18H2l4-4" }],
      ["path", { d: "m6 22-4-4" }]
    ];
    var Pilcrow = [
      ["path", { d: "M13 4v16" }],
      ["path", { d: "M17 4v16" }],
      ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }]
    ];
    var PillBottle = [
      ["path", { d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }],
      ["path", { d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }],
      ["rect", { width: "16", height: "5", x: "4", y: "2", rx: "1" }]
    ];
    var Pill = [
      ["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }],
      ["path", { d: "m8.5 8.5 7 7" }]
    ];
    var PinOff = [
      ["path", { d: "M12 17v5" }],
      ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" }]
    ];
    var Pin = [
      ["path", { d: "M12 17v5" }],
      [
        "path",
        {
          d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
        }
      ]
    ];
    var Pipette = [
      [
        "path",
        {
          d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"
        }
      ],
      ["path", { d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" }],
      ["path", { d: "m2 22 .414-.414" }]
    ];
    var Pizza = [
      ["path", { d: "m12 14-1 1" }],
      ["path", { d: "m13.75 18.25-1.25 1.42" }],
      ["path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }],
      ["path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7" }],
      [
        "path",
        {
          d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"
        }
      ]
    ];
    var PlaneLanding = [
      ["path", { d: "M2 22h20" }],
      [
        "path",
        {
          d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
        }
      ]
    ];
    var PlaneTakeoff = [
      ["path", { d: "M2 22h20" }],
      [
        "path",
        {
          d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
        }
      ]
    ];
    var Plane = [
      [
        "path",
        {
          d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        }
      ]
    ];
    var Play = [
      [
        "path",
        { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" }
      ]
    ];
    var Plug2 = [
      ["path", { d: "M9 2v6" }],
      ["path", { d: "M15 2v6" }],
      ["path", { d: "M12 17v5" }],
      ["path", { d: "M5 8h14" }],
      ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z" }]
    ];
    var PlugZap = [
      ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }],
      ["path", { d: "m2 22 3-3" }],
      ["path", { d: "M7.5 13.5 10 11" }],
      ["path", { d: "M10.5 16.5 13 14" }],
      ["path", { d: "m18 3-4 4h6l-4 4" }]
    ];
    var Plug = [
      ["path", { d: "M12 22v-5" }],
      ["path", { d: "M9 8V2" }],
      ["path", { d: "M15 8V2" }],
      ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }]
    ];
    var Plus = [
      ["path", { d: "M5 12h14" }],
      ["path", { d: "M12 5v14" }]
    ];
    var PocketKnife = [
      ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }],
      ["path", { d: "M18 6h.01" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }],
      ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" }]
    ];
    var Podcast = [
      ["path", { d: "M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z", fill: "currentColor" }],
      ["path", { d: "M16.85 18.58a9 9 0 1 0-9.7 0" }],
      ["path", { d: "M8 14a5 5 0 1 1 8 0" }],
      ["circle", { cx: "12", cy: "11", r: "1", fill: "currentColor" }]
    ];
    var Pocket = [
      ["path", { d: "M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z" }],
      ["path", { d: "m8 10 4 4 4-4" }]
    ];
    var Pointer = [
      ["path", { d: "M22 14a8 8 0 0 1-8 8" }],
      ["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
      ["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" }],
      ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" }],
      [
        "path",
        {
          d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
        }
      ]
    ];
    var PointerOff = [
      ["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957" }],
      ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295" }],
      ["path", { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" }],
      [
        "path",
        { d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" }
      ],
      ["path", { d: "M6 6v8" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var Popcorn = [
      ["path", { d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" }],
      ["path", { d: "M10 22 9 8" }],
      ["path", { d: "m14 22 1-14" }],
      [
        "path",
        {
          d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
        }
      ]
    ];
    var Popsicle = [
      [
        "path",
        { d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" }
      ],
      ["path", { d: "m22 22-5.5-5.5" }]
    ];
    var PoundSterling = [
      ["path", { d: "M18 7c0-5.333-8-5.333-8 0" }],
      ["path", { d: "M10 7v14" }],
      ["path", { d: "M6 21h12" }],
      ["path", { d: "M6 13h10" }]
    ];
    var PowerOff = [
      ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }],
      ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }],
      ["path", { d: "M12 2v4" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var Presentation = [
      ["path", { d: "M2 3h20" }],
      ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }],
      ["path", { d: "m7 21 5-5 5 5" }]
    ];
    var Power = [
      ["path", { d: "M12 2v10" }],
      ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04" }]
    ];
    var PrinterCheck = [
      ["path", { d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" }],
      ["path", { d: "m16 19 2 2 4-4" }],
      ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }]
    ];
    var Printer = [
      ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }],
      ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1" }]
    ];
    var Projector = [
      ["path", { d: "M5 7 3 5" }],
      ["path", { d: "M9 6V3" }],
      ["path", { d: "m13 7 2-2" }],
      ["circle", { cx: "9", cy: "13", r: "3" }],
      [
        "path",
        { d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" }
      ],
      ["path", { d: "M16 16h2" }]
    ];
    var Proportions = [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M12 9v11" }],
      ["path", { d: "M2 9h13a2 2 0 0 1 2 2v9" }]
    ];
    var Pyramid = [
      [
        "path",
        {
          d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
        }
      ],
      ["path", { d: "M12 2v20" }]
    ];
    var Puzzle = [
      [
        "path",
        {
          d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"
        }
      ]
    ];
    var QrCode = [
      ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1" }],
      ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1" }],
      ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1" }],
      ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 21v.01" }],
      ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }],
      ["path", { d: "M3 12h.01" }],
      ["path", { d: "M12 3h.01" }],
      ["path", { d: "M12 16v.01" }],
      ["path", { d: "M16 12h1" }],
      ["path", { d: "M21 12v.01" }],
      ["path", { d: "M12 21v-1" }]
    ];
    var Quote = [
      [
        "path",
        {
          d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
        }
      ],
      [
        "path",
        {
          d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
        }
      ]
    ];
    var Rabbit = [
      ["path", { d: "M13 16a3 3 0 0 1 2.24 5" }],
      ["path", { d: "M18 12h.01" }],
      [
        "path",
        {
          d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"
        }
      ],
      ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3" }],
      ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3" }]
    ];
    var Radar = [
      ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34" }],
      ["path", { d: "M4 6h.01" }],
      ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35" }],
      ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67" }],
      ["path", { d: "M12 18h.01" }],
      ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67" }],
      ["circle", { cx: "12", cy: "12", r: "2" }],
      ["path", { d: "m13.41 10.59 5.66-5.66" }]
    ];
    var Radiation = [
      ["path", { d: "M12 12h.01" }],
      [
        "path",
        {
          d: "M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z"
        }
      ],
      [
        "path",
        {
          d: "M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z"
        }
      ],
      [
        "path",
        {
          d: "M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z"
        }
      ]
    ];
    var RadioReceiver = [
      ["path", { d: "M5 16v2" }],
      ["path", { d: "M19 16v2" }],
      ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2" }],
      ["path", { d: "M18 12h.01" }]
    ];
    var Radical = [
      [
        "path",
        {
          d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"
        }
      ]
    ];
    var RadioTower = [
      ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }],
      ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }],
      ["circle", { cx: "12", cy: "9", r: "2" }],
      ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47" }],
      ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }],
      ["path", { d: "M9.5 18h5" }],
      ["path", { d: "m8 22 4-11 4 11" }]
    ];
    var Radio = [
      ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478" }],
      ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134" }],
      ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134" }],
      ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ];
    var Radius = [
      ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82" }],
      ["circle", { cx: "19", cy: "19", r: "2" }],
      ["path", { d: "m13.41 13.41 4.18 4.18" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ];
    var RailSymbol = [
      ["path", { d: "M5 15h14" }],
      ["path", { d: "M5 9h14" }],
      ["path", { d: "m14 20-5-5 6-6-5-5" }]
    ];
    var Rainbow = [
      ["path", { d: "M22 17a10 10 0 0 0-20 0" }],
      ["path", { d: "M6 17a6 6 0 0 1 12 0" }],
      ["path", { d: "M10 17a2 2 0 0 1 4 0" }]
    ];
    var Rat = [
      ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12" }],
      ["path", { d: "M13.236 18a3 3 0 0 0-2.2-5" }],
      ["path", { d: "M16 9h.01" }],
      [
        "path",
        {
          d: "M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"
        }
      ],
      ["path", { d: "M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" }]
    ];
    var Ratio = [
      ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }],
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
    ];
    var ReceiptCent = [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M12 6.5v11" }],
      ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]
    ];
    var ReceiptEuro = [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M8 12h5" }],
      ["path", { d: "M16 9.5a4 4 0 1 0 0 5.2" }]
    ];
    var ReceiptIndianRupee = [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M8 7h8" }],
      ["path", { d: "M12 17.5 8 15h1a4 4 0 0 0 0-8" }],
      ["path", { d: "M8 11h8" }]
    ];
    var ReceiptJapaneseYen = [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "m12 10 3-3" }],
      ["path", { d: "m9 7 3 3v7.5" }],
      ["path", { d: "M9 11h6" }],
      ["path", { d: "M9 15h6" }]
    ];
    var ReceiptPoundSterling = [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M8 13h5" }],
      ["path", { d: "M10 17V9.5a2.5 2.5 0 0 1 5 0" }],
      ["path", { d: "M8 17h7" }]
    ];
    var ReceiptSwissFranc = [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M10 17V7h5" }],
      ["path", { d: "M10 11h4" }],
      ["path", { d: "M8 15h5" }]
    ];
    var ReceiptRussianRuble = [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M8 15h5" }],
      ["path", { d: "M8 11h5a2 2 0 1 0 0-4h-3v10" }]
    ];
    var ReceiptText = [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M14 8H8" }],
      ["path", { d: "M16 12H8" }],
      ["path", { d: "M13 16H8" }]
    ];
    var ReceiptTurkishLira = [
      ["path", { d: "M10 6.5v11a5.5 5.5 0 0 0 5.5-5.5" }],
      ["path", { d: "m14 8-6 3" }],
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z" }]
    ];
    var Receipt = [
      ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
      ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
      ["path", { d: "M12 17.5v-11" }]
    ];
    var RectangleCircle = [
      ["path", { d: "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" }],
      ["circle", { cx: "14", cy: "12", r: "8" }]
    ];
    var RectangleEllipsis = [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M17 12h.01" }],
      ["path", { d: "M7 12h.01" }]
    ];
    var RectangleGoggles = [
      [
        "path",
        {
          d: "M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
        }
      ]
    ];
    var RectangleHorizontal = [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
    ];
    var RectangleVertical = [
      ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }]
    ];
    var Recycle = [
      ["path", { d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" }],
      ["path", { d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" }],
      ["path", { d: "m14 16-3 3 3 3" }],
      ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598" }],
      [
        "path",
        {
          d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
        }
      ],
      ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096" }]
    ];
    var Redo2 = [
      ["path", { d: "m15 14 5-5-5-5" }],
      ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" }]
    ];
    var RedoDot = [
      ["circle", { cx: "12", cy: "17", r: "1" }],
      ["path", { d: "M21 7v6h-6" }],
      ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
    ];
    var Redo = [
      ["path", { d: "M21 7v6h-6" }],
      ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
    ];
    var RefreshCcw = [
      ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
      ["path", { d: "M3 3v5h5" }],
      ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }],
      ["path", { d: "M16 16h5v5" }]
    ];
    var RefreshCcwDot = [
      ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
      ["path", { d: "M3 3v5h5" }],
      ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }],
      ["path", { d: "M16 16h5v5" }],
      ["circle", { cx: "12", cy: "12", r: "1" }]
    ];
    var RefreshCwOff = [
      ["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" }],
      ["path", { d: "M8 16H3v5" }],
      ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64" }],
      ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" }],
      ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87" }],
      ["path", { d: "M21 3v5h-5" }],
      ["path", { d: "M22 22 2 2" }]
    ];
    var RefreshCw = [
      ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }],
      ["path", { d: "M21 3v5h-5" }],
      ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }],
      ["path", { d: "M8 16H3v5" }]
    ];
    var Refrigerator = [
      ["path", { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" }],
      ["path", { d: "M5 10h14" }],
      ["path", { d: "M15 7v6" }]
    ];
    var Regex = [
      ["path", { d: "M17 3v10" }],
      ["path", { d: "m12.67 5.5 8.66 5" }],
      ["path", { d: "m12.67 10.5 8.66-5" }],
      ["path", { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" }]
    ];
    var RemoveFormatting = [
      ["path", { d: "M4 7V4h16v3" }],
      ["path", { d: "M5 20h6" }],
      ["path", { d: "M13 4 8 20" }],
      ["path", { d: "m15 15 5 5" }],
      ["path", { d: "m20 15-5 5" }]
    ];
    var Repeat1 = [
      ["path", { d: "m17 2 4 4-4 4" }],
      ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }],
      ["path", { d: "m7 22-4-4 4-4" }],
      ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }],
      ["path", { d: "M11 10h1v4" }]
    ];
    var Repeat2 = [
      ["path", { d: "m2 9 3-3 3 3" }],
      ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6" }],
      ["path", { d: "m22 15-3 3-3-3" }],
      ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10" }]
    ];
    var Repeat = [
      ["path", { d: "m17 2 4 4-4 4" }],
      ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }],
      ["path", { d: "m7 22-4-4 4-4" }],
      ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }]
    ];
    var ReplaceAll = [
      ["path", { d: "M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }],
      ["path", { d: "M14 4a2 2 0 0 1 2-2" }],
      ["path", { d: "M16 10a2 2 0 0 1-2-2" }],
      ["path", { d: "M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }],
      ["path", { d: "M20 2a2 2 0 0 1 2 2" }],
      ["path", { d: "M22 8a2 2 0 0 1-2 2" }],
      ["path", { d: "m3 7 3 3 3-3" }],
      ["path", { d: "M6 10V5a 3 3 0 0 1 3-3h1" }],
      ["rect", { x: "2", y: "14", width: "8", height: "8", rx: "2" }]
    ];
    var Replace = [
      ["path", { d: "M14 4a2 2 0 0 1 2-2" }],
      ["path", { d: "M16 10a2 2 0 0 1-2-2" }],
      ["path", { d: "M20 2a2 2 0 0 1 2 2" }],
      ["path", { d: "M22 8a2 2 0 0 1-2 2" }],
      ["path", { d: "m3 7 3 3 3-3" }],
      ["path", { d: "M6 10V5a3 3 0 0 1 3-3h1" }],
      ["rect", { x: "2", y: "14", width: "8", height: "8", rx: "2" }]
    ];
    var ReplyAll = [
      ["path", { d: "m12 17-5-5 5-5" }],
      ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7" }],
      ["path", { d: "m7 17-5-5 5-5" }]
    ];
    var Reply = [
      ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" }],
      ["path", { d: "m9 17-5-5 5-5" }]
    ];
    var Rewind = [
      ["path", { d: "M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" }],
      ["path", { d: "M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" }]
    ];
    var Ribbon = [
      ["path", { d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" }],
      ["path", { d: "m12 18 2.57-3.5" }],
      ["path", { d: "M6.243 9.016a7 7 0 0 1 11.507-.009" }],
      ["path", { d: "M9.35 14.53 12 11.22" }],
      [
        "path",
        {
          d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"
        }
      ]
    ];
    var Rocket = [
      [
        "path",
        {
          d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
        }
      ],
      [
        "path",
        {
          d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
        }
      ],
      ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }],
      ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }]
    ];
    var RockingChair = [
      ["polyline", { points: "3.5 2 6.5 12.5 18 12.5" }],
      ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20" }],
      ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20" }],
      ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0" }]
    ];
    var RollerCoaster = [
      ["path", { d: "M6 19V5" }],
      ["path", { d: "M10 19V6.8" }],
      ["path", { d: "M14 19v-7.8" }],
      ["path", { d: "M18 5v4" }],
      ["path", { d: "M18 19v-6" }],
      ["path", { d: "M22 19V9" }],
      ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" }]
    ];
    var Rose = [
      ["path", { d: "M17 10h-1a4 4 0 1 1 4-4v.534" }],
      ["path", { d: "M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" }],
      [
        "path",
        { d: "M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" }
      ],
      ["path", { d: "M9.77 12C4 15 2 22 2 22" }],
      ["circle", { cx: "17", cy: "8", r: "2" }]
    ];
    var Rotate3d = [
      [
        "path",
        {
          d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
        }
      ],
      ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814" }],
      [
        "path",
        {
          d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
        }
      ]
    ];
    var RotateCcwKey = [
      ["path", { d: "m14.5 9.5 1 1" }],
      ["path", { d: "m15.5 8.5-4 4" }],
      ["path", { d: "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" }],
      ["path", { d: "M3 3v5h5" }],
      ["circle", { cx: "10", cy: "14", r: "2" }]
    ];
    var RotateCcwSquare = [
      ["path", { d: "M20 9V7a2 2 0 0 0-2-2h-6" }],
      ["path", { d: "m15 2-3 3 3 3" }],
      ["path", { d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" }]
    ];
    var RotateCcw = [
      ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
      ["path", { d: "M3 3v5h5" }]
    ];
    var RotateCwSquare = [
      ["path", { d: "M12 5H6a2 2 0 0 0-2 2v3" }],
      ["path", { d: "m9 8 3-3-3-3" }],
      ["path", { d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }]
    ];
    var RotateCw = [
      ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }],
      ["path", { d: "M21 3v5h-5" }]
    ];
    var RouteOff = [
      ["circle", { cx: "6", cy: "19", r: "3" }],
      ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2" }],
      ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }],
      ["path", { d: "M15 5h-4.3" }],
      ["circle", { cx: "18", cy: "5", r: "3" }]
    ];
    var Route = [
      ["circle", { cx: "6", cy: "19", r: "3" }],
      ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }],
      ["circle", { cx: "18", cy: "5", r: "3" }]
    ];
    var Router = [
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
      ["path", { d: "M6.01 18H6" }],
      ["path", { d: "M10.01 18H10" }],
      ["path", { d: "M15 10v4" }],
      ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0" }],
      ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0" }]
    ];
    var Rows2 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 12h18" }]
    ];
    var Rows3 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M21 9H3" }],
      ["path", { d: "M21 15H3" }]
    ];
    var Rows4 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M21 7.5H3" }],
      ["path", { d: "M21 12H3" }],
      ["path", { d: "M21 16.5H3" }]
    ];
    var Rss = [
      ["path", { d: "M4 11a9 9 0 0 1 9 9" }],
      ["path", { d: "M4 4a16 16 0 0 1 16 16" }],
      ["circle", { cx: "5", cy: "19", r: "1" }]
    ];
    var RulerDimensionLine = [
      ["path", { d: "M12 15v-3.014" }],
      ["path", { d: "M16 15v-3.014" }],
      ["path", { d: "M20 6H4" }],
      ["path", { d: "M20 8V4" }],
      ["path", { d: "M4 8V4" }],
      ["path", { d: "M8 15v-3.014" }],
      ["rect", { x: "3", y: "12", width: "18", height: "7", rx: "1" }]
    ];
    var RussianRuble = [
      ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18" }],
      ["path", { d: "M6 15h8" }]
    ];
    var Ruler = [
      [
        "path",
        {
          d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
        }
      ],
      ["path", { d: "m14.5 12.5 2-2" }],
      ["path", { d: "m11.5 9.5 2-2" }],
      ["path", { d: "m8.5 6.5 2-2" }],
      ["path", { d: "m17.5 15.5 2-2" }]
    ];
    var Sailboat = [
      ["path", { d: "M10 2v15" }],
      ["path", { d: "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" }],
      [
        "path",
        { d: "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" }
      ]
    ];
    var Salad = [
      ["path", { d: "M7 21h10" }],
      ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }],
      [
        "path",
        {
          d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
        }
      ],
      ["path", { d: "m13 12 4-4" }],
      ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" }]
    ];
    var SatelliteDish = [
      ["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z" }],
      ["path", { d: "m9 15 3-3" }],
      ["path", { d: "M17 13a6 6 0 0 0-6-6" }],
      ["path", { d: "M21 13A10 10 0 0 0 11 3" }]
    ];
    var Sandwich = [
      ["path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }],
      ["path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }],
      ["path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }],
      ["path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }],
      ["rect", { width: "20", height: "4", x: "2", y: "11", rx: "1" }]
    ];
    var Satellite = [
      [
        "path",
        {
          d: "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"
        }
      ],
      ["path", { d: "M16.5 7.5 19 5" }],
      [
        "path",
        {
          d: "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"
        }
      ],
      ["path", { d: "M9 21a6 6 0 0 0-6-6" }],
      [
        "path",
        {
          d: "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"
        }
      ]
    ];
    var SaudiRiyal = [
      ["path", { d: "m20 19.5-5.5 1.2" }],
      ["path", { d: "M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" }],
      ["path", { d: "m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" }],
      ["path", { d: "M20 10 4 13.5" }]
    ];
    var SaveAll = [
      ["path", { d: "M10 2v3a1 1 0 0 0 1 1h5" }],
      ["path", { d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }],
      ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }],
      [
        "path",
        {
          d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"
        }
      ]
    ];
    var SaveOff = [
      ["path", { d: "M13 13H8a1 1 0 0 0-1 1v7" }],
      ["path", { d: "M14 8h1" }],
      ["path", { d: "M17 21v-4" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" }],
      ["path", { d: "M29.5 11.5s5 5 4 5" }],
      ["path", { d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" }]
    ];
    var Save = [
      [
        "path",
        {
          d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        }
      ],
      ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
      ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]
    ];
    var Scale3d = [
      ["path", { d: "M5 7v11a1 1 0 0 0 1 1h11" }],
      ["path", { d: "M5.293 18.707 11 13" }],
      ["circle", { cx: "19", cy: "19", r: "2" }],
      ["circle", { cx: "5", cy: "5", r: "2" }]
    ];
    var Scale = [
      ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
      ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
      ["path", { d: "M7 21h10" }],
      ["path", { d: "M12 3v18" }],
      ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }]
    ];
    var Scaling = [
      ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }],
      ["path", { d: "M14 15H9v-5" }],
      ["path", { d: "M16 3h5v5" }],
      ["path", { d: "M21 3 9 15" }]
    ];
    var ScanBarcode = [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M8 7v10" }],
      ["path", { d: "M12 7v10" }],
      ["path", { d: "M17 7v10" }]
    ];
    var ScanEye = [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["circle", { cx: "12", cy: "12", r: "1" }],
      [
        "path",
        {
          d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
        }
      ]
    ];
    var ScanFace = [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
      ["path", { d: "M9 9h.01" }],
      ["path", { d: "M15 9h.01" }]
    ];
    var ScanHeart = [
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      [
        "path",
        { d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z" }
      ]
    ];
    var ScanLine = [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M7 12h10" }]
    ];
    var ScanQrCode = [
      ["path", { d: "M17 12v4a1 1 0 0 1-1 1h-4" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M17 8V7" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M7 17h.01" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["rect", { x: "7", y: "7", width: "5", height: "5", rx: "1" }]
    ];
    var ScanText = [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M7 8h8" }],
      ["path", { d: "M7 12h10" }],
      ["path", { d: "M7 16h6" }]
    ];
    var ScanSearch = [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "m16 16-1.9-1.9" }]
    ];
    var Scan = [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
    ];
    var School = [
      ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }],
      ["path", { d: "M18 5v16" }],
      ["path", { d: "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" }],
      [
        "path",
        {
          d: "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"
        }
      ],
      ["path", { d: "M6 5v16" }],
      ["circle", { cx: "12", cy: "9", r: "2" }]
    ];
    var ScissorsLineDashed = [
      ["path", { d: "M5.42 9.42 8 12" }],
      ["circle", { cx: "4", cy: "8", r: "2" }],
      ["path", { d: "m14 6-8.58 8.58" }],
      ["circle", { cx: "4", cy: "16", r: "2" }],
      ["path", { d: "M10.8 14.8 14 18" }],
      ["path", { d: "M16 12h-2" }],
      ["path", { d: "M22 12h-2" }]
    ];
    var Scissors = [
      ["circle", { cx: "6", cy: "6", r: "3" }],
      ["path", { d: "M8.12 8.12 12 12" }],
      ["path", { d: "M20 4 8.12 15.88" }],
      ["circle", { cx: "6", cy: "18", r: "3" }],
      ["path", { d: "M14.8 14.8 20 20" }]
    ];
    var ScreenShareOff = [
      ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }],
      ["path", { d: "M8 21h8" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "m22 3-5 5" }],
      ["path", { d: "m17 3 5 5" }]
    ];
    var ScreenShare = [
      ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }],
      ["path", { d: "M8 21h8" }],
      ["path", { d: "M12 17v4" }],
      ["path", { d: "m17 8 5-5" }],
      ["path", { d: "M17 3h5v5" }]
    ];
    var ScrollText = [
      ["path", { d: "M15 12h-5" }],
      ["path", { d: "M15 8h-5" }],
      ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
      [
        "path",
        {
          d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
        }
      ]
    ];
    var Scroll = [
      ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
      [
        "path",
        {
          d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
        }
      ]
    ];
    var SearchCheck = [
      ["path", { d: "m8 11 2 2 4-4" }],
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["path", { d: "m21 21-4.3-4.3" }]
    ];
    var SearchCode = [
      ["path", { d: "m13 13.5 2-2.5-2-2.5" }],
      ["path", { d: "m21 21-4.3-4.3" }],
      ["path", { d: "M9 8.5 7 11l2 2.5" }],
      ["circle", { cx: "11", cy: "11", r: "8" }]
    ];
    var SearchSlash = [
      ["path", { d: "m13.5 8.5-5 5" }],
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["path", { d: "m21 21-4.3-4.3" }]
    ];
    var SearchX = [
      ["path", { d: "m13.5 8.5-5 5" }],
      ["path", { d: "m8.5 8.5 5 5" }],
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["path", { d: "m21 21-4.3-4.3" }]
    ];
    var Search2 = [
      ["path", { d: "m21 21-4.34-4.34" }],
      ["circle", { cx: "11", cy: "11", r: "8" }]
    ];
    var Section = [
      ["path", { d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" }],
      ["path", { d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" }]
    ];
    var SendHorizontal = [
      [
        "path",
        {
          d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
        }
      ],
      ["path", { d: "M6 12h16" }]
    ];
    var SendToBack = [
      ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }],
      ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }],
      ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1" }],
      ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1" }]
    ];
    var Send = [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
        }
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939" }]
    ];
    var SeparatorHorizontal = [
      ["path", { d: "m16 16-4 4-4-4" }],
      ["path", { d: "M3 12h18" }],
      ["path", { d: "m8 8 4-4 4 4" }]
    ];
    var SeparatorVertical = [
      ["path", { d: "M12 3v18" }],
      ["path", { d: "m16 16 4-4-4-4" }],
      ["path", { d: "m8 8-4 4 4 4" }]
    ];
    var ServerCog = [
      ["path", { d: "m10.852 14.772-.383.923" }],
      ["path", { d: "M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" }],
      ["path", { d: "m13.148 9.228.383-.923" }],
      ["path", { d: "m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" }],
      ["path", { d: "m14.772 10.852.923-.383" }],
      ["path", { d: "m14.772 13.148.923.383" }],
      ["path", { d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" }],
      ["path", { d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "M6 6h.01" }],
      ["path", { d: "m9.228 10.852-.923-.383" }],
      ["path", { d: "m9.228 13.148-.923.383" }]
    ];
    var ServerCrash = [
      ["path", { d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" }],
      ["path", { d: "M6 6h.01" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "m13 6-4 6h6l-4 6" }]
    ];
    var Server = [
      ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }],
      ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }],
      ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }]
    ];
    var ServerOff = [
      ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }],
      ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }],
      ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1" }],
      ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var Settings2 = [
      ["path", { d: "M14 17H5" }],
      ["path", { d: "M19 7h-9" }],
      ["circle", { cx: "17", cy: "17", r: "3" }],
      ["circle", { cx: "7", cy: "7", r: "3" }]
    ];
    var Settings = [
      [
        "path",
        {
          d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3" }]
    ];
    var Shapes = [
      [
        "path",
        {
          d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
        }
      ],
      ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }],
      ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }]
    ];
    var Share2 = [
      ["circle", { cx: "18", cy: "5", r: "3" }],
      ["circle", { cx: "6", cy: "12", r: "3" }],
      ["circle", { cx: "18", cy: "19", r: "3" }],
      ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }],
      ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }]
    ];
    var Share = [
      ["path", { d: "M12 2v13" }],
      ["path", { d: "m16 6-4-4-4 4" }],
      ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }]
    ];
    var Sheet = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }],
      ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }],
      ["line", { x1: "9", x2: "9", y1: "9", y2: "21" }],
      ["line", { x1: "15", x2: "15", y1: "9", y2: "21" }]
    ];
    var Shell = [
      [
        "path",
        {
          d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
        }
      ]
    ];
    var ShieldAlert = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M12 8v4" }],
      ["path", { d: "M12 16h.01" }]
    ];
    var ShieldBan = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "m4.243 5.21 14.39 12.472" }]
    ];
    var ShieldCheck = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4" }]
    ];
    var ShieldEllipsis = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M8 12h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M16 12h.01" }]
    ];
    var ShieldHalf = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M12 22V2" }]
    ];
    var ShieldMinus = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M9 12h6" }]
    ];
    var ShieldOff = [
      ["path", { d: "m2 2 20 20" }],
      [
        "path",
        {
          d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
        }
      ],
      [
        "path",
        {
          d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
        }
      ]
    ];
    var ShieldPlus = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M9 12h6" }],
      ["path", { d: "M12 9v6" }]
    ];
    var ShieldUser = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M6.376 18.91a6 6 0 0 1 11.249.003" }],
      ["circle", { cx: "12", cy: "11", r: "4" }]
    ];
    var ShieldQuestionMark = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }],
      ["path", { d: "M12 17h.01" }]
    ];
    var ShieldX = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { d: "m14.5 9.5-5 5" }],
      ["path", { d: "m9.5 9.5 5 5" }]
    ];
    var Shield = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ]
    ];
    var Ship = [
      ["path", { d: "M12 10.189V14" }],
      ["path", { d: "M12 2v3" }],
      ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" }],
      [
        "path",
        {
          d: "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"
        }
      ],
      [
        "path",
        {
          d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }
      ]
    ];
    var Shirt = [
      [
        "path",
        {
          d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
        }
      ]
    ];
    var ShipWheel = [
      ["circle", { cx: "12", cy: "12", r: "8" }],
      ["path", { d: "M12 2v7.5" }],
      ["path", { d: "m19 5-5.23 5.23" }],
      ["path", { d: "M22 12h-7.5" }],
      ["path", { d: "m19 19-5.23-5.23" }],
      ["path", { d: "M12 14.5V22" }],
      ["path", { d: "M10.23 13.77 5 19" }],
      ["path", { d: "M9.5 12H2" }],
      ["path", { d: "M10.23 10.23 5 5" }],
      ["circle", { cx: "12", cy: "12", r: "2.5" }]
    ];
    var ShoppingBag = [
      ["path", { d: "M16 10a4 4 0 0 1-8 0" }],
      ["path", { d: "M3.103 6.034h17.794" }],
      [
        "path",
        {
          d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"
        }
      ]
    ];
    var ShoppingBasket = [
      ["path", { d: "m15 11-1 9" }],
      ["path", { d: "m19 11-4-7" }],
      ["path", { d: "M2 11h20" }],
      ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }],
      ["path", { d: "M4.5 15.5h15" }],
      ["path", { d: "m5 11 4-7" }],
      ["path", { d: "m9 11 1 9" }]
    ];
    var ShoppingCart = [
      ["circle", { cx: "8", cy: "21", r: "1" }],
      ["circle", { cx: "19", cy: "21", r: "1" }],
      [
        "path",
        { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" }
      ]
    ];
    var Shovel = [
      [
        "path",
        {
          d: "M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z"
        }
      ],
      [
        "path",
        {
          d: "M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z"
        }
      ],
      ["path", { d: "m9 15 7.879-7.878" }]
    ];
    var ShowerHead = [
      ["path", { d: "m4 4 2.5 2.5" }],
      ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7" }],
      ["path", { d: "M15 5 5 15" }],
      ["path", { d: "M14 17v.01" }],
      ["path", { d: "M10 16v.01" }],
      ["path", { d: "M13 13v.01" }],
      ["path", { d: "M16 10v.01" }],
      ["path", { d: "M11 20v.01" }],
      ["path", { d: "M17 14v.01" }],
      ["path", { d: "M20 11v.01" }]
    ];
    var Shredder = [
      ["path", { d: "M10 22v-5" }],
      ["path", { d: "M14 19v-2" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M18 20v-3" }],
      ["path", { d: "M2 13h20" }],
      ["path", { d: "M20 13V7l-5-5H6a2 2 0 0 0-2 2v9" }],
      ["path", { d: "M6 20v-3" }]
    ];
    var Shrimp = [
      ["path", { d: "M11 12h.01" }],
      ["path", { d: "M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1" }],
      [
        "path",
        {
          d: "M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8"
        }
      ],
      ["path", { d: "M14 8a8.5 8.5 0 0 1 0 8" }],
      ["path", { d: "M16 16c2 0 4.5-4 4-6" }]
    ];
    var Shrink = [
      ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }],
      ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6" }],
      ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6" }],
      ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3" }]
    ];
    var Sigma = [
      [
        "path",
        {
          d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"
        }
      ]
    ];
    var Shrub = [
      ["path", { d: "M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" }],
      ["path", { d: "M14.5 14.5 12 17" }],
      ["path", { d: "M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" }]
    ];
    var Shuffle = [
      ["path", { d: "m18 14 4 4-4 4" }],
      ["path", { d: "m18 2 4 4-4 4" }],
      ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" }],
      ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2" }],
      ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" }]
    ];
    var SignalHigh = [
      ["path", { d: "M2 20h.01" }],
      ["path", { d: "M7 20v-4" }],
      ["path", { d: "M12 20v-8" }],
      ["path", { d: "M17 20V8" }]
    ];
    var SignalLow = [
      ["path", { d: "M2 20h.01" }],
      ["path", { d: "M7 20v-4" }]
    ];
    var SignalMedium = [
      ["path", { d: "M2 20h.01" }],
      ["path", { d: "M7 20v-4" }],
      ["path", { d: "M12 20v-8" }]
    ];
    var SignalZero = [["path", { d: "M2 20h.01" }]];
    var Signal = [
      ["path", { d: "M2 20h.01" }],
      ["path", { d: "M7 20v-4" }],
      ["path", { d: "M12 20v-8" }],
      ["path", { d: "M17 20V8" }],
      ["path", { d: "M22 4v16" }]
    ];
    var Signature = [
      [
        "path",
        {
          d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
        }
      ],
      ["path", { d: "M3 21h18" }]
    ];
    var SignpostBig = [
      ["path", { d: "M10 9H4L2 7l2-2h6" }],
      ["path", { d: "M14 5h6l2 2-2 2h-6" }],
      ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18" }],
      ["path", { d: "M8 22h8" }]
    ];
    var Signpost = [
      ["path", { d: "M12 13v8" }],
      ["path", { d: "M12 3v3" }],
      [
        "path",
        {
          d: "M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"
        }
      ]
    ];
    var Siren = [
      ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6" }],
      ["path", { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" }],
      ["path", { d: "M21 12h1" }],
      ["path", { d: "M18.5 4.5 18 5" }],
      ["path", { d: "M2 12h1" }],
      ["path", { d: "M12 2v1" }],
      ["path", { d: "m4.929 4.929.707.707" }],
      ["path", { d: "M12 12v6" }]
    ];
    var SkipBack = [
      [
        "path",
        {
          d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"
        }
      ],
      ["path", { d: "M3 20V4" }]
    ];
    var SkipForward = [
      ["path", { d: "M21 4v16" }],
      [
        "path",
        { d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" }
      ]
    ];
    var Skull = [
      ["path", { d: "m12.5 17-.5-1-.5 1h1z" }],
      [
        "path",
        {
          d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
        }
      ],
      ["circle", { cx: "15", cy: "12", r: "1" }],
      ["circle", { cx: "9", cy: "12", r: "1" }]
    ];
    var Slack = [
      ["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5" }],
      ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" }],
      ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5" }],
      ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" }],
      ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5" }],
      ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" }],
      ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5" }],
      ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" }]
    ];
    var Slash = [["path", { d: "M22 2 2 22" }]];
    var Slice = [
      [
        "path",
        {
          d: "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"
        }
      ]
    ];
    var SlidersHorizontal = [
      ["path", { d: "M10 5H3" }],
      ["path", { d: "M12 19H3" }],
      ["path", { d: "M14 3v4" }],
      ["path", { d: "M16 17v4" }],
      ["path", { d: "M21 12h-9" }],
      ["path", { d: "M21 19h-5" }],
      ["path", { d: "M21 5h-7" }],
      ["path", { d: "M8 10v4" }],
      ["path", { d: "M8 12H3" }]
    ];
    var SlidersVertical = [
      ["path", { d: "M10 8h4" }],
      ["path", { d: "M12 21v-9" }],
      ["path", { d: "M12 8V3" }],
      ["path", { d: "M17 16h4" }],
      ["path", { d: "M19 12V3" }],
      ["path", { d: "M19 21v-5" }],
      ["path", { d: "M3 14h4" }],
      ["path", { d: "M5 10V3" }],
      ["path", { d: "M5 21v-7" }]
    ];
    var SmartphoneNfc = [
      ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1" }],
      ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36" }],
      ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }],
      ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }]
    ];
    var SmartphoneCharging = [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
      ["path", { d: "M12.667 8 10 12h4l-2.667 4" }]
    ];
    var Smartphone = [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
      ["path", { d: "M12 18h.01" }]
    ];
    var SmilePlus = [
      ["path", { d: "M22 11v1a10 10 0 1 1-9-10" }],
      ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }],
      ["path", { d: "M16 5h6" }],
      ["path", { d: "M19 2v6" }]
    ];
    var Smile = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
    ];
    var Snail = [
      ["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }],
      ["circle", { cx: "10", cy: "13", r: "8" }],
      ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }],
      ["path", { d: "M18 3 19.1 5.2" }],
      ["path", { d: "M22 3 20.9 5.2" }]
    ];
    var Snowflake = [
      ["path", { d: "m10 20-1.25-2.5L6 18" }],
      ["path", { d: "M10 4 8.75 6.5 6 6" }],
      ["path", { d: "m14 20 1.25-2.5L18 18" }],
      ["path", { d: "m14 4 1.25 2.5L18 6" }],
      ["path", { d: "m17 21-3-6h-4" }],
      ["path", { d: "m17 3-3 6 1.5 3" }],
      ["path", { d: "M2 12h6.5L10 9" }],
      ["path", { d: "m20 10-1.5 2 1.5 2" }],
      ["path", { d: "M22 12h-6.5L14 15" }],
      ["path", { d: "m4 10 1.5 2L4 14" }],
      ["path", { d: "m7 21 3-6-1.5-3" }],
      ["path", { d: "m7 3 3 6h4" }]
    ];
    var SoapDispenserDroplet = [
      ["path", { d: "M10.5 2v4" }],
      ["path", { d: "M14 2H7a2 2 0 0 0-2 2" }],
      [
        "path",
        {
          d: "M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19"
        }
      ],
      ["path", { d: "M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]
    ];
    var Sofa = [
      ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }],
      [
        "path",
        {
          d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
        }
      ],
      ["path", { d: "M4 18v2" }],
      ["path", { d: "M20 18v2" }],
      ["path", { d: "M12 4v9" }]
    ];
    var Soup = [
      ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }],
      ["path", { d: "M7 21h10" }],
      ["path", { d: "M19.5 12 22 6" }],
      ["path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }],
      ["path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }],
      ["path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" }]
    ];
    var Spade = [
      ["path", { d: "M12 18v4" }],
      [
        "path",
        {
          d: "M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5"
        }
      ]
    ];
    var Sparkle = [
      [
        "path",
        {
          d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
        }
      ]
    ];
    var Space = [["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]];
    var Sparkles = [
      [
        "path",
        {
          d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
        }
      ],
      ["path", { d: "M20 2v4" }],
      ["path", { d: "M22 4h-4" }],
      ["circle", { cx: "4", cy: "20", r: "2" }]
    ];
    var Speaker = [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
      ["path", { d: "M12 6h.01" }],
      ["circle", { cx: "12", cy: "14", r: "4" }],
      ["path", { d: "M12 14h.01" }]
    ];
    var Speech = [
      [
        "path",
        {
          d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
        }
      ],
      ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" }],
      ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975" }]
    ];
    var SpellCheck2 = [
      ["path", { d: "m6 16 6-12 6 12" }],
      ["path", { d: "M8 12h8" }],
      [
        "path",
        {
          d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
        }
      ]
    ];
    var SpellCheck = [
      ["path", { d: "m6 16 6-12 6 12" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "m16 20 2 2 4-4" }]
    ];
    var SplinePointer = [
      [
        "path",
        {
          d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
        }
      ],
      ["path", { d: "M5 17A12 12 0 0 1 17 5" }],
      ["circle", { cx: "19", cy: "5", r: "2" }],
      ["circle", { cx: "5", cy: "19", r: "2" }]
    ];
    var Spline = [
      ["circle", { cx: "19", cy: "5", r: "2" }],
      ["circle", { cx: "5", cy: "19", r: "2" }],
      ["path", { d: "M5 17A12 12 0 0 1 17 5" }]
    ];
    var Split = [
      ["path", { d: "M16 3h5v5" }],
      ["path", { d: "M8 3H3v5" }],
      ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }],
      ["path", { d: "m15 9 6-6" }]
    ];
    var Spool = [
      [
        "path",
        {
          d: "M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66"
        }
      ],
      [
        "path",
        {
          d: "m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178"
        }
      ]
    ];
    var Spotlight = [
      ["path", { d: "M15.295 19.562 16 22" }],
      ["path", { d: "m17 16 3.758 2.098" }],
      ["path", { d: "m19 12.5 3.026-.598" }],
      [
        "path",
        {
          d: "M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z"
        }
      ],
      ["path", { d: "M8 9V2" }]
    ];
    var SprayCan = [
      ["path", { d: "M3 3h.01" }],
      ["path", { d: "M7 5h.01" }],
      ["path", { d: "M11 7h.01" }],
      ["path", { d: "M3 7h.01" }],
      ["path", { d: "M7 9h.01" }],
      ["path", { d: "M3 11h.01" }],
      ["rect", { width: "4", height: "4", x: "15", y: "5" }],
      ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }],
      ["path", { d: "m13 14 8-2" }],
      ["path", { d: "m13 19 8-2" }]
    ];
    var Sprout = [
      [
        "path",
        {
          d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"
        }
      ],
      ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" }],
      ["path", { d: "M5 21h14" }]
    ];
    var SquareActivity = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7" }]
    ];
    var SquareArrowDownLeft = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m16 8-8 8" }],
      ["path", { d: "M16 16H8V8" }]
    ];
    var SquareArrowDownRight = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m8 8 8 8" }],
      ["path", { d: "M16 8v8H8" }]
    ];
    var SquareArrowDown = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M12 8v8" }],
      ["path", { d: "m8 12 4 4 4-4" }]
    ];
    var SquareArrowLeft = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m12 8-4 4 4 4" }],
      ["path", { d: "M16 12H8" }]
    ];
    var SquareArrowOutDownLeft = [
      ["path", { d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }],
      ["path", { d: "m3 21 9-9" }],
      ["path", { d: "M9 21H3v-6" }]
    ];
    var SquareArrowOutUpLeft = [
      ["path", { d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }],
      ["path", { d: "m3 3 9 9" }],
      ["path", { d: "M3 9V3h6" }]
    ];
    var SquareArrowOutDownRight = [
      ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }],
      ["path", { d: "m21 21-9-9" }],
      ["path", { d: "M21 15v6h-6" }]
    ];
    var SquareArrowOutUpRight = [
      ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }],
      ["path", { d: "m21 3-9 9" }],
      ["path", { d: "M15 3h6v6" }]
    ];
    var SquareArrowRight = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "m12 16 4-4-4-4" }]
    ];
    var SquareArrowUpLeft = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 16V8h8" }],
      ["path", { d: "M16 16 8 8" }]
    ];
    var SquareArrowUpRight = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 8h8v8" }],
      ["path", { d: "m8 16 8-8" }]
    ];
    var SquareArrowUp = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m16 12-4-4-4 4" }],
      ["path", { d: "M12 16V8" }]
    ];
    var SquareAsterisk = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M12 8v8" }],
      ["path", { d: "m8.5 14 7-4" }],
      ["path", { d: "m8.5 10 7 4" }]
    ];
    var SquareBottomDashedScissors = [
      ["path", { d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2" }],
      ["path", { d: "M10 22H8" }],
      ["path", { d: "M16 22h-2" }],
      ["circle", { cx: "8", cy: "8", r: "2" }],
      ["path", { d: "M9.414 9.414 12 12" }],
      ["path", { d: "M14.8 14.8 18 18" }],
      ["circle", { cx: "8", cy: "16", r: "2" }],
      ["path", { d: "m18 6-8.586 8.586" }]
    ];
    var SquareChartGantt = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 8h7" }],
      ["path", { d: "M8 12h6" }],
      ["path", { d: "M11 16h5" }]
    ];
    var SquareCheckBig = [
      ["path", { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" }],
      ["path", { d: "m9 11 3 3L22 4" }]
    ];
    var SquareCheck = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m9 12 2 2 4-4" }]
    ];
    var SquareChevronDown = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m16 10-4 4-4-4" }]
    ];
    var SquareChevronLeft = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m14 16-4-4 4-4" }]
    ];
    var SquareChevronRight = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m10 8 4 4-4 4" }]
    ];
    var SquareChevronUp = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m8 14 4-4 4 4" }]
    ];
    var SquareCode = [
      ["path", { d: "m10 9-3 3 3 3" }],
      ["path", { d: "m14 15 3-3-3-3" }],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
    ];
    var SquareDashedBottomCode = [
      ["path", { d: "M10 9.5 8 12l2 2.5" }],
      ["path", { d: "M14 21h1" }],
      ["path", { d: "m14 9.5 2 2.5-2 2.5" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }],
      ["path", { d: "M9 21h1" }]
    ];
    var SquareDashedBottom = [
      ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }],
      ["path", { d: "M9 21h1" }],
      ["path", { d: "M14 21h1" }]
    ];
    var SquareDashedKanban = [
      ["path", { d: "M8 7v7" }],
      ["path", { d: "M12 7v4" }],
      ["path", { d: "M16 7v9" }],
      ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
      ["path", { d: "M9 3h1" }],
      ["path", { d: "M14 3h1" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
      ["path", { d: "M21 9v1" }],
      ["path", { d: "M21 14v1" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
      ["path", { d: "M14 21h1" }],
      ["path", { d: "M9 21h1" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
      ["path", { d: "M3 14v1" }],
      ["path", { d: "M3 9v1" }]
    ];
    var SquareDashedMousePointer = [
      [
        "path",
        {
          d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
        }
      ],
      ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
      ["path", { d: "M9 3h1" }],
      ["path", { d: "M9 21h2" }],
      ["path", { d: "M14 3h1" }],
      ["path", { d: "M3 9v1" }],
      ["path", { d: "M21 9v2" }],
      ["path", { d: "M3 14v1" }]
    ];
    var SquareDashedTopSolid = [
      ["path", { d: "M14 21h1" }],
      ["path", { d: "M21 14v1" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
      ["path", { d: "M21 9v1" }],
      ["path", { d: "M3 14v1" }],
      ["path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }],
      ["path", { d: "M3 9v1" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
      ["path", { d: "M9 21h1" }]
    ];
    var SquareDashed = [
      ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
      ["path", { d: "M9 3h1" }],
      ["path", { d: "M9 21h1" }],
      ["path", { d: "M14 3h1" }],
      ["path", { d: "M14 21h1" }],
      ["path", { d: "M3 9v1" }],
      ["path", { d: "M21 9v1" }],
      ["path", { d: "M3 14v1" }],
      ["path", { d: "M21 14v1" }]
    ];
    var SquareDot = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["circle", { cx: "12", cy: "12", r: "1" }]
    ];
    var SquareDivide = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }],
      ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }]
    ];
    var SquareEqual = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 10h10" }],
      ["path", { d: "M7 14h10" }]
    ];
    var SquareFunction = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }],
      ["path", { d: "M9 11.2h5.7" }]
    ];
    var SquareKanban = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 7v7" }],
      ["path", { d: "M12 7v4" }],
      ["path", { d: "M16 7v9" }]
    ];
    var SquareLibrary = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 7v10" }],
      ["path", { d: "M11 7v10" }],
      ["path", { d: "m15 7 2 10" }]
    ];
    var SquareM = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 16V8l4 4 4-4v8" }]
    ];
    var SquareMenu = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 8h10" }],
      ["path", { d: "M7 12h10" }],
      ["path", { d: "M7 16h10" }]
    ];
    var SquareMinus = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 12h8" }]
    ];
    var SquareMousePointer = [
      [
        "path",
        {
          d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
        }
      ],
      ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }]
    ];
    var SquareParkingOff = [
      ["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" }],
      ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }],
      ["path", { d: "M9 17v-2.3" }]
    ];
    var SquareParking = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]
    ];
    var SquarePause = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }],
      ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }]
    ];
    var SquarePen = [
      ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }],
      [
        "path",
        {
          d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
        }
      ]
    ];
    var SquarePercent = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "M9 9h.01" }],
      ["path", { d: "M15 15h.01" }]
    ];
    var SquarePi = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 7h10" }],
      ["path", { d: "M10 7v10" }],
      ["path", { d: "M16 17a2 2 0 0 1-2-2V7" }]
    ];
    var SquarePilcrow = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }],
      ["path", { d: "M12 7v10" }],
      ["path", { d: "M16 7v10" }]
    ];
    var SquarePlay = [
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
      [
        "path",
        {
          d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"
        }
      ]
    ];
    var SquarePlus = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M8 12h8" }],
      ["path", { d: "M12 8v8" }]
    ];
    var SquarePower = [
      ["path", { d: "M12 7v4" }],
      ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
    ];
    var SquareRadical = [
      ["path", { d: "M7 12h2l2 5 2-10h4" }],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
    ];
    var SquareScissors = [
      ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "2" }],
      ["circle", { cx: "8", cy: "8", r: "2" }],
      ["path", { d: "M9.414 9.414 12 12" }],
      ["path", { d: "M14.8 14.8 18 18" }],
      ["circle", { cx: "8", cy: "16", r: "2" }],
      ["path", { d: "m18 6-8.586 8.586" }]
    ];
    var SquareRoundCorner = [
      ["path", { d: "M21 11a8 8 0 0 0-8-8" }],
      ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
    ];
    var SquareSigma = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9" }]
    ];
    var SquareSlash = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]
    ];
    var SquareSplitHorizontal = [
      ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }],
      ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }],
      ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]
    ];
    var SquareSplitVertical = [
      ["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" }],
      ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" }],
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]
    ];
    var SquareSquare = [
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
      ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }]
    ];
    var SquareStar = [
      [
        "path",
        {
          d: "M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"
        }
      ],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
    ];
    var SquareStack = [
      ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }],
      ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }],
      ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }]
    ];
    var SquareStop = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }]
    ];
    var SquareTerminal = [
      ["path", { d: "m7 11 2-2-2-2" }],
      ["path", { d: "M11 13h4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }]
    ];
    var SquareUser = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }]
    ];
    var SquareUserRound = [
      ["path", { d: "M18 21a6 6 0 0 0-12 0" }],
      ["circle", { cx: "12", cy: "11", r: "4" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
    ];
    var SquareX = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "m9 9 6 6" }]
    ];
    var Square = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]];
    var SquaresExclude = [
      [
        "path",
        {
          d: "M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"
        }
      ],
      [
        "path",
        {
          d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"
        }
      ]
    ];
    var SquaresIntersect = [
      ["path", { d: "M10 22a2 2 0 0 1-2-2" }],
      ["path", { d: "M14 2a2 2 0 0 1 2 2" }],
      ["path", { d: "M16 22h-2" }],
      ["path", { d: "M2 10V8" }],
      ["path", { d: "M2 4a2 2 0 0 1 2-2" }],
      ["path", { d: "M20 8a2 2 0 0 1 2 2" }],
      ["path", { d: "M22 14v2" }],
      ["path", { d: "M22 20a2 2 0 0 1-2 2" }],
      ["path", { d: "M4 16a2 2 0 0 1-2-2" }],
      ["path", { d: "M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" }],
      ["path", { d: "M8 2h2" }]
    ];
    var SquaresSubtract = [
      ["path", { d: "M10 22a2 2 0 0 1-2-2" }],
      ["path", { d: "M16 22h-2" }],
      [
        "path",
        {
          d: "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"
        }
      ],
      ["path", { d: "M20 8a2 2 0 0 1 2 2" }],
      ["path", { d: "M22 14v2" }],
      ["path", { d: "M22 20a2 2 0 0 1-2 2" }]
    ];
    var SquaresUnite = [
      [
        "path",
        {
          d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"
        }
      ]
    ];
    var SquircleDashed = [
      ["path", { d: "M13.77 3.043a34 34 0 0 0-3.54 0" }],
      ["path", { d: "M13.771 20.956a33 33 0 0 1-3.541.001" }],
      ["path", { d: "M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" }],
      ["path", { d: "M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" }],
      ["path", { d: "M20.957 10.23a33 33 0 0 1 0 3.54" }],
      ["path", { d: "M3.043 10.23a34 34 0 0 0 .001 3.541" }],
      ["path", { d: "M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" }],
      ["path", { d: "M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" }]
    ];
    var Squircle = [
      ["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }]
    ];
    var Squirrel = [
      ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5" }],
      ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }],
      ["path", { d: "M18 13h.01" }],
      [
        "path",
        {
          d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
        }
      ]
    ];
    var Stamp = [
      ["path", { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" }],
      [
        "path",
        {
          d: "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z"
        }
      ],
      ["path", { d: "M5 22h14" }]
    ];
    var StarHalf = [
      [
        "path",
        {
          d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
        }
      ]
    ];
    var StarOff = [
      ["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43" }],
      ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Star = [
      [
        "path",
        {
          d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        }
      ]
    ];
    var StepBack = [
      [
        "path",
        {
          d: "M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"
        }
      ],
      ["path", { d: "M21 20V4" }]
    ];
    var StepForward = [
      [
        "path",
        { d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" }
      ],
      ["path", { d: "M3 4v16" }]
    ];
    var Stethoscope = [
      ["path", { d: "M11 2v2" }],
      ["path", { d: "M5 2v2" }],
      ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }],
      ["path", { d: "M8 15a6 6 0 0 0 12 0v-3" }],
      ["circle", { cx: "20", cy: "10", r: "2" }]
    ];
    var Sticker = [
      ["path", { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" }],
      ["path", { d: "M14 3v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M8 13h.01" }],
      ["path", { d: "M16 13h.01" }],
      ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1" }]
    ];
    var Store = [
      ["path", { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" }],
      [
        "path",
        {
          d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"
        }
      ],
      ["path", { d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" }]
    ];
    var StickyNote = [
      ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }],
      ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4" }]
    ];
    var StretchHorizontal = [
      ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2" }],
      ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2" }]
    ];
    var StretchVertical = [
      ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2" }],
      ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2" }]
    ];
    var Strikethrough = [
      ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }],
      ["path", { d: "M14 12a4 4 0 0 1 0 8H6" }],
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]
    ];
    var Subscript = [
      ["path", { d: "m4 5 8 8" }],
      ["path", { d: "m12 5-8 8" }],
      [
        "path",
        {
          d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
        }
      ]
    ];
    var SunMedium = [
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["path", { d: "M12 3v1" }],
      ["path", { d: "M12 20v1" }],
      ["path", { d: "M3 12h1" }],
      ["path", { d: "M20 12h1" }],
      ["path", { d: "m18.364 5.636-.707.707" }],
      ["path", { d: "m6.343 17.657-.707.707" }],
      ["path", { d: "m5.636 5.636.707.707" }],
      ["path", { d: "m17.657 17.657.707.707" }]
    ];
    var SunDim = [
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["path", { d: "M12 4h.01" }],
      ["path", { d: "M20 12h.01" }],
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M4 12h.01" }],
      ["path", { d: "M17.657 6.343h.01" }],
      ["path", { d: "M17.657 17.657h.01" }],
      ["path", { d: "M6.343 17.657h.01" }],
      ["path", { d: "M6.343 6.343h.01" }]
    ];
    var SunSnow = [
      ["path", { d: "M10 21v-1" }],
      ["path", { d: "M10 4V3" }],
      ["path", { d: "M10 9a3 3 0 0 0 0 6" }],
      ["path", { d: "m14 20 1.25-2.5L18 18" }],
      ["path", { d: "m14 4 1.25 2.5L18 6" }],
      ["path", { d: "m17 21-3-6 1.5-3H22" }],
      ["path", { d: "m17 3-3 6 1.5 3" }],
      ["path", { d: "M2 12h1" }],
      ["path", { d: "m20 10-1.5 2 1.5 2" }],
      ["path", { d: "m3.64 18.36.7-.7" }],
      ["path", { d: "m4.34 6.34-.7-.7" }]
    ];
    var SunMoon = [
      ["path", { d: "M12 2v2" }],
      [
        "path",
        {
          d: "M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"
        }
      ],
      ["path", { d: "M16 12a4 4 0 0 0-4-4" }],
      ["path", { d: "m19 5-1.256 1.256" }],
      ["path", { d: "M20 12h2" }]
    ];
    var Sun = [
      ["circle", { cx: "12", cy: "12", r: "4" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "m4.93 4.93 1.41 1.41" }],
      ["path", { d: "m17.66 17.66 1.41 1.41" }],
      ["path", { d: "M2 12h2" }],
      ["path", { d: "M20 12h2" }],
      ["path", { d: "m6.34 17.66-1.41 1.41" }],
      ["path", { d: "m19.07 4.93-1.41 1.41" }]
    ];
    var Sunrise = [
      ["path", { d: "M12 2v8" }],
      ["path", { d: "m4.93 10.93 1.41 1.41" }],
      ["path", { d: "M2 18h2" }],
      ["path", { d: "M20 18h2" }],
      ["path", { d: "m19.07 10.93-1.41 1.41" }],
      ["path", { d: "M22 22H2" }],
      ["path", { d: "m8 6 4-4 4 4" }],
      ["path", { d: "M16 18a4 4 0 0 0-8 0" }]
    ];
    var Superscript = [
      ["path", { d: "m4 19 8-8" }],
      ["path", { d: "m12 19-8-8" }],
      [
        "path",
        {
          d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
        }
      ]
    ];
    var Sunset = [
      ["path", { d: "M12 10V2" }],
      ["path", { d: "m4.93 10.93 1.41 1.41" }],
      ["path", { d: "M2 18h2" }],
      ["path", { d: "M20 18h2" }],
      ["path", { d: "m19.07 10.93-1.41 1.41" }],
      ["path", { d: "M22 22H2" }],
      ["path", { d: "m16 6-4 4-4-4" }],
      ["path", { d: "M16 18a4 4 0 0 0-8 0" }]
    ];
    var SwatchBook = [
      ["path", { d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" }],
      ["path", { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" }],
      ["path", { d: "M 7 17h.01" }],
      [
        "path",
        { d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" }
      ]
    ];
    var SwissFranc = [
      ["path", { d: "M10 21V3h8" }],
      ["path", { d: "M6 16h9" }],
      ["path", { d: "M10 9.5h7" }]
    ];
    var SwitchCamera = [
      ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }],
      ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }],
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "m18 22-3-3 3-3" }],
      ["path", { d: "m6 2 3 3-3 3" }]
    ];
    var Sword = [
      ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }],
      ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }],
      ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }],
      ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }]
    ];
    var Syringe = [
      ["path", { d: "m18 2 4 4" }],
      ["path", { d: "m17 7 3-3" }],
      ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" }],
      ["path", { d: "m9 11 4 4" }],
      ["path", { d: "m5 19-3 3" }],
      ["path", { d: "m14 4 6 6" }]
    ];
    var Swords = [
      ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }],
      ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }],
      ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }],
      ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }],
      ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }],
      ["line", { x1: "5", x2: "9", y1: "14", y2: "18" }],
      ["line", { x1: "7", x2: "4", y1: "17", y2: "20" }],
      ["line", { x1: "3", x2: "5", y1: "19", y2: "21" }]
    ];
    var Table2 = [
      [
        "path",
        {
          d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
        }
      ]
    ];
    var TableCellsMerge = [
      ["path", { d: "M12 21v-6" }],
      ["path", { d: "M12 9V3" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "M3 9h18" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
    ];
    var TableCellsSplit = [
      ["path", { d: "M12 15V9" }],
      ["path", { d: "M3 15h18" }],
      ["path", { d: "M3 9h18" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
    ];
    var TableColumnsSplit = [
      ["path", { d: "M14 14v2" }],
      ["path", { d: "M14 20v2" }],
      ["path", { d: "M14 2v2" }],
      ["path", { d: "M14 8v2" }],
      ["path", { d: "M2 15h8" }],
      ["path", { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }],
      ["path", { d: "M2 9h8" }],
      ["path", { d: "M22 15h-4" }],
      ["path", { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }],
      ["path", { d: "M22 9h-4" }],
      ["path", { d: "M5 3v18" }]
    ];
    var TableProperties = [
      ["path", { d: "M15 3v18" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M21 9H3" }],
      ["path", { d: "M21 15H3" }]
    ];
    var TableOfContents = [
      ["path", { d: "M16 5H3" }],
      ["path", { d: "M16 12H3" }],
      ["path", { d: "M16 19H3" }],
      ["path", { d: "M21 5h.01" }],
      ["path", { d: "M21 12h.01" }],
      ["path", { d: "M21 19h.01" }]
    ];
    var TableRowsSplit = [
      ["path", { d: "M14 10h2" }],
      ["path", { d: "M15 22v-8" }],
      ["path", { d: "M15 2v4" }],
      ["path", { d: "M2 10h2" }],
      ["path", { d: "M20 10h2" }],
      ["path", { d: "M3 19h18" }],
      ["path", { d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" }],
      ["path", { d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" }],
      ["path", { d: "M8 10h2" }],
      ["path", { d: "M9 22v-8" }],
      ["path", { d: "M9 2v4" }]
    ];
    var Table = [
      ["path", { d: "M12 3v18" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9h18" }],
      ["path", { d: "M3 15h18" }]
    ];
    var TabletSmartphone = [
      ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2" }],
      ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }],
      ["path", { d: "M8 18h.01" }]
    ];
    var Tablet = [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }],
      ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18" }]
    ];
    var Tablets = [
      ["circle", { cx: "7", cy: "7", r: "5" }],
      ["circle", { cx: "17", cy: "17", r: "5" }],
      ["path", { d: "M12 17h10" }],
      ["path", { d: "m3.46 10.54 7.08-7.08" }]
    ];
    var Tag = [
      [
        "path",
        {
          d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
        }
      ],
      ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }]
    ];
    var Tags = [
      [
        "path",
        {
          d: "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"
        }
      ],
      ["path", { d: "M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" }],
      ["circle", { cx: "10.5", cy: "6.5", r: ".5", fill: "currentColor" }]
    ];
    var Tally1 = [["path", { d: "M4 4v16" }]];
    var Tally2 = [
      ["path", { d: "M4 4v16" }],
      ["path", { d: "M9 4v16" }]
    ];
    var Tally3 = [
      ["path", { d: "M4 4v16" }],
      ["path", { d: "M9 4v16" }],
      ["path", { d: "M14 4v16" }]
    ];
    var Tally4 = [
      ["path", { d: "M4 4v16" }],
      ["path", { d: "M9 4v16" }],
      ["path", { d: "M14 4v16" }],
      ["path", { d: "M19 4v16" }]
    ];
    var Tally5 = [
      ["path", { d: "M4 4v16" }],
      ["path", { d: "M9 4v16" }],
      ["path", { d: "M14 4v16" }],
      ["path", { d: "M19 4v16" }],
      ["path", { d: "M22 6 2 18" }]
    ];
    var Tangent = [
      ["circle", { cx: "17", cy: "4", r: "2" }],
      ["path", { d: "M15.59 5.41 5.41 15.59" }],
      ["circle", { cx: "4", cy: "17", r: "2" }],
      ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12" }]
    ];
    var Telescope = [
      [
        "path",
        {
          d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
        }
      ],
      ["path", { d: "m13.56 11.747 4.332-.924" }],
      ["path", { d: "m16 21-3.105-6.21" }],
      [
        "path",
        {
          d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
        }
      ],
      ["path", { d: "m6.158 8.633 1.114 4.456" }],
      ["path", { d: "m8 21 3.105-6.21" }],
      ["circle", { cx: "12", cy: "13", r: "2" }]
    ];
    var Target = [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["circle", { cx: "12", cy: "12", r: "6" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ];
    var Tent = [
      ["path", { d: "M3.5 21 14 3" }],
      ["path", { d: "M20.5 21 10 3" }],
      ["path", { d: "M15.5 21 12 15l-3.5 6" }],
      ["path", { d: "M2 21h20" }]
    ];
    var TentTree = [
      ["circle", { cx: "4", cy: "4", r: "2" }],
      ["path", { d: "m14 5 3-3 3 3" }],
      ["path", { d: "m14 10 3-3 3 3" }],
      ["path", { d: "M17 14V2" }],
      ["path", { d: "M17 14H7l-5 8h20Z" }],
      ["path", { d: "M8 14v8" }],
      ["path", { d: "m9 14 5 8" }]
    ];
    var TestTubeDiagonal = [
      ["path", { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" }],
      ["path", { d: "m16 2 6 6" }],
      ["path", { d: "M12 16H4" }]
    ];
    var Terminal = [
      ["path", { d: "M12 19h8" }],
      ["path", { d: "m4 17 6-6-6-6" }]
    ];
    var TestTube = [
      ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" }],
      ["path", { d: "M8.5 2h7" }],
      ["path", { d: "M14.5 16h-5" }]
    ];
    var TestTubes = [
      ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }],
      ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }],
      ["path", { d: "M3 2h7" }],
      ["path", { d: "M14 2h7" }],
      ["path", { d: "M9 16H4" }],
      ["path", { d: "M20 16h-5" }]
    ];
    var TextAlignCenter = [
      ["path", { d: "M21 5H3" }],
      ["path", { d: "M17 12H7" }],
      ["path", { d: "M19 19H5" }]
    ];
    var TextAlignEnd = [
      ["path", { d: "M21 5H3" }],
      ["path", { d: "M21 12H9" }],
      ["path", { d: "M21 19H7" }]
    ];
    var TextAlignJustify = [
      ["path", { d: "M3 5h18" }],
      ["path", { d: "M3 12h18" }],
      ["path", { d: "M3 19h18" }]
    ];
    var TextAlignStart = [
      ["path", { d: "M21 5H3" }],
      ["path", { d: "M15 12H3" }],
      ["path", { d: "M17 19H3" }]
    ];
    var TextCursorInput = [
      ["path", { d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" }],
      ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }],
      ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }],
      ["path", { d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" }],
      ["path", { d: "M9 6v12" }]
    ];
    var TextCursor = [
      ["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }],
      ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1" }],
      ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1" }]
    ];
    var TextInitial = [
      ["path", { d: "M15 5h6" }],
      ["path", { d: "M15 12h6" }],
      ["path", { d: "M3 19h18" }],
      ["path", { d: "m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" }],
      ["path", { d: "M3.92 10h6.16" }]
    ];
    var TextQuote = [
      ["path", { d: "M17 5H3" }],
      ["path", { d: "M21 12H8" }],
      ["path", { d: "M21 19H8" }],
      ["path", { d: "M3 12v7" }]
    ];
    var TextSearch = [
      ["path", { d: "M21 5H3" }],
      ["path", { d: "M10 12H3" }],
      ["path", { d: "M10 19H3" }],
      ["circle", { cx: "17", cy: "15", r: "3" }],
      ["path", { d: "m21 19-1.9-1.9" }]
    ];
    var TextSelect = [
      ["path", { d: "M14 21h1" }],
      ["path", { d: "M14 3h1" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
      ["path", { d: "M21 14v1" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
      ["path", { d: "M21 9v1" }],
      ["path", { d: "M3 14v1" }],
      ["path", { d: "M3 9v1" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
      ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
      ["path", { d: "M7 12h10" }],
      ["path", { d: "M7 16h6" }],
      ["path", { d: "M7 8h8" }],
      ["path", { d: "M9 21h1" }],
      ["path", { d: "M9 3h1" }]
    ];
    var Theater = [
      ["path", { d: "M2 10s3-3 3-8" }],
      ["path", { d: "M22 10s-3-3-3-8" }],
      ["path", { d: "M10 2c0 4.4-3.6 8-8 8" }],
      ["path", { d: "M14 2c0 4.4 3.6 8 8 8" }],
      ["path", { d: "M2 10s2 2 2 5" }],
      ["path", { d: "M22 10s-2 2-2 5" }],
      ["path", { d: "M8 15h8" }],
      ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }],
      ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }]
    ];
    var TextWrap = [
      ["path", { d: "m16 16-3 3 3 3" }],
      ["path", { d: "M3 12h14.5a1 1 0 0 1 0 7H13" }],
      ["path", { d: "M3 19h6" }],
      ["path", { d: "M3 5h18" }]
    ];
    var ThermometerSnowflake = [
      ["path", { d: "m10 20-1.25-2.5L6 18" }],
      ["path", { d: "M10 4 8.75 6.5 6 6" }],
      ["path", { d: "M10.585 15H10" }],
      ["path", { d: "M2 12h6.5L10 9" }],
      ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }],
      ["path", { d: "m4 10 1.5 2L4 14" }],
      ["path", { d: "m7 21 3-6-1.5-3" }],
      ["path", { d: "m7 3 3 6h2" }]
    ];
    var ThermometerSun = [
      ["path", { d: "M12 9a4 4 0 0 0-2 7.5" }],
      ["path", { d: "M12 3v2" }],
      ["path", { d: "m6.6 18.4-1.4 1.4" }],
      ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }],
      ["path", { d: "M4 13H2" }],
      ["path", { d: "M6.34 7.34 4.93 5.93" }]
    ];
    var Thermometer = [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]];
    var ThumbsDown = [
      ["path", { d: "M17 14V2" }],
      [
        "path",
        {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
        }
      ]
    ];
    var ThumbsUp = [
      ["path", { d: "M7 10v12" }],
      [
        "path",
        {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
        }
      ]
    ];
    var TicketCheck = [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4" }]
    ];
    var TicketMinus = [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "M9 12h6" }]
    ];
    var TicketPercent = [
      [
        "path",
        {
          d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "M9 9h.01" }],
      ["path", { d: "m15 9-6 6" }],
      ["path", { d: "M15 15h.01" }]
    ];
    var TicketPlus = [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "M9 12h6" }],
      ["path", { d: "M12 9v6" }]
    ];
    var TicketSlash = [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "m9.5 14.5 5-5" }]
    ];
    var TicketX = [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "m9.5 14.5 5-5" }],
      ["path", { d: "m9.5 9.5 5 5" }]
    ];
    var Ticket = [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }
      ],
      ["path", { d: "M13 5v2" }],
      ["path", { d: "M13 17v2" }],
      ["path", { d: "M13 11v2" }]
    ];
    var TicketsPlane = [
      ["path", { d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" }],
      ["path", { d: "m12 13.5 3.75.5" }],
      ["path", { d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }],
      ["path", { d: "M6 10V8" }],
      ["path", { d: "M6 14v1" }],
      ["path", { d: "M6 19v2" }],
      ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }]
    ];
    var Tickets = [
      ["path", { d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }],
      ["path", { d: "M6 10V8" }],
      ["path", { d: "M6 14v1" }],
      ["path", { d: "M6 19v2" }],
      ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }]
    ];
    var TimerOff = [
      ["path", { d: "M10 2h4" }],
      ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }],
      ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M12 12v-2" }]
    ];
    var TimerReset = [
      ["path", { d: "M10 2h4" }],
      ["path", { d: "M12 14v-4" }],
      ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }],
      ["path", { d: "M9 17H4v5" }]
    ];
    var Timer = [
      ["line", { x1: "10", x2: "14", y1: "2", y2: "2" }],
      ["line", { x1: "12", x2: "15", y1: "14", y2: "11" }],
      ["circle", { cx: "12", cy: "14", r: "8" }]
    ];
    var ToggleLeft = [
      ["circle", { cx: "9", cy: "12", r: "3" }],
      ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7" }]
    ];
    var ToggleRight = [
      ["circle", { cx: "15", cy: "12", r: "3" }],
      ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7" }]
    ];
    var Toilet = [
      [
        "path",
        {
          d: "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"
        }
      ],
      ["path", { d: "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" }]
    ];
    var ToolCase = [
      ["path", { d: "M10 15h4" }],
      [
        "path",
        {
          d: "m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27"
        }
      ],
      [
        "path",
        {
          d: "m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122"
        }
      ],
      ["path", { d: "M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }]
    ];
    var Tornado = [
      ["path", { d: "M21 4H3" }],
      ["path", { d: "M18 8H6" }],
      ["path", { d: "M19 12H9" }],
      ["path", { d: "M16 16h-6" }],
      ["path", { d: "M11 20H9" }]
    ];
    var Torus = [
      ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2" }],
      ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5" }]
    ];
    var TouchpadOff = [
      ["path", { d: "M12 20v-6" }],
      ["path", { d: "M19.656 14H22" }],
      ["path", { d: "M2 14h12" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }],
      ["path", { d: "M9.656 4H20a2 2 0 0 1 2 2v10.344" }]
    ];
    var Touchpad = [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M2 14h20" }],
      ["path", { d: "M12 20v-6" }]
    ];
    var TowerControl = [
      ["path", { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" }],
      ["path", { d: "M8 13v9" }],
      ["path", { d: "M16 22v-9" }],
      ["path", { d: "m9 6 1 7" }],
      ["path", { d: "m15 6-1 7" }],
      ["path", { d: "M12 6V2" }],
      ["path", { d: "M13 2h-2" }]
    ];
    var ToyBrick = [
      ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1" }],
      ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }],
      ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }]
    ];
    var Tractor = [
      ["path", { d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" }],
      ["path", { d: "M16 18h-5" }],
      ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573" }],
      ["path", { d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" }],
      ["path", { d: "M4 11V4" }],
      ["path", { d: "M7 15h.01" }],
      ["path", { d: "M8 10.1V4" }],
      ["circle", { cx: "18", cy: "18", r: "2" }],
      ["circle", { cx: "7", cy: "15", r: "5" }]
    ];
    var TrafficCone = [
      ["path", { d: "M16.05 10.966a5 2.5 0 0 1-8.1 0" }],
      [
        "path",
        {
          d: "m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04"
        }
      ],
      ["path", { d: "M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" }],
      ["path", { d: "M9.194 6.57a5 2.5 0 0 0 5.61 0" }]
    ];
    var TrainFrontTunnel = [
      ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10" }],
      ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }],
      ["path", { d: "M10 15h.01" }],
      ["path", { d: "M14 15h.01" }],
      ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }],
      ["path", { d: "m9 19-2 3" }],
      ["path", { d: "m15 19 2 3" }]
    ];
    var TrainFront = [
      ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1" }],
      ["path", { d: "m9 15-1-1" }],
      ["path", { d: "m15 15 1-1" }],
      ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }],
      ["path", { d: "m8 19-2 3" }],
      ["path", { d: "m16 19 2 3" }]
    ];
    var TrainTrack = [
      ["path", { d: "M2 17 17 2" }],
      ["path", { d: "m2 14 8 8" }],
      ["path", { d: "m5 11 8 8" }],
      ["path", { d: "m8 8 8 8" }],
      ["path", { d: "m11 5 8 8" }],
      ["path", { d: "m14 2 8 8" }],
      ["path", { d: "M7 22 22 7" }]
    ];
    var TramFront = [
      ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }],
      ["path", { d: "M4 11h16" }],
      ["path", { d: "M12 3v8" }],
      ["path", { d: "m8 19-2 3" }],
      ["path", { d: "m18 22-2-3" }],
      ["path", { d: "M8 15h.01" }],
      ["path", { d: "M16 15h.01" }]
    ];
    var Transgender = [
      ["path", { d: "M12 16v6" }],
      ["path", { d: "M14 20h-4" }],
      ["path", { d: "M18 2h4v4" }],
      ["path", { d: "m2 2 7.17 7.17" }],
      ["path", { d: "M2 5.355V2h3.357" }],
      ["path", { d: "m22 2-7.17 7.17" }],
      ["path", { d: "M8 5 5 8" }],
      ["circle", { cx: "12", cy: "12", r: "4" }]
    ];
    var Trash2 = [
      ["path", { d: "M10 11v6" }],
      ["path", { d: "M14 11v6" }],
      ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
      ["path", { d: "M3 6h18" }],
      ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
    ];
    var Trash = [
      ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
      ["path", { d: "M3 6h18" }],
      ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
    ];
    var TreeDeciduous = [
      [
        "path",
        {
          d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"
        }
      ],
      ["path", { d: "M12 19v3" }]
    ];
    var TreePalm = [
      ["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }],
      ["path", { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" }],
      [
        "path",
        {
          d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"
        }
      ],
      ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" }]
    ];
    var TreePine = [
      [
        "path",
        {
          d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
        }
      ],
      ["path", { d: "M12 22v-3" }]
    ];
    var Trees = [
      ["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }],
      ["path", { d: "M7 16v6" }],
      ["path", { d: "M13 19v3" }],
      [
        "path",
        {
          d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
        }
      ]
    ];
    var Trello = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
      ["rect", { width: "3", height: "9", x: "7", y: "7" }],
      ["rect", { width: "3", height: "5", x: "14", y: "7" }]
    ];
    var TrendingDown = [
      ["path", { d: "M16 17h6v-6" }],
      ["path", { d: "m22 17-8.5-8.5-5 5L2 7" }]
    ];
    var TrendingUpDown = [
      ["path", { d: "M14.828 14.828 21 21" }],
      ["path", { d: "M21 16v5h-5" }],
      ["path", { d: "m21 3-9 9-4-4-6 6" }],
      ["path", { d: "M21 8V3h-5" }]
    ];
    var TrendingUp = [
      ["path", { d: "M16 7h6v6" }],
      ["path", { d: "m22 7-8.5 8.5-5-5L2 17" }]
    ];
    var TriangleAlert = [
      ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }],
      ["path", { d: "M12 9v4" }],
      ["path", { d: "M12 17h.01" }]
    ];
    var TriangleDashed = [
      ["path", { d: "M10.17 4.193a2 2 0 0 1 3.666.013" }],
      ["path", { d: "M14 21h2" }],
      ["path", { d: "m15.874 7.743 1 1.732" }],
      ["path", { d: "m18.849 12.952 1 1.732" }],
      ["path", { d: "M21.824 18.18a2 2 0 0 1-1.835 2.824" }],
      ["path", { d: "M4.024 21a2 2 0 0 1-1.839-2.839" }],
      ["path", { d: "m5.136 12.952-1 1.732" }],
      ["path", { d: "M8 21h2" }],
      ["path", { d: "m8.102 7.743-1 1.732" }]
    ];
    var TriangleRight = [
      ["path", { d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" }]
    ];
    var Trophy = [
      ["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" }],
      ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" }],
      ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18" }],
      ["path", { d: "M4 22h16" }],
      ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" }],
      ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6" }]
    ];
    var Triangle = [
      ["path", { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }]
    ];
    var TruckElectric = [
      ["path", { d: "M14 19V7a2 2 0 0 0-2-2H9" }],
      ["path", { d: "M15 19H9" }],
      ["path", { d: "M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" }],
      ["path", { d: "M2 13v5a1 1 0 0 0 1 1h2" }],
      ["path", { d: "M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" }],
      ["circle", { cx: "17", cy: "19", r: "2" }],
      ["circle", { cx: "7", cy: "19", r: "2" }]
    ];
    var Truck = [
      ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }],
      ["path", { d: "M15 18H9" }],
      [
        "path",
        { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }
      ],
      ["circle", { cx: "17", cy: "18", r: "2" }],
      ["circle", { cx: "7", cy: "18", r: "2" }]
    ];
    var TurkishLira = [
      ["path", { d: "M15 4 5 9" }],
      ["path", { d: "m15 8.5-10 5" }],
      ["path", { d: "M18 12a9 9 0 0 1-9 9V3" }]
    ];
    var Turntable = [
      ["path", { d: "M10 12.01h.01" }],
      ["path", { d: "M18 8v4a8 8 0 0 1-1.07 4" }],
      ["circle", { cx: "10", cy: "12", r: "4" }],
      ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }]
    ];
    var Turtle = [
      [
        "path",
        {
          d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
        }
      ],
      ["path", { d: "M4.82 7.9 8 10" }],
      ["path", { d: "M15.18 7.9 12 10" }],
      ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2" }]
    ];
    var TvMinimal = [
      ["path", { d: "M7 21h10" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]
    ];
    var TvMinimalPlay = [
      [
        "path",
        {
          d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"
        }
      ],
      ["path", { d: "M7 21h10" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]
    ];
    var Tv = [
      ["path", { d: "m17 2-5 5-5-5" }],
      ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2" }]
    ];
    var Twitch = [["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" }]];
    var Twitter = [
      [
        "path",
        {
          d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
        }
      ]
    ];
    var TypeOutline = [
      [
        "path",
        {
          d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"
        }
      ]
    ];
    var Type = [
      ["path", { d: "M12 4v16" }],
      ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }],
      ["path", { d: "M9 20h6" }]
    ];
    var UmbrellaOff = [
      ["path", { d: "M12 13v7a2 2 0 0 0 4 0" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" }],
      ["path", { d: "m2 2 20 20" }],
      ["path", { d: "M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" }]
    ];
    var Umbrella = [
      ["path", { d: "M12 13v7a2 2 0 0 0 4 0" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" }]
    ];
    var Underline = [
      ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }],
      ["line", { x1: "4", x2: "20", y1: "20", y2: "20" }]
    ];
    var Undo2 = [
      ["path", { d: "M9 14 4 9l5-5" }],
      ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" }]
    ];
    var UndoDot = [
      ["path", { d: "M21 17a9 9 0 0 0-15-6.7L3 13" }],
      ["path", { d: "M3 7v6h6" }],
      ["circle", { cx: "12", cy: "17", r: "1" }]
    ];
    var Undo = [
      ["path", { d: "M3 7v6h6" }],
      ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]
    ];
    var UnfoldHorizontal = [
      ["path", { d: "M16 12h6" }],
      ["path", { d: "M8 12H2" }],
      ["path", { d: "M12 2v2" }],
      ["path", { d: "M12 8v2" }],
      ["path", { d: "M12 14v2" }],
      ["path", { d: "M12 20v2" }],
      ["path", { d: "m19 15 3-3-3-3" }],
      ["path", { d: "m5 9-3 3 3 3" }]
    ];
    var UnfoldVertical = [
      ["path", { d: "M12 22v-6" }],
      ["path", { d: "M12 8V2" }],
      ["path", { d: "M4 12H2" }],
      ["path", { d: "M10 12H8" }],
      ["path", { d: "M16 12h-2" }],
      ["path", { d: "M22 12h-2" }],
      ["path", { d: "m15 19-3 3-3-3" }],
      ["path", { d: "m15 5-3-3-3 3" }]
    ];
    var Ungroup = [
      ["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1" }],
      ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1" }]
    ];
    var University = [
      ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }],
      ["path", { d: "M18 12h.01" }],
      ["path", { d: "M18 16h.01" }],
      [
        "path",
        {
          d: "M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"
        }
      ],
      ["path", { d: "M6 12h.01" }],
      ["path", { d: "M6 16h.01" }],
      ["circle", { cx: "12", cy: "10", r: "2" }]
    ];
    var Unlink2 = [["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" }]];
    var Unlink = [
      [
        "path",
        {
          d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
        }
      ],
      [
        "path",
        { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }
      ],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "5" }],
      ["line", { x1: "2", x2: "5", y1: "8", y2: "8" }],
      ["line", { x1: "16", x2: "16", y1: "19", y2: "22" }],
      ["line", { x1: "19", x2: "22", y1: "16", y2: "16" }]
    ];
    var Unplug = [
      ["path", { d: "m19 5 3-3" }],
      ["path", { d: "m2 22 3-3" }],
      ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }],
      ["path", { d: "M7.5 13.5 10 11" }],
      ["path", { d: "M10.5 16.5 13 14" }],
      ["path", { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" }]
    ];
    var Upload = [
      ["path", { d: "M12 3v12" }],
      ["path", { d: "m17 8-5-5-5 5" }],
      ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]
    ];
    var Usb = [
      ["circle", { cx: "10", cy: "7", r: "1" }],
      ["circle", { cx: "4", cy: "20", r: "1" }],
      ["path", { d: "M4.7 19.3 19 5" }],
      ["path", { d: "m21 3-3 1 2 2Z" }],
      ["path", { d: "M9.26 7.68 5 12l2 5" }],
      ["path", { d: "m10 14 5 2 3.5-3.5" }],
      ["path", { d: "m18 12 1-1 1 1-1 1Z" }]
    ];
    var UserCheck = [
      ["path", { d: "m16 11 2 2 4-4" }],
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "9", cy: "7", r: "4" }]
    ];
    var UserCog = [
      ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }],
      ["path", { d: "m14.305 16.53.923-.382" }],
      ["path", { d: "m15.228 13.852-.923-.383" }],
      ["path", { d: "m16.852 12.228-.383-.923" }],
      ["path", { d: "m16.852 17.772-.383.924" }],
      ["path", { d: "m19.148 12.228.383-.923" }],
      ["path", { d: "m19.53 18.696-.382-.924" }],
      ["path", { d: "m20.772 13.852.924-.383" }],
      ["path", { d: "m20.772 16.148.924.383" }],
      ["circle", { cx: "18", cy: "15", r: "3" }],
      ["circle", { cx: "9", cy: "7", r: "4" }]
    ];
    var UserLock = [
      ["circle", { cx: "10", cy: "7", r: "4" }],
      ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2" }],
      ["path", { d: "M15 15.5V14a2 2 0 0 1 4 0v1.5" }],
      ["rect", { width: "8", height: "5", x: "13", y: "16", rx: ".899" }]
    ];
    var UserMinus = [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "9", cy: "7", r: "4" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
    ];
    var UserPen = [
      ["path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }],
      [
        "path",
        {
          d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ],
      ["circle", { cx: "10", cy: "7", r: "4" }]
    ];
    var UserPlus = [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "9", cy: "7", r: "4" }],
      ["line", { x1: "19", x2: "19", y1: "8", y2: "14" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
    ];
    var UserRoundCheck = [
      ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "m16 19 2 2 4-4" }]
    ];
    var UserRoundCog = [
      ["path", { d: "m14.305 19.53.923-.382" }],
      ["path", { d: "m15.228 16.852-.923-.383" }],
      ["path", { d: "m16.852 15.228-.383-.923" }],
      ["path", { d: "m16.852 20.772-.383.924" }],
      ["path", { d: "m19.148 15.228.383-.923" }],
      ["path", { d: "m19.53 21.696-.382-.924" }],
      ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }],
      ["path", { d: "m20.772 16.852.924-.383" }],
      ["path", { d: "m20.772 19.148.924.383" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["circle", { cx: "18", cy: "18", r: "3" }]
    ];
    var UserRoundMinus = [
      ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "M22 19h-6" }]
    ];
    var UserRoundPen = [
      ["path", { d: "M2 21a8 8 0 0 1 10.821-7.487" }],
      [
        "path",
        {
          d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ],
      ["circle", { cx: "10", cy: "8", r: "5" }]
    ];
    var UserRoundPlus = [
      ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "M19 16v6" }],
      ["path", { d: "M22 19h-6" }]
    ];
    var UserRoundSearch = [
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }],
      ["circle", { cx: "18", cy: "18", r: "3" }],
      ["path", { d: "m22 22-1.9-1.9" }]
    ];
    var UserRoundX = [
      ["path", { d: "M2 21a8 8 0 0 1 11.873-7" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "m17 17 5 5" }],
      ["path", { d: "m22 17-5 5" }]
    ];
    var UserRound = [
      ["circle", { cx: "12", cy: "8", r: "5" }],
      ["path", { d: "M20 21a8 8 0 0 0-16 0" }]
    ];
    var UserSearch = [
      ["circle", { cx: "10", cy: "7", r: "4" }],
      ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "17", cy: "17", r: "3" }],
      ["path", { d: "m21 21-1.9-1.9" }]
    ];
    var UserStar = [
      [
        "path",
        {
          d: "M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"
        }
      ],
      ["path", { d: "M8 15H7a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "10", cy: "7", r: "4" }]
    ];
    var UserX = [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "9", cy: "7", r: "4" }],
      ["line", { x1: "17", x2: "22", y1: "8", y2: "13" }],
      ["line", { x1: "22", x2: "17", y1: "8", y2: "13" }]
    ];
    var User = [
      ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
      ["circle", { cx: "12", cy: "7", r: "4" }]
    ];
    var UsersRound = [
      ["path", { d: "M18 21a8 8 0 0 0-16 0" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }]
    ];
    var Users = [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
      ["circle", { cx: "9", cy: "7", r: "4" }]
    ];
    var UtensilsCrossed = [
      ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }],
      ["path", { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" }],
      ["path", { d: "m2.1 21.8 6.4-6.3" }],
      ["path", { d: "m19 5-7 7" }]
    ];
    var Utensils = [
      ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }],
      ["path", { d: "M7 2v20" }],
      ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }]
    ];
    var UtilityPole = [
      ["path", { d: "M12 2v20" }],
      ["path", { d: "M2 5h20" }],
      ["path", { d: "M3 3v2" }],
      ["path", { d: "M7 3v2" }],
      ["path", { d: "M17 3v2" }],
      ["path", { d: "M21 3v2" }],
      ["path", { d: "m19 5-7 7-7-7" }]
    ];
    var Variable = [
      ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }],
      ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }],
      ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }],
      ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]
    ];
    var Vault = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }],
      ["path", { d: "m7.9 7.9 2.7 2.7" }],
      ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }],
      ["path", { d: "m13.4 10.6 2.7-2.7" }],
      ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }],
      ["path", { d: "m7.9 16.1 2.7-2.7" }],
      ["circle", { cx: "16.5", cy: "16.5", r: ".5", fill: "currentColor" }],
      ["path", { d: "m13.4 13.4 2.7 2.7" }],
      ["circle", { cx: "12", cy: "12", r: "2" }]
    ];
    var VectorSquare = [
      ["path", { d: "M19.5 7a24 24 0 0 1 0 10" }],
      ["path", { d: "M4.5 7a24 24 0 0 0 0 10" }],
      ["path", { d: "M7 19.5a24 24 0 0 0 10 0" }],
      ["path", { d: "M7 4.5a24 24 0 0 1 10 0" }],
      ["rect", { x: "17", y: "17", width: "5", height: "5", rx: "1" }],
      ["rect", { x: "17", y: "2", width: "5", height: "5", rx: "1" }],
      ["rect", { x: "2", y: "17", width: "5", height: "5", rx: "1" }],
      ["rect", { x: "2", y: "2", width: "5", height: "5", rx: "1" }]
    ];
    var Vegan = [
      ["path", { d: "M16 8q6 0 6-6-6 0-6 6" }],
      ["path", { d: "M17.41 3.59a10 10 0 1 0 3 3" }],
      ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" }]
    ];
    var VenetianMask = [
      ["path", { d: "M18 11c-1.5 0-2.5.5-3 2" }],
      [
        "path",
        {
          d: "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"
        }
      ],
      ["path", { d: "M6 11c1.5 0 2.5.5 3 2" }]
    ];
    var VenusAndMars = [
      ["path", { d: "M10 20h4" }],
      ["path", { d: "M12 16v6" }],
      ["path", { d: "M17 2h4v4" }],
      ["path", { d: "m21 2-5.46 5.46" }],
      ["circle", { cx: "12", cy: "11", r: "5" }]
    ];
    var Venus = [
      ["path", { d: "M12 15v7" }],
      ["path", { d: "M9 19h6" }],
      ["circle", { cx: "12", cy: "9", r: "6" }]
    ];
    var VibrateOff = [
      ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }],
      ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }],
      ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }],
      ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Vibrate = [
      ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }],
      ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }],
      ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1" }]
    ];
    var VideoOff = [
      ["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" }],
      ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var Video = [
      ["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }],
      ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" }]
    ];
    var Videotape = [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
      ["path", { d: "M2 8h20" }],
      ["circle", { cx: "8", cy: "14", r: "2" }],
      ["path", { d: "M8 12h8" }],
      ["circle", { cx: "16", cy: "14", r: "2" }]
    ];
    var View = [
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }],
      ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }],
      ["circle", { cx: "12", cy: "12", r: "1" }],
      [
        "path",
        {
          d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
        }
      ]
    ];
    var Voicemail = [
      ["circle", { cx: "6", cy: "12", r: "4" }],
      ["circle", { cx: "18", cy: "12", r: "4" }],
      ["line", { x1: "6", x2: "18", y1: "16", y2: "16" }]
    ];
    var Volleyball = [
      ["path", { d: "M11.1 7.1a16.55 16.55 0 0 1 10.9 4" }],
      ["path", { d: "M12 12a12.6 12.6 0 0 1-8.7 5" }],
      ["path", { d: "M16.8 13.6a16.55 16.55 0 0 1-9 7.5" }],
      ["path", { d: "M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" }],
      ["path", { d: "M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" }],
      ["circle", { cx: "12", cy: "12", r: "10" }]
    ];
    var Volume1 = [
      [
        "path",
        {
          d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        }
      ],
      ["path", { d: "M16 9a5 5 0 0 1 0 6" }]
    ];
    var Volume2 = [
      [
        "path",
        {
          d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        }
      ],
      ["path", { d: "M16 9a5 5 0 0 1 0 6" }],
      ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728" }]
    ];
    var VolumeX = [
      [
        "path",
        {
          d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        }
      ],
      ["line", { x1: "22", x2: "16", y1: "9", y2: "15" }],
      ["line", { x1: "16", x2: "22", y1: "9", y2: "15" }]
    ];
    var VolumeOff = [
      ["path", { d: "M16 9a5 5 0 0 1 .95 2.293" }],
      ["path", { d: "M19.364 5.636a9 9 0 0 1 1.889 9.96" }],
      ["path", { d: "m2 2 20 20" }],
      [
        "path",
        {
          d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"
        }
      ],
      ["path", { d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686" }]
    ];
    var Volume = [
      [
        "path",
        {
          d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        }
      ]
    ];
    var Vote = [
      ["path", { d: "m9 12 2 2 4-4" }],
      ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }],
      ["path", { d: "M22 19H2" }]
    ];
    var WalletCards = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }],
      [
        "path",
        { d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" }
      ]
    ];
    var WalletMinimal = [
      ["path", { d: "M17 14h.01" }],
      ["path", { d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" }]
    ];
    var Wallet = [
      [
        "path",
        {
          d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
        }
      ],
      ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]
    ];
    var Wallpaper = [
      ["path", { d: "M12 17v4" }],
      ["path", { d: "M8 21h8" }],
      ["path", { d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" }],
      ["circle", { cx: "8", cy: "9", r: "2" }],
      ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }]
    ];
    var WandSparkles = [
      [
        "path",
        {
          d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
        }
      ],
      ["path", { d: "m14 7 3 3" }],
      ["path", { d: "M5 6v4" }],
      ["path", { d: "M19 14v4" }],
      ["path", { d: "M10 2v2" }],
      ["path", { d: "M7 8H3" }],
      ["path", { d: "M21 16h-4" }],
      ["path", { d: "M11 3H9" }]
    ];
    var Wand = [
      ["path", { d: "M15 4V2" }],
      ["path", { d: "M15 16v-2" }],
      ["path", { d: "M8 9h2" }],
      ["path", { d: "M20 9h2" }],
      ["path", { d: "M17.8 11.8 19 13" }],
      ["path", { d: "M15 9h.01" }],
      ["path", { d: "M17.8 6.2 19 5" }],
      ["path", { d: "m3 21 9-9" }],
      ["path", { d: "M12.2 6.2 11 5" }]
    ];
    var Warehouse = [
      ["path", { d: "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" }],
      [
        "path",
        {
          d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"
        }
      ],
      ["path", { d: "M6 13h12" }],
      ["path", { d: "M6 17h12" }]
    ];
    var WashingMachine = [
      ["path", { d: "M3 6h3" }],
      ["path", { d: "M17 6h.01" }],
      ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2" }],
      ["circle", { cx: "12", cy: "13", r: "5" }],
      ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }]
    ];
    var Watch = [
      ["path", { d: "M12 10v2.2l1.6 1" }],
      ["path", { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" }],
      ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" }],
      ["circle", { cx: "12", cy: "12", r: "6" }]
    ];
    var WavesLadder = [
      ["path", { d: "M19 5a2 2 0 0 0-2 2v11" }],
      [
        "path",
        {
          d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }
      ],
      ["path", { d: "M7 13h10" }],
      ["path", { d: "M7 9h10" }],
      ["path", { d: "M9 5a2 2 0 0 0-2 2v11" }]
    ];
    var Waves = [
      [
        "path",
        { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }
      ],
      [
        "path",
        {
          d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }
      ],
      [
        "path",
        {
          d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }
      ]
    ];
    var Waypoints = [
      ["circle", { cx: "12", cy: "4.5", r: "2.5" }],
      ["path", { d: "m10.2 6.3-3.9 3.9" }],
      ["circle", { cx: "4.5", cy: "12", r: "2.5" }],
      ["path", { d: "M7 12h10" }],
      ["circle", { cx: "19.5", cy: "12", r: "2.5" }],
      ["path", { d: "m13.8 17.7 3.9-3.9" }],
      ["circle", { cx: "12", cy: "19.5", r: "2.5" }]
    ];
    var Webcam = [
      ["circle", { cx: "12", cy: "10", r: "8" }],
      ["circle", { cx: "12", cy: "10", r: "3" }],
      ["path", { d: "M7 22h10" }],
      ["path", { d: "M12 22v-4" }]
    ];
    var WebhookOff = [
      ["path", { d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" }],
      ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66" }],
      ["path", { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" }],
      ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7" }],
      ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414" }],
      ["path", { d: "m12 6 .6 1" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var Webhook = [
      ["path", { d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" }],
      ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" }],
      ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" }]
    ];
    var Weight = [
      ["circle", { cx: "12", cy: "5", r: "3" }],
      [
        "path",
        {
          d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
        }
      ]
    ];
    var WheatOff = [
      ["path", { d: "m2 22 10-10" }],
      ["path", { d: "m16 8-1.17 1.17" }],
      [
        "path",
        { d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }
      ],
      ["path", { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" }],
      ["path", { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" }],
      ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }],
      [
        "path",
        {
          d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }
      ],
      ["path", { d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" }],
      ["path", { d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Wheat = [
      ["path", { d: "M2 22 16 8" }],
      [
        "path",
        { d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }
      ],
      [
        "path",
        { d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }
      ],
      [
        "path",
        { d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }
      ],
      ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }],
      [
        "path",
        {
          d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }
      ],
      [
        "path",
        {
          d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }
      ],
      [
        "path",
        {
          d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }
      ]
    ];
    var WholeWord = [
      ["circle", { cx: "7", cy: "12", r: "3" }],
      ["path", { d: "M10 9v6" }],
      ["circle", { cx: "17", cy: "12", r: "3" }],
      ["path", { d: "M14 7v8" }],
      ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]
    ];
    var WifiCog = [
      ["path", { d: "m14.305 19.53.923-.382" }],
      ["path", { d: "m15.228 16.852-.923-.383" }],
      ["path", { d: "m16.852 15.228-.383-.923" }],
      ["path", { d: "m16.852 20.772-.383.924" }],
      ["path", { d: "m19.148 15.228.383-.923" }],
      ["path", { d: "m19.53 21.696-.382-.924" }],
      ["path", { d: "M2 7.82a15 15 0 0 1 20 0" }],
      ["path", { d: "m20.772 16.852.924-.383" }],
      ["path", { d: "m20.772 19.148.924.383" }],
      ["path", { d: "M5 11.858a10 10 0 0 1 11.5-1.785" }],
      ["path", { d: "M8.5 15.429a5 5 0 0 1 2.413-1.31" }],
      ["circle", { cx: "18", cy: "18", r: "3" }]
    ];
    var WifiHigh = [
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
    ];
    var WifiLow = [
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
    ];
    var WifiOff = [
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }],
      ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69" }],
      ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523" }],
      ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643" }],
      ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764" }],
      ["path", { d: "m2 2 20 20" }]
    ];
    var WifiPen = [
      ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }],
      [
        "path",
        {
          d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        }
      ],
      ["path", { d: "M5 12.859a10 10 0 0 1 10.5-2.222" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 3-1.406" }]
    ];
    var WifiSync = [
      ["path", { d: "M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" }],
      ["path", { d: "M11.965 14.105h4" }],
      ["path", { d: "M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" }],
      ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }],
      ["path", { d: "M21.965 22.105v-4" }],
      ["path", { d: "M5 12.86a10 10 0 0 1 3-2.032" }],
      ["path", { d: "M8.5 16.429h.01" }]
    ];
    var WifiZero = [["path", { d: "M12 20h.01" }]];
    var Wifi = [
      ["path", { d: "M12 20h.01" }],
      ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }],
      ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
    ];
    var WindArrowDown = [
      ["path", { d: "M10 2v8" }],
      ["path", { d: "M12.8 21.6A2 2 0 1 0 14 18H2" }],
      ["path", { d: "M17.5 10a2.5 2.5 0 1 1 2 4H2" }],
      ["path", { d: "m6 6 4 4 4-4" }]
    ];
    var Wind = [
      ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2" }],
      ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2" }],
      ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2" }]
    ];
    var WineOff = [
      ["path", { d: "M8 22h8" }],
      ["path", { d: "M7 10h3m7 0h-1.343" }],
      ["path", { d: "M12 15v7" }],
      [
        "path",
        {
          d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
    ];
    var Wine = [
      ["path", { d: "M8 22h8" }],
      ["path", { d: "M7 10h10" }],
      ["path", { d: "M12 15v7" }],
      ["path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" }]
    ];
    var Workflow = [
      ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2" }],
      ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }],
      ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2" }]
    ];
    var Worm = [
      ["path", { d: "m19 12-1.5 3" }],
      ["path", { d: "M19.63 18.81 22 20" }],
      [
        "path",
        {
          d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"
        }
      ]
    ];
    var X = [
      ["path", { d: "M18 6 6 18" }],
      ["path", { d: "m6 6 12 12" }]
    ];
    var Wrench = [
      [
        "path",
        {
          d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
        }
      ]
    ];
    var Youtube = [
      [
        "path",
        {
          d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
        }
      ],
      ["path", { d: "m10 15 5-3-5-3z" }]
    ];
    var ZapOff = [
      ["path", { d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" }],
      ["path", { d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" }],
      [
        "path",
        {
          d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"
        }
      ],
      ["path", { d: "m2 2 20 20" }]
    ];
    var Zap = [
      [
        "path",
        {
          d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
        }
      ]
    ];
    var ZoomIn = [
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }],
      ["line", { x1: "11", x2: "11", y1: "8", y2: "14" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]
    ];
    var ZoomOut = [
      ["circle", { cx: "11", cy: "11", r: "8" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]
    ];
    var iconsAndAliases = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      AArrowDown,
      AArrowUp,
      ALargeSmall,
      Accessibility,
      Activity,
      ActivitySquare: SquareActivity,
      AirVent,
      Airplay,
      AlarmCheck: AlarmClockCheck,
      AlarmClock,
      AlarmClockCheck,
      AlarmClockMinus,
      AlarmClockOff,
      AlarmClockPlus,
      AlarmMinus: AlarmClockMinus,
      AlarmPlus: AlarmClockPlus,
      AlarmSmoke,
      Album,
      AlertCircle: CircleAlert,
      AlertOctagon: OctagonAlert,
      AlertTriangle: TriangleAlert,
      AlignCenter: TextAlignCenter,
      AlignCenterHorizontal,
      AlignCenterVertical,
      AlignEndHorizontal,
      AlignEndVertical,
      AlignHorizontalDistributeCenter,
      AlignHorizontalDistributeEnd,
      AlignHorizontalDistributeStart,
      AlignHorizontalJustifyCenter,
      AlignHorizontalJustifyEnd,
      AlignHorizontalJustifyStart,
      AlignHorizontalSpaceAround,
      AlignHorizontalSpaceBetween,
      AlignJustify: TextAlignJustify,
      AlignLeft: TextAlignStart,
      AlignRight: TextAlignEnd,
      AlignStartHorizontal,
      AlignStartVertical,
      AlignVerticalDistributeCenter,
      AlignVerticalDistributeEnd,
      AlignVerticalDistributeStart,
      AlignVerticalJustifyCenter,
      AlignVerticalJustifyEnd,
      AlignVerticalJustifyStart,
      AlignVerticalSpaceAround,
      AlignVerticalSpaceBetween,
      Ambulance,
      Ampersand,
      Ampersands,
      Amphora,
      Anchor,
      Angry,
      Annoyed,
      Antenna,
      Anvil,
      Aperture,
      AppWindow,
      AppWindowMac,
      Apple,
      Archive,
      ArchiveRestore,
      ArchiveX,
      AreaChart: ChartArea,
      Armchair,
      ArrowBigDown,
      ArrowBigDownDash,
      ArrowBigLeft,
      ArrowBigLeftDash,
      ArrowBigRight,
      ArrowBigRightDash,
      ArrowBigUp,
      ArrowBigUpDash,
      ArrowDown,
      ArrowDown01,
      ArrowDown10,
      ArrowDownAZ,
      ArrowDownAz: ArrowDownAZ,
      ArrowDownCircle: CircleArrowDown,
      ArrowDownFromLine,
      ArrowDownLeft,
      ArrowDownLeftFromCircle: CircleArrowOutDownLeft,
      ArrowDownLeftFromSquare: SquareArrowOutDownLeft,
      ArrowDownLeftSquare: SquareArrowDownLeft,
      ArrowDownNarrowWide,
      ArrowDownRight,
      ArrowDownRightFromCircle: CircleArrowOutDownRight,
      ArrowDownRightFromSquare: SquareArrowOutDownRight,
      ArrowDownRightSquare: SquareArrowDownRight,
      ArrowDownSquare: SquareArrowDown,
      ArrowDownToDot,
      ArrowDownToLine,
      ArrowDownUp,
      ArrowDownWideNarrow,
      ArrowDownZA,
      ArrowDownZa: ArrowDownZA,
      ArrowLeft,
      ArrowLeftCircle: CircleArrowLeft,
      ArrowLeftFromLine,
      ArrowLeftRight,
      ArrowLeftSquare: SquareArrowLeft,
      ArrowLeftToLine,
      ArrowRight,
      ArrowRightCircle: CircleArrowRight,
      ArrowRightFromLine,
      ArrowRightLeft,
      ArrowRightSquare: SquareArrowRight,
      ArrowRightToLine,
      ArrowUp,
      ArrowUp01,
      ArrowUp10,
      ArrowUpAZ,
      ArrowUpAz: ArrowUpAZ,
      ArrowUpCircle: CircleArrowUp,
      ArrowUpDown,
      ArrowUpFromDot,
      ArrowUpFromLine,
      ArrowUpLeft,
      ArrowUpLeftFromCircle: CircleArrowOutUpLeft,
      ArrowUpLeftFromSquare: SquareArrowOutUpLeft,
      ArrowUpLeftSquare: SquareArrowUpLeft,
      ArrowUpNarrowWide,
      ArrowUpRight,
      ArrowUpRightFromCircle: CircleArrowOutUpRight,
      ArrowUpRightFromSquare: SquareArrowOutUpRight,
      ArrowUpRightSquare: SquareArrowUpRight,
      ArrowUpSquare: SquareArrowUp,
      ArrowUpToLine,
      ArrowUpWideNarrow,
      ArrowUpZA,
      ArrowUpZa: ArrowUpZA,
      ArrowsUpFromLine,
      Asterisk,
      AsteriskSquare: SquareAsterisk,
      AtSign,
      Atom,
      AudioLines,
      AudioWaveform,
      Award,
      Axe,
      Axis3D: Axis3d,
      Axis3d,
      Baby,
      Backpack,
      Badge,
      BadgeAlert,
      BadgeCent,
      BadgeCheck,
      BadgeDollarSign,
      BadgeEuro,
      BadgeHelp: BadgeQuestionMark,
      BadgeIndianRupee,
      BadgeInfo,
      BadgeJapaneseYen,
      BadgeMinus,
      BadgePercent,
      BadgePlus,
      BadgePoundSterling,
      BadgeQuestionMark,
      BadgeRussianRuble,
      BadgeSwissFranc,
      BadgeTurkishLira,
      BadgeX,
      BaggageClaim,
      Ban,
      Banana,
      Bandage,
      Banknote,
      BanknoteArrowDown,
      BanknoteArrowUp,
      BanknoteX,
      BarChart: ChartNoAxesColumnIncreasing,
      BarChart2: ChartNoAxesColumn,
      BarChart3: ChartColumn,
      BarChart4: ChartColumnIncreasing,
      BarChartBig: ChartColumnBig,
      BarChartHorizontal: ChartBar,
      BarChartHorizontalBig: ChartBarBig,
      Barcode,
      Barrel,
      Baseline,
      Bath,
      Battery,
      BatteryCharging,
      BatteryFull,
      BatteryLow,
      BatteryMedium,
      BatteryPlus,
      BatteryWarning,
      Beaker,
      Bean,
      BeanOff,
      Bed,
      BedDouble,
      BedSingle,
      Beef,
      Beer,
      BeerOff,
      Bell,
      BellDot,
      BellElectric,
      BellMinus,
      BellOff,
      BellPlus,
      BellRing,
      BetweenHorizonalEnd: BetweenHorizontalEnd,
      BetweenHorizonalStart: BetweenHorizontalStart,
      BetweenHorizontalEnd,
      BetweenHorizontalStart,
      BetweenVerticalEnd,
      BetweenVerticalStart,
      BicepsFlexed,
      Bike,
      Binary,
      Binoculars,
      Biohazard,
      Bird,
      Bitcoin,
      Blend,
      Blinds,
      Blocks,
      Bluetooth,
      BluetoothConnected,
      BluetoothOff,
      BluetoothSearching,
      Bold,
      Bolt,
      Bomb,
      Bone,
      Book,
      BookA,
      BookAlert,
      BookAudio,
      BookCheck,
      BookCopy,
      BookDashed,
      BookDown,
      BookHeadphones,
      BookHeart,
      BookImage,
      BookKey,
      BookLock,
      BookMarked,
      BookMinus,
      BookOpen,
      BookOpenCheck,
      BookOpenText,
      BookPlus,
      BookTemplate: BookDashed,
      BookText,
      BookType,
      BookUp,
      BookUp2,
      BookUser,
      BookX,
      Bookmark,
      BookmarkCheck,
      BookmarkMinus,
      BookmarkPlus,
      BookmarkX,
      BoomBox,
      Bot,
      BotMessageSquare,
      BotOff,
      BottleWine,
      BowArrow,
      Box,
      BoxSelect: SquareDashed,
      Boxes,
      Braces,
      Brackets,
      Brain,
      BrainCircuit,
      BrainCog,
      BrickWall,
      BrickWallFire,
      BrickWallShield,
      Briefcase,
      BriefcaseBusiness,
      BriefcaseConveyorBelt,
      BriefcaseMedical,
      BringToFront,
      Brush,
      BrushCleaning,
      Bubbles,
      Bug,
      BugOff,
      BugPlay,
      Building,
      Building2,
      Bus,
      BusFront,
      Cable,
      CableCar,
      Cake,
      CakeSlice,
      Calculator,
      Calendar,
      Calendar1,
      CalendarArrowDown,
      CalendarArrowUp,
      CalendarCheck,
      CalendarCheck2,
      CalendarClock,
      CalendarCog,
      CalendarDays,
      CalendarFold,
      CalendarHeart,
      CalendarMinus,
      CalendarMinus2,
      CalendarOff,
      CalendarPlus,
      CalendarPlus2,
      CalendarRange,
      CalendarSearch,
      CalendarSync,
      CalendarX,
      CalendarX2,
      Camera,
      CameraOff,
      CandlestickChart: ChartCandlestick,
      Candy,
      CandyCane,
      CandyOff,
      Cannabis,
      Captions,
      CaptionsOff,
      Car,
      CarFront,
      CarTaxiFront,
      Caravan,
      CardSim,
      Carrot,
      CaseLower,
      CaseSensitive,
      CaseUpper,
      CassetteTape,
      Cast,
      Castle,
      Cat,
      Cctv,
      ChartArea,
      ChartBar,
      ChartBarBig,
      ChartBarDecreasing,
      ChartBarIncreasing,
      ChartBarStacked,
      ChartCandlestick,
      ChartColumn,
      ChartColumnBig,
      ChartColumnDecreasing,
      ChartColumnIncreasing,
      ChartColumnStacked,
      ChartGantt,
      ChartLine,
      ChartNetwork,
      ChartNoAxesColumn,
      ChartNoAxesColumnDecreasing,
      ChartNoAxesColumnIncreasing,
      ChartNoAxesCombined,
      ChartNoAxesGantt,
      ChartPie,
      ChartScatter,
      ChartSpline,
      Check: Check2,
      CheckCheck,
      CheckCircle: CircleCheckBig,
      CheckCircle2: CircleCheck,
      CheckLine,
      CheckSquare: SquareCheckBig,
      CheckSquare2: SquareCheck,
      ChefHat,
      Cherry,
      ChevronDown: ChevronDown3,
      ChevronDownCircle: CircleChevronDown,
      ChevronDownSquare: SquareChevronDown,
      ChevronFirst,
      ChevronLast,
      ChevronLeft,
      ChevronLeftCircle: CircleChevronLeft,
      ChevronLeftSquare: SquareChevronLeft,
      ChevronRight,
      ChevronRightCircle: CircleChevronRight,
      ChevronRightSquare: SquareChevronRight,
      ChevronUp,
      ChevronUpCircle: CircleChevronUp,
      ChevronUpSquare: SquareChevronUp,
      ChevronsDown,
      ChevronsDownUp,
      ChevronsLeft,
      ChevronsLeftRight,
      ChevronsLeftRightEllipsis,
      ChevronsRight,
      ChevronsRightLeft,
      ChevronsUp,
      ChevronsUpDown,
      Chrome: Chromium,
      Chromium,
      Church,
      Cigarette,
      CigaretteOff,
      Circle,
      CircleAlert,
      CircleArrowDown,
      CircleArrowLeft,
      CircleArrowOutDownLeft,
      CircleArrowOutDownRight,
      CircleArrowOutUpLeft,
      CircleArrowOutUpRight,
      CircleArrowRight,
      CircleArrowUp,
      CircleCheck,
      CircleCheckBig,
      CircleChevronDown,
      CircleChevronLeft,
      CircleChevronRight,
      CircleChevronUp,
      CircleDashed,
      CircleDivide,
      CircleDollarSign,
      CircleDot,
      CircleDotDashed,
      CircleEllipsis,
      CircleEqual,
      CircleFadingArrowUp,
      CircleFadingPlus,
      CircleGauge,
      CircleHelp: CircleQuestionMark,
      CircleMinus,
      CircleOff,
      CircleParking,
      CircleParkingOff,
      CirclePause,
      CirclePercent,
      CirclePlay,
      CirclePlus,
      CirclePoundSterling,
      CirclePower,
      CircleQuestionMark,
      CircleSlash,
      CircleSlash2,
      CircleSlashed: CircleSlash2,
      CircleSmall,
      CircleStar,
      CircleStop,
      CircleUser,
      CircleUserRound,
      CircleX,
      CircuitBoard,
      Citrus,
      Clapperboard,
      Clipboard,
      ClipboardCheck,
      ClipboardClock,
      ClipboardCopy,
      ClipboardEdit: ClipboardPen,
      ClipboardList,
      ClipboardMinus,
      ClipboardPaste,
      ClipboardPen,
      ClipboardPenLine,
      ClipboardPlus,
      ClipboardSignature: ClipboardPenLine,
      ClipboardType,
      ClipboardX,
      Clock,
      Clock1,
      Clock10,
      Clock11,
      Clock12,
      Clock2,
      Clock3,
      Clock4,
      Clock5,
      Clock6,
      Clock7,
      Clock8,
      Clock9,
      ClockAlert,
      ClockArrowDown,
      ClockArrowUp,
      ClockFading,
      ClockPlus,
      ClosedCaption,
      Cloud,
      CloudAlert,
      CloudCheck,
      CloudCog,
      CloudDownload,
      CloudDrizzle,
      CloudFog,
      CloudHail,
      CloudLightning,
      CloudMoon,
      CloudMoonRain,
      CloudOff,
      CloudRain,
      CloudRainWind,
      CloudSnow,
      CloudSun,
      CloudSunRain,
      CloudUpload,
      Cloudy,
      Clover,
      Club,
      Code,
      Code2: CodeXml,
      CodeSquare: SquareCode,
      CodeXml,
      Codepen,
      Codesandbox,
      Coffee,
      Cog,
      Coins,
      Columns: Columns2,
      Columns2,
      Columns3,
      Columns3Cog,
      Columns4,
      ColumnsSettings: Columns3Cog,
      Combine,
      Command,
      Compass,
      Component,
      Computer,
      ConciergeBell,
      Cone,
      Construction,
      Contact,
      Contact2: ContactRound,
      ContactRound,
      Container,
      Contrast,
      Cookie,
      CookingPot,
      Copy,
      CopyCheck,
      CopyMinus,
      CopyPlus,
      CopySlash,
      CopyX,
      Copyleft,
      Copyright,
      CornerDownLeft,
      CornerDownRight,
      CornerLeftDown,
      CornerLeftUp,
      CornerRightDown,
      CornerRightUp,
      CornerUpLeft,
      CornerUpRight,
      Cpu,
      CreativeCommons,
      CreditCard,
      Croissant,
      Crop,
      Cross,
      Crosshair,
      Crown,
      Cuboid,
      CupSoda,
      CurlyBraces: Braces,
      Currency,
      Cylinder,
      Dam,
      Database,
      DatabaseBackup,
      DatabaseZap,
      DecimalsArrowLeft,
      DecimalsArrowRight,
      Delete,
      Dessert,
      Diameter,
      Diamond,
      DiamondMinus,
      DiamondPercent,
      DiamondPlus,
      Dice1,
      Dice2,
      Dice3,
      Dice4,
      Dice5,
      Dice6,
      Dices,
      Diff,
      Disc,
      Disc2,
      Disc3,
      DiscAlbum,
      Divide,
      DivideCircle: CircleDivide,
      DivideSquare: SquareDivide,
      Dna,
      DnaOff,
      Dock,
      Dog,
      DollarSign,
      Donut,
      DoorClosed,
      DoorClosedLocked,
      DoorOpen,
      Dot,
      DotSquare: SquareDot,
      Download,
      DownloadCloud: CloudDownload,
      DraftingCompass,
      Drama,
      Dribbble,
      Drill,
      Drone,
      Droplet,
      DropletOff,
      Droplets,
      Drum,
      Drumstick,
      Dumbbell,
      Ear,
      EarOff,
      Earth,
      EarthLock,
      Eclipse,
      Edit: SquarePen,
      Edit2: Pen,
      Edit3: PenLine,
      Egg,
      EggFried,
      EggOff,
      Ellipsis,
      EllipsisVertical,
      Equal,
      EqualApproximately,
      EqualNot,
      EqualSquare: SquareEqual,
      Eraser,
      EthernetPort,
      Euro,
      EvCharger,
      Expand,
      ExternalLink,
      Eye,
      EyeClosed,
      EyeOff,
      Facebook,
      Factory,
      Fan,
      FastForward,
      Feather,
      Fence,
      FerrisWheel,
      Figma,
      File,
      FileArchive,
      FileAudio,
      FileAudio2,
      FileAxis3D: FileAxis3d,
      FileAxis3d,
      FileBadge,
      FileBadge2,
      FileBarChart: FileChartColumnIncreasing,
      FileBarChart2: FileChartColumn,
      FileBox,
      FileChartColumn,
      FileChartColumnIncreasing,
      FileChartLine,
      FileChartPie,
      FileCheck,
      FileCheck2,
      FileClock,
      FileCode,
      FileCode2,
      FileCog,
      FileCog2: FileCog,
      FileDiff,
      FileDigit,
      FileDown,
      FileEdit: FilePen,
      FileHeart,
      FileImage,
      FileInput,
      FileJson,
      FileJson2,
      FileKey,
      FileKey2,
      FileLineChart: FileChartLine,
      FileLock,
      FileLock2,
      FileMinus,
      FileMinus2,
      FileMusic,
      FileOutput,
      FilePen,
      FilePenLine,
      FilePieChart: FileChartPie,
      FilePlay,
      FilePlus,
      FilePlus2,
      FileQuestion: FileQuestionMark,
      FileQuestionMark,
      FileScan,
      FileSearch,
      FileSearch2,
      FileSignature: FilePenLine,
      FileSliders,
      FileSpreadsheet,
      FileStack,
      FileSymlink,
      FileTerminal,
      FileText,
      FileType,
      FileType2,
      FileUp,
      FileUser,
      FileVideo: FilePlay,
      FileVideo2: FileVideoCamera,
      FileVideoCamera,
      FileVolume,
      FileVolume2,
      FileWarning,
      FileX,
      FileX2,
      Files,
      Film,
      Filter: Funnel,
      FilterX: FunnelX,
      Fingerprint,
      FireExtinguisher,
      Fish,
      FishOff,
      FishSymbol,
      Flag,
      FlagOff,
      FlagTriangleLeft,
      FlagTriangleRight,
      Flame,
      FlameKindling,
      Flashlight,
      FlashlightOff,
      FlaskConical,
      FlaskConicalOff,
      FlaskRound,
      FlipHorizontal,
      FlipHorizontal2,
      FlipVertical,
      FlipVertical2,
      Flower,
      Flower2,
      Focus,
      FoldHorizontal,
      FoldVertical,
      Folder,
      FolderArchive,
      FolderCheck,
      FolderClock,
      FolderClosed,
      FolderCode,
      FolderCog,
      FolderCog2: FolderCog,
      FolderDot,
      FolderDown,
      FolderEdit: FolderPen,
      FolderGit,
      FolderGit2,
      FolderHeart,
      FolderInput,
      FolderKanban,
      FolderKey,
      FolderLock,
      FolderMinus,
      FolderOpen,
      FolderOpenDot,
      FolderOutput,
      FolderPen,
      FolderPlus,
      FolderRoot,
      FolderSearch,
      FolderSearch2,
      FolderSymlink,
      FolderSync,
      FolderTree,
      FolderUp,
      FolderX,
      Folders,
      Footprints,
      ForkKnife: Utensils,
      ForkKnifeCrossed: UtensilsCrossed,
      Forklift,
      FormInput: RectangleEllipsis,
      Forward,
      Frame,
      Framer,
      Frown,
      Fuel,
      Fullscreen,
      FunctionSquare: SquareFunction,
      Funnel,
      FunnelPlus,
      FunnelX,
      GalleryHorizontal,
      GalleryHorizontalEnd,
      GalleryThumbnails,
      GalleryVertical,
      GalleryVerticalEnd,
      Gamepad,
      Gamepad2,
      GanttChart: ChartNoAxesGantt,
      GanttChartSquare: SquareChartGantt,
      Gauge,
      GaugeCircle: CircleGauge,
      Gavel,
      Gem,
      GeorgianLari,
      Ghost,
      Gift,
      GitBranch,
      GitBranchPlus,
      GitCommit: GitCommitHorizontal,
      GitCommitHorizontal,
      GitCommitVertical,
      GitCompare,
      GitCompareArrows,
      GitFork,
      GitGraph,
      GitMerge,
      GitPullRequest,
      GitPullRequestArrow,
      GitPullRequestClosed,
      GitPullRequestCreate,
      GitPullRequestCreateArrow,
      GitPullRequestDraft,
      Github,
      Gitlab,
      GlassWater,
      Glasses,
      Globe,
      Globe2: Earth,
      GlobeLock,
      Goal,
      Gpu,
      Grab: HandGrab,
      GraduationCap,
      Grape,
      Grid: Grid3x3,
      Grid2X2: Grid2x2,
      Grid2X2Check: Grid2x2Check,
      Grid2X2Plus: Grid2x2Plus,
      Grid2X2X: Grid2x2X,
      Grid2x2,
      Grid2x2Check,
      Grid2x2Plus,
      Grid2x2X,
      Grid3X3: Grid3x3,
      Grid3x2,
      Grid3x3,
      Grip,
      GripHorizontal,
      GripVertical,
      Group,
      Guitar,
      Ham,
      Hamburger,
      Hammer,
      Hand,
      HandCoins,
      HandFist,
      HandGrab,
      HandHeart,
      HandHelping,
      HandMetal,
      HandPlatter,
      Handbag,
      Handshake,
      HardDrive,
      HardDriveDownload,
      HardDriveUpload,
      HardHat,
      Hash,
      HatGlasses,
      Haze,
      HdmiPort,
      Heading,
      Heading1,
      Heading2,
      Heading3,
      Heading4,
      Heading5,
      Heading6,
      HeadphoneOff,
      Headphones,
      Headset,
      Heart,
      HeartCrack,
      HeartHandshake,
      HeartMinus,
      HeartOff,
      HeartPlus,
      HeartPulse,
      Heater,
      HelpCircle: CircleQuestionMark,
      HelpingHand: HandHelping,
      Hexagon,
      Highlighter,
      History,
      Home: House,
      Hop,
      HopOff,
      Hospital,
      Hotel,
      Hourglass,
      House,
      HouseHeart,
      HousePlug,
      HousePlus,
      HouseWifi,
      IceCream: IceCreamCone,
      IceCream2: IceCreamBowl,
      IceCreamBowl,
      IceCreamCone,
      IdCard,
      IdCardLanyard,
      Image,
      ImageDown,
      ImageMinus,
      ImageOff,
      ImagePlay,
      ImagePlus,
      ImageUp,
      ImageUpscale,
      Images,
      Import,
      Inbox,
      Indent: ListIndentIncrease,
      IndentDecrease: ListIndentDecrease,
      IndentIncrease: ListIndentIncrease,
      IndianRupee,
      Infinity,
      Info,
      Inspect: SquareMousePointer,
      InspectionPanel,
      Instagram,
      Italic,
      IterationCcw,
      IterationCw,
      JapaneseYen,
      Joystick,
      Kanban,
      KanbanSquare: SquareKanban,
      KanbanSquareDashed: SquareDashedKanban,
      Kayak,
      Key,
      KeyRound,
      KeySquare,
      Keyboard,
      KeyboardMusic,
      KeyboardOff,
      Lamp,
      LampCeiling,
      LampDesk,
      LampFloor,
      LampWallDown,
      LampWallUp,
      LandPlot,
      Landmark,
      Languages,
      Laptop,
      Laptop2: LaptopMinimal,
      LaptopMinimal,
      LaptopMinimalCheck,
      Lasso,
      LassoSelect,
      Laugh,
      Layers,
      Layers2,
      Layers3: Layers,
      Layout: PanelsTopLeft,
      LayoutDashboard,
      LayoutGrid,
      LayoutList,
      LayoutPanelLeft,
      LayoutPanelTop,
      LayoutTemplate,
      Leaf,
      LeafyGreen,
      Lectern,
      LetterText: TextInitial,
      Library,
      LibraryBig,
      LibrarySquare: SquareLibrary,
      LifeBuoy,
      Ligature,
      Lightbulb,
      LightbulbOff,
      LineChart: ChartLine,
      LineSquiggle,
      Link,
      Link2,
      Link2Off,
      Linkedin,
      List,
      ListCheck,
      ListChecks,
      ListChevronsDownUp,
      ListChevronsUpDown,
      ListCollapse,
      ListEnd,
      ListFilter,
      ListFilterPlus,
      ListIndentDecrease,
      ListIndentIncrease,
      ListMinus,
      ListMusic,
      ListOrdered,
      ListPlus,
      ListRestart,
      ListStart,
      ListTodo,
      ListTree,
      ListVideo,
      ListX,
      Loader,
      Loader2: LoaderCircle,
      LoaderCircle,
      LoaderPinwheel,
      Locate,
      LocateFixed,
      LocateOff,
      LocationEdit: MapPinPen,
      Lock,
      LockKeyhole,
      LockKeyholeOpen,
      LockOpen,
      LogIn,
      LogOut,
      Logs,
      Lollipop,
      Luggage,
      MSquare: SquareM,
      Magnet,
      Mail,
      MailCheck,
      MailMinus,
      MailOpen,
      MailPlus,
      MailQuestion: MailQuestionMark,
      MailQuestionMark,
      MailSearch,
      MailWarning,
      MailX,
      Mailbox,
      Mails,
      Map: Map2,
      MapMinus,
      MapPin,
      MapPinCheck,
      MapPinCheckInside,
      MapPinHouse,
      MapPinMinus,
      MapPinMinusInside,
      MapPinOff,
      MapPinPen,
      MapPinPlus,
      MapPinPlusInside,
      MapPinX,
      MapPinXInside,
      MapPinned,
      MapPlus,
      Mars,
      MarsStroke,
      Martini,
      Maximize,
      Maximize2,
      Medal,
      Megaphone,
      MegaphoneOff,
      Meh,
      MemoryStick,
      Menu,
      MenuSquare: SquareMenu,
      Merge,
      MessageCircle,
      MessageCircleCode,
      MessageCircleDashed,
      MessageCircleHeart,
      MessageCircleMore,
      MessageCircleOff,
      MessageCirclePlus,
      MessageCircleQuestion: MessageCircleQuestionMark,
      MessageCircleQuestionMark,
      MessageCircleReply,
      MessageCircleWarning,
      MessageCircleX,
      MessageSquare,
      MessageSquareCode,
      MessageSquareDashed,
      MessageSquareDiff,
      MessageSquareDot,
      MessageSquareHeart,
      MessageSquareLock,
      MessageSquareMore,
      MessageSquareOff,
      MessageSquarePlus,
      MessageSquareQuote,
      MessageSquareReply,
      MessageSquareShare,
      MessageSquareText,
      MessageSquareWarning,
      MessageSquareX,
      MessagesSquare,
      Mic,
      Mic2: MicVocal,
      MicOff,
      MicVocal,
      Microchip,
      Microscope,
      Microwave,
      Milestone,
      Milk,
      MilkOff,
      Minimize,
      Minimize2,
      Minus,
      MinusCircle: CircleMinus,
      MinusSquare: SquareMinus,
      Monitor,
      MonitorCheck,
      MonitorCog,
      MonitorDot,
      MonitorDown,
      MonitorOff,
      MonitorPause,
      MonitorPlay,
      MonitorSmartphone,
      MonitorSpeaker,
      MonitorStop,
      MonitorUp,
      MonitorX,
      Moon,
      MoonStar,
      MoreHorizontal: Ellipsis,
      MoreVertical: EllipsisVertical,
      Mountain,
      MountainSnow,
      Mouse,
      MouseOff,
      MousePointer,
      MousePointer2,
      MousePointerBan,
      MousePointerClick,
      MousePointerSquareDashed: SquareDashedMousePointer,
      Move,
      Move3D: Move3d,
      Move3d,
      MoveDiagonal,
      MoveDiagonal2,
      MoveDown,
      MoveDownLeft,
      MoveDownRight,
      MoveHorizontal,
      MoveLeft,
      MoveRight,
      MoveUp,
      MoveUpLeft,
      MoveUpRight,
      MoveVertical,
      Music,
      Music2,
      Music3,
      Music4,
      Navigation,
      Navigation2,
      Navigation2Off,
      NavigationOff,
      Network,
      Newspaper,
      Nfc,
      NonBinary,
      Notebook,
      NotebookPen,
      NotebookTabs,
      NotebookText,
      NotepadText,
      NotepadTextDashed,
      Nut,
      NutOff,
      Octagon,
      OctagonAlert,
      OctagonMinus,
      OctagonPause,
      OctagonX,
      Omega,
      Option,
      Orbit,
      Origami,
      Outdent: ListIndentDecrease,
      Package,
      Package2,
      PackageCheck,
      PackageMinus,
      PackageOpen,
      PackagePlus,
      PackageSearch,
      PackageX,
      PaintBucket,
      PaintRoller,
      Paintbrush,
      Paintbrush2: PaintbrushVertical,
      PaintbrushVertical,
      Palette,
      Palmtree: TreePalm,
      Panda,
      PanelBottom,
      PanelBottomClose,
      PanelBottomDashed,
      PanelBottomInactive: PanelBottomDashed,
      PanelBottomOpen,
      PanelLeft,
      PanelLeftClose,
      PanelLeftDashed,
      PanelLeftInactive: PanelLeftDashed,
      PanelLeftOpen,
      PanelLeftRightDashed,
      PanelRight,
      PanelRightClose,
      PanelRightDashed,
      PanelRightInactive: PanelRightDashed,
      PanelRightOpen,
      PanelTop,
      PanelTopBottomDashed,
      PanelTopClose,
      PanelTopDashed,
      PanelTopInactive: PanelTopDashed,
      PanelTopOpen,
      PanelsLeftBottom,
      PanelsLeftRight: Columns3,
      PanelsRightBottom,
      PanelsTopBottom: Rows3,
      PanelsTopLeft,
      Paperclip,
      Parentheses,
      ParkingCircle: CircleParking,
      ParkingCircleOff: CircleParkingOff,
      ParkingMeter,
      ParkingSquare: SquareParking,
      ParkingSquareOff: SquareParkingOff,
      PartyPopper,
      Pause,
      PauseCircle: CirclePause,
      PauseOctagon: OctagonPause,
      PawPrint,
      PcCase,
      Pen,
      PenBox: SquarePen,
      PenLine,
      PenOff,
      PenSquare: SquarePen,
      PenTool,
      Pencil,
      PencilLine,
      PencilOff,
      PencilRuler,
      Pentagon,
      Percent,
      PercentCircle: CirclePercent,
      PercentDiamond: DiamondPercent,
      PercentSquare: SquarePercent,
      PersonStanding,
      PhilippinePeso,
      Phone,
      PhoneCall,
      PhoneForwarded,
      PhoneIncoming,
      PhoneMissed,
      PhoneOff,
      PhoneOutgoing,
      Pi,
      PiSquare: SquarePi,
      Piano,
      Pickaxe,
      PictureInPicture,
      PictureInPicture2,
      PieChart: ChartPie,
      PiggyBank,
      Pilcrow,
      PilcrowLeft,
      PilcrowRight,
      PilcrowSquare: SquarePilcrow,
      Pill,
      PillBottle,
      Pin,
      PinOff,
      Pipette,
      Pizza,
      Plane,
      PlaneLanding,
      PlaneTakeoff,
      Play,
      PlayCircle: CirclePlay,
      PlaySquare: SquarePlay,
      Plug,
      Plug2,
      PlugZap,
      PlugZap2: PlugZap,
      Plus,
      PlusCircle: CirclePlus,
      PlusSquare: SquarePlus,
      Pocket,
      PocketKnife,
      Podcast,
      Pointer,
      PointerOff,
      Popcorn,
      Popsicle,
      PoundSterling,
      Power,
      PowerCircle: CirclePower,
      PowerOff,
      PowerSquare: SquarePower,
      Presentation,
      Printer,
      PrinterCheck,
      Projector,
      Proportions,
      Puzzle,
      Pyramid,
      QrCode,
      Quote,
      Rabbit,
      Radar,
      Radiation,
      Radical,
      Radio,
      RadioReceiver,
      RadioTower,
      Radius,
      RailSymbol,
      Rainbow,
      Rat,
      Ratio,
      Receipt,
      ReceiptCent,
      ReceiptEuro,
      ReceiptIndianRupee,
      ReceiptJapaneseYen,
      ReceiptPoundSterling,
      ReceiptRussianRuble,
      ReceiptSwissFranc,
      ReceiptText,
      ReceiptTurkishLira,
      RectangleCircle,
      RectangleEllipsis,
      RectangleGoggles,
      RectangleHorizontal,
      RectangleVertical,
      Recycle,
      Redo,
      Redo2,
      RedoDot,
      RefreshCcw,
      RefreshCcwDot,
      RefreshCw,
      RefreshCwOff,
      Refrigerator,
      Regex,
      RemoveFormatting,
      Repeat,
      Repeat1,
      Repeat2,
      Replace,
      ReplaceAll,
      Reply,
      ReplyAll,
      Rewind,
      Ribbon,
      Rocket,
      RockingChair,
      RollerCoaster,
      Rose,
      Rotate3D: Rotate3d,
      Rotate3d,
      RotateCcw,
      RotateCcwKey,
      RotateCcwSquare,
      RotateCw,
      RotateCwSquare,
      Route,
      RouteOff,
      Router,
      Rows: Rows2,
      Rows2,
      Rows3,
      Rows4,
      Rss,
      Ruler,
      RulerDimensionLine,
      RussianRuble,
      Sailboat,
      Salad,
      Sandwich,
      Satellite,
      SatelliteDish,
      SaudiRiyal,
      Save,
      SaveAll,
      SaveOff,
      Scale,
      Scale3D: Scale3d,
      Scale3d,
      Scaling,
      Scan,
      ScanBarcode,
      ScanEye,
      ScanFace,
      ScanHeart,
      ScanLine,
      ScanQrCode,
      ScanSearch,
      ScanText,
      ScatterChart: ChartScatter,
      School,
      School2: University,
      Scissors,
      ScissorsLineDashed,
      ScissorsSquare: SquareScissors,
      ScissorsSquareDashedBottom: SquareBottomDashedScissors,
      ScreenShare,
      ScreenShareOff,
      Scroll,
      ScrollText,
      Search: Search2,
      SearchCheck,
      SearchCode,
      SearchSlash,
      SearchX,
      Section,
      Send,
      SendHorizonal: SendHorizontal,
      SendHorizontal,
      SendToBack,
      SeparatorHorizontal,
      SeparatorVertical,
      Server,
      ServerCog,
      ServerCrash,
      ServerOff,
      Settings,
      Settings2,
      Shapes,
      Share,
      Share2,
      Sheet,
      Shell,
      Shield,
      ShieldAlert,
      ShieldBan,
      ShieldCheck,
      ShieldClose: ShieldX,
      ShieldEllipsis,
      ShieldHalf,
      ShieldMinus,
      ShieldOff,
      ShieldPlus,
      ShieldQuestion: ShieldQuestionMark,
      ShieldQuestionMark,
      ShieldUser,
      ShieldX,
      Ship,
      ShipWheel,
      Shirt,
      ShoppingBag,
      ShoppingBasket,
      ShoppingCart,
      Shovel,
      ShowerHead,
      Shredder,
      Shrimp,
      Shrink,
      Shrub,
      Shuffle,
      Sidebar: PanelLeft,
      SidebarClose: PanelLeftClose,
      SidebarOpen: PanelLeftOpen,
      Sigma,
      SigmaSquare: SquareSigma,
      Signal,
      SignalHigh,
      SignalLow,
      SignalMedium,
      SignalZero,
      Signature,
      Signpost,
      SignpostBig,
      Siren,
      SkipBack,
      SkipForward,
      Skull,
      Slack,
      Slash,
      SlashSquare: SquareSlash,
      Slice,
      Sliders: SlidersVertical,
      SlidersHorizontal,
      SlidersVertical,
      Smartphone,
      SmartphoneCharging,
      SmartphoneNfc,
      Smile,
      SmilePlus,
      Snail,
      Snowflake,
      SoapDispenserDroplet,
      Sofa,
      SortAsc: ArrowUpNarrowWide,
      SortDesc: ArrowDownWideNarrow,
      Soup,
      Space,
      Spade,
      Sparkle,
      Sparkles,
      Speaker,
      Speech,
      SpellCheck,
      SpellCheck2,
      Spline,
      SplinePointer,
      Split,
      SplitSquareHorizontal: SquareSplitHorizontal,
      SplitSquareVertical: SquareSplitVertical,
      Spool,
      Spotlight,
      SprayCan,
      Sprout,
      Square,
      SquareActivity,
      SquareArrowDown,
      SquareArrowDownLeft,
      SquareArrowDownRight,
      SquareArrowLeft,
      SquareArrowOutDownLeft,
      SquareArrowOutDownRight,
      SquareArrowOutUpLeft,
      SquareArrowOutUpRight,
      SquareArrowRight,
      SquareArrowUp,
      SquareArrowUpLeft,
      SquareArrowUpRight,
      SquareAsterisk,
      SquareBottomDashedScissors,
      SquareChartGantt,
      SquareCheck,
      SquareCheckBig,
      SquareChevronDown,
      SquareChevronLeft,
      SquareChevronRight,
      SquareChevronUp,
      SquareCode,
      SquareDashed,
      SquareDashedBottom,
      SquareDashedBottomCode,
      SquareDashedKanban,
      SquareDashedMousePointer,
      SquareDashedTopSolid,
      SquareDivide,
      SquareDot,
      SquareEqual,
      SquareFunction,
      SquareGanttChart: SquareChartGantt,
      SquareKanban,
      SquareLibrary,
      SquareM,
      SquareMenu,
      SquareMinus,
      SquareMousePointer,
      SquareParking,
      SquareParkingOff,
      SquarePause,
      SquarePen,
      SquarePercent,
      SquarePi,
      SquarePilcrow,
      SquarePlay,
      SquarePlus,
      SquarePower,
      SquareRadical,
      SquareRoundCorner,
      SquareScissors,
      SquareSigma,
      SquareSlash,
      SquareSplitHorizontal,
      SquareSplitVertical,
      SquareSquare,
      SquareStack,
      SquareStar,
      SquareStop,
      SquareTerminal,
      SquareUser,
      SquareUserRound,
      SquareX,
      SquaresExclude,
      SquaresIntersect,
      SquaresSubtract,
      SquaresUnite,
      Squircle,
      SquircleDashed,
      Squirrel,
      Stamp,
      Star,
      StarHalf,
      StarOff,
      Stars: Sparkles,
      StepBack,
      StepForward,
      Stethoscope,
      Sticker,
      StickyNote,
      StopCircle: CircleStop,
      Store,
      StretchHorizontal,
      StretchVertical,
      Strikethrough,
      Subscript,
      Subtitles: Captions,
      Sun,
      SunDim,
      SunMedium,
      SunMoon,
      SunSnow,
      Sunrise,
      Sunset,
      Superscript,
      SwatchBook,
      SwissFranc,
      SwitchCamera,
      Sword,
      Swords,
      Syringe,
      Table,
      Table2,
      TableCellsMerge,
      TableCellsSplit,
      TableColumnsSplit,
      TableConfig: Columns3Cog,
      TableOfContents,
      TableProperties,
      TableRowsSplit,
      Tablet,
      TabletSmartphone,
      Tablets,
      Tag,
      Tags,
      Tally1,
      Tally2,
      Tally3,
      Tally4,
      Tally5,
      Tangent,
      Target,
      Telescope,
      Tent,
      TentTree,
      Terminal,
      TerminalSquare: SquareTerminal,
      TestTube,
      TestTube2: TestTubeDiagonal,
      TestTubeDiagonal,
      TestTubes,
      Text: TextAlignStart,
      TextAlignCenter,
      TextAlignEnd,
      TextAlignJustify,
      TextAlignStart,
      TextCursor,
      TextCursorInput,
      TextInitial,
      TextQuote,
      TextSearch,
      TextSelect,
      TextSelection: TextSelect,
      TextWrap,
      Theater,
      Thermometer,
      ThermometerSnowflake,
      ThermometerSun,
      ThumbsDown,
      ThumbsUp,
      Ticket,
      TicketCheck,
      TicketMinus,
      TicketPercent,
      TicketPlus,
      TicketSlash,
      TicketX,
      Tickets,
      TicketsPlane,
      Timer,
      TimerOff,
      TimerReset,
      ToggleLeft,
      ToggleRight,
      Toilet,
      ToolCase,
      Tornado,
      Torus,
      Touchpad,
      TouchpadOff,
      TowerControl,
      ToyBrick,
      Tractor,
      TrafficCone,
      Train: TramFront,
      TrainFront,
      TrainFrontTunnel,
      TrainTrack,
      TramFront,
      Transgender,
      Trash,
      Trash2,
      TreeDeciduous,
      TreePalm,
      TreePine,
      Trees,
      Trello,
      TrendingDown,
      TrendingUp,
      TrendingUpDown,
      Triangle,
      TriangleAlert,
      TriangleDashed,
      TriangleRight,
      Trophy,
      Truck,
      TruckElectric,
      TurkishLira,
      Turntable,
      Turtle,
      Tv,
      Tv2: TvMinimal,
      TvMinimal,
      TvMinimalPlay,
      Twitch,
      Twitter,
      Type,
      TypeOutline,
      Umbrella,
      UmbrellaOff,
      Underline,
      Undo,
      Undo2,
      UndoDot,
      UnfoldHorizontal,
      UnfoldVertical,
      Ungroup,
      University,
      Unlink,
      Unlink2,
      Unlock: LockOpen,
      UnlockKeyhole: LockKeyholeOpen,
      Unplug,
      Upload,
      UploadCloud: CloudUpload,
      Usb,
      User,
      User2: UserRound,
      UserCheck,
      UserCheck2: UserRoundCheck,
      UserCircle: CircleUser,
      UserCircle2: CircleUserRound,
      UserCog,
      UserCog2: UserRoundCog,
      UserLock,
      UserMinus,
      UserMinus2: UserRoundMinus,
      UserPen,
      UserPlus,
      UserPlus2: UserRoundPlus,
      UserRound,
      UserRoundCheck,
      UserRoundCog,
      UserRoundMinus,
      UserRoundPen,
      UserRoundPlus,
      UserRoundSearch,
      UserRoundX,
      UserSearch,
      UserSquare: SquareUser,
      UserSquare2: SquareUserRound,
      UserStar,
      UserX,
      UserX2: UserRoundX,
      Users,
      Users2: UsersRound,
      UsersRound,
      Utensils,
      UtensilsCrossed,
      UtilityPole,
      Variable,
      Vault,
      VectorSquare,
      Vegan,
      VenetianMask,
      Venus,
      VenusAndMars,
      Verified: BadgeCheck,
      Vibrate,
      VibrateOff,
      Video,
      VideoOff,
      Videotape,
      View,
      Voicemail,
      Volleyball,
      Volume,
      Volume1,
      Volume2,
      VolumeOff,
      VolumeX,
      Vote,
      Wallet,
      Wallet2: WalletMinimal,
      WalletCards,
      WalletMinimal,
      Wallpaper,
      Wand,
      Wand2: WandSparkles,
      WandSparkles,
      Warehouse,
      WashingMachine,
      Watch,
      Waves,
      WavesLadder,
      Waypoints,
      Webcam,
      Webhook,
      WebhookOff,
      Weight,
      Wheat,
      WheatOff,
      WholeWord,
      Wifi,
      WifiCog,
      WifiHigh,
      WifiLow,
      WifiOff,
      WifiPen,
      WifiSync,
      WifiZero,
      Wind,
      WindArrowDown,
      Wine,
      WineOff,
      Workflow,
      Worm,
      WrapText: TextWrap,
      Wrench,
      X,
      XCircle: CircleX,
      XOctagon: OctagonX,
      XSquare: SquareX,
      Youtube,
      Zap,
      ZapOff,
      ZoomIn,
      ZoomOut
    });
    var createIcons = ({
      icons = {},
      nameAttr = "data-lucide",
      attrs = {},
      root = document
    } = {}) => {
      if (!Object.values(icons).length) {
        throw new Error(
          "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`"
        );
      }
      if (typeof root === "undefined") {
        throw new Error("`createIcons()` only works in a browser environment.");
      }
      const elementsToReplace = root.querySelectorAll(`[${nameAttr}]`);
      Array.from(elementsToReplace).forEach(
        (element) => replaceElement(element, { nameAttr, icons, attrs })
      );
      if (nameAttr === "data-lucide") {
        const deprecatedElements = root.querySelectorAll("[icon-name]");
        if (deprecatedElements.length > 0) {
          console.warn(
            "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
          );
          Array.from(deprecatedElements).forEach(
            (element) => replaceElement(element, { nameAttr: "icon-name", icons, attrs })
          );
        }
      }
    };
    exports.AArrowDown = AArrowDown;
    exports.AArrowUp = AArrowUp;
    exports.ALargeSmall = ALargeSmall;
    exports.Accessibility = Accessibility;
    exports.Activity = Activity;
    exports.ActivitySquare = SquareActivity;
    exports.AirVent = AirVent;
    exports.Airplay = Airplay;
    exports.AlarmCheck = AlarmClockCheck;
    exports.AlarmClock = AlarmClock;
    exports.AlarmClockCheck = AlarmClockCheck;
    exports.AlarmClockMinus = AlarmClockMinus;
    exports.AlarmClockOff = AlarmClockOff;
    exports.AlarmClockPlus = AlarmClockPlus;
    exports.AlarmMinus = AlarmClockMinus;
    exports.AlarmPlus = AlarmClockPlus;
    exports.AlarmSmoke = AlarmSmoke;
    exports.Album = Album;
    exports.AlertCircle = CircleAlert;
    exports.AlertOctagon = OctagonAlert;
    exports.AlertTriangle = TriangleAlert;
    exports.AlignCenter = TextAlignCenter;
    exports.AlignCenterHorizontal = AlignCenterHorizontal;
    exports.AlignCenterVertical = AlignCenterVertical;
    exports.AlignEndHorizontal = AlignEndHorizontal;
    exports.AlignEndVertical = AlignEndVertical;
    exports.AlignHorizontalDistributeCenter = AlignHorizontalDistributeCenter;
    exports.AlignHorizontalDistributeEnd = AlignHorizontalDistributeEnd;
    exports.AlignHorizontalDistributeStart = AlignHorizontalDistributeStart;
    exports.AlignHorizontalJustifyCenter = AlignHorizontalJustifyCenter;
    exports.AlignHorizontalJustifyEnd = AlignHorizontalJustifyEnd;
    exports.AlignHorizontalJustifyStart = AlignHorizontalJustifyStart;
    exports.AlignHorizontalSpaceAround = AlignHorizontalSpaceAround;
    exports.AlignHorizontalSpaceBetween = AlignHorizontalSpaceBetween;
    exports.AlignJustify = TextAlignJustify;
    exports.AlignLeft = TextAlignStart;
    exports.AlignRight = TextAlignEnd;
    exports.AlignStartHorizontal = AlignStartHorizontal;
    exports.AlignStartVertical = AlignStartVertical;
    exports.AlignVerticalDistributeCenter = AlignVerticalDistributeCenter;
    exports.AlignVerticalDistributeEnd = AlignVerticalDistributeEnd;
    exports.AlignVerticalDistributeStart = AlignVerticalDistributeStart;
    exports.AlignVerticalJustifyCenter = AlignVerticalJustifyCenter;
    exports.AlignVerticalJustifyEnd = AlignVerticalJustifyEnd;
    exports.AlignVerticalJustifyStart = AlignVerticalJustifyStart;
    exports.AlignVerticalSpaceAround = AlignVerticalSpaceAround;
    exports.AlignVerticalSpaceBetween = AlignVerticalSpaceBetween;
    exports.Ambulance = Ambulance;
    exports.Ampersand = Ampersand;
    exports.Ampersands = Ampersands;
    exports.Amphora = Amphora;
    exports.Anchor = Anchor;
    exports.Angry = Angry;
    exports.Annoyed = Annoyed;
    exports.Antenna = Antenna;
    exports.Anvil = Anvil;
    exports.Aperture = Aperture;
    exports.AppWindow = AppWindow;
    exports.AppWindowMac = AppWindowMac;
    exports.Apple = Apple;
    exports.Archive = Archive;
    exports.ArchiveRestore = ArchiveRestore;
    exports.ArchiveX = ArchiveX;
    exports.AreaChart = ChartArea;
    exports.Armchair = Armchair;
    exports.ArrowBigDown = ArrowBigDown;
    exports.ArrowBigDownDash = ArrowBigDownDash;
    exports.ArrowBigLeft = ArrowBigLeft;
    exports.ArrowBigLeftDash = ArrowBigLeftDash;
    exports.ArrowBigRight = ArrowBigRight;
    exports.ArrowBigRightDash = ArrowBigRightDash;
    exports.ArrowBigUp = ArrowBigUp;
    exports.ArrowBigUpDash = ArrowBigUpDash;
    exports.ArrowDown = ArrowDown;
    exports.ArrowDown01 = ArrowDown01;
    exports.ArrowDown10 = ArrowDown10;
    exports.ArrowDownAZ = ArrowDownAZ;
    exports.ArrowDownAz = ArrowDownAZ;
    exports.ArrowDownCircle = CircleArrowDown;
    exports.ArrowDownFromLine = ArrowDownFromLine;
    exports.ArrowDownLeft = ArrowDownLeft;
    exports.ArrowDownLeftFromCircle = CircleArrowOutDownLeft;
    exports.ArrowDownLeftFromSquare = SquareArrowOutDownLeft;
    exports.ArrowDownLeftSquare = SquareArrowDownLeft;
    exports.ArrowDownNarrowWide = ArrowDownNarrowWide;
    exports.ArrowDownRight = ArrowDownRight;
    exports.ArrowDownRightFromCircle = CircleArrowOutDownRight;
    exports.ArrowDownRightFromSquare = SquareArrowOutDownRight;
    exports.ArrowDownRightSquare = SquareArrowDownRight;
    exports.ArrowDownSquare = SquareArrowDown;
    exports.ArrowDownToDot = ArrowDownToDot;
    exports.ArrowDownToLine = ArrowDownToLine;
    exports.ArrowDownUp = ArrowDownUp;
    exports.ArrowDownWideNarrow = ArrowDownWideNarrow;
    exports.ArrowDownZA = ArrowDownZA;
    exports.ArrowDownZa = ArrowDownZA;
    exports.ArrowLeft = ArrowLeft;
    exports.ArrowLeftCircle = CircleArrowLeft;
    exports.ArrowLeftFromLine = ArrowLeftFromLine;
    exports.ArrowLeftRight = ArrowLeftRight;
    exports.ArrowLeftSquare = SquareArrowLeft;
    exports.ArrowLeftToLine = ArrowLeftToLine;
    exports.ArrowRight = ArrowRight;
    exports.ArrowRightCircle = CircleArrowRight;
    exports.ArrowRightFromLine = ArrowRightFromLine;
    exports.ArrowRightLeft = ArrowRightLeft;
    exports.ArrowRightSquare = SquareArrowRight;
    exports.ArrowRightToLine = ArrowRightToLine;
    exports.ArrowUp = ArrowUp;
    exports.ArrowUp01 = ArrowUp01;
    exports.ArrowUp10 = ArrowUp10;
    exports.ArrowUpAZ = ArrowUpAZ;
    exports.ArrowUpAz = ArrowUpAZ;
    exports.ArrowUpCircle = CircleArrowUp;
    exports.ArrowUpDown = ArrowUpDown;
    exports.ArrowUpFromDot = ArrowUpFromDot;
    exports.ArrowUpFromLine = ArrowUpFromLine;
    exports.ArrowUpLeft = ArrowUpLeft;
    exports.ArrowUpLeftFromCircle = CircleArrowOutUpLeft;
    exports.ArrowUpLeftFromSquare = SquareArrowOutUpLeft;
    exports.ArrowUpLeftSquare = SquareArrowUpLeft;
    exports.ArrowUpNarrowWide = ArrowUpNarrowWide;
    exports.ArrowUpRight = ArrowUpRight;
    exports.ArrowUpRightFromCircle = CircleArrowOutUpRight;
    exports.ArrowUpRightFromSquare = SquareArrowOutUpRight;
    exports.ArrowUpRightSquare = SquareArrowUpRight;
    exports.ArrowUpSquare = SquareArrowUp;
    exports.ArrowUpToLine = ArrowUpToLine;
    exports.ArrowUpWideNarrow = ArrowUpWideNarrow;
    exports.ArrowUpZA = ArrowUpZA;
    exports.ArrowUpZa = ArrowUpZA;
    exports.ArrowsUpFromLine = ArrowsUpFromLine;
    exports.Asterisk = Asterisk;
    exports.AsteriskSquare = SquareAsterisk;
    exports.AtSign = AtSign;
    exports.Atom = Atom;
    exports.AudioLines = AudioLines;
    exports.AudioWaveform = AudioWaveform;
    exports.Award = Award;
    exports.Axe = Axe;
    exports.Axis3D = Axis3d;
    exports.Axis3d = Axis3d;
    exports.Baby = Baby;
    exports.Backpack = Backpack;
    exports.Badge = Badge;
    exports.BadgeAlert = BadgeAlert;
    exports.BadgeCent = BadgeCent;
    exports.BadgeCheck = BadgeCheck;
    exports.BadgeDollarSign = BadgeDollarSign;
    exports.BadgeEuro = BadgeEuro;
    exports.BadgeHelp = BadgeQuestionMark;
    exports.BadgeIndianRupee = BadgeIndianRupee;
    exports.BadgeInfo = BadgeInfo;
    exports.BadgeJapaneseYen = BadgeJapaneseYen;
    exports.BadgeMinus = BadgeMinus;
    exports.BadgePercent = BadgePercent;
    exports.BadgePlus = BadgePlus;
    exports.BadgePoundSterling = BadgePoundSterling;
    exports.BadgeQuestionMark = BadgeQuestionMark;
    exports.BadgeRussianRuble = BadgeRussianRuble;
    exports.BadgeSwissFranc = BadgeSwissFranc;
    exports.BadgeTurkishLira = BadgeTurkishLira;
    exports.BadgeX = BadgeX;
    exports.BaggageClaim = BaggageClaim;
    exports.Ban = Ban;
    exports.Banana = Banana;
    exports.Bandage = Bandage;
    exports.Banknote = Banknote;
    exports.BanknoteArrowDown = BanknoteArrowDown;
    exports.BanknoteArrowUp = BanknoteArrowUp;
    exports.BanknoteX = BanknoteX;
    exports.BarChart = ChartNoAxesColumnIncreasing;
    exports.BarChart2 = ChartNoAxesColumn;
    exports.BarChart3 = ChartColumn;
    exports.BarChart4 = ChartColumnIncreasing;
    exports.BarChartBig = ChartColumnBig;
    exports.BarChartHorizontal = ChartBar;
    exports.BarChartHorizontalBig = ChartBarBig;
    exports.Barcode = Barcode;
    exports.Barrel = Barrel;
    exports.Baseline = Baseline;
    exports.Bath = Bath;
    exports.Battery = Battery;
    exports.BatteryCharging = BatteryCharging;
    exports.BatteryFull = BatteryFull;
    exports.BatteryLow = BatteryLow;
    exports.BatteryMedium = BatteryMedium;
    exports.BatteryPlus = BatteryPlus;
    exports.BatteryWarning = BatteryWarning;
    exports.Beaker = Beaker;
    exports.Bean = Bean;
    exports.BeanOff = BeanOff;
    exports.Bed = Bed;
    exports.BedDouble = BedDouble;
    exports.BedSingle = BedSingle;
    exports.Beef = Beef;
    exports.Beer = Beer;
    exports.BeerOff = BeerOff;
    exports.Bell = Bell;
    exports.BellDot = BellDot;
    exports.BellElectric = BellElectric;
    exports.BellMinus = BellMinus;
    exports.BellOff = BellOff;
    exports.BellPlus = BellPlus;
    exports.BellRing = BellRing;
    exports.BetweenHorizonalEnd = BetweenHorizontalEnd;
    exports.BetweenHorizonalStart = BetweenHorizontalStart;
    exports.BetweenHorizontalEnd = BetweenHorizontalEnd;
    exports.BetweenHorizontalStart = BetweenHorizontalStart;
    exports.BetweenVerticalEnd = BetweenVerticalEnd;
    exports.BetweenVerticalStart = BetweenVerticalStart;
    exports.BicepsFlexed = BicepsFlexed;
    exports.Bike = Bike;
    exports.Binary = Binary;
    exports.Binoculars = Binoculars;
    exports.Biohazard = Biohazard;
    exports.Bird = Bird;
    exports.Bitcoin = Bitcoin;
    exports.Blend = Blend;
    exports.Blinds = Blinds;
    exports.Blocks = Blocks;
    exports.Bluetooth = Bluetooth;
    exports.BluetoothConnected = BluetoothConnected;
    exports.BluetoothOff = BluetoothOff;
    exports.BluetoothSearching = BluetoothSearching;
    exports.Bold = Bold;
    exports.Bolt = Bolt;
    exports.Bomb = Bomb;
    exports.Bone = Bone;
    exports.Book = Book;
    exports.BookA = BookA;
    exports.BookAlert = BookAlert;
    exports.BookAudio = BookAudio;
    exports.BookCheck = BookCheck;
    exports.BookCopy = BookCopy;
    exports.BookDashed = BookDashed;
    exports.BookDown = BookDown;
    exports.BookHeadphones = BookHeadphones;
    exports.BookHeart = BookHeart;
    exports.BookImage = BookImage;
    exports.BookKey = BookKey;
    exports.BookLock = BookLock;
    exports.BookMarked = BookMarked;
    exports.BookMinus = BookMinus;
    exports.BookOpen = BookOpen;
    exports.BookOpenCheck = BookOpenCheck;
    exports.BookOpenText = BookOpenText;
    exports.BookPlus = BookPlus;
    exports.BookTemplate = BookDashed;
    exports.BookText = BookText;
    exports.BookType = BookType;
    exports.BookUp = BookUp;
    exports.BookUp2 = BookUp2;
    exports.BookUser = BookUser;
    exports.BookX = BookX;
    exports.Bookmark = Bookmark;
    exports.BookmarkCheck = BookmarkCheck;
    exports.BookmarkMinus = BookmarkMinus;
    exports.BookmarkPlus = BookmarkPlus;
    exports.BookmarkX = BookmarkX;
    exports.BoomBox = BoomBox;
    exports.Bot = Bot;
    exports.BotMessageSquare = BotMessageSquare;
    exports.BotOff = BotOff;
    exports.BottleWine = BottleWine;
    exports.BowArrow = BowArrow;
    exports.Box = Box;
    exports.BoxSelect = SquareDashed;
    exports.Boxes = Boxes;
    exports.Braces = Braces;
    exports.Brackets = Brackets;
    exports.Brain = Brain;
    exports.BrainCircuit = BrainCircuit;
    exports.BrainCog = BrainCog;
    exports.BrickWall = BrickWall;
    exports.BrickWallFire = BrickWallFire;
    exports.BrickWallShield = BrickWallShield;
    exports.Briefcase = Briefcase;
    exports.BriefcaseBusiness = BriefcaseBusiness;
    exports.BriefcaseConveyorBelt = BriefcaseConveyorBelt;
    exports.BriefcaseMedical = BriefcaseMedical;
    exports.BringToFront = BringToFront;
    exports.Brush = Brush;
    exports.BrushCleaning = BrushCleaning;
    exports.Bubbles = Bubbles;
    exports.Bug = Bug;
    exports.BugOff = BugOff;
    exports.BugPlay = BugPlay;
    exports.Building = Building;
    exports.Building2 = Building2;
    exports.Bus = Bus;
    exports.BusFront = BusFront;
    exports.Cable = Cable;
    exports.CableCar = CableCar;
    exports.Cake = Cake;
    exports.CakeSlice = CakeSlice;
    exports.Calculator = Calculator;
    exports.Calendar = Calendar;
    exports.Calendar1 = Calendar1;
    exports.CalendarArrowDown = CalendarArrowDown;
    exports.CalendarArrowUp = CalendarArrowUp;
    exports.CalendarCheck = CalendarCheck;
    exports.CalendarCheck2 = CalendarCheck2;
    exports.CalendarClock = CalendarClock;
    exports.CalendarCog = CalendarCog;
    exports.CalendarDays = CalendarDays;
    exports.CalendarFold = CalendarFold;
    exports.CalendarHeart = CalendarHeart;
    exports.CalendarMinus = CalendarMinus;
    exports.CalendarMinus2 = CalendarMinus2;
    exports.CalendarOff = CalendarOff;
    exports.CalendarPlus = CalendarPlus;
    exports.CalendarPlus2 = CalendarPlus2;
    exports.CalendarRange = CalendarRange;
    exports.CalendarSearch = CalendarSearch;
    exports.CalendarSync = CalendarSync;
    exports.CalendarX = CalendarX;
    exports.CalendarX2 = CalendarX2;
    exports.Camera = Camera;
    exports.CameraOff = CameraOff;
    exports.CandlestickChart = ChartCandlestick;
    exports.Candy = Candy;
    exports.CandyCane = CandyCane;
    exports.CandyOff = CandyOff;
    exports.Cannabis = Cannabis;
    exports.Captions = Captions;
    exports.CaptionsOff = CaptionsOff;
    exports.Car = Car;
    exports.CarFront = CarFront;
    exports.CarTaxiFront = CarTaxiFront;
    exports.Caravan = Caravan;
    exports.CardSim = CardSim;
    exports.Carrot = Carrot;
    exports.CaseLower = CaseLower;
    exports.CaseSensitive = CaseSensitive;
    exports.CaseUpper = CaseUpper;
    exports.CassetteTape = CassetteTape;
    exports.Cast = Cast;
    exports.Castle = Castle;
    exports.Cat = Cat;
    exports.Cctv = Cctv;
    exports.ChartArea = ChartArea;
    exports.ChartBar = ChartBar;
    exports.ChartBarBig = ChartBarBig;
    exports.ChartBarDecreasing = ChartBarDecreasing;
    exports.ChartBarIncreasing = ChartBarIncreasing;
    exports.ChartBarStacked = ChartBarStacked;
    exports.ChartCandlestick = ChartCandlestick;
    exports.ChartColumn = ChartColumn;
    exports.ChartColumnBig = ChartColumnBig;
    exports.ChartColumnDecreasing = ChartColumnDecreasing;
    exports.ChartColumnIncreasing = ChartColumnIncreasing;
    exports.ChartColumnStacked = ChartColumnStacked;
    exports.ChartGantt = ChartGantt;
    exports.ChartLine = ChartLine;
    exports.ChartNetwork = ChartNetwork;
    exports.ChartNoAxesColumn = ChartNoAxesColumn;
    exports.ChartNoAxesColumnDecreasing = ChartNoAxesColumnDecreasing;
    exports.ChartNoAxesColumnIncreasing = ChartNoAxesColumnIncreasing;
    exports.ChartNoAxesCombined = ChartNoAxesCombined;
    exports.ChartNoAxesGantt = ChartNoAxesGantt;
    exports.ChartPie = ChartPie;
    exports.ChartScatter = ChartScatter;
    exports.ChartSpline = ChartSpline;
    exports.Check = Check2;
    exports.CheckCheck = CheckCheck;
    exports.CheckCircle = CircleCheckBig;
    exports.CheckCircle2 = CircleCheck;
    exports.CheckLine = CheckLine;
    exports.CheckSquare = SquareCheckBig;
    exports.CheckSquare2 = SquareCheck;
    exports.ChefHat = ChefHat;
    exports.Cherry = Cherry;
    exports.ChevronDown = ChevronDown3;
    exports.ChevronDownCircle = CircleChevronDown;
    exports.ChevronDownSquare = SquareChevronDown;
    exports.ChevronFirst = ChevronFirst;
    exports.ChevronLast = ChevronLast;
    exports.ChevronLeft = ChevronLeft;
    exports.ChevronLeftCircle = CircleChevronLeft;
    exports.ChevronLeftSquare = SquareChevronLeft;
    exports.ChevronRight = ChevronRight;
    exports.ChevronRightCircle = CircleChevronRight;
    exports.ChevronRightSquare = SquareChevronRight;
    exports.ChevronUp = ChevronUp;
    exports.ChevronUpCircle = CircleChevronUp;
    exports.ChevronUpSquare = SquareChevronUp;
    exports.ChevronsDown = ChevronsDown;
    exports.ChevronsDownUp = ChevronsDownUp;
    exports.ChevronsLeft = ChevronsLeft;
    exports.ChevronsLeftRight = ChevronsLeftRight;
    exports.ChevronsLeftRightEllipsis = ChevronsLeftRightEllipsis;
    exports.ChevronsRight = ChevronsRight;
    exports.ChevronsRightLeft = ChevronsRightLeft;
    exports.ChevronsUp = ChevronsUp;
    exports.ChevronsUpDown = ChevronsUpDown;
    exports.Chrome = Chromium;
    exports.Chromium = Chromium;
    exports.Church = Church;
    exports.Cigarette = Cigarette;
    exports.CigaretteOff = CigaretteOff;
    exports.Circle = Circle;
    exports.CircleAlert = CircleAlert;
    exports.CircleArrowDown = CircleArrowDown;
    exports.CircleArrowLeft = CircleArrowLeft;
    exports.CircleArrowOutDownLeft = CircleArrowOutDownLeft;
    exports.CircleArrowOutDownRight = CircleArrowOutDownRight;
    exports.CircleArrowOutUpLeft = CircleArrowOutUpLeft;
    exports.CircleArrowOutUpRight = CircleArrowOutUpRight;
    exports.CircleArrowRight = CircleArrowRight;
    exports.CircleArrowUp = CircleArrowUp;
    exports.CircleCheck = CircleCheck;
    exports.CircleCheckBig = CircleCheckBig;
    exports.CircleChevronDown = CircleChevronDown;
    exports.CircleChevronLeft = CircleChevronLeft;
    exports.CircleChevronRight = CircleChevronRight;
    exports.CircleChevronUp = CircleChevronUp;
    exports.CircleDashed = CircleDashed;
    exports.CircleDivide = CircleDivide;
    exports.CircleDollarSign = CircleDollarSign;
    exports.CircleDot = CircleDot;
    exports.CircleDotDashed = CircleDotDashed;
    exports.CircleEllipsis = CircleEllipsis;
    exports.CircleEqual = CircleEqual;
    exports.CircleFadingArrowUp = CircleFadingArrowUp;
    exports.CircleFadingPlus = CircleFadingPlus;
    exports.CircleGauge = CircleGauge;
    exports.CircleHelp = CircleQuestionMark;
    exports.CircleMinus = CircleMinus;
    exports.CircleOff = CircleOff;
    exports.CircleParking = CircleParking;
    exports.CircleParkingOff = CircleParkingOff;
    exports.CirclePause = CirclePause;
    exports.CirclePercent = CirclePercent;
    exports.CirclePlay = CirclePlay;
    exports.CirclePlus = CirclePlus;
    exports.CirclePoundSterling = CirclePoundSterling;
    exports.CirclePower = CirclePower;
    exports.CircleQuestionMark = CircleQuestionMark;
    exports.CircleSlash = CircleSlash;
    exports.CircleSlash2 = CircleSlash2;
    exports.CircleSlashed = CircleSlash2;
    exports.CircleSmall = CircleSmall;
    exports.CircleStar = CircleStar;
    exports.CircleStop = CircleStop;
    exports.CircleUser = CircleUser;
    exports.CircleUserRound = CircleUserRound;
    exports.CircleX = CircleX;
    exports.CircuitBoard = CircuitBoard;
    exports.Citrus = Citrus;
    exports.Clapperboard = Clapperboard;
    exports.Clipboard = Clipboard;
    exports.ClipboardCheck = ClipboardCheck;
    exports.ClipboardClock = ClipboardClock;
    exports.ClipboardCopy = ClipboardCopy;
    exports.ClipboardEdit = ClipboardPen;
    exports.ClipboardList = ClipboardList;
    exports.ClipboardMinus = ClipboardMinus;
    exports.ClipboardPaste = ClipboardPaste;
    exports.ClipboardPen = ClipboardPen;
    exports.ClipboardPenLine = ClipboardPenLine;
    exports.ClipboardPlus = ClipboardPlus;
    exports.ClipboardSignature = ClipboardPenLine;
    exports.ClipboardType = ClipboardType;
    exports.ClipboardX = ClipboardX;
    exports.Clock = Clock;
    exports.Clock1 = Clock1;
    exports.Clock10 = Clock10;
    exports.Clock11 = Clock11;
    exports.Clock12 = Clock12;
    exports.Clock2 = Clock2;
    exports.Clock3 = Clock3;
    exports.Clock4 = Clock4;
    exports.Clock5 = Clock5;
    exports.Clock6 = Clock6;
    exports.Clock7 = Clock7;
    exports.Clock8 = Clock8;
    exports.Clock9 = Clock9;
    exports.ClockAlert = ClockAlert;
    exports.ClockArrowDown = ClockArrowDown;
    exports.ClockArrowUp = ClockArrowUp;
    exports.ClockFading = ClockFading;
    exports.ClockPlus = ClockPlus;
    exports.ClosedCaption = ClosedCaption;
    exports.Cloud = Cloud;
    exports.CloudAlert = CloudAlert;
    exports.CloudCheck = CloudCheck;
    exports.CloudCog = CloudCog;
    exports.CloudDownload = CloudDownload;
    exports.CloudDrizzle = CloudDrizzle;
    exports.CloudFog = CloudFog;
    exports.CloudHail = CloudHail;
    exports.CloudLightning = CloudLightning;
    exports.CloudMoon = CloudMoon;
    exports.CloudMoonRain = CloudMoonRain;
    exports.CloudOff = CloudOff;
    exports.CloudRain = CloudRain;
    exports.CloudRainWind = CloudRainWind;
    exports.CloudSnow = CloudSnow;
    exports.CloudSun = CloudSun;
    exports.CloudSunRain = CloudSunRain;
    exports.CloudUpload = CloudUpload;
    exports.Cloudy = Cloudy;
    exports.Clover = Clover;
    exports.Club = Club;
    exports.Code = Code;
    exports.Code2 = CodeXml;
    exports.CodeSquare = SquareCode;
    exports.CodeXml = CodeXml;
    exports.Codepen = Codepen;
    exports.Codesandbox = Codesandbox;
    exports.Coffee = Coffee;
    exports.Cog = Cog;
    exports.Coins = Coins;
    exports.Columns = Columns2;
    exports.Columns2 = Columns2;
    exports.Columns3 = Columns3;
    exports.Columns3Cog = Columns3Cog;
    exports.Columns4 = Columns4;
    exports.ColumnsSettings = Columns3Cog;
    exports.Combine = Combine;
    exports.Command = Command;
    exports.Compass = Compass;
    exports.Component = Component;
    exports.Computer = Computer;
    exports.ConciergeBell = ConciergeBell;
    exports.Cone = Cone;
    exports.Construction = Construction;
    exports.Contact = Contact;
    exports.Contact2 = ContactRound;
    exports.ContactRound = ContactRound;
    exports.Container = Container;
    exports.Contrast = Contrast;
    exports.Cookie = Cookie;
    exports.CookingPot = CookingPot;
    exports.Copy = Copy;
    exports.CopyCheck = CopyCheck;
    exports.CopyMinus = CopyMinus;
    exports.CopyPlus = CopyPlus;
    exports.CopySlash = CopySlash;
    exports.CopyX = CopyX;
    exports.Copyleft = Copyleft;
    exports.Copyright = Copyright;
    exports.CornerDownLeft = CornerDownLeft;
    exports.CornerDownRight = CornerDownRight;
    exports.CornerLeftDown = CornerLeftDown;
    exports.CornerLeftUp = CornerLeftUp;
    exports.CornerRightDown = CornerRightDown;
    exports.CornerRightUp = CornerRightUp;
    exports.CornerUpLeft = CornerUpLeft;
    exports.CornerUpRight = CornerUpRight;
    exports.Cpu = Cpu;
    exports.CreativeCommons = CreativeCommons;
    exports.CreditCard = CreditCard;
    exports.Croissant = Croissant;
    exports.Crop = Crop;
    exports.Cross = Cross;
    exports.Crosshair = Crosshair;
    exports.Crown = Crown;
    exports.Cuboid = Cuboid;
    exports.CupSoda = CupSoda;
    exports.CurlyBraces = Braces;
    exports.Currency = Currency;
    exports.Cylinder = Cylinder;
    exports.Dam = Dam;
    exports.Database = Database;
    exports.DatabaseBackup = DatabaseBackup;
    exports.DatabaseZap = DatabaseZap;
    exports.DecimalsArrowLeft = DecimalsArrowLeft;
    exports.DecimalsArrowRight = DecimalsArrowRight;
    exports.Delete = Delete;
    exports.Dessert = Dessert;
    exports.Diameter = Diameter;
    exports.Diamond = Diamond;
    exports.DiamondMinus = DiamondMinus;
    exports.DiamondPercent = DiamondPercent;
    exports.DiamondPlus = DiamondPlus;
    exports.Dice1 = Dice1;
    exports.Dice2 = Dice2;
    exports.Dice3 = Dice3;
    exports.Dice4 = Dice4;
    exports.Dice5 = Dice5;
    exports.Dice6 = Dice6;
    exports.Dices = Dices;
    exports.Diff = Diff;
    exports.Disc = Disc;
    exports.Disc2 = Disc2;
    exports.Disc3 = Disc3;
    exports.DiscAlbum = DiscAlbum;
    exports.Divide = Divide;
    exports.DivideCircle = CircleDivide;
    exports.DivideSquare = SquareDivide;
    exports.Dna = Dna;
    exports.DnaOff = DnaOff;
    exports.Dock = Dock;
    exports.Dog = Dog;
    exports.DollarSign = DollarSign;
    exports.Donut = Donut;
    exports.DoorClosed = DoorClosed;
    exports.DoorClosedLocked = DoorClosedLocked;
    exports.DoorOpen = DoorOpen;
    exports.Dot = Dot;
    exports.DotSquare = SquareDot;
    exports.Download = Download;
    exports.DownloadCloud = CloudDownload;
    exports.DraftingCompass = DraftingCompass;
    exports.Drama = Drama;
    exports.Dribbble = Dribbble;
    exports.Drill = Drill;
    exports.Drone = Drone;
    exports.Droplet = Droplet;
    exports.DropletOff = DropletOff;
    exports.Droplets = Droplets;
    exports.Drum = Drum;
    exports.Drumstick = Drumstick;
    exports.Dumbbell = Dumbbell;
    exports.Ear = Ear;
    exports.EarOff = EarOff;
    exports.Earth = Earth;
    exports.EarthLock = EarthLock;
    exports.Eclipse = Eclipse;
    exports.Edit = SquarePen;
    exports.Edit2 = Pen;
    exports.Edit3 = PenLine;
    exports.Egg = Egg;
    exports.EggFried = EggFried;
    exports.EggOff = EggOff;
    exports.Ellipsis = Ellipsis;
    exports.EllipsisVertical = EllipsisVertical;
    exports.Equal = Equal;
    exports.EqualApproximately = EqualApproximately;
    exports.EqualNot = EqualNot;
    exports.EqualSquare = SquareEqual;
    exports.Eraser = Eraser;
    exports.EthernetPort = EthernetPort;
    exports.Euro = Euro;
    exports.EvCharger = EvCharger;
    exports.Expand = Expand;
    exports.ExternalLink = ExternalLink;
    exports.Eye = Eye;
    exports.EyeClosed = EyeClosed;
    exports.EyeOff = EyeOff;
    exports.Facebook = Facebook;
    exports.Factory = Factory;
    exports.Fan = Fan;
    exports.FastForward = FastForward;
    exports.Feather = Feather;
    exports.Fence = Fence;
    exports.FerrisWheel = FerrisWheel;
    exports.Figma = Figma;
    exports.File = File;
    exports.FileArchive = FileArchive;
    exports.FileAudio = FileAudio;
    exports.FileAudio2 = FileAudio2;
    exports.FileAxis3D = FileAxis3d;
    exports.FileAxis3d = FileAxis3d;
    exports.FileBadge = FileBadge;
    exports.FileBadge2 = FileBadge2;
    exports.FileBarChart = FileChartColumnIncreasing;
    exports.FileBarChart2 = FileChartColumn;
    exports.FileBox = FileBox;
    exports.FileChartColumn = FileChartColumn;
    exports.FileChartColumnIncreasing = FileChartColumnIncreasing;
    exports.FileChartLine = FileChartLine;
    exports.FileChartPie = FileChartPie;
    exports.FileCheck = FileCheck;
    exports.FileCheck2 = FileCheck2;
    exports.FileClock = FileClock;
    exports.FileCode = FileCode;
    exports.FileCode2 = FileCode2;
    exports.FileCog = FileCog;
    exports.FileCog2 = FileCog;
    exports.FileDiff = FileDiff;
    exports.FileDigit = FileDigit;
    exports.FileDown = FileDown;
    exports.FileEdit = FilePen;
    exports.FileHeart = FileHeart;
    exports.FileImage = FileImage;
    exports.FileInput = FileInput;
    exports.FileJson = FileJson;
    exports.FileJson2 = FileJson2;
    exports.FileKey = FileKey;
    exports.FileKey2 = FileKey2;
    exports.FileLineChart = FileChartLine;
    exports.FileLock = FileLock;
    exports.FileLock2 = FileLock2;
    exports.FileMinus = FileMinus;
    exports.FileMinus2 = FileMinus2;
    exports.FileMusic = FileMusic;
    exports.FileOutput = FileOutput;
    exports.FilePen = FilePen;
    exports.FilePenLine = FilePenLine;
    exports.FilePieChart = FileChartPie;
    exports.FilePlay = FilePlay;
    exports.FilePlus = FilePlus;
    exports.FilePlus2 = FilePlus2;
    exports.FileQuestion = FileQuestionMark;
    exports.FileQuestionMark = FileQuestionMark;
    exports.FileScan = FileScan;
    exports.FileSearch = FileSearch;
    exports.FileSearch2 = FileSearch2;
    exports.FileSignature = FilePenLine;
    exports.FileSliders = FileSliders;
    exports.FileSpreadsheet = FileSpreadsheet;
    exports.FileStack = FileStack;
    exports.FileSymlink = FileSymlink;
    exports.FileTerminal = FileTerminal;
    exports.FileText = FileText;
    exports.FileType = FileType;
    exports.FileType2 = FileType2;
    exports.FileUp = FileUp;
    exports.FileUser = FileUser;
    exports.FileVideo = FilePlay;
    exports.FileVideo2 = FileVideoCamera;
    exports.FileVideoCamera = FileVideoCamera;
    exports.FileVolume = FileVolume;
    exports.FileVolume2 = FileVolume2;
    exports.FileWarning = FileWarning;
    exports.FileX = FileX;
    exports.FileX2 = FileX2;
    exports.Files = Files;
    exports.Film = Film;
    exports.Filter = Funnel;
    exports.FilterX = FunnelX;
    exports.Fingerprint = Fingerprint;
    exports.FireExtinguisher = FireExtinguisher;
    exports.Fish = Fish;
    exports.FishOff = FishOff;
    exports.FishSymbol = FishSymbol;
    exports.Flag = Flag;
    exports.FlagOff = FlagOff;
    exports.FlagTriangleLeft = FlagTriangleLeft;
    exports.FlagTriangleRight = FlagTriangleRight;
    exports.Flame = Flame;
    exports.FlameKindling = FlameKindling;
    exports.Flashlight = Flashlight;
    exports.FlashlightOff = FlashlightOff;
    exports.FlaskConical = FlaskConical;
    exports.FlaskConicalOff = FlaskConicalOff;
    exports.FlaskRound = FlaskRound;
    exports.FlipHorizontal = FlipHorizontal;
    exports.FlipHorizontal2 = FlipHorizontal2;
    exports.FlipVertical = FlipVertical;
    exports.FlipVertical2 = FlipVertical2;
    exports.Flower = Flower;
    exports.Flower2 = Flower2;
    exports.Focus = Focus;
    exports.FoldHorizontal = FoldHorizontal;
    exports.FoldVertical = FoldVertical;
    exports.Folder = Folder;
    exports.FolderArchive = FolderArchive;
    exports.FolderCheck = FolderCheck;
    exports.FolderClock = FolderClock;
    exports.FolderClosed = FolderClosed;
    exports.FolderCode = FolderCode;
    exports.FolderCog = FolderCog;
    exports.FolderCog2 = FolderCog;
    exports.FolderDot = FolderDot;
    exports.FolderDown = FolderDown;
    exports.FolderEdit = FolderPen;
    exports.FolderGit = FolderGit;
    exports.FolderGit2 = FolderGit2;
    exports.FolderHeart = FolderHeart;
    exports.FolderInput = FolderInput;
    exports.FolderKanban = FolderKanban;
    exports.FolderKey = FolderKey;
    exports.FolderLock = FolderLock;
    exports.FolderMinus = FolderMinus;
    exports.FolderOpen = FolderOpen;
    exports.FolderOpenDot = FolderOpenDot;
    exports.FolderOutput = FolderOutput;
    exports.FolderPen = FolderPen;
    exports.FolderPlus = FolderPlus;
    exports.FolderRoot = FolderRoot;
    exports.FolderSearch = FolderSearch;
    exports.FolderSearch2 = FolderSearch2;
    exports.FolderSymlink = FolderSymlink;
    exports.FolderSync = FolderSync;
    exports.FolderTree = FolderTree;
    exports.FolderUp = FolderUp;
    exports.FolderX = FolderX;
    exports.Folders = Folders;
    exports.Footprints = Footprints;
    exports.ForkKnife = Utensils;
    exports.ForkKnifeCrossed = UtensilsCrossed;
    exports.Forklift = Forklift;
    exports.FormInput = RectangleEllipsis;
    exports.Forward = Forward;
    exports.Frame = Frame;
    exports.Framer = Framer;
    exports.Frown = Frown;
    exports.Fuel = Fuel;
    exports.Fullscreen = Fullscreen;
    exports.FunctionSquare = SquareFunction;
    exports.Funnel = Funnel;
    exports.FunnelPlus = FunnelPlus;
    exports.FunnelX = FunnelX;
    exports.GalleryHorizontal = GalleryHorizontal;
    exports.GalleryHorizontalEnd = GalleryHorizontalEnd;
    exports.GalleryThumbnails = GalleryThumbnails;
    exports.GalleryVertical = GalleryVertical;
    exports.GalleryVerticalEnd = GalleryVerticalEnd;
    exports.Gamepad = Gamepad;
    exports.Gamepad2 = Gamepad2;
    exports.GanttChart = ChartNoAxesGantt;
    exports.GanttChartSquare = SquareChartGantt;
    exports.Gauge = Gauge;
    exports.GaugeCircle = CircleGauge;
    exports.Gavel = Gavel;
    exports.Gem = Gem;
    exports.GeorgianLari = GeorgianLari;
    exports.Ghost = Ghost;
    exports.Gift = Gift;
    exports.GitBranch = GitBranch;
    exports.GitBranchPlus = GitBranchPlus;
    exports.GitCommit = GitCommitHorizontal;
    exports.GitCommitHorizontal = GitCommitHorizontal;
    exports.GitCommitVertical = GitCommitVertical;
    exports.GitCompare = GitCompare;
    exports.GitCompareArrows = GitCompareArrows;
    exports.GitFork = GitFork;
    exports.GitGraph = GitGraph;
    exports.GitMerge = GitMerge;
    exports.GitPullRequest = GitPullRequest;
    exports.GitPullRequestArrow = GitPullRequestArrow;
    exports.GitPullRequestClosed = GitPullRequestClosed;
    exports.GitPullRequestCreate = GitPullRequestCreate;
    exports.GitPullRequestCreateArrow = GitPullRequestCreateArrow;
    exports.GitPullRequestDraft = GitPullRequestDraft;
    exports.Github = Github;
    exports.Gitlab = Gitlab;
    exports.GlassWater = GlassWater;
    exports.Glasses = Glasses;
    exports.Globe = Globe;
    exports.Globe2 = Earth;
    exports.GlobeLock = GlobeLock;
    exports.Goal = Goal;
    exports.Gpu = Gpu;
    exports.Grab = HandGrab;
    exports.GraduationCap = GraduationCap;
    exports.Grape = Grape;
    exports.Grid = Grid3x3;
    exports.Grid2X2 = Grid2x2;
    exports.Grid2X2Check = Grid2x2Check;
    exports.Grid2X2Plus = Grid2x2Plus;
    exports.Grid2X2X = Grid2x2X;
    exports.Grid2x2 = Grid2x2;
    exports.Grid2x2Check = Grid2x2Check;
    exports.Grid2x2Plus = Grid2x2Plus;
    exports.Grid2x2X = Grid2x2X;
    exports.Grid3X3 = Grid3x3;
    exports.Grid3x2 = Grid3x2;
    exports.Grid3x3 = Grid3x3;
    exports.Grip = Grip;
    exports.GripHorizontal = GripHorizontal;
    exports.GripVertical = GripVertical;
    exports.Group = Group;
    exports.Guitar = Guitar;
    exports.Ham = Ham;
    exports.Hamburger = Hamburger;
    exports.Hammer = Hammer;
    exports.Hand = Hand;
    exports.HandCoins = HandCoins;
    exports.HandFist = HandFist;
    exports.HandGrab = HandGrab;
    exports.HandHeart = HandHeart;
    exports.HandHelping = HandHelping;
    exports.HandMetal = HandMetal;
    exports.HandPlatter = HandPlatter;
    exports.Handbag = Handbag;
    exports.Handshake = Handshake;
    exports.HardDrive = HardDrive;
    exports.HardDriveDownload = HardDriveDownload;
    exports.HardDriveUpload = HardDriveUpload;
    exports.HardHat = HardHat;
    exports.Hash = Hash;
    exports.HatGlasses = HatGlasses;
    exports.Haze = Haze;
    exports.HdmiPort = HdmiPort;
    exports.Heading = Heading;
    exports.Heading1 = Heading1;
    exports.Heading2 = Heading2;
    exports.Heading3 = Heading3;
    exports.Heading4 = Heading4;
    exports.Heading5 = Heading5;
    exports.Heading6 = Heading6;
    exports.HeadphoneOff = HeadphoneOff;
    exports.Headphones = Headphones;
    exports.Headset = Headset;
    exports.Heart = Heart;
    exports.HeartCrack = HeartCrack;
    exports.HeartHandshake = HeartHandshake;
    exports.HeartMinus = HeartMinus;
    exports.HeartOff = HeartOff;
    exports.HeartPlus = HeartPlus;
    exports.HeartPulse = HeartPulse;
    exports.Heater = Heater;
    exports.HelpCircle = CircleQuestionMark;
    exports.HelpingHand = HandHelping;
    exports.Hexagon = Hexagon;
    exports.Highlighter = Highlighter;
    exports.History = History;
    exports.Home = House;
    exports.Hop = Hop;
    exports.HopOff = HopOff;
    exports.Hospital = Hospital;
    exports.Hotel = Hotel;
    exports.Hourglass = Hourglass;
    exports.House = House;
    exports.HouseHeart = HouseHeart;
    exports.HousePlug = HousePlug;
    exports.HousePlus = HousePlus;
    exports.HouseWifi = HouseWifi;
    exports.IceCream = IceCreamCone;
    exports.IceCream2 = IceCreamBowl;
    exports.IceCreamBowl = IceCreamBowl;
    exports.IceCreamCone = IceCreamCone;
    exports.IdCard = IdCard;
    exports.IdCardLanyard = IdCardLanyard;
    exports.Image = Image;
    exports.ImageDown = ImageDown;
    exports.ImageMinus = ImageMinus;
    exports.ImageOff = ImageOff;
    exports.ImagePlay = ImagePlay;
    exports.ImagePlus = ImagePlus;
    exports.ImageUp = ImageUp;
    exports.ImageUpscale = ImageUpscale;
    exports.Images = Images;
    exports.Import = Import;
    exports.Inbox = Inbox;
    exports.Indent = ListIndentIncrease;
    exports.IndentDecrease = ListIndentDecrease;
    exports.IndentIncrease = ListIndentIncrease;
    exports.IndianRupee = IndianRupee;
    exports.Infinity = Infinity;
    exports.Info = Info;
    exports.Inspect = SquareMousePointer;
    exports.InspectionPanel = InspectionPanel;
    exports.Instagram = Instagram;
    exports.Italic = Italic;
    exports.IterationCcw = IterationCcw;
    exports.IterationCw = IterationCw;
    exports.JapaneseYen = JapaneseYen;
    exports.Joystick = Joystick;
    exports.Kanban = Kanban;
    exports.KanbanSquare = SquareKanban;
    exports.KanbanSquareDashed = SquareDashedKanban;
    exports.Kayak = Kayak;
    exports.Key = Key;
    exports.KeyRound = KeyRound;
    exports.KeySquare = KeySquare;
    exports.Keyboard = Keyboard;
    exports.KeyboardMusic = KeyboardMusic;
    exports.KeyboardOff = KeyboardOff;
    exports.Lamp = Lamp;
    exports.LampCeiling = LampCeiling;
    exports.LampDesk = LampDesk;
    exports.LampFloor = LampFloor;
    exports.LampWallDown = LampWallDown;
    exports.LampWallUp = LampWallUp;
    exports.LandPlot = LandPlot;
    exports.Landmark = Landmark;
    exports.Languages = Languages;
    exports.Laptop = Laptop;
    exports.Laptop2 = LaptopMinimal;
    exports.LaptopMinimal = LaptopMinimal;
    exports.LaptopMinimalCheck = LaptopMinimalCheck;
    exports.Lasso = Lasso;
    exports.LassoSelect = LassoSelect;
    exports.Laugh = Laugh;
    exports.Layers = Layers;
    exports.Layers2 = Layers2;
    exports.Layers3 = Layers;
    exports.Layout = PanelsTopLeft;
    exports.LayoutDashboard = LayoutDashboard;
    exports.LayoutGrid = LayoutGrid;
    exports.LayoutList = LayoutList;
    exports.LayoutPanelLeft = LayoutPanelLeft;
    exports.LayoutPanelTop = LayoutPanelTop;
    exports.LayoutTemplate = LayoutTemplate;
    exports.Leaf = Leaf;
    exports.LeafyGreen = LeafyGreen;
    exports.Lectern = Lectern;
    exports.LetterText = TextInitial;
    exports.Library = Library;
    exports.LibraryBig = LibraryBig;
    exports.LibrarySquare = SquareLibrary;
    exports.LifeBuoy = LifeBuoy;
    exports.Ligature = Ligature;
    exports.Lightbulb = Lightbulb;
    exports.LightbulbOff = LightbulbOff;
    exports.LineChart = ChartLine;
    exports.LineSquiggle = LineSquiggle;
    exports.Link = Link;
    exports.Link2 = Link2;
    exports.Link2Off = Link2Off;
    exports.Linkedin = Linkedin;
    exports.List = List;
    exports.ListCheck = ListCheck;
    exports.ListChecks = ListChecks;
    exports.ListChevronsDownUp = ListChevronsDownUp;
    exports.ListChevronsUpDown = ListChevronsUpDown;
    exports.ListCollapse = ListCollapse;
    exports.ListEnd = ListEnd;
    exports.ListFilter = ListFilter;
    exports.ListFilterPlus = ListFilterPlus;
    exports.ListIndentDecrease = ListIndentDecrease;
    exports.ListIndentIncrease = ListIndentIncrease;
    exports.ListMinus = ListMinus;
    exports.ListMusic = ListMusic;
    exports.ListOrdered = ListOrdered;
    exports.ListPlus = ListPlus;
    exports.ListRestart = ListRestart;
    exports.ListStart = ListStart;
    exports.ListTodo = ListTodo;
    exports.ListTree = ListTree;
    exports.ListVideo = ListVideo;
    exports.ListX = ListX;
    exports.Loader = Loader;
    exports.Loader2 = LoaderCircle;
    exports.LoaderCircle = LoaderCircle;
    exports.LoaderPinwheel = LoaderPinwheel;
    exports.Locate = Locate;
    exports.LocateFixed = LocateFixed;
    exports.LocateOff = LocateOff;
    exports.LocationEdit = MapPinPen;
    exports.Lock = Lock;
    exports.LockKeyhole = LockKeyhole;
    exports.LockKeyholeOpen = LockKeyholeOpen;
    exports.LockOpen = LockOpen;
    exports.LogIn = LogIn;
    exports.LogOut = LogOut;
    exports.Logs = Logs;
    exports.Lollipop = Lollipop;
    exports.Luggage = Luggage;
    exports.MSquare = SquareM;
    exports.Magnet = Magnet;
    exports.Mail = Mail;
    exports.MailCheck = MailCheck;
    exports.MailMinus = MailMinus;
    exports.MailOpen = MailOpen;
    exports.MailPlus = MailPlus;
    exports.MailQuestion = MailQuestionMark;
    exports.MailQuestionMark = MailQuestionMark;
    exports.MailSearch = MailSearch;
    exports.MailWarning = MailWarning;
    exports.MailX = MailX;
    exports.Mailbox = Mailbox;
    exports.Mails = Mails;
    exports.Map = Map2;
    exports.MapMinus = MapMinus;
    exports.MapPin = MapPin;
    exports.MapPinCheck = MapPinCheck;
    exports.MapPinCheckInside = MapPinCheckInside;
    exports.MapPinHouse = MapPinHouse;
    exports.MapPinMinus = MapPinMinus;
    exports.MapPinMinusInside = MapPinMinusInside;
    exports.MapPinOff = MapPinOff;
    exports.MapPinPen = MapPinPen;
    exports.MapPinPlus = MapPinPlus;
    exports.MapPinPlusInside = MapPinPlusInside;
    exports.MapPinX = MapPinX;
    exports.MapPinXInside = MapPinXInside;
    exports.MapPinned = MapPinned;
    exports.MapPlus = MapPlus;
    exports.Mars = Mars;
    exports.MarsStroke = MarsStroke;
    exports.Martini = Martini;
    exports.Maximize = Maximize;
    exports.Maximize2 = Maximize2;
    exports.Medal = Medal;
    exports.Megaphone = Megaphone;
    exports.MegaphoneOff = MegaphoneOff;
    exports.Meh = Meh;
    exports.MemoryStick = MemoryStick;
    exports.Menu = Menu;
    exports.MenuSquare = SquareMenu;
    exports.Merge = Merge;
    exports.MessageCircle = MessageCircle;
    exports.MessageCircleCode = MessageCircleCode;
    exports.MessageCircleDashed = MessageCircleDashed;
    exports.MessageCircleHeart = MessageCircleHeart;
    exports.MessageCircleMore = MessageCircleMore;
    exports.MessageCircleOff = MessageCircleOff;
    exports.MessageCirclePlus = MessageCirclePlus;
    exports.MessageCircleQuestion = MessageCircleQuestionMark;
    exports.MessageCircleQuestionMark = MessageCircleQuestionMark;
    exports.MessageCircleReply = MessageCircleReply;
    exports.MessageCircleWarning = MessageCircleWarning;
    exports.MessageCircleX = MessageCircleX;
    exports.MessageSquare = MessageSquare;
    exports.MessageSquareCode = MessageSquareCode;
    exports.MessageSquareDashed = MessageSquareDashed;
    exports.MessageSquareDiff = MessageSquareDiff;
    exports.MessageSquareDot = MessageSquareDot;
    exports.MessageSquareHeart = MessageSquareHeart;
    exports.MessageSquareLock = MessageSquareLock;
    exports.MessageSquareMore = MessageSquareMore;
    exports.MessageSquareOff = MessageSquareOff;
    exports.MessageSquarePlus = MessageSquarePlus;
    exports.MessageSquareQuote = MessageSquareQuote;
    exports.MessageSquareReply = MessageSquareReply;
    exports.MessageSquareShare = MessageSquareShare;
    exports.MessageSquareText = MessageSquareText;
    exports.MessageSquareWarning = MessageSquareWarning;
    exports.MessageSquareX = MessageSquareX;
    exports.MessagesSquare = MessagesSquare;
    exports.Mic = Mic;
    exports.Mic2 = MicVocal;
    exports.MicOff = MicOff;
    exports.MicVocal = MicVocal;
    exports.Microchip = Microchip;
    exports.Microscope = Microscope;
    exports.Microwave = Microwave;
    exports.Milestone = Milestone;
    exports.Milk = Milk;
    exports.MilkOff = MilkOff;
    exports.Minimize = Minimize;
    exports.Minimize2 = Minimize2;
    exports.Minus = Minus;
    exports.MinusCircle = CircleMinus;
    exports.MinusSquare = SquareMinus;
    exports.Monitor = Monitor;
    exports.MonitorCheck = MonitorCheck;
    exports.MonitorCog = MonitorCog;
    exports.MonitorDot = MonitorDot;
    exports.MonitorDown = MonitorDown;
    exports.MonitorOff = MonitorOff;
    exports.MonitorPause = MonitorPause;
    exports.MonitorPlay = MonitorPlay;
    exports.MonitorSmartphone = MonitorSmartphone;
    exports.MonitorSpeaker = MonitorSpeaker;
    exports.MonitorStop = MonitorStop;
    exports.MonitorUp = MonitorUp;
    exports.MonitorX = MonitorX;
    exports.Moon = Moon;
    exports.MoonStar = MoonStar;
    exports.MoreHorizontal = Ellipsis;
    exports.MoreVertical = EllipsisVertical;
    exports.Mountain = Mountain;
    exports.MountainSnow = MountainSnow;
    exports.Mouse = Mouse;
    exports.MouseOff = MouseOff;
    exports.MousePointer = MousePointer;
    exports.MousePointer2 = MousePointer2;
    exports.MousePointerBan = MousePointerBan;
    exports.MousePointerClick = MousePointerClick;
    exports.MousePointerSquareDashed = SquareDashedMousePointer;
    exports.Move = Move;
    exports.Move3D = Move3d;
    exports.Move3d = Move3d;
    exports.MoveDiagonal = MoveDiagonal;
    exports.MoveDiagonal2 = MoveDiagonal2;
    exports.MoveDown = MoveDown;
    exports.MoveDownLeft = MoveDownLeft;
    exports.MoveDownRight = MoveDownRight;
    exports.MoveHorizontal = MoveHorizontal;
    exports.MoveLeft = MoveLeft;
    exports.MoveRight = MoveRight;
    exports.MoveUp = MoveUp;
    exports.MoveUpLeft = MoveUpLeft;
    exports.MoveUpRight = MoveUpRight;
    exports.MoveVertical = MoveVertical;
    exports.Music = Music;
    exports.Music2 = Music2;
    exports.Music3 = Music3;
    exports.Music4 = Music4;
    exports.Navigation = Navigation;
    exports.Navigation2 = Navigation2;
    exports.Navigation2Off = Navigation2Off;
    exports.NavigationOff = NavigationOff;
    exports.Network = Network;
    exports.Newspaper = Newspaper;
    exports.Nfc = Nfc;
    exports.NonBinary = NonBinary;
    exports.Notebook = Notebook;
    exports.NotebookPen = NotebookPen;
    exports.NotebookTabs = NotebookTabs;
    exports.NotebookText = NotebookText;
    exports.NotepadText = NotepadText;
    exports.NotepadTextDashed = NotepadTextDashed;
    exports.Nut = Nut;
    exports.NutOff = NutOff;
    exports.Octagon = Octagon;
    exports.OctagonAlert = OctagonAlert;
    exports.OctagonMinus = OctagonMinus;
    exports.OctagonPause = OctagonPause;
    exports.OctagonX = OctagonX;
    exports.Omega = Omega;
    exports.Option = Option;
    exports.Orbit = Orbit;
    exports.Origami = Origami;
    exports.Outdent = ListIndentDecrease;
    exports.Package = Package;
    exports.Package2 = Package2;
    exports.PackageCheck = PackageCheck;
    exports.PackageMinus = PackageMinus;
    exports.PackageOpen = PackageOpen;
    exports.PackagePlus = PackagePlus;
    exports.PackageSearch = PackageSearch;
    exports.PackageX = PackageX;
    exports.PaintBucket = PaintBucket;
    exports.PaintRoller = PaintRoller;
    exports.Paintbrush = Paintbrush;
    exports.Paintbrush2 = PaintbrushVertical;
    exports.PaintbrushVertical = PaintbrushVertical;
    exports.Palette = Palette;
    exports.Palmtree = TreePalm;
    exports.Panda = Panda;
    exports.PanelBottom = PanelBottom;
    exports.PanelBottomClose = PanelBottomClose;
    exports.PanelBottomDashed = PanelBottomDashed;
    exports.PanelBottomInactive = PanelBottomDashed;
    exports.PanelBottomOpen = PanelBottomOpen;
    exports.PanelLeft = PanelLeft;
    exports.PanelLeftClose = PanelLeftClose;
    exports.PanelLeftDashed = PanelLeftDashed;
    exports.PanelLeftInactive = PanelLeftDashed;
    exports.PanelLeftOpen = PanelLeftOpen;
    exports.PanelLeftRightDashed = PanelLeftRightDashed;
    exports.PanelRight = PanelRight;
    exports.PanelRightClose = PanelRightClose;
    exports.PanelRightDashed = PanelRightDashed;
    exports.PanelRightInactive = PanelRightDashed;
    exports.PanelRightOpen = PanelRightOpen;
    exports.PanelTop = PanelTop;
    exports.PanelTopBottomDashed = PanelTopBottomDashed;
    exports.PanelTopClose = PanelTopClose;
    exports.PanelTopDashed = PanelTopDashed;
    exports.PanelTopInactive = PanelTopDashed;
    exports.PanelTopOpen = PanelTopOpen;
    exports.PanelsLeftBottom = PanelsLeftBottom;
    exports.PanelsLeftRight = Columns3;
    exports.PanelsRightBottom = PanelsRightBottom;
    exports.PanelsTopBottom = Rows3;
    exports.PanelsTopLeft = PanelsTopLeft;
    exports.Paperclip = Paperclip;
    exports.Parentheses = Parentheses;
    exports.ParkingCircle = CircleParking;
    exports.ParkingCircleOff = CircleParkingOff;
    exports.ParkingMeter = ParkingMeter;
    exports.ParkingSquare = SquareParking;
    exports.ParkingSquareOff = SquareParkingOff;
    exports.PartyPopper = PartyPopper;
    exports.Pause = Pause;
    exports.PauseCircle = CirclePause;
    exports.PauseOctagon = OctagonPause;
    exports.PawPrint = PawPrint;
    exports.PcCase = PcCase;
    exports.Pen = Pen;
    exports.PenBox = SquarePen;
    exports.PenLine = PenLine;
    exports.PenOff = PenOff;
    exports.PenSquare = SquarePen;
    exports.PenTool = PenTool;
    exports.Pencil = Pencil;
    exports.PencilLine = PencilLine;
    exports.PencilOff = PencilOff;
    exports.PencilRuler = PencilRuler;
    exports.Pentagon = Pentagon;
    exports.Percent = Percent;
    exports.PercentCircle = CirclePercent;
    exports.PercentDiamond = DiamondPercent;
    exports.PercentSquare = SquarePercent;
    exports.PersonStanding = PersonStanding;
    exports.PhilippinePeso = PhilippinePeso;
    exports.Phone = Phone;
    exports.PhoneCall = PhoneCall;
    exports.PhoneForwarded = PhoneForwarded;
    exports.PhoneIncoming = PhoneIncoming;
    exports.PhoneMissed = PhoneMissed;
    exports.PhoneOff = PhoneOff;
    exports.PhoneOutgoing = PhoneOutgoing;
    exports.Pi = Pi;
    exports.PiSquare = SquarePi;
    exports.Piano = Piano;
    exports.Pickaxe = Pickaxe;
    exports.PictureInPicture = PictureInPicture;
    exports.PictureInPicture2 = PictureInPicture2;
    exports.PieChart = ChartPie;
    exports.PiggyBank = PiggyBank;
    exports.Pilcrow = Pilcrow;
    exports.PilcrowLeft = PilcrowLeft;
    exports.PilcrowRight = PilcrowRight;
    exports.PilcrowSquare = SquarePilcrow;
    exports.Pill = Pill;
    exports.PillBottle = PillBottle;
    exports.Pin = Pin;
    exports.PinOff = PinOff;
    exports.Pipette = Pipette;
    exports.Pizza = Pizza;
    exports.Plane = Plane;
    exports.PlaneLanding = PlaneLanding;
    exports.PlaneTakeoff = PlaneTakeoff;
    exports.Play = Play;
    exports.PlayCircle = CirclePlay;
    exports.PlaySquare = SquarePlay;
    exports.Plug = Plug;
    exports.Plug2 = Plug2;
    exports.PlugZap = PlugZap;
    exports.PlugZap2 = PlugZap;
    exports.Plus = Plus;
    exports.PlusCircle = CirclePlus;
    exports.PlusSquare = SquarePlus;
    exports.Pocket = Pocket;
    exports.PocketKnife = PocketKnife;
    exports.Podcast = Podcast;
    exports.Pointer = Pointer;
    exports.PointerOff = PointerOff;
    exports.Popcorn = Popcorn;
    exports.Popsicle = Popsicle;
    exports.PoundSterling = PoundSterling;
    exports.Power = Power;
    exports.PowerCircle = CirclePower;
    exports.PowerOff = PowerOff;
    exports.PowerSquare = SquarePower;
    exports.Presentation = Presentation;
    exports.Printer = Printer;
    exports.PrinterCheck = PrinterCheck;
    exports.Projector = Projector;
    exports.Proportions = Proportions;
    exports.Puzzle = Puzzle;
    exports.Pyramid = Pyramid;
    exports.QrCode = QrCode;
    exports.Quote = Quote;
    exports.Rabbit = Rabbit;
    exports.Radar = Radar;
    exports.Radiation = Radiation;
    exports.Radical = Radical;
    exports.Radio = Radio;
    exports.RadioReceiver = RadioReceiver;
    exports.RadioTower = RadioTower;
    exports.Radius = Radius;
    exports.RailSymbol = RailSymbol;
    exports.Rainbow = Rainbow;
    exports.Rat = Rat;
    exports.Ratio = Ratio;
    exports.Receipt = Receipt;
    exports.ReceiptCent = ReceiptCent;
    exports.ReceiptEuro = ReceiptEuro;
    exports.ReceiptIndianRupee = ReceiptIndianRupee;
    exports.ReceiptJapaneseYen = ReceiptJapaneseYen;
    exports.ReceiptPoundSterling = ReceiptPoundSterling;
    exports.ReceiptRussianRuble = ReceiptRussianRuble;
    exports.ReceiptSwissFranc = ReceiptSwissFranc;
    exports.ReceiptText = ReceiptText;
    exports.ReceiptTurkishLira = ReceiptTurkishLira;
    exports.RectangleCircle = RectangleCircle;
    exports.RectangleEllipsis = RectangleEllipsis;
    exports.RectangleGoggles = RectangleGoggles;
    exports.RectangleHorizontal = RectangleHorizontal;
    exports.RectangleVertical = RectangleVertical;
    exports.Recycle = Recycle;
    exports.Redo = Redo;
    exports.Redo2 = Redo2;
    exports.RedoDot = RedoDot;
    exports.RefreshCcw = RefreshCcw;
    exports.RefreshCcwDot = RefreshCcwDot;
    exports.RefreshCw = RefreshCw;
    exports.RefreshCwOff = RefreshCwOff;
    exports.Refrigerator = Refrigerator;
    exports.Regex = Regex;
    exports.RemoveFormatting = RemoveFormatting;
    exports.Repeat = Repeat;
    exports.Repeat1 = Repeat1;
    exports.Repeat2 = Repeat2;
    exports.Replace = Replace;
    exports.ReplaceAll = ReplaceAll;
    exports.Reply = Reply;
    exports.ReplyAll = ReplyAll;
    exports.Rewind = Rewind;
    exports.Ribbon = Ribbon;
    exports.Rocket = Rocket;
    exports.RockingChair = RockingChair;
    exports.RollerCoaster = RollerCoaster;
    exports.Rose = Rose;
    exports.Rotate3D = Rotate3d;
    exports.Rotate3d = Rotate3d;
    exports.RotateCcw = RotateCcw;
    exports.RotateCcwKey = RotateCcwKey;
    exports.RotateCcwSquare = RotateCcwSquare;
    exports.RotateCw = RotateCw;
    exports.RotateCwSquare = RotateCwSquare;
    exports.Route = Route;
    exports.RouteOff = RouteOff;
    exports.Router = Router;
    exports.Rows = Rows2;
    exports.Rows2 = Rows2;
    exports.Rows3 = Rows3;
    exports.Rows4 = Rows4;
    exports.Rss = Rss;
    exports.Ruler = Ruler;
    exports.RulerDimensionLine = RulerDimensionLine;
    exports.RussianRuble = RussianRuble;
    exports.Sailboat = Sailboat;
    exports.Salad = Salad;
    exports.Sandwich = Sandwich;
    exports.Satellite = Satellite;
    exports.SatelliteDish = SatelliteDish;
    exports.SaudiRiyal = SaudiRiyal;
    exports.Save = Save;
    exports.SaveAll = SaveAll;
    exports.SaveOff = SaveOff;
    exports.Scale = Scale;
    exports.Scale3D = Scale3d;
    exports.Scale3d = Scale3d;
    exports.Scaling = Scaling;
    exports.Scan = Scan;
    exports.ScanBarcode = ScanBarcode;
    exports.ScanEye = ScanEye;
    exports.ScanFace = ScanFace;
    exports.ScanHeart = ScanHeart;
    exports.ScanLine = ScanLine;
    exports.ScanQrCode = ScanQrCode;
    exports.ScanSearch = ScanSearch;
    exports.ScanText = ScanText;
    exports.ScatterChart = ChartScatter;
    exports.School = School;
    exports.School2 = University;
    exports.Scissors = Scissors;
    exports.ScissorsLineDashed = ScissorsLineDashed;
    exports.ScissorsSquare = SquareScissors;
    exports.ScissorsSquareDashedBottom = SquareBottomDashedScissors;
    exports.ScreenShare = ScreenShare;
    exports.ScreenShareOff = ScreenShareOff;
    exports.Scroll = Scroll;
    exports.ScrollText = ScrollText;
    exports.Search = Search2;
    exports.SearchCheck = SearchCheck;
    exports.SearchCode = SearchCode;
    exports.SearchSlash = SearchSlash;
    exports.SearchX = SearchX;
    exports.Section = Section;
    exports.Send = Send;
    exports.SendHorizonal = SendHorizontal;
    exports.SendHorizontal = SendHorizontal;
    exports.SendToBack = SendToBack;
    exports.SeparatorHorizontal = SeparatorHorizontal;
    exports.SeparatorVertical = SeparatorVertical;
    exports.Server = Server;
    exports.ServerCog = ServerCog;
    exports.ServerCrash = ServerCrash;
    exports.ServerOff = ServerOff;
    exports.Settings = Settings;
    exports.Settings2 = Settings2;
    exports.Shapes = Shapes;
    exports.Share = Share;
    exports.Share2 = Share2;
    exports.Sheet = Sheet;
    exports.Shell = Shell;
    exports.Shield = Shield;
    exports.ShieldAlert = ShieldAlert;
    exports.ShieldBan = ShieldBan;
    exports.ShieldCheck = ShieldCheck;
    exports.ShieldClose = ShieldX;
    exports.ShieldEllipsis = ShieldEllipsis;
    exports.ShieldHalf = ShieldHalf;
    exports.ShieldMinus = ShieldMinus;
    exports.ShieldOff = ShieldOff;
    exports.ShieldPlus = ShieldPlus;
    exports.ShieldQuestion = ShieldQuestionMark;
    exports.ShieldQuestionMark = ShieldQuestionMark;
    exports.ShieldUser = ShieldUser;
    exports.ShieldX = ShieldX;
    exports.Ship = Ship;
    exports.ShipWheel = ShipWheel;
    exports.Shirt = Shirt;
    exports.ShoppingBag = ShoppingBag;
    exports.ShoppingBasket = ShoppingBasket;
    exports.ShoppingCart = ShoppingCart;
    exports.Shovel = Shovel;
    exports.ShowerHead = ShowerHead;
    exports.Shredder = Shredder;
    exports.Shrimp = Shrimp;
    exports.Shrink = Shrink;
    exports.Shrub = Shrub;
    exports.Shuffle = Shuffle;
    exports.Sidebar = PanelLeft;
    exports.SidebarClose = PanelLeftClose;
    exports.SidebarOpen = PanelLeftOpen;
    exports.Sigma = Sigma;
    exports.SigmaSquare = SquareSigma;
    exports.Signal = Signal;
    exports.SignalHigh = SignalHigh;
    exports.SignalLow = SignalLow;
    exports.SignalMedium = SignalMedium;
    exports.SignalZero = SignalZero;
    exports.Signature = Signature;
    exports.Signpost = Signpost;
    exports.SignpostBig = SignpostBig;
    exports.Siren = Siren;
    exports.SkipBack = SkipBack;
    exports.SkipForward = SkipForward;
    exports.Skull = Skull;
    exports.Slack = Slack;
    exports.Slash = Slash;
    exports.SlashSquare = SquareSlash;
    exports.Slice = Slice;
    exports.Sliders = SlidersVertical;
    exports.SlidersHorizontal = SlidersHorizontal;
    exports.SlidersVertical = SlidersVertical;
    exports.Smartphone = Smartphone;
    exports.SmartphoneCharging = SmartphoneCharging;
    exports.SmartphoneNfc = SmartphoneNfc;
    exports.Smile = Smile;
    exports.SmilePlus = SmilePlus;
    exports.Snail = Snail;
    exports.Snowflake = Snowflake;
    exports.SoapDispenserDroplet = SoapDispenserDroplet;
    exports.Sofa = Sofa;
    exports.SortAsc = ArrowUpNarrowWide;
    exports.SortDesc = ArrowDownWideNarrow;
    exports.Soup = Soup;
    exports.Space = Space;
    exports.Spade = Spade;
    exports.Sparkle = Sparkle;
    exports.Sparkles = Sparkles;
    exports.Speaker = Speaker;
    exports.Speech = Speech;
    exports.SpellCheck = SpellCheck;
    exports.SpellCheck2 = SpellCheck2;
    exports.Spline = Spline;
    exports.SplinePointer = SplinePointer;
    exports.Split = Split;
    exports.SplitSquareHorizontal = SquareSplitHorizontal;
    exports.SplitSquareVertical = SquareSplitVertical;
    exports.Spool = Spool;
    exports.Spotlight = Spotlight;
    exports.SprayCan = SprayCan;
    exports.Sprout = Sprout;
    exports.Square = Square;
    exports.SquareActivity = SquareActivity;
    exports.SquareArrowDown = SquareArrowDown;
    exports.SquareArrowDownLeft = SquareArrowDownLeft;
    exports.SquareArrowDownRight = SquareArrowDownRight;
    exports.SquareArrowLeft = SquareArrowLeft;
    exports.SquareArrowOutDownLeft = SquareArrowOutDownLeft;
    exports.SquareArrowOutDownRight = SquareArrowOutDownRight;
    exports.SquareArrowOutUpLeft = SquareArrowOutUpLeft;
    exports.SquareArrowOutUpRight = SquareArrowOutUpRight;
    exports.SquareArrowRight = SquareArrowRight;
    exports.SquareArrowUp = SquareArrowUp;
    exports.SquareArrowUpLeft = SquareArrowUpLeft;
    exports.SquareArrowUpRight = SquareArrowUpRight;
    exports.SquareAsterisk = SquareAsterisk;
    exports.SquareBottomDashedScissors = SquareBottomDashedScissors;
    exports.SquareChartGantt = SquareChartGantt;
    exports.SquareCheck = SquareCheck;
    exports.SquareCheckBig = SquareCheckBig;
    exports.SquareChevronDown = SquareChevronDown;
    exports.SquareChevronLeft = SquareChevronLeft;
    exports.SquareChevronRight = SquareChevronRight;
    exports.SquareChevronUp = SquareChevronUp;
    exports.SquareCode = SquareCode;
    exports.SquareDashed = SquareDashed;
    exports.SquareDashedBottom = SquareDashedBottom;
    exports.SquareDashedBottomCode = SquareDashedBottomCode;
    exports.SquareDashedKanban = SquareDashedKanban;
    exports.SquareDashedMousePointer = SquareDashedMousePointer;
    exports.SquareDashedTopSolid = SquareDashedTopSolid;
    exports.SquareDivide = SquareDivide;
    exports.SquareDot = SquareDot;
    exports.SquareEqual = SquareEqual;
    exports.SquareFunction = SquareFunction;
    exports.SquareGanttChart = SquareChartGantt;
    exports.SquareKanban = SquareKanban;
    exports.SquareLibrary = SquareLibrary;
    exports.SquareM = SquareM;
    exports.SquareMenu = SquareMenu;
    exports.SquareMinus = SquareMinus;
    exports.SquareMousePointer = SquareMousePointer;
    exports.SquareParking = SquareParking;
    exports.SquareParkingOff = SquareParkingOff;
    exports.SquarePause = SquarePause;
    exports.SquarePen = SquarePen;
    exports.SquarePercent = SquarePercent;
    exports.SquarePi = SquarePi;
    exports.SquarePilcrow = SquarePilcrow;
    exports.SquarePlay = SquarePlay;
    exports.SquarePlus = SquarePlus;
    exports.SquarePower = SquarePower;
    exports.SquareRadical = SquareRadical;
    exports.SquareRoundCorner = SquareRoundCorner;
    exports.SquareScissors = SquareScissors;
    exports.SquareSigma = SquareSigma;
    exports.SquareSlash = SquareSlash;
    exports.SquareSplitHorizontal = SquareSplitHorizontal;
    exports.SquareSplitVertical = SquareSplitVertical;
    exports.SquareSquare = SquareSquare;
    exports.SquareStack = SquareStack;
    exports.SquareStar = SquareStar;
    exports.SquareStop = SquareStop;
    exports.SquareTerminal = SquareTerminal;
    exports.SquareUser = SquareUser;
    exports.SquareUserRound = SquareUserRound;
    exports.SquareX = SquareX;
    exports.SquaresExclude = SquaresExclude;
    exports.SquaresIntersect = SquaresIntersect;
    exports.SquaresSubtract = SquaresSubtract;
    exports.SquaresUnite = SquaresUnite;
    exports.Squircle = Squircle;
    exports.SquircleDashed = SquircleDashed;
    exports.Squirrel = Squirrel;
    exports.Stamp = Stamp;
    exports.Star = Star;
    exports.StarHalf = StarHalf;
    exports.StarOff = StarOff;
    exports.Stars = Sparkles;
    exports.StepBack = StepBack;
    exports.StepForward = StepForward;
    exports.Stethoscope = Stethoscope;
    exports.Sticker = Sticker;
    exports.StickyNote = StickyNote;
    exports.StopCircle = CircleStop;
    exports.Store = Store;
    exports.StretchHorizontal = StretchHorizontal;
    exports.StretchVertical = StretchVertical;
    exports.Strikethrough = Strikethrough;
    exports.Subscript = Subscript;
    exports.Subtitles = Captions;
    exports.Sun = Sun;
    exports.SunDim = SunDim;
    exports.SunMedium = SunMedium;
    exports.SunMoon = SunMoon;
    exports.SunSnow = SunSnow;
    exports.Sunrise = Sunrise;
    exports.Sunset = Sunset;
    exports.Superscript = Superscript;
    exports.SwatchBook = SwatchBook;
    exports.SwissFranc = SwissFranc;
    exports.SwitchCamera = SwitchCamera;
    exports.Sword = Sword;
    exports.Swords = Swords;
    exports.Syringe = Syringe;
    exports.Table = Table;
    exports.Table2 = Table2;
    exports.TableCellsMerge = TableCellsMerge;
    exports.TableCellsSplit = TableCellsSplit;
    exports.TableColumnsSplit = TableColumnsSplit;
    exports.TableConfig = Columns3Cog;
    exports.TableOfContents = TableOfContents;
    exports.TableProperties = TableProperties;
    exports.TableRowsSplit = TableRowsSplit;
    exports.Tablet = Tablet;
    exports.TabletSmartphone = TabletSmartphone;
    exports.Tablets = Tablets;
    exports.Tag = Tag;
    exports.Tags = Tags;
    exports.Tally1 = Tally1;
    exports.Tally2 = Tally2;
    exports.Tally3 = Tally3;
    exports.Tally4 = Tally4;
    exports.Tally5 = Tally5;
    exports.Tangent = Tangent;
    exports.Target = Target;
    exports.Telescope = Telescope;
    exports.Tent = Tent;
    exports.TentTree = TentTree;
    exports.Terminal = Terminal;
    exports.TerminalSquare = SquareTerminal;
    exports.TestTube = TestTube;
    exports.TestTube2 = TestTubeDiagonal;
    exports.TestTubeDiagonal = TestTubeDiagonal;
    exports.TestTubes = TestTubes;
    exports.Text = TextAlignStart;
    exports.TextAlignCenter = TextAlignCenter;
    exports.TextAlignEnd = TextAlignEnd;
    exports.TextAlignJustify = TextAlignJustify;
    exports.TextAlignStart = TextAlignStart;
    exports.TextCursor = TextCursor;
    exports.TextCursorInput = TextCursorInput;
    exports.TextInitial = TextInitial;
    exports.TextQuote = TextQuote;
    exports.TextSearch = TextSearch;
    exports.TextSelect = TextSelect;
    exports.TextSelection = TextSelect;
    exports.TextWrap = TextWrap;
    exports.Theater = Theater;
    exports.Thermometer = Thermometer;
    exports.ThermometerSnowflake = ThermometerSnowflake;
    exports.ThermometerSun = ThermometerSun;
    exports.ThumbsDown = ThumbsDown;
    exports.ThumbsUp = ThumbsUp;
    exports.Ticket = Ticket;
    exports.TicketCheck = TicketCheck;
    exports.TicketMinus = TicketMinus;
    exports.TicketPercent = TicketPercent;
    exports.TicketPlus = TicketPlus;
    exports.TicketSlash = TicketSlash;
    exports.TicketX = TicketX;
    exports.Tickets = Tickets;
    exports.TicketsPlane = TicketsPlane;
    exports.Timer = Timer;
    exports.TimerOff = TimerOff;
    exports.TimerReset = TimerReset;
    exports.ToggleLeft = ToggleLeft;
    exports.ToggleRight = ToggleRight;
    exports.Toilet = Toilet;
    exports.ToolCase = ToolCase;
    exports.Tornado = Tornado;
    exports.Torus = Torus;
    exports.Touchpad = Touchpad;
    exports.TouchpadOff = TouchpadOff;
    exports.TowerControl = TowerControl;
    exports.ToyBrick = ToyBrick;
    exports.Tractor = Tractor;
    exports.TrafficCone = TrafficCone;
    exports.Train = TramFront;
    exports.TrainFront = TrainFront;
    exports.TrainFrontTunnel = TrainFrontTunnel;
    exports.TrainTrack = TrainTrack;
    exports.TramFront = TramFront;
    exports.Transgender = Transgender;
    exports.Trash = Trash;
    exports.Trash2 = Trash2;
    exports.TreeDeciduous = TreeDeciduous;
    exports.TreePalm = TreePalm;
    exports.TreePine = TreePine;
    exports.Trees = Trees;
    exports.Trello = Trello;
    exports.TrendingDown = TrendingDown;
    exports.TrendingUp = TrendingUp;
    exports.TrendingUpDown = TrendingUpDown;
    exports.Triangle = Triangle;
    exports.TriangleAlert = TriangleAlert;
    exports.TriangleDashed = TriangleDashed;
    exports.TriangleRight = TriangleRight;
    exports.Trophy = Trophy;
    exports.Truck = Truck;
    exports.TruckElectric = TruckElectric;
    exports.TurkishLira = TurkishLira;
    exports.Turntable = Turntable;
    exports.Turtle = Turtle;
    exports.Tv = Tv;
    exports.Tv2 = TvMinimal;
    exports.TvMinimal = TvMinimal;
    exports.TvMinimalPlay = TvMinimalPlay;
    exports.Twitch = Twitch;
    exports.Twitter = Twitter;
    exports.Type = Type;
    exports.TypeOutline = TypeOutline;
    exports.Umbrella = Umbrella;
    exports.UmbrellaOff = UmbrellaOff;
    exports.Underline = Underline;
    exports.Undo = Undo;
    exports.Undo2 = Undo2;
    exports.UndoDot = UndoDot;
    exports.UnfoldHorizontal = UnfoldHorizontal;
    exports.UnfoldVertical = UnfoldVertical;
    exports.Ungroup = Ungroup;
    exports.University = University;
    exports.Unlink = Unlink;
    exports.Unlink2 = Unlink2;
    exports.Unlock = LockOpen;
    exports.UnlockKeyhole = LockKeyholeOpen;
    exports.Unplug = Unplug;
    exports.Upload = Upload;
    exports.UploadCloud = CloudUpload;
    exports.Usb = Usb;
    exports.User = User;
    exports.User2 = UserRound;
    exports.UserCheck = UserCheck;
    exports.UserCheck2 = UserRoundCheck;
    exports.UserCircle = CircleUser;
    exports.UserCircle2 = CircleUserRound;
    exports.UserCog = UserCog;
    exports.UserCog2 = UserRoundCog;
    exports.UserLock = UserLock;
    exports.UserMinus = UserMinus;
    exports.UserMinus2 = UserRoundMinus;
    exports.UserPen = UserPen;
    exports.UserPlus = UserPlus;
    exports.UserPlus2 = UserRoundPlus;
    exports.UserRound = UserRound;
    exports.UserRoundCheck = UserRoundCheck;
    exports.UserRoundCog = UserRoundCog;
    exports.UserRoundMinus = UserRoundMinus;
    exports.UserRoundPen = UserRoundPen;
    exports.UserRoundPlus = UserRoundPlus;
    exports.UserRoundSearch = UserRoundSearch;
    exports.UserRoundX = UserRoundX;
    exports.UserSearch = UserSearch;
    exports.UserSquare = SquareUser;
    exports.UserSquare2 = SquareUserRound;
    exports.UserStar = UserStar;
    exports.UserX = UserX;
    exports.UserX2 = UserRoundX;
    exports.Users = Users;
    exports.Users2 = UsersRound;
    exports.UsersRound = UsersRound;
    exports.Utensils = Utensils;
    exports.UtensilsCrossed = UtensilsCrossed;
    exports.UtilityPole = UtilityPole;
    exports.Variable = Variable;
    exports.Vault = Vault;
    exports.VectorSquare = VectorSquare;
    exports.Vegan = Vegan;
    exports.VenetianMask = VenetianMask;
    exports.Venus = Venus;
    exports.VenusAndMars = VenusAndMars;
    exports.Verified = BadgeCheck;
    exports.Vibrate = Vibrate;
    exports.VibrateOff = VibrateOff;
    exports.Video = Video;
    exports.VideoOff = VideoOff;
    exports.Videotape = Videotape;
    exports.View = View;
    exports.Voicemail = Voicemail;
    exports.Volleyball = Volleyball;
    exports.Volume = Volume;
    exports.Volume1 = Volume1;
    exports.Volume2 = Volume2;
    exports.VolumeOff = VolumeOff;
    exports.VolumeX = VolumeX;
    exports.Vote = Vote;
    exports.Wallet = Wallet;
    exports.Wallet2 = WalletMinimal;
    exports.WalletCards = WalletCards;
    exports.WalletMinimal = WalletMinimal;
    exports.Wallpaper = Wallpaper;
    exports.Wand = Wand;
    exports.Wand2 = WandSparkles;
    exports.WandSparkles = WandSparkles;
    exports.Warehouse = Warehouse;
    exports.WashingMachine = WashingMachine;
    exports.Watch = Watch;
    exports.Waves = Waves;
    exports.WavesLadder = WavesLadder;
    exports.Waypoints = Waypoints;
    exports.Webcam = Webcam;
    exports.Webhook = Webhook;
    exports.WebhookOff = WebhookOff;
    exports.Weight = Weight;
    exports.Wheat = Wheat;
    exports.WheatOff = WheatOff;
    exports.WholeWord = WholeWord;
    exports.Wifi = Wifi;
    exports.WifiCog = WifiCog;
    exports.WifiHigh = WifiHigh;
    exports.WifiLow = WifiLow;
    exports.WifiOff = WifiOff;
    exports.WifiPen = WifiPen;
    exports.WifiSync = WifiSync;
    exports.WifiZero = WifiZero;
    exports.Wind = Wind;
    exports.WindArrowDown = WindArrowDown;
    exports.Wine = Wine;
    exports.WineOff = WineOff;
    exports.Workflow = Workflow;
    exports.Worm = Worm;
    exports.WrapText = TextWrap;
    exports.Wrench = Wrench;
    exports.X = X;
    exports.XCircle = CircleX;
    exports.XOctagon = OctagonX;
    exports.XSquare = SquareX;
    exports.Youtube = Youtube;
    exports.Zap = Zap;
    exports.ZapOff = ZapOff;
    exports.ZoomIn = ZoomIn;
    exports.ZoomOut = ZoomOut;
    exports.createElement = createElement3;
    exports.createIcons = createIcons;
    exports.icons = iconsAndAliases;
  }
});

// node_modules/nouislider/dist/nouislider.js
var require_nouislider = __commonJS({
  "node_modules/nouislider/dist/nouislider.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.noUiSlider = {}));
    })(exports, (function(exports2) {
      "use strict";
      exports2.PipsMode = void 0;
      (function(PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
      })(exports2.PipsMode || (exports2.PipsMode = {}));
      exports2.PipsType = void 0;
      (function(PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
      })(exports2.PipsType || (exports2.PipsType = {}));
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
          if (pips2.mode === exports2.PipsMode.Range || pips2.mode === exports2.PipsMode.Steps) {
            return scope_Spectrum.xVal;
          }
          if (pips2.mode === exports2.PipsMode.Count) {
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
          if (pips2.mode === exports2.PipsMode.Positions) {
            return mapToRange(pips2.values, pips2.stepped);
          }
          if (pips2.mode === exports2.PipsMode.Values) {
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
            var isSteps = pips2.mode === exports2.PipsMode.Steps;
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
              type = group.indexOf(i) > -1 ? exports2.PipsType.LargeValue : isSteps ? exports2.PipsType.SmallValue : exports2.PipsType.NoValue;
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
          var valueSizeClasses = (_a = {}, _a[exports2.PipsType.None] = "", _a[exports2.PipsType.NoValue] = options.cssClasses.valueNormal, _a[exports2.PipsType.LargeValue] = options.cssClasses.valueLarge, _a[exports2.PipsType.SmallValue] = options.cssClasses.valueSub, _a);
          var markerSizeClasses = (_b = {}, _b[exports2.PipsType.None] = "", _b[exports2.PipsType.NoValue] = options.cssClasses.markerNormal, _b[exports2.PipsType.LargeValue] = options.cssClasses.markerLarge, _b[exports2.PipsType.SmallValue] = options.cssClasses.markerSub, _b);
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
            if (type === exports2.PipsType.None) {
              return;
            }
            var node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.marker);
            node.style[options.style] = offset4 + "%";
            if (type > exports2.PipsType.NoValue) {
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
      var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses,
        create: initialize
      };
      exports2.create = initialize;
      exports2.cssClasses = cssClasses;
      exports2["default"] = nouislider;
      Object.defineProperty(exports2, "__esModule", { value: true });
    }));
  }
});

// src/components/accordion.js
var import_lucide = __toESM(require_lucide(), 1);

// node_modules/uuid/dist/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset3 = 0) {
  return (byteToHex[arr[offset3 + 0]] + byteToHex[arr[offset3 + 1]] + byteToHex[arr[offset3 + 2]] + byteToHex[arr[offset3 + 3]] + "-" + byteToHex[arr[offset3 + 4]] + byteToHex[arr[offset3 + 5]] + "-" + byteToHex[arr[offset3 + 6]] + byteToHex[arr[offset3 + 7]] + "-" + byteToHex[arr[offset3 + 8]] + byteToHex[arr[offset3 + 9]] + "-" + byteToHex[arr[offset3 + 10]] + byteToHex[arr[offset3 + 11]] + byteToHex[arr[offset3 + 12]] + byteToHex[arr[offset3 + 13]] + byteToHex[arr[offset3 + 14]] + byteToHex[arr[offset3 + 15]]).toLowerCase();
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
function _v4(options, buf, offset3) {
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset3 = offset3 || 0;
    if (offset3 < 0 || offset3 + 16 > buf.length) {
      throw new RangeError(`UUID byte range ${offset3}:${offset3 + 15} is out of buffer bounds`);
    }
    for (let i = 0; i < 16; ++i) {
      buf[offset3 + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
function v4(options, buf, offset3) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  return _v4(options, buf, offset3);
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
    const chevronDown = (0, import_lucide.createElement)(import_lucide.ChevronDown, {
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
    const offset3 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset3 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset3,
        centerOffset: center - offset3 - alignmentOffset,
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
var import_lucide2 = __toESM(require_lucide(), 1);
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
    const chevronDown = (0, import_lucide2.createElement)(import_lucide2.ChevronDown, {
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
    const searchIcon = (0, import_lucide2.createElement)(import_lucide2.Search, { class: ["size-4 shrink-0 opacity-50"], width: "16", height: "16", "aria-hidden": true, role: "presentation" });
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
    const check = (0, import_lucide2.createElement)(import_lucide2.Check, { class: ["size-4"], width: "16", height: "16", "aria-hidden": true, role: "presentation" });
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

// src/components/range.js
var import_nouislider = __toESM(require_nouislider(), 1);
function range_default(Alpine) {
  Alpine.directive("h-range", (el, { expression }, { evaluate: evaluate2, cleanup }) => {
    el.classList.add("harmonia-slider");
    el.setAttribute("data-slot", "range");
    (0, import_nouislider.create)(el, evaluate2(expression));
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

// src/module.js
var Harmonia = {
  init(registerPlugin) {
    registerPlugin(accordion_default);
    registerPlugin(alert_default);
    registerPlugin(avatar_default);
    registerPlugin(badge_default);
    registerPlugin(button_default);
    registerPlugin(card_default);
    registerPlugin(checkbox_default);
    registerPlugin(collapsible_default);
    registerPlugin(dialog_default);
    registerPlugin(fieldset_default);
    registerPlugin(icon_default);
    registerPlugin(info_page_default);
    registerPlugin(input_default);
    registerPlugin(label_default);
    registerPlugin(menu_default);
    registerPlugin(pagination_default);
    registerPlugin(popover_default);
    registerPlugin(progress_default);
    registerPlugin(radio_default);
    registerPlugin(range_default);
    registerPlugin(select_default);
    registerPlugin(separator_default);
    registerPlugin(sidebar_default);
    registerPlugin(skeleton_default);
    registerPlugin(spinner_default);
    registerPlugin(switch_default);
    registerPlugin(table_default);
    registerPlugin(tabs_default);
    registerPlugin(tag_default);
    registerPlugin(textarea_default);
    registerPlugin(text_default);
    registerPlugin(tile_default);
    registerPlugin(toolbar_default);
    registerPlugin(tooltip_default);
  },
  setColorScheme
};
var module_default = Harmonia;
export {
  accordion_default as Accordion,
  alert_default as Alert,
  avatar_default as Avatar,
  badge_default as Badge,
  button_default as Button,
  card_default as Card,
  checkbox_default as Checkbox,
  collapsible_default as Collapsible,
  dialog_default as Dialog,
  fieldset_default as Fieldset,
  icon_default as Icon,
  info_page_default as InfoPage,
  input_default as Input,
  label_default as Label,
  menu_default as Menu,
  pagination_default as Pagination,
  popover_default as Popover,
  progress_default as Progress,
  radio_default as Radio,
  range_default as Range,
  select_default as Select,
  separator_default as Separator,
  sidebar_default as Sidebar,
  skeleton_default as Skeleton,
  spinner_default as Spinner,
  switch_default as Switch,
  table_default as Table,
  tabs_default as Tabs,
  tag_default as Tag,
  text_default as Text,
  textarea_default as Textarea,
  tile_default as Tile,
  toolbar_default as Toolbar,
  tooltip_default as Tooltip,
  module_default as default
};
/*! Bundled license information:

lucide/dist/cjs/lucide.js:
  (**
   * @license lucide v0.544.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
