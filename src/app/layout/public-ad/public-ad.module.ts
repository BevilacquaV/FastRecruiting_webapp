import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicAdRoutingModule } from './public-ad-routing.module';
import {PublicAdComponent} from './public-ad.component';
import { PageHeaderModule } from './../../shared';


@NgModule({
  imports: [
    CommonModule,
    PublicAdRoutingModule,
      PageHeaderModule
  ],
  declarations: [PublicAdComponent]
})
export class PublicAdModule { }
