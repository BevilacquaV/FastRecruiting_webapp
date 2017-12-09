import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedCandidatesRoutingModule } from './selected-candidates-routing.module';
import {SelectedCandidatesComponent} from './selected-candidates.component';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
    imports: [
        CommonModule,
        SelectedCandidatesRoutingModule, PageHeaderModule
    ],
    declarations: [SelectedCandidatesComponent]
})
export class SelectedCandidatesModule { }
