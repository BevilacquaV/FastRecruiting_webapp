import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvaComponent } from './prova.component';

const routes: Routes = [
    {
        path: '', component: ProvaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvaRoutingModule { }
