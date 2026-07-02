import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Drawer } from '@libreng/ui/drawer';
import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { DrawerModule } from '@libreng/ui/drawer';
import { ButtonModule } from '@libreng/ui/button';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from '@libreng/ui/avatar';
import { RippleModule } from '@libreng/ui/ripple';
import { StyleClassModule } from '@libreng/ui/styleclass';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'headless-doc',
    standalone: true,
    imports: [AppCode, AppDocSectionText, DrawerModule, ButtonModule, FormsModule, AvatarModule, RippleModule, StyleClassModule],
    template: `
        <app-docsectiontext>
            <p><i>Headless</i> mode allows you to customize the entire user interface instead of the default elements.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-drawer #drawerRef [(visible)]="visible">
                <ng-template #headless>
                    <div class="flex flex-col h-full">
                        <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                            <span class="inline-flex items-center gap-2">
                                <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)" />
                                    <path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)" />
                                    <rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85" />
                                </svg>
                                <span class="font-semibold text-2xl text-primary">Your Logo</span>
                            </span>
                            <span>
                                <p-button type="button" (click)="closeCallback($event)" icon="pi pi-times" rounded="true" outlined="true" styleClass="h-8 w-8"></p-button>
                            </span>
                        </div>
                        <div class="overflow-y-auto">
                            <ul class="list-none p-4 m-0">
                                <li>
                                    <div
                                        pRipple
                                        pStyleClass="@next"
                                        enterFromClass="hidden"
                                        enterActiveClass="animate-slidedown"
                                        leaveToClass="hidden"
                                        leaveActiveClass="animate-slideup"
                                        class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                                    >
                                        <span class="font-medium">FAVORITES</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                <i class="pi pi-home mr-2"></i>
                                                <span class="font-medium">Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                <i class="pi pi-bookmark mr-2"></i>
                                                <span class="font-medium">Bookmarks</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                pRipple
                                                pStyleClass="@next"
                                                enterFromClass="hidden"
                                                enterActiveClass="animate-slidedown"
                                                leaveToClass="hidden"
                                                leaveActiveClass="animate-slideup"
                                                class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Reports</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                                <li>
                                                    <a
                                                        pRipple
                                                        pStyleClass="@next"
                                                        enterFromClass="hidden"
                                                        enterActiveClass="animate-slidedown"
                                                        leaveToClass="hidden"
                                                        leaveActiveClass="animate-slideup"
                                                        class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                                    >
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Revenue</span>
                                                        <i class="pi pi-chevron-down ml-auto"></i>
                                                    </a>
                                                    <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                                        <li>
                                                            <a
                                                                pRipple
                                                                class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                                            >
                                                                <i class="pi pi-table mr-2"></i>
                                                                <span class="font-medium">View</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                pRipple
                                                                class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                                            >
                                                                <i class="pi pi-search mr-2"></i>
                                                                <span class="font-medium">Search</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Expenses</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                <i class="pi pi-users mr-2"></i>
                                                <span class="font-medium">Team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                <i class="pi pi-comments mr-2"></i>
                                                <span class="font-medium">Messages</span>
                                                <span class="inline-flex items-center justify-center ml-auto bg-primary text-primary-contrast rounded-full" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                <i class="pi pi-calendar mr-2"></i>
                                                <span class="font-medium">Calendar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="list-none p-4 m-0">
                                <li>
                                    <div
                                        pRipple
                                        pStyleClass="@next"
                                        enterFromClass="hidden"
                                        enterActiveClass="animate-slidedown"
                                        leaveToClass="hidden"
                                        leaveActiveClass="animate-slideup"
                                        class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                                    >
                                        <span class="font-medium">APPLICATION</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                <i class="pi pi-folder mr-2"></i>
                                                <span class="font-medium">Projects</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                <i class="pi pi-chart-bar mr-2"></i>
                                                <span class="font-medium">Performance</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <hr class="mb-4 mx-4 border-t border-0 border-surface" />
                            <a pRipple class="m-4 flex items-center cursor-pointer p-4 gap-2 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                                <span class="font-bold">Amy Elsner</span>
                            </a>
                        </div>
                    </div>
                </ng-template>
            </p-drawer>
            <p-button (click)="visible = true" icon="pi pi-bars" />
        </div>
        <app-code></app-code>
    `
})
export class HeadlessDoc {
    @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e): void {
        this.drawerRef.close(e);
    }

    visible: boolean = false;
}
