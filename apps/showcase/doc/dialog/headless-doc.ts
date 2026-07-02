import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogModule } from '@libreng/ui/dialog';
import { ButtonModule } from '@libreng/ui/button';
import { InputTextModule } from '@libreng/ui/inputtext';
import { AppCode } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'headless-doc',
    standalone: true,
    imports: [DialogModule, ButtonModule, InputTextModule, AppCode, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p><i>Headless</i> mode allows you to customize the entire user interface instead of the default elements.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-button (click)="showDialog()" icon="pi pi-user" label="Login" />
            <p-dialog maskStyleClass="backdrop-blur-sm" [(visible)]="visible" styleClass="!border-0 !bg-transparent">
                <ng-template #headless>
                    <div class="flex flex-col px-8 py-8 gap-6 rounded-2xl" style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))">
                        <svg width="33" height="33" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="60" height="60" rx="16" fill="var(--p-primary-color)" />
                            <path d="M20 14h9v27h13v9H20V14z" fill="var(--ground-background)" />
                            <rect x="45" y="41" width="9" height="9" rx="2" fill="var(--ground-background)" opacity="0.85" />
                        </svg>
                        <div class="inline-flex flex-col gap-2">
                            <label for="username" class="text-primary-50 font-semibold">Username</label>
                            <input pInputText id="username" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" />
                        </div>
                        <div class="inline-flex flex-col gap-2">
                            <label for="password" class="text-primary-50 font-semibold">Password</label>
                            <input pInputText id="password" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" type="password" />
                        </div>
                        <div class="flex items-center gap-4">
                            <p-button label="Cancel" (click)="closeDialog()" [text]="true" styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10" class="w-full" />
                            <p-button label="Sign-In" (click)="closeDialog()" [text]="true" styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10" class="w-full" />
                        </div>
                    </div>
                </ng-template>
            </p-dialog>
        </div>
        <app-code></app-code>
    `
})
export class HeadlessDoc {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    closeDialog() {
        this.visible = false;
    }
}
