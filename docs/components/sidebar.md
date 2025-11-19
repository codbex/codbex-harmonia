# Sidebar

The sidebar is used as a top-level application navigation list.

## API Reference

### Component attubute(s)

```
x-h-sidebar
x-h-sidebar-header
x-h-sidebar-content
x-h-sidebar-group
x-h-sidebar-group-label
x-h-sidebar-group-action
x-h-sidebar-group-content
x-h-sidebar-menu
x-h-sidebar-menu-item
x-h-sidebar-menu-button
x-h-sidebar-menu-action
x-h-sidebar-menu-badge
x-h-sidebar-menu-skeleton
x-h-sidebar-separator
x-h-sidebar-menu-sub
x-h-sidebar-menu-sub-item
x-h-sidebar-menu-sub-button
x-h-sidebar-footer
```

### Attributes

#### x-h-sidebar

| Attribute        | Type   | Required | Description                             |
| ---------------- | ------ | -------- | --------------------------------------- |
| data-collapsible | `icon` | false    | Collapses the sidebar to an icon width. |

#### x-h-sidebar-menu-button

| Attribute   | Type                        | Required | Description                       |
| ----------- | --------------------------- | -------- | --------------------------------- |
| data-active | boolean                     | false    | Sets the menu button as active.   |
| data-size   | `default`<br/>`sm`<br/>`lg` | false    | Sets the size of the menu button. |

#### x-h-sidebar-menu-sub-button

| Attribute   | Type          | Required | Description                           |
| ----------- | ------------- | -------- | ------------------------------------- |
| data-active | boolean       | false    | Sets the menu sub button as active.   |
| data-size   | `sm`<br/>`md` | false    | Sets the size of the menu sub button. |

### Modifiers

#### x-h-sidebar

| Modifier | Description                            |
| -------- | -------------------------------------- |
| floating | Adds border and shadow to the sidebar. |
| right    | Adds border to the left side.          |
| left     | Adds border to the right side.         |

#### x-h-sidebar-group-label

| Modifier | Description                  |
| -------- | ---------------------------- |
| action   | Makes the label interactive. |

#### x-h-sidebar-menu-action

| Modifier | Description                             |
| -------- | --------------------------------------- |
| autohide | The action will be shown only on hover. |

#### x-h-sidebar-menu-skeleton

| Modifier | Description                                                                      |
| -------- | -------------------------------------------------------------------------------- |
| icon     | Adds an icon shape to the skeleton to indicate that the items will have an icon. |

#### x-h-sidebar-menu-sub

| Modifier | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| flat     | Removes all offsets and makes the sub items appear on the same level as the parent. |

## Examples

### Sidebar header and footer

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js" data-class="!p-0">
<div style="height:16rem">
<div x-h-sidebar>
  <div x-h-sidebar-header>
    <div x-h-popover.auto>
      <button x-h-sidebar-menu-button x-h-popover-trigger.chevron>
        <span>Header popover</span>
        <i role="img" data-lucide="chevron-down"></i>
      </button>
      <div class="p-4" x-h-popover-content data-align="bottom-start">Header popover content</div>
    </div>
  </div>
  <div x-h-sidebar-separator></div>
  <div x-h-sidebar-content></div>
  <div x-h-sidebar-separator></div>
  <div x-h-sidebar-footer>
    <button x-h-sidebar-menu-button x-h-menu-trigger.dropdown>
      <span>Footer popover</span>
      <ul x-h-menu aria-label="dropdown" data-align="top-start">
        <li x-h-menu-item>Set yourself as away</li>
        <div x-h-menu-label>Team</div>
        <li x-h-menu-item>Invite users</li>
        <div x-h-menu-separator></div>
        <li x-h-menu-item data-variant="negative">Log out</li>
      </ul>
      <i role="img" data-lucide="chevrons-up-down"></i>
    </button>
  </div>
</div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-sidebar>
  <div x-h-sidebar-header>
    <div x-h-popover.auto>
      <button x-h-sidebar-menu-button x-h-popover-trigger.chevron>
        <span>Header popover</span>
        <i role="img" data-lucide="chevron-down"></i>
      </button>
      <div class="p-4" x-h-popover-content data-align="bottom-start">Header popover content</div>
    </div>
  </div>
  <div x-h-sidebar-separator></div>
  <div x-h-sidebar-content></div>
  <div x-h-sidebar-separator></div>
  <div x-h-sidebar-footer>
    <button x-h-sidebar-menu-button x-h-menu-trigger.dropdown>
      <span>Footer popover</span>
      <ul x-h-menu aria-label="dropdown" data-align="top-start">
        <li x-h-menu-item>Set yourself as away</li>
        <div x-h-menu-label>Team</div>
        <li x-h-menu-item>Invite users</li>
        <div x-h-menu-separator></div>
        <li x-h-menu-item data-variant="negative">Log out</li>
      </ul>
      <i role="img" data-lucide="chevrons-up-down"></i>
    </button>
  </div>
</div>
```

### Sidebar content

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js" data-class="!p-0">
<div style="height:16rem">
<div x-h-sidebar>
  <div x-h-sidebar-content>
    <div x-h-sidebar-group>
      <div x-h-sidebar-group-label>Application</div>
      <div x-h-sidebar-group-content>
        <div x-h-sidebar-menu>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="house"></i>
              Home
            </button>
            <div x-h-sidebar-menu-badge>11</div>
          </div>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="file-text"></i>
              Documents
            </button>
          </div>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="blocks"></i>
              Extensions
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-sidebar>
  <div x-h-sidebar-content>
    <div x-h-sidebar-group>
      <div x-h-sidebar-group-label>Application</div>
      <div x-h-sidebar-group-content>
        <div x-h-sidebar-menu>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="house"></i>
              Home
            </button>
            <div x-h-sidebar-menu-badge>11</div>
          </div>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="file-text"></i>
              Documents
            </button>
          </div>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="blocks"></i>
              Extensions
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Sidebar right side

<br />

<ClientOnly>
<component-container data-js="/components/init-icons.js" data-class="!p-0">
<div style="height:16rem">
<div x-h-sidebar.right class="float-right">
  <div x-h-sidebar-content>
    <div x-h-sidebar-group>
      <div x-h-sidebar-group-label>Application</div>
      <div x-h-sidebar-group-content>
        <div x-h-sidebar-menu>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="house"></i>
              Home
            </button>
            <div x-h-sidebar-menu-badge>11</div>
          </div>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="file-text"></i>
              Documents
            </button>
          </div>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="blocks"></i>
              Extensions
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-sidebar.right class="float-right">
  <div x-h-sidebar-content>
    <div x-h-sidebar-group>
      <div x-h-sidebar-group-label>Application</div>
      <div x-h-sidebar-group-content>
        <div x-h-sidebar-menu>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="house"></i>
              Home
            </button>
            <div x-h-sidebar-menu-badge>11</div>
          </div>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="file-text"></i>
              Documents
            </button>
          </div>
          <div x-h-sidebar-menu-item>
            <button x-h-sidebar-menu-button data-active="false">
              <i role="img" data-lucide="blocks"></i>
              Extensions
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Sidebar skeleton

<br />

<ClientOnly>
<component-container data-class="!p-0">
<div x-h-sidebar>
  <div x-h-sidebar-content>
    <div x-h-sidebar-group>
      <div x-h-sidebar-group-label.action>Skeleton</div>
      <div x-h-sidebar-group-content>
        <div x-h-sidebar-menu>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</component-container>
</ClientOnly>

```html
<div x-h-sidebar>
  <div x-h-sidebar-content>
    <div x-h-sidebar-group>
      <div x-h-sidebar-group-label.action>Skeleton</div>
      <div x-h-sidebar-group-content>
        <div x-h-sidebar-menu>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Full example

<br />

<ClientOnly>
<component-container data-html="/components/sidebar/full.html" data-class="!p-0">
</component-container>
</ClientOnly>

```html
<div x-h-sidebar>
  <div x-h-sidebar-content>
    <div x-h-sidebar-group>
      <div x-h-sidebar-group-label.action>Skeleton</div>
      <div x-h-sidebar-group-content>
        <div x-h-sidebar-menu>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
          <div x-h-sidebar-menu-item>
            <div x-h-sidebar-menu-skeleton.icon></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
