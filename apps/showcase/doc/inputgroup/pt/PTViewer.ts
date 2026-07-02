import { AppDocPtViewer, getPTOptions } from '@/components/doc/app.docptviewer';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from '@libreng/ui/inputgroup';
import { InputGroupAddonModule } from '@libreng/ui/inputgroupaddon';
import { InputTextModule } from '@libreng/ui/inputtext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'inputgroup-pt-viewer',
    standalone: true,
    imports: [CommonModule, AppDocPtViewer, InputGroupModule, InputGroupAddonModule, InputTextModule, FormsModule],
    template: `
        <app-docptviewer [docs]="docs">
            <p-inputgroup>
                <p-inputgroup-addon>
                    <i class="pi pi-user"></i>
                </p-inputgroup-addon>
                <input pInputText [(ngModel)]="value" placeholder="Username" />
            </p-inputgroup>
        </app-docptviewer>
    `
})
export class PTViewer {
    value: number | null = null;

    docs = [
        {
            data: getPTOptions('InputGroup'),
            key: 'InputGroup'
        },
        {
            data: getPTOptions('InputGroupAddon'),
            key: 'InputGroupAddon'
        }
    ];
}
