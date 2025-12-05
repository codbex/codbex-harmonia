# Icon

The icon component is a simple SVG loader. It can be used for small icons or full svg images. By default, it applies the `fill-current` class to the svg.

## API Reference

### Component attubute(s)

```
x-h-icon
```

### Attributes

| Attribute | Type                     | Required | Description                                                                                                                                                                                                                                                                                                                                                                     |
| --------- | ------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data-link | url                      | false    | URL to the svg icon.                                                                                                                                                                                                                                                                                                                                                            |
| role      | `ing`<br/>`presentation` | true     | The role of the icon. This is required as it affects the accessibility.<br />The `presentation` role excludes the icon from being visible to assistive technologies.<br />When using the `img` role, either `aria-label` or `aria-labelledby` attribute must also me provided. If not, assistive technologies will have trouble conveying to the user what the icon represents. |

## Examples

### SVG image

<br />

<ClientOnly>
<component-container data-class="!p-1 hbox justify-center">
<svg x-h-icon data-link="/harmonia/logo/harmonia.svg" role="img" aria-label="Harmonia UI logo"></svg>
</component-container>
</ClientOnly>

<!-- prettier-ignore -->
```html
<svg x-h-icon data-link="/harmonia/logo/harmonia.svg" role="img" aria-label="Harmonia UI logo"></svg>
```

### SVG icon

<br />

<ClientOnly>
<component-container>
<svg x-h-icon class="size-8" data-link="/harmonia/logo/harmonia-symbolic.svg" role="presentation"></svg>
</component-container>
</ClientOnly>

<!-- prettier-ignore -->
```html
<svg x-h-icon class="size-8" data-link="/harmonia/logo/harmonia-symbolic.svg" role="presentation"></svg>
```

### SVG icon with custom fill color

<br />

<ClientOnly>
<component-container data-class="flex gap-3">
<svg x-h-icon class="size-8 fill-positive" data-link="/harmonia/logo/harmonia-symbolic.svg" role="presentation"></svg>
<svg x-h-icon class="size-8 fill-negative" data-link="/harmonia/logo/harmonia-symbolic.svg" role="presentation"></svg>
<svg x-h-icon class="size-8 fill-warning" data-link="/harmonia/logo/harmonia-symbolic.svg" role="presentation"></svg>
<svg x-h-icon class="size-8 fill-information" data-link="/harmonia/logo/harmonia-symbolic.svg" role="presentation"></svg>
</component-container>
</ClientOnly>

<!-- prettier-ignore -->
```html
<svg x-h-icon class="size-8 fill-positive" data-link="/harmonia/logo/harmonia-symbolic.svg" role="presentation"></svg>
<svg x-h-icon class="size-8 fill-negative" data-link="/harmonia/logo/harmonia-symbolic.svg" role="presentation"></svg>
<svg x-h-icon class="size-8 fill-warning" data-link="/harmonia/logo/harmonia-symbolic.svg" role="presentation"></svg>
<svg x-h-icon class="size-8 fill-information" data-link="/harmonia/logo/harmonia-symbolic.svg" role="presentation"></svg>
```
