# Angular IconField Component

IconField wraps an input and an icon.

## Accessibility

Screen Reader IconField and InputIcon does not require any roles and attributes. Keyboard Support Components does not include any interactive elements.

## Basic

A group is created by wrapping the input and icon with the IconField component. Each icon is defined as a child of InputIcon component. In addition, position of the icon can be changed using iconPosition property that the default value is right and also left option is available.

```typescript
import { Component } from '@angular/core';
import { IconFieldModule } from '@libreng/ui/iconfield';
import { InputIconModule } from '@libreng/ui/inputicon';
import { InputTextModule } from '@libreng/ui/inputtext';

@Component({
    template: `
        <div class="card flex flex-wrap justify-center gap-4">
            <p-iconfield>
                <p-inputicon class="pi pi-search" />
                <input type="text" pInputText placeholder="Search" />
            </p-iconfield>
            <p-iconfield>
                <input type="text" pInputText />
                <p-inputicon class="pi pi-spinner pi-spin" />
            </p-iconfield>
        </div>
    `,
    standalone: true,
    imports: [IconFieldModule, InputIconModule, InputTextModule]
})
export class IconfieldBasicDemo {}
```

## Float Label

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from '@libreng/ui/floatlabel';
import { IconFieldModule } from '@libreng/ui/iconfield';
import { InputIconModule } from '@libreng/ui/inputicon';
import { InputTextModule } from '@libreng/ui/inputtext';

@Component({
    template: `
        <div class="card flex flex-wrap justify-center items-end gap-4">
            <p-floatlabel>
                <p-iconfield>
                    <p-inputicon class="pi pi-search" />
                    <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
                </p-iconfield>
                <label for="over_label">Over Label</label>
            </p-floatlabel>
            <p-floatlabel variant="in">
                <p-iconfield>
                    <p-inputicon class="pi pi-search" />
                    <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
                </p-iconfield>
                <label for="in_label">In Label</label>
            </p-floatlabel>
            <p-floatlabel variant="on">
                <p-iconfield>
                    <p-inputicon class="pi pi-search" />
                    <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
                </p-iconfield>
                <label for="on_label">On Label</label>
            </p-floatlabel>
        </div>
    `,
    standalone: true,
    imports: [FloatLabelModule, IconFieldModule, InputIconModule, InputTextModule, FormsModule]
})
export class IconfieldFloatlabelDemo {
    value1: string | undefined;
    value2: string | undefined;
    value3: string | undefined;
}
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from '@libreng/ui/iconfield';
import { IftaLabelModule } from '@libreng/ui/iftalabel';
import { InputIconModule } from '@libreng/ui/inputicon';
import { InputTextModule } from '@libreng/ui/inputtext';

@Component({
    template: `
        <div class="card flex justify-center">
            <p-iftalabel>
                <p-iconfield>
                    <p-inputicon class="pi pi-user" />
                    <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
                </p-iconfield>
                <label for="username">Username</label>
            </p-iftalabel>
        </div>
    `,
    standalone: true,
    imports: [IconFieldModule, IftaLabelModule, InputIconModule, InputTextModule, FormsModule]
})
export class IconfieldIftalabelDemo {
    value: string | undefined;
}
```

## Sizes

IconField is compatible with the pSize setting of the input field.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from '@libreng/ui/iconfield';
import { InputIconModule } from '@libreng/ui/inputicon';
import { InputTextModule } from '@libreng/ui/inputtext';

@Component({
    template: `
        <div class="card flex flex-col items-center gap-4">
            <p-iconfield>
                <p-inputicon class="pi pi-search" />
                <input pInputText [(ngModel)]="value1" placeholder="Small" pSize="small" />
            </p-iconfield>
            <p-iconfield>
                <input pInputText [(ngModel)]="value2" placeholder="Normal" />
                <p-inputicon class="pi pi-user" />
            </p-iconfield>
            <p-iconfield>
                <p-inputicon class="pi pi-lock" />
                <input pInputText [(ngModel)]="value3" placeholder="Large" pSize="large" />
                <p-inputicon class="pi pi-spin pi-spinner" />
            </p-iconfield>
        </div>
    `,
    standalone: true,
    imports: [IconFieldModule, InputIconModule, InputTextModule, FormsModule]
})
export class IconfieldSizesDemo {
    value1: any = null;
    value2: any = null;
    value3: any = null;
}
```

## Template

An eye icon is displayed by default when the image is hovered in preview mode. Use the indicator template for custom content.

```typescript
import { Component } from '@angular/core';
import { IconFieldModule } from '@libreng/ui/iconfield';
import { InputIconModule } from '@libreng/ui/inputicon';
import { InputTextModule } from '@libreng/ui/inputtext';

@Component({
    template: `
        <div class="card flex justify-center">
            <p-iconfield iconPosition="left">
                <p-inputicon>
                    <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)"/><path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)"/><rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85"/></svg>
                </p-inputicon>
                <input type="text" pInputText placeholder="Search" />
            </p-iconfield>
        </div>
    `,
    standalone: true,
    imports: [IconFieldModule, InputIconModule, InputTextModule]
})
export class IconfieldTemplateDemo {}
```

## Icon Field

IconField wraps an input and an icon.

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dt | InputSignal<Object> | undefined | Defines scoped design tokens of the component. |
| unstyled | InputSignal<boolean> | undefined | Indicates whether the component should be rendered without styles. |
| pt | InputSignal<IconFieldPassThrough> | undefined | Used to pass attributes to DOM elements inside the component. |
| ptOptions | InputSignal<PassThroughOptions> | undefined | Used to configure passthrough(pt) options of the component. |
| iconPosition | "right" \| "left" | left | Position of the icon. |
| styleClass | string | - | Style class of the component. **(Deprecated)** |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| host | PassThroughOption<HTMLElement, I> | Used to pass attributes to the host's DOM element. |
| root | PassThroughOption<HTMLSpanElement, I> | Used to pass attributes to the root's DOM element. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-iconfield | Class name of the root element |

### Design Tokens

| Token | CSS Variable | Description |
|-------|--------------|-------------|
| iconfield.icon.color | --p-iconfield-icon-color | Color of icon |

