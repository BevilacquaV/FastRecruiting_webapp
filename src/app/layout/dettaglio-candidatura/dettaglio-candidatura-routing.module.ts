import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioCandidaturaComponent} from './dettaglio-candidatura.component';

const routes: Routes = [
    {
        path: '', component: DettaglioCandidaturaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DettaglioCandidaturaRoutingModule { }
