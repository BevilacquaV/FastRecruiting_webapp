import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatiIdoneiRoutingModule } from './candidati-idonei-routing.module';
import { CandidatiIdoneiComponent} from './candidati-idonei.component';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule,
    CandidatiIdoneiRoutingModule, PageHeaderModule
  ],
  declarations: [CandidatiIdoneiComponent]
})
export class CandidatiIdoneiModule { }
