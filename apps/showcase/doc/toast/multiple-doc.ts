import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageService } from '@libreng/ui/api';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { AppCode } from '@/components/doc/app.code';
import { ToastModule } from '@libreng/ui/toast';
import { ButtonModule } from '@libreng/ui/button';
import { Ripple } from '@libreng/ui/ripple';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'multiple-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCode, ToastModule, ButtonModule, Ripple],
    template: `
        <app-docsectiontext>
            <p>Multiple toasts are displayed by passing an array to the <i>showAll</i> method of the <i>messageService</i>.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-toast />
            <p-button pRipple (click)="show()" label="Multiple" severity="warn" />
        </div>
        <app-code></app-code>
    `,
    providers: [MessageService]
})
export class MultipleDoc {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
            { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
            { severity: 'warn', summary: 'Message 3', detail: 'Message Content' },
            { severity: 'error', summary: 'Message 4', detail: 'Message Content' }
        ]);
    }
}
