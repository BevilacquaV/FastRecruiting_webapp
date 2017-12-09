import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCandidatesRoutingModule } from './view-candidates-routing.module';
import { ViewCandidatesComponent} from './view-candidates.component';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
    imports: [
        CommonModule, ViewCandidatesRoutingModule, PageHeaderModule],
    declarations: [ViewCandidatesComponent]
})
export class ViewCandidatesModule { }
