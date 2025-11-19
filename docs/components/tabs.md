# Tabs

A set of sections of content that are displayed one at a time.

## API Reference

### Component attubute(s)

```
x-h-tabs
x-h-tab-bar
x-h-tab-list
x-h-tab
x-h-tab-action
x-h-tab-list-actions
x-h-tabs-content
```

### Attributes

#### x-h-tabs

| Attribute        | Type                         | Required | Description                             |
| ---------------- | ---------------------------- | -------- | --------------------------------------- |
| data-orientation | `horizontal`<br />`vertical` | false    | Changes the orientation of the tab list |

#### x-h-tab-bar

| Attribute  | Type                  | Required | Description            |
| ---------- | --------------------- | -------- | ---------------------- |
| data-style | `float`<br />`inline` | false    | Style of the tab list. |

#### x-h-tabs-content

| Attribute | Type    | Required | Description               |
| --------- | ------- | -------- | ------------------------- |
| hidden    | boolean | false    | Show/hide the tab content |

### Modifiers

#### x-h-tab-list-actions

| Modifier | Description                                                     |
| -------- | --------------------------------------------------------------- |
| end      | Tab action will be placed at the end of the tab list container. |

## Examples

### Horizontal inline tabs

<br />

<ClientOnly>
<component-container data-html="/components/tabs/horizontal-inline.html" data-class="!p-0">
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="horizontal" x-data="{ activeTabId: 'hit1' }">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="hit1" aria-controls="hit1c" :aria-selected="activeTabId === 'hit1'" @click="activeTabId = 'hit1'">Tab 1</button>
      <button x-h-tab id="hit2" aria-controls="hit2c" :aria-selected="activeTabId === 'hit2'" @click="activeTabId = 'hit2'">Tab 2</button>
      <button x-h-tab id="hit3" aria-controls="hit3c" :aria-selected="activeTabId === 'hit3'" @click="activeTabId = 'hit3'">Tab 3</button>
    </div>
  </div>
  <div x-h-tabs-content id="hit1c" aria-labelledby="hit1" :hidden="activeTabId !== 'hit1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
  <div x-h-tabs-content id="hit2c" aria-labelledby="hit2" :hidden="activeTabId !== 'hit2'">
    <div class="p-2">Tab 2 Content</div>
  </div>
  <div x-h-tabs-content id="hit3c" aria-labelledby="hit3" :hidden="activeTabId !== 'hit3'">
    <div class="p-2">Tab 3 Content</div>
  </div>
</div>
```

### Horizontal inline tabs with icon and close button

<br />

<ClientOnly>
<component-container data-html="/components/tabs/horizontal-inline-button.html" data-class="!p-0">
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="horizontal" x-data="{ activeTabId: 'hib1' }">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="hib1" aria-controls="hib1c" :aria-selected="activeTabId === 'hib1'" @click="activeTabId = 'hib1'">
        <i role="img" data-lucide="file"></i>
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
      <button x-h-tab id="hib2" aria-controls="hib2c" :aria-selected="activeTabId === 'hib2'" @click="activeTabId = 'hib2'">
        <i role="img" data-lucide="file"></i>
        Tab 2
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
      <button x-h-tab id="hib3" aria-controls="hib3c" :aria-selected="activeTabId === 'hib3'" @click="activeTabId = 'hib3'">
        <i role="img" data-lucide="file"></i>
        Tab 3
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="hib1c" aria-labelledby="hib1" :hidden="activeTabId !== 'hib1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
  <div x-h-tabs-content id="hib2c" aria-labelledby="hib2" :hidden="activeTabId !== 'hib2'">
    <div class="p-2">Tab 2 Content</div>
  </div>
  <div x-h-tabs-content id="hib3c" aria-labelledby="hib3" :hidden="activeTabId !== 'hib3'">
    <div class="p-2">Tab 3 Content</div>
  </div>
</div>
```

### Horizontal inline tabs with actions

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js">
<div x-h-tabs data-orientation="horizontal">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="hitwa1" aria-controls="hitwa1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions>
      <button x-h-button data-size="icon-tab" data-variant="transparent" aria-label="add tab button">
        <i role="img" data-lucide="plus"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="hitwa1c" aria-labelledby="hitwa1" :hidden="activeTabId !== 'hitwa1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="horizontal">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="hitwa1" aria-controls="hitwa1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions>
      <button x-h-button data-size="icon-tab" data-variant="transparent" aria-label="add tab button">
        <i role="img" data-lucide="plus"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="hitwa1c" aria-labelledby="hitwa1" :hidden="activeTabId !== 'hitwa1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
```

### Horizontal inline tabs with actions (end)

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js">
<div x-h-tabs data-orientation="horizontal">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="hitwae1" aria-controls="hitwae1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions.end>
      <button x-h-button data-size="icon-tab" data-variant="outline" aria-label="menu button">
        <i role="img" data-lucide="ellipsis"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="hitwae1c" aria-labelledby="hitwae1" :hidden="activeTabId !== 'hitwae1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="horizontal">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="hitwae1" aria-controls="hitwae1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions.end>
      <button x-h-button data-size="icon-tab" data-variant="outline" aria-label="menu button">
        <i role="img" data-lucide="ellipsis"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="hitwae1c" aria-labelledby="hitwae1" :hidden="activeTabId !== 'hitwae1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
```

### Horizontal float tabs

<br />

<ClientOnly>
<component-container data-html="/components/tabs/horizontal.html">
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="horizontal" x-data="{ activeTabId: 'ht1' }">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="ht1" aria-controls="ht1c" :aria-selected="activeTabId === 'ht1'" @click="activeTabId = 'ht1'">Tab 1</button>
      <button x-h-tab id="ht2" aria-controls="ht2c" :aria-selected="activeTabId === 'ht2'" @click="activeTabId = 'ht2'">Tab 2</button>
      <button x-h-tab id="ht3" aria-controls="ht3c" :aria-selected="activeTabId === 'ht3'" @click="activeTabId = 'ht3'">Tab 3</button>
    </div>
  </div>
  <div x-h-tabs-content id="ht1c" aria-labelledby="ht1" :hidden="activeTabId !== 'ht1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
  <div x-h-tabs-content id="ht2c" aria-labelledby="ht2" :hidden="activeTabId !== 'ht2'">
    <div class="p-2">Tab 2 Content</div>
  </div>
  <div x-h-tabs-content id="ht3c" aria-labelledby="ht3" :hidden="activeTabId !== 'ht3'">
    <div class="p-2">Tab 3 Content</div>
  </div>
</div>
```

### Horizontal float tabs with icon and close button

<br />

<ClientOnly>
<component-container data-html="/components/tabs/horizontal-button.html">
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="horizontal" x-data="{ activeTabId: 'hbt1' }">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="hbt1" aria-controls="hbt1c" :aria-selected="activeTabId === 'hbt1'" @click="activeTabId = 'hbt1'">
        <i role="img" data-lucide="file"></i>
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
      <button x-h-tab id="hbt2" aria-controls="hbt2c" :aria-selected="activeTabId === 'hbt2'" @click="activeTabId = 'hbt2'">
        <i role="img" data-lucide="file"></i>
        Tab 2
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
      <button x-h-tab id="hbt3" aria-controls="hbt3c" :aria-selected="activeTabId === 'hbt3'" @click="activeTabId = 'hbt3'">
        <i role="img" data-lucide="file"></i>
        Tab 3
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="hbt1c" aria-labelledby="hbt1" :hidden="activeTabId !== 'hbt1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
  <div x-h-tabs-content id="hbt2c" aria-labelledby="hbt2" :hidden="activeTabId !== 'hbt2'">
    <div class="p-2">Tab 2 Content</div>
  </div>
  <div x-h-tabs-content id="hbt3c" aria-labelledby="hbt3" :hidden="activeTabId !== 'hbt3'">
    <div class="p-2">Tab 3 Content</div>
  </div>
</div>
```

### Horizontal float tabs with actions

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js">
<div x-h-tabs data-orientation="horizontal">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="hftwa1" aria-controls="hftwa1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions>
      <button x-h-button data-size="icon-tab" data-variant="transparent" aria-label="add tab button">
        <i role="img" data-lucide="plus"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="hftwa1c" aria-labelledby="hftwa1" :hidden="activeTabId !== 'hftwa1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="horizontal">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="hftwa1" aria-controls="hftwa1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions>
      <button x-h-button data-size="icon-tab" data-variant="transparent" aria-label="add tab button">
        <i role="img" data-lucide="plus"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="hftwa1c" aria-labelledby="hftwa1" :hidden="activeTabId !== 'hftwa1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
```

### Horizontal float tabs with actions (end)

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js">
<div x-h-tabs data-orientation="horizontal">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="hftwae1" aria-controls="hftwae1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions.end>
      <button x-h-button data-size="icon-tab" data-variant="outline" aria-label="menu button">
        <i role="img" data-lucide="ellipsis"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="hftwae1c" aria-labelledby="hftwae1" :hidden="activeTabId !== 'hftwae1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="horizontal">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="hftwae1" aria-controls="hftwae1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions.end>
      <button x-h-button data-size="icon-tab" data-variant="outline" aria-label="menu button">
        <i role="img" data-lucide="ellipsis"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="hftwae1c" aria-labelledby="hftwae1" :hidden="activeTabId !== 'hftwae1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
```

### Vertical inline tabs

<br />

<ClientOnly>
<component-container data-html="/components/tabs/vertical-inline.html" data-class="!p-0">
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="vertical" x-data="{ activeTabId: 'vit1' }">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="vit1" aria-controls="vit1c" :aria-selected="activeTabId === 'vit1'" @click="activeTabId = 'vit1'">Tab 1</button>
      <button x-h-tab id="vit2" aria-controls="vit2c" :aria-selected="activeTabId === 'vit2'" @click="activeTabId = 'vit2'">Tab 2</button>
      <button x-h-tab id="vit3" aria-controls="vit3c" :aria-selected="activeTabId === 'vit3'" @click="activeTabId = 'vit3'">Tab 3</button>
    </div>
  </div>
  <div x-h-tabs-content id="vit1c" aria-labelledby="vit1" :hidden="activeTabId !== 'vit1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
  <div x-h-tabs-content id="vit2c" aria-labelledby="vit2" :hidden="activeTabId !== 'vit2'">
    <div class="p-2">Tab 2 Content</div>
  </div>
  <div x-h-tabs-content id="vit3c" aria-labelledby="vit3" :hidden="activeTabId !== 'vit3'">
    <div class="p-2">Tab 3 Content</div>
  </div>
</div>
```

### Vertical inline tabs with icon and close button

<br />

<ClientOnly>
<component-container data-html="/components/tabs/vertical-inline-button.html" data-class="!p-0">
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="vertical" x-data="{ activeTabId: 'vib1' }">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="vib1" aria-controls="vib1c" :aria-selected="activeTabId === 'vib1'" @click="activeTabId = 'vib1'">
        <i role="img" data-lucide="file"></i>
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
      <button x-h-tab id="vib2" aria-controls="vib2c" :aria-selected="activeTabId === 'vib2'" @click="activeTabId = 'vib2'">
        <i role="img" data-lucide="file"></i>
        Tab 2
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
      <button x-h-tab id="vib3" aria-controls="vib3c" :aria-selected="activeTabId === 'vib3'" @click="activeTabId = 'vib3'">
        <i role="img" data-lucide="file"></i>
        Tab 3
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="vib1c" aria-labelledby="vib1" :hidden="activeTabId !== 'vib1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
  <div x-h-tabs-content id="vib2c" aria-labelledby="vib2" :hidden="activeTabId !== 'vib2'">
    <div class="p-2">Tab 2 Content</div>
  </div>
  <div x-h-tabs-content id="vib3c" aria-labelledby="vib3" :hidden="activeTabId !== 'vib3'">
    <div class="p-2">Tab 3 Content</div>
  </div>
</div>
```

### Vertical inline tabs with actions

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js">
<div x-h-tabs data-orientation="vertical" style="height:8rem">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="vitwa1" aria-controls="vitwa1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions>
      <button x-h-button data-size="icon-tab" data-variant="transparent" aria-label="add tab button">
        <i role="img" data-lucide="plus"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="vitwa1c" aria-labelledby="vitwa1" :hidden="activeTabId !== 'vitwa1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="vertical" style="height:8rem">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="vitwa1" aria-controls="vitwa1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions>
      <button x-h-button data-size="icon-tab" data-variant="transparent" aria-label="add tab button">
        <i role="img" data-lucide="plus"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="vitwa1c" aria-labelledby="vitwa1" :hidden="activeTabId !== 'vitwa1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
```

### Vertical inline tabs with actions (end)

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js">
<div x-h-tabs data-orientation="vertical" style="height:8rem">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="vitwae1" aria-controls="vitwae1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions.end>
      <button x-h-button data-size="icon-tab" data-variant="outline" aria-label="menu button">
        <i role="img" data-lucide="ellipsis"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="vitwae1c" aria-labelledby="vitwae1" :hidden="activeTabId !== 'vitwae1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="vertical" style="height:8rem">
  <div x-h-tab-bar data-style="inline">
    <div x-h-tab-list>
      <button x-h-tab id="vitwae1" aria-controls="vitwae1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions.end>
      <button x-h-button data-size="icon-tab" data-variant="outline" aria-label="menu button">
        <i role="img" data-lucide="ellipsis"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="vitwae1c" aria-labelledby="vitwae1" :hidden="activeTabId !== 'vitwae1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
```

### Vertical float tabs

<br />

<ClientOnly>
<component-container data-html="/components/tabs/vertical.html">
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="vertical" x-data="{ activeTabId: 'vt1' }">
  <div x-h-tab-bar>
    <div x-h-tab-list>
      <button x-h-tab id="vt1" aria-controls="vt1c" :aria-selected="activeTabId === 'vt1'" @click="activeTabId = 'vt1'">Tab 1</button>
      <button x-h-tab id="vt2" aria-controls="vt2c" :aria-selected="activeTabId === 'vt2'" @click="activeTabId = 'vt2'">Tab 2</button>
      <button x-h-tab id="vt3" aria-controls="vt3c" :aria-selected="activeTabId === 'vt3'" @click="activeTabId = 'vt3'">Tab 3</button>
    </div>
  </div>
  <div x-h-tabs-content id="vt1c" aria-labelledby="vt1" :hidden="activeTabId !== 'vt1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
  <div x-h-tabs-content id="vt2c" aria-labelledby="vt2" :hidden="activeTabId !== 'vt2'">
    <div class="p-2">Tab 2 Content</div>
  </div>
  <div x-h-tabs-content id="vt3c" aria-labelledby="vt3" :hidden="activeTabId !== 'vt3'">
    <div class="p-2">Tab 3 Content</div>
  </div>
</div>
```

### Vertical float tabs with icon and close button

<br />

<ClientOnly>
<component-container data-html="/components/tabs/vertical-button.html">
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="vertical" x-data="{ activeTabId: 'vbt1' }">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="vbt1" aria-controls="vbt1c" :aria-selected="activeTabId === 'vbt1'" @click="activeTabId = 'vbt1'">
        <i role="img" data-lucide="file"></i>
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
      <button x-h-tab id="vbt2" aria-controls="vbt2c" :aria-selected="activeTabId === 'vbt2'" @click="activeTabId = 'vbt2'">
        <i role="img" data-lucide="file"></i>
        Tab 2
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
      <button x-h-tab id="vbt3" aria-controls="vbt3c" :aria-selected="activeTabId === 'vbt3'" @click="activeTabId = 'vbt3'">
        <i role="img" data-lucide="file"></i>
        Tab 3
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="vbt1c" aria-labelledby="vbt1" :hidden="activeTabId !== 'vbt1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
  <div x-h-tabs-content id="vbt2c" aria-labelledby="vbt2" :hidden="activeTabId !== 'vbt2'">
    <div class="p-2">Tab 2 Content</div>
  </div>
  <div x-h-tabs-content id="vbt3c" aria-labelledby="vbt3" :hidden="activeTabId !== 'vbt3'">
    <div class="p-2">Tab 3 Content</div>
  </div>
</div>
```

### Vertical float tabs with actions

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js">
<div x-h-tabs data-orientation="vertical" style="height:8rem">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="vftwa1" aria-controls="vftwa1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions>
      <button x-h-button data-size="icon-tab" data-variant="transparent" aria-label="add tab button">
        <i role="img" data-lucide="plus"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="vftwa1c" aria-labelledby="vftwa1" :hidden="activeTabId !== 'vftwa1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="vertical" style="height:8rem">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="vftwa1" aria-controls="vftwa1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions>
      <button x-h-button data-size="icon-tab" data-variant="transparent" aria-label="add tab button">
        <i role="img" data-lucide="plus"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="vftwa1c" aria-labelledby="vftwa1" :hidden="activeTabId !== 'vftwa1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
```

### Vertical float tabs with actions (end)

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js">
<div x-h-tabs data-orientation="vertical" style="height:8rem">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="vftwae1" aria-controls="vftwae1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions.end>
      <button x-h-button data-size="icon-tab" data-variant="outline" aria-label="menu button">
        <i role="img" data-lucide="ellipsis"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="vftwae1c" aria-labelledby="vftwae1" :hidden="activeTabId !== 'vftwae1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tabs data-orientation="vertical" style="height:8rem">
  <div x-h-tab-bar data-style="float">
    <div x-h-tab-list>
      <button x-h-tab id="vftwae1" aria-controls="vftwae1c" aria-selected="true">
        Tab 1
        <span x-h-tab-action>
          <i role="img" data-lucide="x"></i>
        </span>
      </button>
    </div>
    <div x-h-tab-list-actions.end>
      <button x-h-button data-size="icon-tab" data-variant="outline" aria-label="menu button">
        <i role="img" data-lucide="ellipsis"></i>
      </button>
    </div>
  </div>
  <div x-h-tabs-content id="vftwae1c" aria-labelledby="vftwae1" :hidden="activeTabId !== 'vftwae1'">
    <div class="p-2">Tab 1 Content</div>
  </div>
</div>
```
