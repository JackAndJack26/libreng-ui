import { AppDocPtViewer, getPTOptions } from '@/components/doc/app.docptviewer';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from '@libreng/ui/inputtext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'inputtext-pt-viewer',
    standalone: true,
    imports: [CommonModule, AppDocPtViewer, InputTextModule, FormsModule],
    template: `
        <app-docptviewer [docs]="docs">
            <input pInputText [(ngModel)]="value" placeholder="Username" />
        </app-docptviewer>
    `
})
export class PTViewer {
    value: string | null = null;

    docs = [
        {
            data: getPTOptions('InputText'),
            key: 'InputText'
        }
    ];
}
