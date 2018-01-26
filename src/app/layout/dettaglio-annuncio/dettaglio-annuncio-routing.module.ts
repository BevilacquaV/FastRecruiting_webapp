import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioAnnuncioComponent} from './dettaglio-annuncio.component';

const routes: Routes = [
    {
      path: '', component: DettaglioAnnuncioComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DettaglioAnnuncioRoutingModule { }
