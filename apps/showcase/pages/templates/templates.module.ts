import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { ButtonModule } from '@libreng/ui/button';

@NgModule({
    declarations: [TemplatesComponent],
    imports: [CommonModule, TemplatesRoutingModule, ButtonModule]
})
export class TemplatesModule {}
