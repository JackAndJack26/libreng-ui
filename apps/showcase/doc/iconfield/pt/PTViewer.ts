import { AppDocPtViewer, getPTOptions } from '@/components/doc/app.docptviewer';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from '@libreng/ui/iconfield';
import { InputIconModule } from '@libreng/ui/inputicon';
import { InputTextModule } from '@libreng/ui/inputtext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'iconfield-pt-viewer',
    standalone: true,
    imports: [CommonModule, FormsModule, AppDocPtViewer, IconFieldModule, InputIconModule, InputTextModule],
    template: `
        <app-docptviewer [docs]="docs">
            <p-iconfield>
                <p-inputicon class="pi pi-search" />
                <input pInputText [(ngModel)]="value" placeholder="Search" />
            </p-iconfield>
        </app-docptviewer>
    `
})
export class PTViewer {
    value: string | null = null;

    docs = [
        {
            data: getPTOptions('IconField'),
            key: 'IconField'
        },
        {
            data: getPTOptions('InputIcon'),
            key: 'InputIcon'
        }
    ];
}
