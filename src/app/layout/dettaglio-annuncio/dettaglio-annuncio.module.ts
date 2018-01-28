import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DettaglioAnnuncioComponent} from './dettaglio-annuncio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DettaglioAnnuncioRoutingModule } from './dettaglio-annuncio-routing.module';
import {PageHeaderModule} from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    DettaglioAnnuncioRoutingModule,
      PageHeaderModule,
  FormsModule
  ],
  declarations: [DettaglioAnnuncioComponent]
})
export class DettaglioAnnuncioModule { }
