import { AppDocPtViewer, getPTOptions } from '@/components/doc/app.docptviewer';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@libreng/ui/button';
import { IconFieldModule } from '@libreng/ui/iconfield';
import { InputIconModule } from '@libreng/ui/inputicon';
import { InputTextModule } from '@libreng/ui/inputtext';
import { ToolbarModule } from '@libreng/ui/toolbar';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'toolbar-pt-viewer',
    standalone: true,
    imports: [CommonModule, AppDocPtViewer, ToolbarModule, ButtonModule, InputTextModule, IconFieldModule, InputIconModule],
    template: `
        <app-docptviewer [docs]="docs">
            <p-toolbar class="w-full">
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
                    <p-button label="Save" />
                </ng-template>
            </p-toolbar>
        </app-docptviewer>
    `
})
export class PTViewer {
    docs = [
        {
            data: getPTOptions('Toolbar'),
            key: 'Toolbar'
        }
    ];
}
