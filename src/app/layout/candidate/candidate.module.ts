import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {CandidateComponent } from './candidate.component';

import { CandidateRoutingModule } from './candidate-routing.module';

@NgModule({
  imports: [
    CommonModule, CandidateRoutingModule, PageHeaderModule],
  declarations: [ CandidateComponent]
})
export class CandidateModule { }
