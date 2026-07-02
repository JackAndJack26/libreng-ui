# Angular Speed Dial Component

SpeedDial is a floating button with a popup menu.

## Accessibility

Screen Reader SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the aria-labelledby or aria-label props. Addititonally the button includes includes aria-haspopup , aria-expanded for states along with aria-controls to define the relation between the popup and the button. The popup overlay uses menu role on the list and each action item has a menuitem role with an aria-label as the menuitem label. The id of the menu refers to the aria-controls of the button.

## Circle

Items can be displayed around the button when type is set to circle . Additional radius property defines the radius of the circle.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { SpeedDialModule } from '@libreng/ui/speeddial';
import { ToastModule } from '@libreng/ui/toast';
import { MenuItem, MessageService } from '@libreng/ui/api';

@Component({
    template: `
        <div class="card">
            <div style="position:relative; height: 500px;" class="flex items-center justify-center">
                <p-toast />
                <p-speeddial [model]="items" [radius]="80" type="circle" [style]="{ position: 'absolute' }" [buttonProps]="{ severity: 'warn', rounded: true }" />
            </div>
        </div>
    `,
    standalone: true,
    imports: [SpeedDialModule, ToastModule],
    providers: [MessageService]
})
export class SpeeddialCircleDemo implements OnInit {
    private messageService = inject(MessageService);
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}
```

## Linear

SpeedDial items are defined with the model property based on MenuModel API. Default orientation of the items is linear and direction property is used to define the position of the items related to the button.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { SpeedDialModule } from '@libreng/ui/speeddial';
import { ToastModule } from '@libreng/ui/toast';
import { MenuItem, MessageService } from '@libreng/ui/api';

@Component({
    template: `
        <div class="card">
            <div style="height: 500px; position: relative;">
                <p-toast />
                <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
                <p-speeddial [model]="items" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
                <p-speeddial [model]="items" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
                <p-speeddial [model]="items" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
            </div>
        </div>
    `,
    standalone: true,
    imports: [SpeedDialModule, ToastModule],
    providers: [MessageService]
})
export class SpeeddialLinearDemo implements OnInit {
    private messageService = inject(MessageService);
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}
```

## Mask

Adding mask property displays a modal layer behind the popup items.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { SpeedDialModule } from '@libreng/ui/speeddial';
import { ToastModule } from '@libreng/ui/toast';
import { MenuItem, MessageService } from '@libreng/ui/api';

@Component({
    template: `
        <div class="card p-4">
            <div [style]="{ position: 'relative', height: '350px' }">
                <p-toast />
                <p-speeddial [model]="items" direction="up" mask [style]="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
            </div>
        </div>
    `,
    standalone: true,
    imports: [SpeedDialModule, ToastModule],
    providers: [MessageService]
})
export class SpeeddialMaskDemo implements OnInit {
    private messageService = inject(MessageService);
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}
```

## Quarter Circle

When type is defined as quarter-circle , items are displayed in a half-circle around the button.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { SpeedDialModule } from '@libreng/ui/speeddial';
import { ToastModule } from '@libreng/ui/toast';
import { MenuItem, MessageService } from '@libreng/ui/api';

@Component({
    template: `
        <div class="card">
            <div style="position: relative; height: 500px">
                <p-toast />
                <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-left" [style]="{ position: 'absolute', right: 0, bottom: 0 }" />
                <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-right" [style]="{ position: 'absolute', left: 0, bottom: 0 }" />
                <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-left" [style]="{ position: 'absolute', right: 0, top: 0 }" />
                <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-right" [style]="{ position: 'absolute', left: 0, top: 0 }" />
            </div>
        </div>
    `,
    standalone: true,
    imports: [SpeedDialModule, ToastModule],
    providers: [MessageService]
})
export class SpeeddialQuartercircleDemo implements OnInit {
    private messageService = inject(MessageService);
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}
```

## Semi Circle

When type is defined as semi-circle , items are displayed in a half-circle around the button.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { SpeedDialModule } from '@libreng/ui/speeddial';
import { ToastModule } from '@libreng/ui/toast';
import { MenuItem, MessageService } from '@libreng/ui/api';

@Component({
    template: `
        <div class="card">
            <div style="position: relative; height: 500px">
                <p-toast />
                <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
                <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
                <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
                <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
            </div>
        </div>
    `,
    standalone: true,
    imports: [SpeedDialModule, ToastModule],
    providers: [MessageService]
})
export class SpeeddialSemicircleDemo implements OnInit {
    private messageService = inject(MessageService);
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}
```

## Template

SpeedDial offers item customization with the item template that receives the menuitem instance from the model as a parameter. The button has its own button template, additional template named icon is provided to embed icon content for default button.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from '@libreng/ui/button';
import { SpeedDialModule } from '@libreng/ui/speeddial';
import { ToastModule } from '@libreng/ui/toast';
import { MenuItem, MessageService } from '@libreng/ui/api';

@Component({
    template: `
        <div class="card">
            <div class="flex items-end justify-center" style="position: 'relative'; height: '400px'">
                <p-toast />
                <p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
                    <ng-template #button let-toggleCallback="toggleCallback">
                        <p-button outlined styleClass="border" (click)="toggleCallback($event)">
                            <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)"/><path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)"/><rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85"/></svg>
                        </p-button>
                    </ng-template>
                    <ng-template #item let-item let-toggleCallback="toggleCallback">
                        <div class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer" (click)="toggleCallback($event, item)">
                            <span [class]="item.icon"></span>
                            <span>
                                {{ item.label }}
                            </span>
                        </div>
                    </ng-template>
                </p-speeddial>
            </div>
        </div>
    `,
    standalone: true,
    imports: [ButtonModule, SpeedDialModule, ToastModule],
    providers: [MessageService]
})
export class SpeeddialTemplateDemo implements OnInit {
    private messageService = inject(MessageService);
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                }
            },
            {
                label: 'Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.open('https://angular.io/', '_blank');
                }
            }
        ];
    }
}
```

## Tooltip

Items display a tooltip on hover when a standalone Tooltip is present with a target that matches the items.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { SpeedDialModule } from '@libreng/ui/speeddial';
import { ToastModule } from '@libreng/ui/toast';
import { MenuItem, MessageService } from '@libreng/ui/api';

@Component({
    template: `
        <div class="card">
            <div [style]="{ position: 'relative', height: '350px' }">
                <p-toast />
                <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', right: 0, bottom: 0 }" [buttonProps]="{ severity: 'help', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'left' }" />
                <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 0, bottom: 0 }" [buttonProps]="{ severity: 'danger', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'right' }" />
            </div>
        </div>
    `,
    standalone: true,
    imports: [SpeedDialModule, ToastModule],
    providers: [MessageService]
})
export class SpeeddialTooltipDemo implements OnInit {
    private messageService = inject(MessageService);
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                }
            },
            {
                label: 'Angular.dev',
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}
```

## Speed Dial

When pressed, a floating action button can display multiple primary actions that can be performed on a page.

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dt | InputSignal<Object> | undefined | Defines scoped design tokens of the component. |
| unstyled | InputSignal<boolean> | undefined | Indicates whether the component should be rendered without styles. |
| pt | InputSignal<SpeedDialPassThrough> | undefined | Used to pass attributes to DOM elements inside the component. |
| ptOptions | InputSignal<PassThroughOptions> | undefined | Used to configure passthrough(pt) options of the component. |
| id | string | - | List of items id. |
| model | MenuItem[] | null | MenuModel instance to define the action items. |
| visible | boolean | - | Specifies the visibility of the overlay. |
| style | { [klass: string]: any } | - | Inline style of the element. |
| className | string | - | Style class of the element. |
| transitionDelay | number | 30 | Transition delay step for each action item. |
| type | "circle" \| "linear" \| "semi-circle" \| "quarter-circle" | linear | Specifies the opening type of actions. |
| radius | number | 0 | Radius for *circle types. |
| mask | boolean | false | Whether to show a mask element behind the speeddial. |
| disabled | boolean | false | Whether the component is disabled. |
| hideOnClickOutside | boolean | true | Whether the actions close when clicked outside. |
| buttonStyle | { [klass: string]: any } | - | Inline style of the button element. |
| buttonClassName | string | - | Style class of the button element. |
| maskStyle | { [klass: string]: any } | - | Inline style of the mask element. |
| maskClassName | string | - | Style class of the mask element. |
| showIcon | string | - | Show icon of the button element. |
| hideIcon | string | - | Hide icon of the button element. |
| rotateAnimation | boolean | true | Defined to rotate showIcon when hideIcon is not present. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | - | Identifier of the underlying input element. |
| tooltipOptions | TooltipOptions | - | Whether to display the tooltip on items. The modifiers of Tooltip can be used like an object in it. Valid keys are 'event' and 'position'. |
| buttonProps | ButtonProps | - | Used to pass all properties of the ButtonProps to the Button component. |

### Emits

| Name | Parameters | Description |
|------|------------|-------------|
| onVisibleChange | value: boolean | Fired when the visibility of element changed. |
| visibleChange | value: boolean | Fired when the visibility of element changed. |
| onClick | event: MouseEvent | Fired when the button element clicked. |
| onShow | event: Event | Fired when the actions are visible. |
| onHide | event: Event | Fired when the actions are hidden. |

### Templates

| Name | Type | Description |
|------|------|-------------|
| button | TemplateRef<SpeedDialButtonTemplateContext> | Custom button template. |
| item | TemplateRef<SpeedDialItemTemplateContext> | Custom item template. |
| icon | TemplateRef<void> | Custom icon template. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | PassThroughOption<HTMLDivElement, I> | Used to pass attributes to the root's DOM element. |
| pcButton | ButtonPassThrough | Used to pass attributes to the Button component. |
| list | PassThroughOption<HTMLUListElement, I> | Used to pass attributes to the list's DOM element. |
| item | PassThroughOption<HTMLLIElement, I> | Used to pass attributes to the item's DOM element. |
| pcAction | ButtonPassThrough | Used to pass attributes to the action's Button component. |
| actionIcon | PassThroughOption<HTMLSpanElement, I> | Used to pass attributes to the action icon's DOM element. |
| mask | PassThroughOption<HTMLDivElement, I> | Used to pass attributes to the mask's DOM element. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-speeddial | Class name of the root element |
| p-speeddial-button | Class name of the button element |
| p-speeddial-list | Class name of the list element |
| p-speeddial-item | Class name of the item element |
| p-speeddial-action | Class name of the action element |
| p-speeddial-action-icon | Class name of the action icon element |
| p-speeddial-mask | Class name of the mask element |

### Design Tokens

| Token | CSS Variable | Description |
|-------|--------------|-------------|
| speeddial.gap | --p-speeddial-gap | Gap of root |
| speeddial.transition.duration | --p-speeddial-transition-duration | Transition duration of root |

