import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { AppCode } from '@/components/doc/app.code';
import { ToolbarModule } from '@libreng/ui/toolbar';
import { ButtonModule } from '@libreng/ui/button';
import { AvatarModule } from '@libreng/ui/avatar';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'custom-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode, ToolbarModule, ButtonModule, AvatarModule],
    template: `
        <app-docsectiontext>
            <p>Content can also be placed using the <i>start</i>, <i>center</i> and <i>end</i> templates.</p>
        </app-docsectiontext>
        <div class="card">
            <p-toolbar [style]="{ 'border-radius': '3rem', padding: '1rem 1rem 1rem 1.5rem' }">
                <ng-template #start>
                    <div class="flex items-center gap-2">
                        <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)" />
                            <path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)" />
                            <rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85" />
                        </svg>
                        <p-button label="Files" text plain />
                        <p-button label="Edit" text plain />
                        <p-button label="View" text plain />
                    </div>
                </ng-template>

                <ng-template #end>
                    <div class="flex items-center gap-2">
                        <p-button label="Share" severity="contrast" size="small" />
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" [style]="{ width: '32px', height: '32px' }" />
                    </div>
                </ng-template>
            </p-toolbar>
        </div>
        <app-code></app-code>
    `
})
export class CustomDoc {}
