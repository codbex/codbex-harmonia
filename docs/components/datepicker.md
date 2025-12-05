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

See [Calendar](/components/calendar)

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
