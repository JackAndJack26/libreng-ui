import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'examples-doc',
    standalone: true,
    imports: [AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>The showcase application in this repository is a complete reference implementation. Browse its source at <a href="https://github.com/JackAndJack26/libreng-ui/tree/main/apps/showcase">GitHub</a>.</p>
        </app-docsectiontext>
    `
})
export class ExamplesDoc {}
