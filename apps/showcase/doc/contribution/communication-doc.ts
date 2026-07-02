import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'communication-doc',
    standalone: true,
    imports: [AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                Join the <a href="https://github.com/capivaramu/orbia-ui/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> to connect with maintainers and fellow contributors. There you can discuss the areas you want to
                contribute to and receive feedback. This channel is open to everyone who'd like to contribute.
            </p>
        </app-docsectiontext>
    `
})
export class CommunicationDoc {}
