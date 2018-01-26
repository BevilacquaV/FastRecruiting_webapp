import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatiDaVerificareRoutingModule } from './candidati-da-verificare-routing.module';
import {CandidatiDaVerificareComponent} from './candidati-da-verificare.component';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule,
    CandidatiDaVerificareRoutingModule,
      PageHeaderModule
  ],
  declarations: [CandidatiDaVerificareComponent]
})
export class CandidatiDaVerificareModule { }
