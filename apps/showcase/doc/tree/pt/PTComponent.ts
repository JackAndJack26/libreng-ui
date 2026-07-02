import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PTViewer } from './PTViewer';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [PTViewer],
    template: ` <tree-pt-viewer /> `
})
export class PTComponent {}
