# Date Picker

The datepicker allows the user to enter a date either through text input, or by choosing a date from a calendar popover.

## API Reference

### Component attubute(s)

```
x-h-date-picker
x-h-date-picker-trigger
x-h-calendar
```

### Attributes

#### x-h-calendar

| Attribute            | Values                                                                                                                                                                        | Required | Description                                                          |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------- |
| data-aria-prev-year  | string                                                                                                                                                                        | false    | Sets the `aria-label` attribute value for the previous year button.  |
| data-aria-prev-month | string                                                                                                                                                                        | false    | Sets the `aria-label` attribute value for the previous month button. |
| data-aria-next-month | string                                                                                                                                                                        | false    | Sets the `aria-label` attribute value for the next month button.     |
| data-aria-next-year  | string                                                                                                                                                                        | false    | Sets the `aria-label` attribute value for the next year button.      |
| data-align           | `bottom-start`<br/>`bottom`<br/>`bottom-end`<br/>`right-start`<br/>`right`<br/>`right-end`<br/>`left-start`<br/>`left`<br/>`left-end`<br/>`top-start`<br/>`top`<br/>`top-end` | false    | Aligns the calendar popover relative to the trigger.                 |

## Examples

<ClientOnly>
<component-container>
<div x-h-date-picker x-data="{ date: new Date().toISOString() }">
  <input type="text" id="date-input-1" />
  <button x-h-button x-h-date-picker-trigger aria-label="Choose date"></button>
  <div x-h-calendar x-model="date"></div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-date-picker x-data="{ date: new Date().toISOString() }">
  <input type="text" id="date-input-1" />
  <button x-h-button x-h-date-picker-trigger aria-label="Choose date"></button>
  <div x-h-calendar x-model="date"></div>
</div>
```
