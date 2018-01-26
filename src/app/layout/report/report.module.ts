import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent} from './report.component';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule, PageHeaderModule
  ],
  declarations: [ReportComponent]
})
export class ReportModule { }

