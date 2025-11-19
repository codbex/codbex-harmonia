# Tag

Tags are small items of information. They can also be used to indicate a keyboard shortcut.

## API Reference

### Component attubute(s)

```
x-h-tag
x-h-tag-group
```

## Examples

<ClientOnly>
<component-container data-class="flex items-center gap-3 justify-center">
<div x-h-tag-group>
  <div x-h-tag>⌘</div>
  <div x-h-tag>⇧</div>
  <div x-h-tag>⌥</div>
  <div x-h-tag>⌃</div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tag-group>
  <div x-h-tag>⌘</div>
  <div x-h-tag>⇧</div>
  <div x-h-tag>⌥</div>
  <div x-h-tag>⌃</div>
</div>
```

<ClientOnly>
<component-container data-class="flex items-center gap-3 justify-center">
<div x-h-tag-group>
  <div x-h-tag>Ctrl</div>
  <span>+</span>
  <div x-h-tag>B</div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tag-group>
  <div x-h-tag>Ctrl</div>
  <span>+</span>
  <div x-h-tag>B</div>
</div>
```

<ClientOnly>
<component-container data-class="flex items-center gap-3 justify-center">
<div x-h-tag-group>
  <div x-h-tag>Historical</div>
  <div x-h-tag>Adventure</div>
  <div x-h-tag>Psychological</div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tag-group>
  <div x-h-tag>Historical</div>
  <div x-h-tag>Adventure</div>
  <div x-h-tag>Psychological</div>
</div>
```

<ClientOnly>
<component-container data-class="flex items-center gap-3 justify-center">
<button x-h-button data-variant="outline">
  Cancel
  <div x-h-tag>Esc</div>
</button>
</component-container>
</ClientOnly>

```html
<button x-h-button data-variant="outline">
  Cancel
  <div x-h-tag>Esc</div>
</button>
```
