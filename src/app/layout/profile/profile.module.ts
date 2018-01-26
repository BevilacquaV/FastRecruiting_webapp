import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { ProfileRoutingModule } from './profile-routing.module';
import {ProfileComponent} from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
      PageHeaderModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
