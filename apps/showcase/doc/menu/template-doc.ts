import { AppCodeModule } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from '@libreng/ui/api';
import { AvatarModule } from '@libreng/ui/avatar';
import { BadgeModule } from '@libreng/ui/badge';
import { MenuModule } from '@libreng/ui/menu';
import { Ripple } from '@libreng/ui/ripple';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'template-doc',
    standalone: true,
    imports: [CommonModule, MenuModule, BadgeModule, AvatarModule, Ripple, AppCodeModule, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                Menu offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter. The submenu header has its own <i>submenuheader</i> template, additional slots named <i>start</i> and
                <i>end</i> are provided to embed content before or after the menu.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-menu [model]="items" class="flex justify-center" styleClass="w-full md:w-60">
                <ng-template #start>
                    <span class="inline-flex items-center gap-1 px-2 py-2">
                        <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)" />
                            <path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)" />
                            <rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85" />
                        </svg>
                        <span class="text-xl font-semibold">PRIME<span class="text-primary">APP</span></span>
                    </span>
                </ng-template>
                <ng-template #submenuheader let-item>
                    <span class="text-primary font-bold">{{ item.label }}</span>
                </ng-template>
                <ng-template #item let-item>
                    <a pRipple class="flex items-center px-3 py-2 cursor-pointer" [class]="item.linkClass">
                        <span [class]="item.icon"></span>
                        <span class="ms-2">{{ item.label }}</span>
                        <p-badge *ngIf="item.badge" class="ms-auto" [value]="item.badge" />
                        <span *ngIf="item.shortcut" class="ms-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    </a>
                </ng-template>
                <ng-template #end>
                    <button pRipple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" shape="circle" />
                        <span class="inline-flex flex-col items-start">
                            <span class="font-bold">Amy Elsner</span>
                            <span class="text-sm">Admin</span>
                        </span>
                    </button>
                </ng-template>
            </p-menu>
        </div>
        <app-code></app-code>
    `
})
export class TemplateDoc implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                separator: true
            },
            {
                label: 'Documents',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        shortcut: '⌘+N'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search',
                        shortcut: '⌘+S'
                    }
                ]
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '⌘+O'
                    },
                    {
                        label: 'Messages',
                        icon: 'pi pi-inbox',
                        badge: '2'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        shortcut: '⌘+Q',
                        linkClass: '!text-red-500 dark:!text-red-400'
                    }
                ]
            },
            {
                separator: true
            }
        ];
    }
}
