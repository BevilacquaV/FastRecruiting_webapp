import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatiNonIdoneiRoutingModule } from './candidati-non-idonei-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {CandidatiNonIdoneiComponent} from './candidati-non-idonei.component';

@NgModule({
  imports: [
    CommonModule,
    CandidatiNonIdoneiRoutingModule, PageHeaderModule
  ],
  declarations: [CandidatiNonIdoneiComponent]
})
export class CandidatiNonIdoneiModule { }
