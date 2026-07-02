import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputGroupModule } from '@libreng/ui/inputgroup';
import { InputGroupAddonModule } from '@libreng/ui/inputgroupaddon';
import { InputTextModule } from '@libreng/ui/inputtext';
import { AppCodeModule } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'multiple-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCodeModule, InputGroupModule, InputGroupAddonModule, InputTextModule],
    template: `
        <app-docsectiontext>
            <p>Multiple add-ons can be placed inside the same group.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-inputgroup class="w-full md:!w-[30rem]">
                <p-inputgroup-addon>
                    <i class="pi pi-clock"></i>
                </p-inputgroup-addon>
                <p-inputgroup-addon>
                    <i class="pi pi-star-fill"></i>
                </p-inputgroup-addon>
                <input type="text" pInputText placeholder="Price" />
                <p-inputgroup-addon>$</p-inputgroup-addon>
                <p-inputgroup-addon>.00</p-inputgroup-addon>
            </p-inputgroup>
        </div>
        <app-code></app-code>
    `
})
export class MultipleDoc {}
