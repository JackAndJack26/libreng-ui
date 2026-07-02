import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '@libreng/ui/api';
import { ContextMenuModule } from '@libreng/ui/contextmenu';
import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'router-doc',
    standalone: true,
    imports: [ContextMenuModule, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <span #span class="inline-flex items-center justify-center border-2 border-primary rounded w-16 h-16" aria-haspopup="true">
                <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)" />
                    <path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)" />
                    <rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85" />
                </svg>
            </span>
            <p-contextmenu [target]="span" [model]="items" />
        </div>
        <app-code></app-code>
    `
})
export class RouterDoc implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Router Link',
                icon: 'pi pi-palette',
                routerLink: '/theming'
            },
            {
                label: 'Programmatic',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },
            {
                label: 'External',
                icon: 'pi pi-home',
                url: 'https://angular.io//'
            }
        ];
    }
}
