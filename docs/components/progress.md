# Progress

The progress component informs the user about an ongoing operation.

## API Reference

### Component attubute(s)

```
x-h-progress
```

### Attributes

| Attribute | Type   | Required | Description                   |
| --------- | ------ | -------- | ----------------------------- |
| `self`    | number | true     | Sets the progress. Used as %. |

## Examples

<ClientOnly>
<component-container data-class="flex flex-col items-center">
<div x-h-progress="40"></div>
</component-container>
</ClientOnly>

```html
<div x-h-progress="40"></div>
```
