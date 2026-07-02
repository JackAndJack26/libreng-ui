# Angular ContextMenu Component

ContextMenu displays an overlay menu on right click of its target.

## Accessibility

Screen Reader ContextMenu component uses the menubar role with aria-orientation set to "vertical" and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a ContextMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup , aria-expanded and aria-controls to define the relation between the item and the submenu. Keyboard Support Key Function tab When focus is in the menu, closes the context menu and moves focus to the next focusable element in the page sequence. enter If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. space If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. escape Closes the context menu. down arrow If focus is not inside the menu and menu is open, add focus to the first item. If an item is already focused, moves focus to the next menuitem within the submenu. up arrow If focus is not inside the menu and menu is open, add focus to the last item. If an item is already focused, moves focus to the next menuitem within the submenu. right arrow Opens a submenu if there is one available and moves focus to the first item. left arrow Closes a submenu and moves focus to the root item of the closed submenu. home Moves focus to the first menuitem within the submenu. end Moves focus to the last menuitem within the submenu.

## Basic

ContextMenu can be attached to a particular element whose local template variable name is defined using the target property.

```typescript
import { Component, OnInit } from '@angular/core';
import { ContextMenu, ContextMenuModule } from '@libreng/ui/contextmenu';
import { MenuItem } from '@libreng/ui/api';
import { ContextMenu } from '@libreng/ui/contextmenu';

@Component({
    template: `
        <div class="card flex justify-center">
            <img #img src="https://primefaces.org/cdn/primeng/images/demo/nature/nature2.jpg" alt="Logo" aria-haspopup="true" class="w-full md:w-[30rem] rounded shadow-lg" />
            <p-contextmenu [target]="img" [model]="items" />
        </div>
    `,
    standalone: true,
    imports: [ContextMenuModule]
})
export class ContextmenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Copy', icon: 'pi pi-copy' },
            { label: 'Rename', icon: 'pi pi-file-edit' }
        ];
    }
}
```

## Command

The function to invoke when an item is clicked is defined using the command property.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { ContextMenu, ContextMenuModule } from '@libreng/ui/contextmenu';
import { TagModule } from '@libreng/ui/tag';
import { ToastModule } from '@libreng/ui/toast';
import { MenuItem, MessageService } from '@libreng/ui/api';
import { ContextMenu } from '@libreng/ui/contextmenu';

interface Users {
    id: number;
    name: string;
    image: string;
    role: string;
}

@Component({
    template: `
        <div class="card flex sm:justify-center">
            <p-toast />
            <ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
                <li
                    *ngFor="let user of users"
                    class="p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between"
                    [ngClass]="{ 'border-primary': selectedId === user.id }"
                    (contextmenu)="onContextMenu($event, user)"
                >
                    <div class="flex flex-1 items-center gap-2">
                        <img class="w-8 h-8" [alt]="user.name" [src]="'https://primefaces.org/cdn/primeng/images/demo/avatar/' + user.image" />
                        <span class="font-bold">{{ user.name }}</span>
                    </div>
                    <p-tag [value]="user.role" [severity]="getBadge(user)" />
                </li>
            </ul>
            <p-contextmenu #cm [model]="items" (onHide)="onHide()" />
        </div>
    `,
    standalone: true,
    imports: [ContextMenuModule, TagModule, ToastModule],
    providers: [MessageService]
})
export class ContextmenuCommandDemo implements OnInit {
    private messageService = inject(MessageService);
    items: MenuItem[] | undefined;
    selectedUser: Users;
    users: Users[];

    ngOnInit() {
        this.users = [
            { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
            { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
            { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
            { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
            { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
        ];
        this.items = [
            {
                label: 'Roles',
                icon: 'pi pi-users',
                items: [
                    {
                        label: 'Admin',
                        command: () => {
                            this.selectedUser.role = 'Admin';
                        }
                    },
                    {
                        label: 'Member',
                        command: () => {
                            this.selectedUser.role = 'Member';
                        }
                    },
                    {
                        label: 'Guest',
                        command: () => {
                            this.selectedUser.role = 'Guest';
                        }
                    }
                ]
            },
            {
                label: 'Invite',
                icon: 'pi pi-user-plus',
                command: () => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Invitation sent!',
                        life: 3000
                    });
                }
            }
        ];
    }

    getBadge(user) {
        if (user.role === 'Member') return 'info';
        else if (user.role === 'Guest') return 'warn';
        else return null;
    }

    onContextMenu(event, user) {
        this.selectedUser = user;
        this.cm.show(event);
    }

    onHide() {
        this.selectedUser = null;
    }
}
```

## Document

Setting global property to true attaches the context menu to the document.

```typescript
import { Component, OnInit } from '@angular/core';
import { ContextMenu, ContextMenuModule } from '@libreng/ui/contextmenu';
import { MenuItem } from '@libreng/ui/api';
import { ContextMenu } from '@libreng/ui/contextmenu';

@Component({
    template: `
        <div class="card text-center">
            <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
            <p-contextmenu [model]="items" [global]="true" />
        </div>
    `,
    standalone: true,
    imports: [ContextMenuModule]
})
export class ContextmenuDocumentDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Translate',
                icon: 'pi pi-language'
            },
            {
                label: 'Speech',
                icon: 'pi pi-volume-up',
                items: [
                    {
                        label: 'Start',
                        icon: 'pi pi-caret-right'
                    },
                    {
                        label: 'Stop',
                        icon: 'pi pi-pause'
                    }
                ]
            },
            {
                separator: true
            },
            {
                label: 'Print',
                icon: 'pi pi-print'
            }
        ];
    }
}
```

## Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```typescript
import { Component, OnInit } from '@angular/core';
import { ContextMenuModule } from '@libreng/ui/contextmenu';
import { MenuItem } from '@libreng/ui/api';

@Component({
    template: `
        <div class="card flex justify-center">
            <span #span class="inline-flex items-center justify-center border-2 border-primary rounded w-16 h-16" aria-haspopup="true">
                <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)"/><path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)"/><rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85"/></svg>
            </span>
            <p-contextmenu [target]="span" [model]="items" />
        </div>
    `,
    standalone: true,
    imports: [ContextMenuModule]
})
export class ContextmenuRouterDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Router Link',
                icon: 'pi pi-palette',
                routerLink: '/theming'
            },
            {
                label: 'Programmatic',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },
            {
                label: 'External',
                icon: 'pi pi-home',
                url: 'https://angular.io//'
            }
        ];
    }
}
```

## Table

Table has built-in support for ContextMenu, see the ContextMenu demo for an example.

## Template

ContextMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

```typescript
import { Component, OnInit } from '@angular/core';
import { BadgeModule } from '@libreng/ui/badge';
import { ContextMenu, ContextMenuModule } from '@libreng/ui/contextmenu';
import { RippleModule } from '@libreng/ui/ripple';
import { MenuItem } from '@libreng/ui/api';
import { Product } from '@/domain/product';
import { ContextMenu } from '@libreng/ui/contextmenu';

@Component({
    template: `
        <div class="card flex md:justify-center">
            <ul class="m-0 list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 w-full md:w-[30rem]">
                <li
                    *ngFor="let product of data"
                    class="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200"
                    [ngClass]="{ 'border-primary': selectedId === product.id }"
                    (contextmenu)="onContextMenu($event)"
                >
                    <div class="flex flex-wrap p-2 items-center gap-4">
                        <img class="w-16 shrink-0 rounded" src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" />
                        <div class="flex-1 flex flex-col gap-1">
                            <span class="font-bold">{{ product.name }}</span>
                            <div class="flex items-center gap-2">
                                <i class="pi pi-tag text-sm"></i>
                                <span>{{ product.category }}</span>
                            </div>
                        </div>
                        <span class="font-bold ml-8">&#36;{{ product.price }}</span>
                    </div>
                </li>
            </ul>
            <p-contextmenu #cm [model]="items" (onHide)="onHide()">
                <ng-template #item let-item>
                    <a pRipple class="flex items-center px-4 py-3 cursor-pointer">
                        <span [class]="item.icon"></span>
                        <span class="ms-2">{{ item.label }}</span>
                        <p-badge *ngIf="item.badge" class="ms-auto" [value]="item.badge" />
                        <span *ngIf="item.shortcut" class="ms-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                        <i *ngIf="item.items" class="pi pi-angle-right ms-auto rotate-90 lg:rotate-0"></i>
                    </a>
                </ng-template>
            </p-contextmenu>
        </div>
    `,
    standalone: true,
    imports: [BadgeModule, ContextMenuModule, RippleModule]
})
export class ContextmenuTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;
    selectedId!: string;
    data: any[];

    ngOnInit() {
        this.items = [
            {
                label: 'Favorite',
                icon: 'pi pi-star',
                shortcut: '⌘+D'
            },
            {
                label: 'Add',
                icon: 'pi pi-shopping-cart',
                shortcut: '⌘+A'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp',
                        badge: '2'
                    },
                    {
                        label: 'Instagram',
                        icon: 'pi pi-instagram',
                        badge: '3'
                    }
                ]
            }
        ];
    }

    onContextMenu(event) {
        this.cm.target = event.currentTarget;
        this.cm.show(event);
    }

    onHide() {
        this.selectedId = undefined;
    }
}
```

## Context Menu

ContextMenu displays an overlay menu on right click of its target. Note that components like Table has special integration with ContextMenu.

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dt | InputSignal<Object> | undefined | Defines scoped design tokens of the component. |
| unstyled | InputSignal<boolean> | undefined | Indicates whether the component should be rendered without styles. |
| pt | InputSignal<ContextMenuPassThrough> | undefined | Used to pass attributes to DOM elements inside the component. |
| ptOptions | InputSignal<PassThroughOptions> | undefined | Used to configure passthrough(pt) options of the component. |
| model | MenuItem[] | - | An array of menuitems. |
| triggerEvent | string | contextmenu | Event for which the menu must be displayed. |
| target | string \| HTMLElement | - | Local template variable name of the element to attach the context menu. |
| global | boolean | false | Attaches the menu to document instead of a particular item. |
| style | { [klass: string]: any } | - | Inline style of the component. |
| styleClass | string | - | Style class of the component. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| id | string | - | Current id state as a string. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | - | Identifier of the underlying input element. |
| pressDelay | number | 500 | Press delay in touch devices as miliseconds. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |
| motionOptions | InputSignal<MotionOptions> | ... | The motion options. |

### Emits

| Name | Parameters | Description |
|------|------------|-------------|
| onShow | value: null | Callback to invoke when overlay menu is shown. |
| onHide | value: null | Callback to invoke when overlay menu is hidden. |

### Templates

| Name | Type | Description |
|------|------|-------------|
| item | TemplateRef<ContextMenuItemTemplateContext> | Custom item template. |
| submenuicon | TemplateRef<ContextMenuSubmenuIconTemplateContext> | Custom submenu icon template. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | PassThroughOption<HTMLDivElement, I> | Used to pass attributes to the root's DOM element. |
| rootList | PassThroughOption<HTMLUListElement, I> | Used to pass attributes to the root list's DOM element. |
| submenu | PassThroughOption<HTMLUListElement, I> | Used to pass attributes to the submenu's DOM element. |
| separator | PassThroughOption<HTMLLIElement, I> | Used to pass attributes to the separator's DOM element. |
| item | PassThroughOption<HTMLLIElement, I> | Used to pass attributes to the item's DOM element. |
| itemContent | PassThroughOption<HTMLDivElement, I> | Used to pass attributes to the item content's DOM element. |
| itemLink | PassThroughOption<HTMLAnchorElement, I> | Used to pass attributes to the item link's DOM element. |
| itemIcon | PassThroughOption<HTMLSpanElement, I> | Used to pass attributes to the item icon's DOM element. |
| itemLabel | PassThroughOption<HTMLSpanElement, I> | Used to pass attributes to the item label's DOM element. |
| submenuIcon | PassThroughOption<SVGElement, I> | Used to pass attributes to the submenu icon's DOM element. |
| motion | MotionOptions | Used to pass options to the motion component/directive. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-contextmenu | Class name of the root element |
| p-contextmenu-root-list | Class name of the root list element |
| p-contextmenu-item | Class name of the item element |
| p-contextmenu-item-content | Class name of the item content element |
| p-contextmenu-item-link | Class name of the item link element |
| p-contextmenu-item-icon | Class name of the item icon element |
| p-contextmenu-item-label | Class name of the item label element |
| p-contextmenu-submenu-icon | Class name of the submenu icon element |
| p-contextmenu-submenu | Class name of the submenu element |
| p-contextmenu-separator | Class name of the separator element |

### Design Tokens

| Token | CSS Variable | Description |
|-------|--------------|-------------|
| contextmenu.background | --p-contextmenu-background | Background of root |
| contextmenu.border.color | --p-contextmenu-border-color | Border color of root |
| contextmenu.color | --p-contextmenu-color | Color of root |
| contextmenu.border.radius | --p-contextmenu-border-radius | Border radius of root |
| contextmenu.shadow | --p-contextmenu-shadow | Shadow of root |
| contextmenu.transition.duration | --p-contextmenu-transition-duration | Transition duration of root |
| contextmenu.list.padding | --p-contextmenu-list-padding | Padding of list |
| contextmenu.list.gap | --p-contextmenu-list-gap | Gap of list |
| contextmenu.item.focus.background | --p-contextmenu-item-focus-background | Focus background of item |
| contextmenu.item.active.background | --p-contextmenu-item-active-background | Active background of item |
| contextmenu.item.color | --p-contextmenu-item-color | Color of item |
| contextmenu.item.focus.color | --p-contextmenu-item-focus-color | Focus color of item |
| contextmenu.item.active.color | --p-contextmenu-item-active-color | Active color of item |
| contextmenu.item.padding | --p-contextmenu-item-padding | Padding of item |
| contextmenu.item.border.radius | --p-contextmenu-item-border-radius | Border radius of item |
| contextmenu.item.gap | --p-contextmenu-item-gap | Gap of item |
| contextmenu.item.icon.color | --p-contextmenu-item-icon-color | Icon color of item |
| contextmenu.item.icon.focus.color | --p-contextmenu-item-icon-focus-color | Icon focus color of item |
| contextmenu.item.icon.active.color | --p-contextmenu-item-icon-active-color | Icon active color of item |
| contextmenu.submenu.mobile.indent | --p-contextmenu-submenu-mobile-indent | Mobile indent of submenu |
| contextmenu.submenu.icon.size | --p-contextmenu-submenu-icon-size | Size of submenu icon |
| contextmenu.submenu.icon.color | --p-contextmenu-submenu-icon-color | Color of submenu icon |
| contextmenu.submenu.icon.focus.color | --p-contextmenu-submenu-icon-focus-color | Focus color of submenu icon |
| contextmenu.submenu.icon.active.color | --p-contextmenu-submenu-icon-active-color | Active color of submenu icon |
| contextmenu.separator.border.color | --p-contextmenu-separator-border-color | Border color of separator |

