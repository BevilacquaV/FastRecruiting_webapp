import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DettaglioCandidaturaRoutingModule } from './dettaglio-candidatura-routing.module';
import { DettaglioCandidaturaComponent} from './dettaglio-candidatura.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageHeaderModule} from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    DettaglioCandidaturaRoutingModule,
      PageHeaderModule,
      FormsModule
  ],
  declarations: [DettaglioCandidaturaComponent]
})
export class DettaglioCandidaturaModule { }
