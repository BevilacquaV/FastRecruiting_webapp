import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PianificaColloquioComponent} from './pianifica-colloquio.component';

const routes: Routes = [
    {
        path: '', component: PianificaColloquioComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PianificaColloquioRoutingModule { }
