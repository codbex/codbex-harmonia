# Switch

The switch lets the user set a binary value such as “true/false”. Functionally, it's the same as the checkbox component.

## API Reference

### Component attubute(s)

```
x-h-switch
```

### Attributes

| Attribute | Type               | Required | Description                  |
| --------- | ------------------ | -------- | ---------------------------- |
| data-size | `default`<br/>`sm` | false    | Sets the size of the switch. |

## Examples

<ClientOnly>
<component-container data-js="/components/init-icons.js" data-class="flex items-center gap-3 justify-center">
<input x-h-switch type="checkbox" id="sw" />
<label x-h-label for="sw">Just switch</label>
</component-container>
</ClientOnly>

```html
<div class="flex items-center gap-3">
  <input x-h-switch type="checkbox" id="sw" />
  <label x-h-label for="sw">Just switch</label>
</div>
```

<ClientOnly>
<component-container data-js="/components/init-icons.js" data-class="flex items-center gap-3 justify-center">
<input x-h-switch data-size="sm" type="checkbox" id="sws" />
<label x-h-label for="sws">Just switch</label>
</component-container>
</ClientOnly>

```html
<div class="flex items-center gap-3">
  <input x-h-switch data-size="sm" type="checkbox" id="sws" />
  <label x-h-label for="sws">Just switch</label>
</div>
```
