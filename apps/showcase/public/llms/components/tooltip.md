# Angular Tooltip Component

Tooltip directive provides advisory information for a component. Tooltip is integrated within various LibreNG UI components.

## Accessibility

Screen Reader Tooltip component uses tooltip role and when it becomes visible the generated id of the tooltip is defined as the aria-describedby of the target. Keyboard Support Key Function escape Closes the tooltip when focus is on the target.

## Auto Hide

Tooltip is hidden when mouse leaves the target element, in cases where tooltip needs to be interacted with, set autoHide to false to change the default behavior.

```typescript
import { Component } from '@angular/core';
import { InputTextModule } from '@libreng/ui/inputtext';
import { TooltipModule } from '@libreng/ui/tooltip';

@Component({
    template: `
        <div class="card flex flex-wrap justify-center gap-2">
            <input type="text" pInputText pTooltip="Enter your username" [autoHide]="false" placeholder="autoHide: false" />
            <input type="text" pInputText pTooltip="Enter your username" placeholder="autoHide: true" />
        </div>
    `,
    standalone: true,
    imports: [InputTextModule, TooltipModule]
})
export class TooltipAutohideDemo {}
```

## Custom

Tooltip can use either a string or a TemplateRef .

```typescript
import { Component } from '@angular/core';
import { ButtonModule } from '@libreng/ui/button';
import { TooltipModule } from '@libreng/ui/tooltip';

@Component({
    template: `
        <div class="card flex justify-center">
            <p-button [pTooltip]="tooltipContent" severity="secondary" tooltipPosition="bottom" label="Button" />
            <ng-template #tooltipContent>
                <div class="flex items-center">
                    <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)"/><path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)"/><rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85"/></svg>
                    <span> <b>LibreNG UI</b> rocks! </span>
                </div>
            </ng-template>
        </div>
    `,
    standalone: true,
    imports: [ButtonModule, TooltipModule]
})
export class TooltipCustomDemo {}
```

## Delay

Adding delays to the show and hide events are defined with showDelay and hideDelay options respectively.

```typescript
import { Component } from '@angular/core';
import { ButtonModule } from '@libreng/ui/button';
import { TooltipModule } from '@libreng/ui/tooltip';

@Component({
    template: `
        <div class="card flex justify-center">
            <p-button pTooltip="Confirm to proceed" showDelay="1000" hideDelay="300" label="Save" />
        </div>
    `,
    standalone: true,
    imports: [ButtonModule, TooltipModule]
})
export class TooltipDelayDemo {}
```

## Event

Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.

```typescript
import { Component } from '@angular/core';
import { InputTextModule } from '@libreng/ui/inputtext';
import { TooltipModule } from '@libreng/ui/tooltip';

@Component({
    template: `
        <div class="card flex flex-wrap justify-center gap-2">
            <input type="text" pInputText pTooltip="Enter your username" tooltipEvent="focus" placeholder="focus to display tooltip" />
        </div>
    `,
    standalone: true,
    imports: [InputTextModule, TooltipModule]
})
export class TooltipEventDemo {}
```

## Tooltip Options

Tooltip is also configurable by using tooltipOptions property.

```typescript
import { Component } from '@angular/core';
import { InputTextModule } from '@libreng/ui/inputtext';
import { TooltipModule } from '@libreng/ui/tooltip';

@Component({
    template: `
        <div class="card flex justify-center">
            <input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip" />
        </div>
    `,
    standalone: true,
    imports: [InputTextModule, TooltipModule]
})
export class TooltipOptionsDemo {
    tooltipOptions: any;
}
```

## Position

Position of the tooltip is specified using tooltipPosition attribute. Valid values are top , bottom , right and left . Default position of the tooltip is right .

```typescript
import { Component } from '@angular/core';
import { InputTextModule } from '@libreng/ui/inputtext';
import { TooltipModule } from '@libreng/ui/tooltip';

@Component({
    template: `
        <div class="card flex flex-wrap justify-center gap-2">
            <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="right" placeholder="Right" />
            <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="top" placeholder="Top" />
            <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="bottom" placeholder="Bottom" />
            <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="left" placeholder="Left" />
        </div>
    `,
    standalone: true,
    imports: [InputTextModule, TooltipModule]
})
export class TooltipPositionDemo {}
```

## Tooltip

Tooltip directive provides advisory information for a component.

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dt | InputSignal<Object> | undefined | Defines scoped design tokens of the component. |
| unstyled | InputSignal<boolean> | undefined | Indicates whether the component should be rendered without styles. |
| pt | InputSignal<TooltipPassThroughOptions<unknown>> | undefined | Used to pass attributes to DOM elements inside the component. |
| ptOptions | InputSignal<PassThroughOptions> | undefined | Used to configure passthrough(pt) options of the component. |
| tooltipPosition | string | - | Position of the tooltip. |
| tooltipEvent | "hover" \| "focus" \| "both" | hover | Event to show the tooltip. |
| positionStyle | string | - | Type of CSS position. |
| tooltipStyleClass | string | - | Style class of the tooltip. |
| tooltipZIndex | string | - | Whether the z-index should be managed automatically to always go on top or have a fixed value. |
| escape | boolean | true | By default the tooltip contents are rendered as text. Set to false to support html tags in the content. |
| showDelay | number | - | Delay to show the tooltip in milliseconds. |
| hideDelay | number | - | Delay to hide the tooltip in milliseconds. |
| life | number | - | Time to wait in milliseconds to hide the tooltip even it is active. |
| positionTop | number | - | Specifies the additional vertical offset of the tooltip from its default position. |
| positionLeft | number | - | Specifies the additional horizontal offset of the tooltip from its default position. |
| autoHide | boolean | true | Whether to hide tooltip when hovering over tooltip content. |
| fitContent | boolean | true | Automatically adjusts the element position when there is not enough space on the selected position. |
| hideOnEscape | boolean | true | Whether to hide tooltip on escape key press. |
| showOnEllipsis | boolean | false | Whether to show the tooltip only when the target text overflows (e.g., ellipsis is active). |
| content | string \| TemplateRef<HTMLElement> | - | Content of the tooltip. |
| disabled | boolean | - | When present, it specifies that the component should be disabled. |
| tooltipOptions | TooltipOptions | - | Specifies the tooltip configuration options for the component. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |
| ptTooltip | InputSignal<TooltipPassThrough> | undefined | Used to pass attributes to DOM elements inside the Tooltip component. **(Deprecated)** |
| pTooltipPT | InputSignal<TooltipPassThrough> | undefined | Used to pass attributes to DOM elements inside the Tooltip component. |
| pTooltipUnstyled | InputSignal<boolean> | undefined | Indicates whether the component should be rendered without styles. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | PassThroughOption<HTMLDivElement, I> | Used to pass attributes to the root's DOM element. |
| arrow | PassThroughOption<HTMLDivElement, I> | Used to pass attributes to the arrow's DOM element. |
| text | PassThroughOption<HTMLDivElement, I> | Used to pass attributes to the text's DOM element. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-tooltip | Class name of the root element |
| p-tooltip-arrow | Class name of the arrow element |
| p-tooltip-text | Class name of the text element |

### Design Tokens

| Token | CSS Variable | Description |
|-------|--------------|-------------|
| tooltip.max.width | --p-tooltip-max-width | Max width of root |
| tooltip.gutter | --p-tooltip-gutter | Gutter of root |
| tooltip.shadow | --p-tooltip-shadow | Shadow of root |
| tooltip.padding | --p-tooltip-padding | Padding of root |
| tooltip.border.radius | --p-tooltip-border-radius | Border radius of root |
| tooltip.background | --p-tooltip-background | Background of root |
| tooltip.color | --p-tooltip-color | Color of root |

