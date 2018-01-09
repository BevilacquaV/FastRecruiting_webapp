import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicAdComponent} from './public-ad.component';

const routes: Routes = [
    {
        path: '', component: PublicAdComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicAdRoutingModule { }
