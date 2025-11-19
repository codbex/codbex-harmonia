# Installation

There are 2 ways to include Harmonia UI into your project:

- Including it from a `<script>` tag
- Importing it as a module

::: info
As a prerequsite, you must have Alpine.js already installed.
:::

## From a script tag

### From CDN

```html
<script src="https://unpkg.com/@codbex/harmonia@<version>/dist/harmonia.min.js"></script>
```

### From npm package

```bash
npm install @codbex/harmonia
```

```html
<script src="node_modules/@codbex/harmonia/dist/harmonia.min.js"></script>
```

## As a module

### Manually initialize component(s)

```js
import Alpine from 'alpinejs';
import { Card, Button } from './node_modules/@codbex/harmonia/dist/harmonia.esm.js';

Alpine.plugin(Card);
Alpine.plugin(Button);

Alpine.start();
```

### Automatically initialize all components

```js
import Alpine from 'alpinejs';
import Harmonia from './node_modules/@codbex/harmonia/dist/harmonia.esm.js';

Harmonia.init(Alpine.plugin);

Alpine.start();
```
