import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicAdRoutingModule } from './public-ad-routing.module';
import {PublicAdComponent} from './public-ad.component';
import { PageHeaderModule } from './../../shared';
import {FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    PublicAdRoutingModule,
      PageHeaderModule,
  FormsModule
  ],
  declarations: [PublicAdComponent]
})
export class PublicAdModule { }
