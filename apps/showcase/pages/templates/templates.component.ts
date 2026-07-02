import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'templates',
    standalone: false,
    templateUrl: './templates.component.html'
})
export class TemplatesComponent {
    constructor(
        private titleService: Title,
        private metaService: Meta
    ) {
        this.titleService.setTitle('Angular Application Templates - LibreNG UI');
        this.metaService.updateTag({ name: 'description', content: 'LibreNG UI Angular application templates.' });
    }
}
