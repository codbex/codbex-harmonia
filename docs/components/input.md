# Input

Displays an input field. It should be paired with a label.

## API Reference

### Component attubute(s)

```
x-h-input
```

### Attributes

| Attribute | Values        | Required | Description                    |
| --------- | ------------- | -------- | ------------------------------ |
| data-size | `xs`<br/>`sm` | false    | Changes the size of the input. |

### Modifiers

| Modifier | Description                                  |
| -------- | -------------------------------------------- |
| group    | Used when the input is inside an input group |

## Text Input

<ClientOnly>
<component-container data-class="flex flex-col gap-4">
<input x-h-input type="text" placeholder="Search..." />
<input x-h-input data-size="sm" type="text" placeholder="Search..." />
<input x-h-input data-size="xs" type="text" placeholder="Search..." />
</component-container>
</ClientOnly>

```html
<input x-h-input type="text" placeholder="Search..." />
<input x-h-input data-size="sm" type="text" placeholder="Search..." />
<input x-h-input data-size="xs" type="text" placeholder="Search..." />
```

## Color Input

<ClientOnly>
<component-container>
<input x-h-input type="color" value="#26a269" />
</component-container>
</ClientOnly>

```html
<input x-h-input type="color" value="#26a269" />
```

## Invalid Input

<ClientOnly>
<component-container>
<input x-h-input type="text" aria-invalid="true" />
</component-container>
</ClientOnly>

```html
<input x-h-input type="text" aria-invalid="true" />
```
