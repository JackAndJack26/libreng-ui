import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from '@libreng/ui/api';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { AppCode } from '@/components/doc/app.code';
import { ToolbarModule } from '@libreng/ui/toolbar';
import { ButtonModule } from '@libreng/ui/button';
import { SplitButtonModule } from '@libreng/ui/splitbutton';
import { InputTextModule } from '@libreng/ui/inputtext';
import { IconFieldModule } from '@libreng/ui/iconfield';
import { InputIconModule } from '@libreng/ui/inputicon';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'basic-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode, ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, IconFieldModule, InputIconModule],
    template: `
        <app-docsectiontext>
            <p>
                Toolbar is a grouping component for buttons and other content. Its content can be placed inside the
                <i>start</i>, <i>center</i> and <i>end</i> sections.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-toolbar>
                <ng-template #start>
                    <p-button icon="pi pi-plus" class="mr-2" text severity="secondary" />
                    <p-button icon="pi pi-print" class="mr-2" text severity="secondary" />
                    <p-button icon="pi pi-upload" text severity="secondary" />
                </ng-template>
                <ng-template #center>
                    <p-iconfield iconPosition="left">
                        <p-inputicon class="pi pi-search" />
                        <input type="text" pInputText placeholder="Search" />
                    </p-iconfield>
                </ng-template>
                <ng-template #end>
                    <p-splitbutton label="Save" [model]="items" />
                </ng-template>
            </p-toolbar>
        </div>
        <app-code></app-code>
    `
})
export class BasicDoc implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }
}
