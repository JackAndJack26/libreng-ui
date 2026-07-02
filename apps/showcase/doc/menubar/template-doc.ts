import { AppCodeModule } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from '@libreng/ui/api';
import { AvatarModule } from '@libreng/ui/avatar';
import { BadgeModule } from '@libreng/ui/badge';
import { InputTextModule } from '@libreng/ui/inputtext';
import { MenubarModule } from '@libreng/ui/menubar';
import { Ripple } from '@libreng/ui/ripple';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'template-doc',
    standalone: true,
    imports: [CommonModule, MenubarModule, BadgeModule, AvatarModule, InputTextModule, Ripple, AppCodeModule, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>Custom content can be placed inside the menubar using the <i>start</i> and <i>end</i> templates.</p>
        </app-docsectiontext>
        <div class="card">
            <p-menubar [model]="items">
                <ng-template #start>
                    <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)" />
                        <path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)" />
                        <rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85" />
                    </svg>
                </ng-template>
                <ng-template #item let-item let-root="root">
                    <a pRipple class="flex items-center px-4 py-3 cursor-pointer gap-2">
                        <span>{{ item.label }}</span>
                        <p-badge *ngIf="item.badge" [ngClass]="{ 'ms-auto': !root }" [value]="item.badge" />
                        <span *ngIf="item.shortcut" class="ms-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                        <i *ngIf="item.items" [ngClass]="['ms-auto pi', root ? 'pi-angle-down' : 'pi-angle-right']"></i>
                    </a>
                </ng-template>
                <ng-template #end>
                    <div class="flex items-center gap-2">
                        <input type="text" pInputText placeholder="Search" class="w-36" />
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                    </div>
                </ng-template>
            </p-menubar>
        </div>
        <app-code></app-code>
    `
})
export class TemplateDoc implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                badge: '3',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt',
                        shortcut: '⌘+S'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                        shortcut: '⌘+B'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                        shortcut: '⌘+U'
                    }
                ]
            }
        ];
    }
}
