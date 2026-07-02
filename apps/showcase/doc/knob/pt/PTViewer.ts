import { AppDocPtViewer, getPTOptions } from '@/components/doc/app.docptviewer';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from '@libreng/ui/knob';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'knob-pt-viewer',
    standalone: true,
    imports: [CommonModule, AppDocPtViewer, KnobModule, FormsModule],
    template: `
        <app-docptviewer [docs]="docs">
            <p-knob [(ngModel)]="value"></p-knob>
        </app-docptviewer>
    `
})
export class PTViewer {
    value = 0;

    docs = [
        {
            data: getPTOptions('Knob'),
            key: 'Knob'
        }
    ];
}
