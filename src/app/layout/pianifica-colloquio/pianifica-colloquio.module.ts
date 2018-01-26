import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PianificaColloquioRoutingModule } from './pianifica-colloquio-routing.module';
import {PianificaColloquioComponent} from './pianifica-colloquio.component';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule,
    PianificaColloquioRoutingModule, PageHeaderModule
  ],
  declarations: [PianificaColloquioComponent]
})
export class PianificaColloquioModule { }
