import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppDoc } from '@/components/doc/app.doc';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'template-update',
    standalone: true,
    imports: [AppDoc],
    templateUrl: './templateupdatedemo.component.html'
})
export class TemplateUpdateDemoComponent {
    docs = [];
}
