import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconFieldModule } from '@libreng/ui/iconfield';
import { InputIconModule } from '@libreng/ui/inputicon';
import { InputTextModule } from '@libreng/ui/inputtext';
import { AppCodeModule } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'template-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCodeModule, IconFieldModule, InputIconModule, InputTextModule],
    template: `
        <app-docsectiontext>
            <p>An eye icon is displayed by default when the image is hovered in preview mode. Use the <i>indicator</i> template for custom content.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-iconfield iconPosition="left">
                <p-inputicon>
                    <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)" />
                        <path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)" />
                        <rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85" />
                    </svg>
                </p-inputicon>
                <input type="text" pInputText placeholder="Search" />
            </p-iconfield>
        </div>
        <app-code></app-code>
    `
})
export class TemplateDoc {}
