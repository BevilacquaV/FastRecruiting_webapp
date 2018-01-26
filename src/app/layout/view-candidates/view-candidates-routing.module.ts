import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewCandidatesComponent} from './view-candidates.component';

const routes: Routes = [
    {
        path: '', component: ViewCandidatesComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewCandidatesRoutingModule { }
