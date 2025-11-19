# Popover

The popover displays additional information for an object in a compact way without leaving the page. The component contains two essential elements: the control (trigger) and body (content). Do NOT use this as a dropdown. Use the menu component instead.

## API Reference

### Component attubute(s)

```
x-h-popover
x-h-popover-trigger
x-h-popover-content
```

### Attributes

#### x-h-popover

| Attribute | Type    | Required | Description                                                                                                |
| --------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| `self`    | boolean | false    | Set to true when the popover should be expanded by default or when you want to expand it programmatically. |

#### x-h-popover-content

| Attribute  | Type                                                                                                                                                                          | Required | Description                                      |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------ |
| data-align | `bottom-start`<br/>`bottom`<br/>`bottom-end`<br/>`right-start`<br/>`right`<br/>`right-end`<br/>`left-start`<br/>`left`<br/>`left-end`<br/>`top-start`<br/>`top`<br/>`top-end` | false    | Aligns the popover body relative to the trigger. |

### Modifiers

#### x-h-popover

| Modifier | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| auto     | Used when the popover should open and close automatically on click. |

#### x-h-popover-trigger

| Modifier | Description                                         |
| -------- | --------------------------------------------------- |
| chevron  | Rotates the icon inside the trigger at 180 degrees. |

#### x-h-popover-content

| Modifier  | Description                                 |
| --------- | ------------------------------------------- |
| no-scroll | Used when the popover body must not scroll. |

## Examples

### Popover (auto open/close)

<br />

<ClientOnly>
<component-container>
<div x-h-popover.auto>
  <button x-h-button x-h-popover-trigger>Popover</button>
  <div class="w-64 p-4" x-h-popover-content>Popover content</div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-popover.auto>
  <button x-h-button x-h-popover-trigger>Popover</button>
  <div class="w-64 p-4" x-h-popover-content>Popover content</div>
</div>
```

### Popover

<br />

<ClientOnly>
<component-container>
<div x-h-popover="open" x-data="{ open: false }">
  <button x-h-button x-h-popover-trigger x-on:click="open = !open">Popover</button>
  <div class="w-64 p-4" x-h-popover-content>Popover content</div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-popover="open" x-data="{ open: false }">
  <button x-h-button x-h-popover-trigger @click="open = !open">Popover</button>
  <div class="w-64 p-4" x-h-popover-content>Popover content</div>
</div>
```

### Alignment

<br />

<ClientOnly>
<component-container>
<div class="flex flex-col" style="gap:4rem">
  <div class="flex items-center justify-between gap-4">
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Bottom start</button>
      <div class="w-64 p-4" x-h-popover-content data-align="bottom-start">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Bottom</button>
      <div class="w-64 p-4" x-h-popover-content data-align="bottom">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Bottom end</button>
      <div class="w-64 p-4" x-h-popover-content data-align="bottom-end">Popover content</div>
    </div>
  </div>
  <div class="flex items-center justify-between gap-4">
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Right start</button>
      <div class="w-64 p-4" x-h-popover-content data-align="right-start">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Left start</button>
      <div class="w-64 p-4" x-h-popover-content data-align="left-start">Popover content</div>
    </div>
  </div>
  <div class="flex items-center justify-between gap-4">
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Right</button>
      <div class="w-64 p-4" x-h-popover-content data-align="right">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Left</button>
      <div class="w-64 p-4" x-h-popover-content data-align="left">Popover content</div>
    </div>
  </div>
  <div class="flex items-center justify-between gap-4">
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Right end</button>
      <div class="w-64 p-4" x-h-popover-content data-align="right-end">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Left end</button>
      <div class="w-64 p-4" x-h-popover-content data-align="left-end">Popover content</div>
    </div>
  </div>
  <div class="flex items-center justify-between gap-4">
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Top start</button>
      <div class="w-64 p-4" x-h-popover-content data-align="top-start">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Top</button>
      <div class="w-64 p-4" x-h-popover-content data-align="top">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Top end</button>
      <div class="w-64 p-4" x-h-popover-content data-align="top-end">Popover content</div>
    </div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between gap-4">
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Bottom start</button>
      <div class="w-64 p-4" x-h-popover-content data-align="bottom-start">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Bottom</button>
      <div class="w-64 p-4" x-h-popover-content data-align="bottom">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Bottom end</button>
      <div class="w-64 p-4" x-h-popover-content data-align="bottom-end">Popover content</div>
    </div>
  </div>
  <div class="flex items-center justify-between gap-4">
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Right start</button>
      <div class="w-64 p-4" x-h-popover-content data-align="right-start">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Left start</button>
      <div class="w-64 p-4" x-h-popover-content data-align="left-start">Popover content</div>
    </div>
  </div>
  <div class="flex items-center justify-between gap-4">
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Right</button>
      <div class="w-64 p-4" x-h-popover-content data-align="right">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Left</button>
      <div class="w-64 p-4" x-h-popover-content data-align="left">Popover content</div>
    </div>
  </div>
  <div class="flex items-center justify-between gap-4">
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Right end</button>
      <div class="w-64 p-4" x-h-popover-content data-align="right-end">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Left end</button>
      <div class="w-64 p-4" x-h-popover-content data-align="left-end">Popover content</div>
    </div>
  </div>
  <div class="flex items-center justify-between gap-4">
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Top start</button>
      <div class="w-64 p-4" x-h-popover-content data-align="top-start">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Top</button>
      <div class="w-64 p-4" x-h-popover-content data-align="top">Popover content</div>
    </div>
    <div x-h-popover.auto>
      <button x-h-button x-h-popover-trigger>Top end</button>
      <div class="w-64 p-4" x-h-popover-content data-align="top-end">Popover content</div>
    </div>
  </div>
</div>
```
