import { AppCodeModule } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MegaMenuItem } from '@libreng/ui/api';
import { AvatarModule } from '@libreng/ui/avatar';
import { ButtonModule } from '@libreng/ui/button';
import { MegaMenuModule } from '@libreng/ui/megamenu';
import { RippleModule } from '@libreng/ui/ripple';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'template-doc',
    standalone: true,
    imports: [CommonModule, MegaMenuModule, ButtonModule, AvatarModule, RippleModule, AppCodeModule, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>Custom content can be placed between p-megamenu tags. Megamenu should be <i>horizontal</i> for custom content.</p>
        </app-docsectiontext>
        <div class="card">
            <p-megamenu [model]="items" [style]="{ 'border-radius': '3rem', display: 'flex' }" class="p-4 bg-surface-0 dark:bg-surface-900">
                <ng-template #start>
                    <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)" />
                        <path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)" />
                        <rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85" />
                    </svg>
                </ng-template>
                <ng-template #item let-item>
                    <a *ngIf="item.root" pRipple class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
                        <i [ngClass]="item.icon"></i>
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                    <a *ngIf="!item.root && !item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-2">
                        <span class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                            <i [ngClass]="item.icon + ' text-lg'"></i>
                        </span>
                        <span class="inline-flex flex-col gap-1">
                            <span class="font-medium text-lg text-surface-900 dark:text-surface-0">{{ item.label }}</span>
                            <span class="whitespace-nowrap">{{ item.subtext }}</span>
                        </span>
                    </a>
                    <div *ngIf="item.image" class="flex flex-col items-start gap-4">
                        <img [src]="item.image" alt="megamenu-demo" class="w-full" />
                        <span>{{ item.subtext }}</span>
                        <p-button [label]="item.label" [outlined]="true"></p-button>
                    </div>
                </ng-template>
                <ng-template #end>
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                </ng-template>
            </p-megamenu>
        </div>
        <app-code></app-code>
    `
})
export class TemplateDoc implements OnInit {
    items: MegaMenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Company',
                root: true,
                items: [
                    [
                        {
                            items: [
                                { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                                { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                                { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                            ]
                        }
                    ],
                    [
                        {
                            items: [
                                { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                                { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                                { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
                            ]
                        }
                    ],
                    [
                        {
                            items: [
                                { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                                { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                                { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
                            ]
                        }
                    ],
                    [
                        {
                            items: [
                                {
                                    image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png',
                                    label: 'GET STARTED',
                                    subtext: 'Build spectacular apps in no time.'
                                }
                            ]
                        }
                    ]
                ]
            },
            {
                label: 'Resources',
                root: true
            },
            {
                label: 'Contact',
                root: true
            }
        ];
    }
}
