# Angular Avatar Component

Avatar represents people using icons, labels and images.

## Accessibility

Screen Reader Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like img along with aria-labelledby or aria-label to describe the component. In case avatars need to be tabbable, tabIndex can be added as well to implement custom key handlers. Keyboard Support Component does not include any interactive elements.

## AvatarGroup

Grouping is available by wrapping multiple Avatar components inside an AvatarGroup .

```typescript
import { Component } from '@angular/core';
import { AvatarModule } from '@libreng/ui/avatar';

@Component({
    template: `
        <div class="card flex justify-center">
            <p-avatar-group>
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" size="large" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" size="large" shape="circle" />
                <p-avatar label="+2" shape="circle" size="large" />
            </p-avatar-group>
        </div>
    `,
    standalone: true,
    imports: [AvatarModule]
})
export class AvatarAvatargroupDemo {}
```

## avatargroupstyle-doc

```typescript
import { Component } from '@angular/core';

@Component({
    template: `
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-avatar-group</td>
                        <td>Container element.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    standalone: true,
    imports: []
})
export class AvatarAvatargroupstyleDemo {}
```

## avatarstyle-doc

Following is the list of structural style classes, for theming classes visit theming page.

```typescript
import { Component } from '@angular/core';

@Component({
    template: `
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-avatar</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-avatar-image</td>
                        <td>Container element in image mode.</td>
                    </tr>
                    <tr>
                        <td>p-avatar-circle</td>
                        <td>Container element with a circle shape.</td>
                    </tr>
                    <tr>
                        <td>p-avatar-text</td>
                        <td>Text of the Avatar.</td>
                    </tr>
                    <tr>
                        <td>p-avatar-icon</td>
                        <td>Icon of the Avatar.</td>
                    </tr>
                    <tr>
                        <td>p-avatar-lg</td>
                        <td>Container element with a large size.</td>
                    </tr>
                    <tr>
                        <td>p-avatar-xl</td>
                        <td>Container element with an xlarge size.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    standalone: true,
    imports: []
})
export class AvatarAvatarstyleDemo {}
```

## Badge

A badge can be added to an Avatar with the Badge directive.

```typescript
import { Component } from '@angular/core';
import { AvatarModule } from '@libreng/ui/avatar';

@Component({
    template: `
        <div class="card flex justify-center">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" pBadge value="4" severity="danger" />
        </div>
    `,
    standalone: true,
    imports: [AvatarModule]
})
export class AvatarBadgeDemo {}
```

## Icon

A font icon is displayed as an Avatar with the icon property.

```typescript
import { Component } from '@angular/core';
import { AvatarModule } from '@libreng/ui/avatar';

@Component({
    template: `
        <div class="card">
            <div class="flex flex-wrap gap-8">
                <div class="flex-auto">
                    <h5>Icon</h5>
                    <p-avatar icon="pi pi-user" class="mr-2" size="xlarge" />
                    <p-avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
                    <p-avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" />
                </div>
                <div class="flex-auto">
                    <h5>Circle</h5>
                    <p-avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                    <p-avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                    <p-avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
                </div>
                <div class="flex-auto">
                    <h5>Badge</h5>
                    <p-overlay-badge value="4" severity="danger" class="inline-flex">
                        <p-avatar icon="pi pi-user" size="xlarge" />
                    </p-overlay-badge>
                </div>
            </div>
        </div>
    `,
    standalone: true,
    imports: [AvatarModule]
})
export class AvatarIconDemo {}
```

## Image

Use the image property to display an image as an Avatar.

```typescript
import { Component } from '@angular/core';
import { AvatarModule } from '@libreng/ui/avatar';

@Component({
    template: `
        <div class="card">
            <div class="flex flex-wrap gap-8">
                <div class="flex-auto">
                    <h5>Image</h5>
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
                </div>
                <div class="flex-auto">
                    <h5>Badge</h5>
                    <p-overlay-badge value="4" severity="danger" class="inline-flex">
                        <p-avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" size="xlarge" />
                    </p-overlay-badge>
                </div>
                <div class="flex-auto">
                    <h5>Gravatar</h5>
                    <p-avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex items-center justify-center mr-2" size="xlarge" />
                </div>
            </div>
        </div>
    `,
    standalone: true,
    imports: [AvatarModule]
})
export class AvatarImageDemo {}
```

## Label

A letter Avatar is defined with the label property.

```typescript
import { Component } from '@angular/core';
import { AvatarModule } from '@libreng/ui/avatar';

@Component({
    template: `
        <div class="card">
            <div class="flex flex-wrap gap-8">
                <div class="flex-auto">
                    <h5>Label</h5>
                    <p-avatar label="P" class="mr-2" size="xlarge" />
                    <p-avatar label="V" class="mr-2" size="large" [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }" />
                    <p-avatar label="U" class="mr-2" [style]="{ 'background-color': '#dee9fc', color: '#1a2551' }" />
                </div>
                <div class="flex-auto">
                    <h5>Circle</h5>
                    <p-avatar label="P" class="mr-2" size="xlarge" shape="circle" />
                    <p-avatar label="V" class="mr-2" size="large" [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }" shape="circle" />
                    <p-avatar label="U" class="mr-2" [style]="{ 'background-color': '#dee9fc', color: '#1a2551' }" shape="circle" />
                </div>
                <div class="flex-auto">
                    <h5>Badge</h5>
                    <p-overlay-badge value="4" severity="danger" class="inline-flex">
                        <p-avatar label="U" size="xlarge" />
                    </p-overlay-badge>
                </div>
            </div>
        </div>
    `,
    standalone: true,
    imports: [AvatarModule]
})
export class AvatarLabelDemo {}
```

## Shape

Avatar comes in two different styles specified with the shape property, square is the default and circle is the alternative.

```typescript
import { Component } from '@angular/core';
import { AvatarModule } from '@libreng/ui/avatar';

@Component({
    template: `
        <div class="card flex justify-center gap-2">
            <p-avatar label="P" shape="circle" />
            <p-avatar label="T" />
        </div>
    `,
    standalone: true,
    imports: [AvatarModule]
})
export class AvatarShapeDemo {}
```

## Size

size property defines the size of the Avatar with large and xlarge as possible values.

```typescript
import { Component } from '@angular/core';
import { AvatarModule } from '@libreng/ui/avatar';

@Component({
    template: `
        <div class="card flex justify-center gap-2">
            <p-avatar label="P" size="large" />
            <p-avatar label="T" size="xlarge" />
        </div>
    `,
    standalone: true,
    imports: [AvatarModule]
})
export class AvatarSizeDemo {}
```

## Template

Content can easily be customized with the dynamic content instead of using the built-in modes.

```typescript
import { Component } from '@angular/core';
import { AvatarModule } from '@libreng/ui/avatar';

@Component({
    template: `
        <div class="card flex justify-center">
            <p-avatar size="xlarge">
                <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)"/><path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)"/><rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85"/></svg>
            </p-avatar>
        </div>
    `,
    standalone: true,
    imports: [AvatarModule]
})
export class AvatarTemplateDemo {}
```

## Avatar

Avatar represents people using icons, labels and images.

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Defines the text to display. |
| icon | string | - | Defines the icon to display. |
| image | string | - | Defines the image to display. |
| size | "large" \| "xlarge" \| "normal" | normal | Size of the element. |
| shape | "circle" \| "square" | square | Shape of the element. |
| styleClass | string | - | Class of the element. **(Deprecated)** |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| ariaLabelledBy | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| dt | InputSignal<Object> | undefined | Defines scoped design tokens of the component. |
| unstyled | InputSignal<boolean> | undefined | Indicates whether the component should be rendered without styles. |
| pt | InputSignal<AvatarPassThrough> | undefined | Used to pass attributes to DOM elements inside the component. |
| ptOptions | InputSignal<PassThroughOptions> | undefined | Used to configure passthrough(pt) options of the component. |

### Emits

| Name | Parameters | Description |
|------|------------|-------------|
| onImageError | event: Event | This event is triggered if an error occurs while loading an image file. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| host | PassThroughOption<HTMLElement, I> | Used to pass attributes to the host's DOM element. |
| root | PassThroughOption<HTMLDivElement, I> | Used to pass attributes to the root's DOM element. |
| label | PassThroughOption<HTMLSpanElement, I> | Used to pass attributes to the label's DOM element. |
| icon | PassThroughOption<HTMLSpanElement, I> | Used to pass attributes to the icon's DOM element. |
| image | PassThroughOption<HTMLImageElement, I> | Used to pass attributes to the image's DOM element. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-avatar | Class name of the root element |
| p-avatar-label | Class name of the label element |
| p-avatar-icon | Class name of the icon element |
| p-avatar-image | Container element in image mode |
| p-avatar-circle | Container element with a circle shape |
| p-avatar-lg | Container element with a large size |
| p-avatar-xl | Container element with an xlarge size |

### Design Tokens

| Token | CSS Variable | Description |
|-------|--------------|-------------|
| avatar.width | --p-avatar-width | Width of root |
| avatar.height | --p-avatar-height | Height of root |
| avatar.font.size | --p-avatar-font-size | Font size of root |
| avatar.background | --p-avatar-background | Background of root |
| avatar.color | --p-avatar-color | Color of root |
| avatar.border.radius | --p-avatar-border-radius | Border radius of root |
| avatar.icon.size | --p-avatar-icon-size | Size of icon |
| avatar.group.border.color | --p-avatar-group-border-color | Border color of group |
| avatar.group.offset | --p-avatar-group-offset | Offset of group |
| avatar.lg.width | --p-avatar-lg-width | Width of lg |
| avatar.lg.height | --p-avatar-lg-height | Height of lg |
| avatar.lg.font.size | --p-avatar-lg-font-size | Font size of lg |
| avatar.lg.icon.size | --p-avatar-lg-icon-size | Icon size of lg |
| avatar.lg.group.offset | --p-avatar-lg-group-offset | Group offset of lg |
| avatar.xl.width | --p-avatar-xl-width | Width of xl |
| avatar.xl.height | --p-avatar-xl-height | Height of xl |
| avatar.xl.font.size | --p-avatar-xl-font-size | Font size of xl |
| avatar.xl.icon.size | --p-avatar-xl-icon-size | Icon size of xl |
| avatar.xl.group.offset | --p-avatar-xl-group-offset | Group offset of xl |

