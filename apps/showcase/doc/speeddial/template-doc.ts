import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from '@libreng/ui/api';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { AppCode } from '@/components/doc/app.code';
import { SpeedDialModule } from '@libreng/ui/speeddial';
import { ToastModule } from '@libreng/ui/toast';
import { ButtonModule } from '@libreng/ui/button';
import { CommonModule } from '@angular/common';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'template-doc',
    standalone: true,
    imports: [CommonModule, AppDocSectionText, AppCode, SpeedDialModule, ToastModule, ButtonModule],
    template: `
        <app-docsectiontext>
            <p>
                SpeedDial offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter. The button has its own <i>button</i> template, additional template named <i>icon</i> is provided to
                embed icon content for default button.
            </p>
        </app-docsectiontext>
        <div class="card">
            <div class="flex items-end justify-center" style="position: 'relative'; height: '400px'">
                <p-toast />
                <p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
                    <ng-template #button let-toggleCallback="toggleCallback">
                        <p-button outlined styleClass="border" (click)="toggleCallback($event)">
                            <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)" />
                                <path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)" />
                                <rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85" />
                            </svg>
                        </p-button>
                    </ng-template>
                    <ng-template #item let-item let-toggleCallback="toggleCallback">
                        <div class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer" (click)="toggleCallback($event, item)">
                            <span [class]="item.icon"></span>
                            <span>
                                {{ item.label }}
                            </span>
                        </div>
                    </ng-template>
                </p-speeddial>
            </div>
        </div>
        <app-code></app-code>
    `,
    providers: [MessageService]
})
export class TemplateDoc implements OnInit {
    items: MenuItem[] | undefined;

    constructor(
        private messageService: MessageService,
        private router: Router
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                }
            },
            {
                label: 'Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.open('https://angular.io/', '_blank');
                }
            }
        ];
    }
}
