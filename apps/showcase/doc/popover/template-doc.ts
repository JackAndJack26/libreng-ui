import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PopoverModule } from '@libreng/ui/popover';
import { ButtonModule } from '@libreng/ui/button';
import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'template-doc',
    standalone: true,
    imports: [PopoverModule, ButtonModule, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>Content of the OverlayPanel is defined by <i>content</i> template.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-popover #op>
                <ng-template #content>
                    <h4>Custom Content</h4>
                </ng-template>
            </p-popover>
            <p-button (click)="op.toggle($event)" icon="pi pi-image" label="Show"></p-button>
        </div>
        <app-code></app-code>
    `
})
export class TemplateDoc {}
