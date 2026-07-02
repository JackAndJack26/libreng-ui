import { AppDocPtViewer, getPTOptions } from '@/components/doc/app.docptviewer';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'progressbar-pt-viewer',
    standalone: true,
    imports: [CommonModule, AppDocPtViewer, ProgressBarModule],
    template: `
        <app-docptviewer [docs]="docs">
            <div class="w-full">
                <p-progressbar [value]="50"></p-progressbar>
            </div>
        </app-docptviewer>
    `
})
export class PTViewer {
    docs = [
        {
            data: getPTOptions('ProgressBar'),
            key: 'ProgressBar'
        }
    ];
}
