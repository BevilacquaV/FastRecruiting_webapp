import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Joboffer} from './joboffer';

import { Md5 } from '../../../../node_modules/md5-typescript/Md5';
import { AngularFireModule } from 'angularfire2';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    fullname: String;
    database;
    public jobsofferlist: Array<any> = [];
    public ob;
    items;
    value;
    ref1;

    constructor(private db: AngularFireDatabase) {
        this.database = this.db.list('/offertedilavoro/', ref => ref.orderByChild('titolo'));
        /*
        this.database.update('-L2Uoy3wW3mj9MHFX_Dg', { annuncio : 'ci sono' });
        this.database.set('-L2Uoy3wW3mj9MHFX_Dg', { annuncio : 'modifica l intero oggetto' });

        this.db.list('/offertedilavoro').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            console.log('provo: ', items.forEach( it => console.log('it.key: ', it.key, it.titolo)));
        });

        */
        this.db.list('/offertedilavoro', ref => ref.orderByChild('titolo')).snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach( it => {
                if ('yes' !== it.active) {
                } else {
                    this.ob = new Joboffer(it.titolo, it.luogodilavoro, it.skill, it.annuncio,
                        it.titolodistudio, it.key);
                    this.jobsofferlist.push(this.ob);
                    console.log('Annuncio: ', it.annuncio, ' Luogo di lavoro: ', it.luogodilavoro,
                        ' titolo di studio: ', it.titolodistudio, ' key: ', it.key);
                }
            });
        });
        /*
        this.database.valueChanges().forEach(el => {
            el.forEach(element => {
                if (element.active === 'yes') {
                    this.ob = new Joboffer(element.titolo, element.luogodilavoro, element.skill, element.annuncio,
                        element.titolodistudio);
                    this.jobsofferlist.push(this.ob);
                    console.log('Annuncio: ', element.annuncio, ' Luogo di lavoro: ', element.luogodilavoro,
                        ' titolo di studio: ', element.titolodistudio);
                }
            });

        });
*/
        this.fullname = sessionStorage.getItem('SessionName');
        /* console.log('Session dashboard: ', this.fullname); */
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'Annunci Pubblicati',
                text:
                    'Scorri la pagina per visualizzare le offerte di lavoro pubblicate.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
