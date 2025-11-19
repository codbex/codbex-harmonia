# Tooltip

The tooltip (aka hint) is a small pop-up that displays extra information about an element on hover.

## API Reference

### Component attubute(s)

```
x-h-tooltip
x-h-tooltip-trigger
x-h-tooltip-content
```

## Examples

<ClientOnly>
<component-container data-class="flex items-center">
<div x-h-tooltip>
  <button x-h-button x-h-tooltip-trigger>Button</button>
  <div x-h-tooltip-content>
    Buttons are clickable
    <div x-h-tag-group>
      <div x-h-tag>Ctrl</div>
      <span>+</span>
      <div x-h-tag>B</div>
    </div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-tooltip>
  <button x-h-button x-h-tooltip-trigger>Button</button>
  <div x-h-tooltip-content>
    Buttons are clickable
    <div x-h-tag-group>
      <div x-h-tag>Ctrl</div>
      <span>+</span>
      <div x-h-tag>B</div>
    </div>
  </div>
</div>
```
