import { AppCodeModule } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from '@libreng/ui/inputmask';
import { InputText } from '@libreng/ui/inputtext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'basic-doc',
    standalone: true,
    imports: [FormsModule, InputMaskModule, InputText, AppCodeModule, AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>InputMask is used as a controlled input with <i>ngModel</i> properties.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <input pInputText pInputMask="99-999999" [(ngModel)]="value" placeholder="99-999999" />
        </div>
        <app-code></app-code>
    `
})
export class BasicDoc {
    value: string | undefined;
}
