# Width & Height

## Class names

The width class names start with `w`.

| Class    | Description                               |
| -------- | ----------------------------------------- |
| w-full   | 100% width.                               |
| w-screen | Makes the width equal to the screen size. |
| w-1/2    | 50% width.                                |
| w-1/3    | 33% width.                                |
| w-1/4    | 25% width.                                |
| w-1/5    | 20% width.                                |
| w-2/3    | 66% width.                                |
| w-2/5    | 40% width.                                |
| w-3/4    | 75% width.                                |
| w-3/5    | 60% width.                                |
| w-4/5    | 80% width.                                |

The height class names start with `h`.

| Class    | Description                               |
| -------- | ----------------------------------------- |
| h-full   | 100% height.                              |
| h-screen | Makes the width equal to the screen size. |
| h-1/2    | 50% height.                               |

In case both width and height have to be applied and they must be the same, the `size-*` class can be used with a range from 2 to 12.

| Class       | Description                 |
| ----------- | --------------------------- |
| size-`4-12` | Width and height.           |
| tile-xs     | Extra small size container. |
| tile-sm     | Small size container.       |
| tile-md     | Medium size container.      |
| tile-lg     | Large size container.       |

## Width examples

### Screen

<br />

<ClientOnly>
<component-container data-class="!p-0 overflow-scroll">
<div class="bg-primary text-primary-foreground flex justify-between w-screen">
  <span>Start</span>
  <span>End</span>
</div>
</component-container>
</ClientOnly>

```html
<div class="bg-primary text-primary-foreground flex justify-between w-screen">
  <span>Start</span>
  <span>End</span>
</div>
```

::: tip
You may have to horizontally scroll the container to see the "End" label.
:::

### Full

<br />

<ClientOnly>
<component-container data-class="!p-0">
<div class="bg-primary text-primary-foreground w-full">Full width</div>
</component-container>
</ClientOnly>

```html
<div class="bg-primary text-primary-foreground w-full">Full width</div>
```

### Fractions

<br />

<ClientOnly>
<component-container data-class="flex flex-col gap-2">
<div class="flex gap-2">
  <div class="bg-primary text-primary-foreground w-1/2">w-1/2</div>
  <div class="bg-primary text-primary-foreground w-1/2">w-1/2</div>
</div>
<div class="flex gap-2">
  <div class="bg-primary text-primary-foreground w-2/5">w-2/5</div>
  <div class="bg-primary text-primary-foreground w-3/5">w-3/5</div>
</div>
<div class="flex gap-2">
  <div class="bg-primary text-primary-foreground w-1/3">w-1/3</div>
  <div class="bg-primary text-primary-foreground w-2/3">w-2/3</div>
</div>
<div class="flex gap-2">
  <div class="bg-primary text-primary-foreground w-1/4">w-1/4</div>
  <div class="bg-primary text-primary-foreground w-3/4">w-3/4</div>
</div>
<div class="flex gap-2">
  <div class="bg-primary text-primary-foreground w-1/5">w-1/5</div>
  <div class="bg-primary text-primary-foreground w-4/5">w-4/5</div>
</div>
</component-container>
</ClientOnly>

```html
<div class="flex gap-2">
  <div class="bg-primary text-primary-foreground w-1/2">w-1/2</div>
  <div class="bg-primary text-primary-foreground w-1/2">w-1/2</div>
</div>
<div class="flex gap-2">
  <div class="bg-primary text-primary-foreground w-2/5">w-2/5</div>
  <div class="bg-primary text-primary-foreground w-3/5">w-3/5</div>
</div>
<div class="flex gap-2">
  <div class="bg-primary text-primary-foreground w-1/3">w-1/3</div>
  <div class="bg-primary text-primary-foreground w-2/3">w-2/3</div>
</div>
<div class="flex gap-2">
  <div class="bg-primary text-primary-foreground w-1/4">w-1/4</div>
  <div class="bg-primary text-primary-foreground w-3/4">w-3/4</div>
</div>
<div class="flex gap-2">
  <div class="bg-primary text-primary-foreground w-1/5">w-1/5</div>
  <div class="bg-primary text-primary-foreground w-4/5">w-4/5</div>
</div>
```

## Height examples

### Full

<br />

<ClientOnly>
<component-container data-class="!p-0">
<div class="bg-primary text-primary-foreground h-full">
Full height
</div>
</component-container>
</ClientOnly>

```html
<div class="bg-primary text-primary-foreground h-full">Full height</div>
```

### Screen

<br />

<ClientOnly>
<component-container data-class="!p-0 overfloh-scroll">
<div class="bg-primary text-primary-foreground flex justify-between h-screen">
<span>Start</span>
<span>End</span>
</div>
</component-container>
</ClientOnly>

```html
<div class="bg-primary text-primary-foreground h-screen">Matches screen height</div>
```

### Half

<br />

<ClientOnly>
<component-container data-class="!p-0 h-12" s>
<div class="bg-primary text-primary-foreground h-1/2">50% height</div>
</component-container>
</ClientOnly>

```html
<div class="bg-primary text-primary-foreground h-1/2">50% height</div>
```

## Size examples

<br />

<ClientOnly>
<component-container>
<div class="bg-primary text-primary-foreground size-8 text-xs">Size 8</div>
</component-container>
</ClientOnly>

```html
<div class="bg-primary text-primary-foreground size-8 text-xs">Size 8</div>
```

<ClientOnly>
<component-container>
<div class="bg-primary text-primary-foreground size-12">Size 12</div>
</component-container>
</ClientOnly>

```html
<div class="bg-primary text-primary-foreground size-12">Size 12</div>
```

<ClientOnly>
<component-container data-class="flex flex-col gap-3">
<div class="bg-primary text-primary-foreground tile-xs">Size Extra Small</div>
<div class="bg-primary text-primary-foreground tile-sm">Size Small</div>
<div class="bg-primary text-primary-foreground tile-md">Size Medium</div>
<div class="bg-primary text-primary-foreground tile-lg">Size Large</div>
</component-container>
</ClientOnly>

```html
<div class="bg-primary text-primary-foreground tile-xs">Size Extra Small</div>
<div class="bg-primary text-primary-foreground tile-sm">Size Small</div>
<div class="bg-primary text-primary-foreground tile-md">Size Medium</div>
<div class="bg-primary text-primary-foreground tile-lg">Size Large</div>
```
