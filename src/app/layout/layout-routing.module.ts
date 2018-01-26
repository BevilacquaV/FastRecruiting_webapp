import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            /*
            { path: 'selected-candidates/:key', loadChildren: './selected-candidates/selected-candidates.module#SelectedCandidatesModule' },
            */
            { path: 'view-candidates', loadChildren: './view-candidates/view-candidates.module#ViewCandidatesModule' },
            { path: 'public-ad', loadChildren: './public-ad/public-ad.module#PublicAdModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'candidate/:id', loadChildren: './candidate/candidate.module#CandidateModule' },
            { path: 'candidati-idonei', loadChildren: './candidati-idonei/candidati-idonei.module#CandidatiIdoneiModule' },
            { path: 'candidati-non-idonei', loadChildren: './candidati-non-idonei/candidati-non-idonei.module#CandidatiNonIdoneiModule' },
            { path: 'candidati-da-verificare',
                loadChildren: './candidati-da-verificare/candidati-da-verificare.module#CandidatiDaVerificareModule' },
            { path: 'dettaglio-annuncio/:key', loadChildren: './dettaglio-annuncio/dettaglio-annuncio.module#DettaglioAnnuncioModule' },
            { path: 'report', loadChildren: './report/report.module#ReportModule' },
            { path: 'pianifica-colloquio', loadChildren: './pianifica-colloquio/pianifica-colloquio.module#PianificaColloquioModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
