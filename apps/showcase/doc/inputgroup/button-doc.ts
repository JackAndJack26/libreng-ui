import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from '@libreng/ui/api';
import { InputGroupModule } from '@libreng/ui/inputgroup';
import { InputGroupAddonModule } from '@libreng/ui/inputgroupaddon';
import { InputTextModule } from '@libreng/ui/inputtext';
import { ButtonModule } from '@libreng/ui/button';
import { MenuModule } from '@libreng/ui/menu';
import { AppCodeModule } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'button-doc',
    standalone: true,
    imports: [AppDocSectionText, AppCodeModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule, MenuModule],
    template: `
        <app-docsectiontext>
            <p>Buttons can be placed at either side of an input element.</p>
        </app-docsectiontext>
        <div class="card flex flex-col md:flex-row gap-4">
            <p-inputgroup>
                <p-button label="Search" />
                <input pInputText placeholder="Keyword" />
            </p-inputgroup>

            <p-inputgroup>
                <input pInputText placeholder="Keyword" />
                <p-inputgroup-addon>
                    <p-button icon="pi pi-search" severity="secondary" variant="text" (click)="menu.toggle($event)" />
                </p-inputgroup-addon>
            </p-inputgroup>
            <p-menu #menu [model]="items" popup styleClass="!min-w-fit" />

            <p-inputgroup>
                <p-inputgroup-addon>
                    <p-button icon="pi pi-check" severity="secondary" />
                </p-inputgroup-addon>
                <input pInputText placeholder="Vote" />
                <p-inputgroup-addon>
                    <p-button icon="pi pi-times" severity="secondary" />
                </p-inputgroup-addon>
            </p-inputgroup>
        </div>
        <app-code></app-code>
    `
})
export class ButtonDoc {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }];
    }
}
