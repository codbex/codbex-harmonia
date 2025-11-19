# Skeleton

Placeholder component while content is loading.

## API Reference

### Component attubute(s)

```
x-h-skeleton
```

### Modifiers

| Modifier | Description                                             |
| -------- | ------------------------------------------------------- |
| control  | Takes the shape of a control (like inputs and buttons). |
| card     | Takes the shape of a card or tile.                      |
| avatar   | Takes the shape of an avatar component.                 |

## Examples

<ClientOnly>
<component-container>
<div class="flex flex-col gap-2">
  <div x-h-skeleton.avatar></div>
  <div x-h-skeleton.card class="h-12 w-1/3"></div>
  <div x-h-skeleton.control class="h-9 w-1/2"></div>
  <div x-h-skeleton class="h-4 w-full"></div>
</div>
</component-container>
</ClientOnly>

```html
<div class="flex flex-col gap-2">
  <div x-h-skeleton.avatar></div>
  <div x-h-skeleton.card class="h-12 w-1/3"></div>
  <div x-h-skeleton.control class="h-9 w-1/2"></div>
  <div x-h-skeleton class="h-4 w-full"></div>
</div>
```
