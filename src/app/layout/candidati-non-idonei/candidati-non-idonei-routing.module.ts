import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatiNonIdoneiComponent} from './candidati-non-idonei.component';

const routes: Routes = [
    {
        path: '', component:  CandidatiNonIdoneiComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatiNonIdoneiRoutingModule { }
