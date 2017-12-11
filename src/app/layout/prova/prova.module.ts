import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvaRoutingModule } from './prova-routing.module';
import { ProvaComponent } from './prova.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ProvaRoutingModule, PageHeaderModule],
    declarations: [ProvaComponent]
})
export class ProvaModule {}
