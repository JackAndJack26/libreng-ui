import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarModule } from '@libreng/ui/avatar';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'template-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode, AvatarModule],
    template: `
        <app-docsectiontext>
            <p>Content can easily be customized with the dynamic content instead of using the built-in modes.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-avatar size="xlarge">
                <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)" />
                    <path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)" />
                    <rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85" />
                </svg>
            </p-avatar>
        </div>
        <app-code></app-code>
    `
})
export class TemplateDoc {}
