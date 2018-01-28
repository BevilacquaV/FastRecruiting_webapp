import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Candidatura} from './candidatura';

import { Md5 } from '../../../../node_modules/md5-typescript/Md5';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-candidati-idonei',
  templateUrl: './candidati-idonei.component.html',
  styleUrls: ['./candidati-idonei.component.scss']
})
export class CandidatiIdoneiComponent implements OnInit {

    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    fullname: String;
    database;
    public candidatilist: Array<any> = [];
    ob: Candidatura;
    items;
    value;
    ref1 = 1;
    constructor(private db: AngularFireDatabase) {
        this.database = this.db.list('/candidature/candidature_idonee');
        /*
        this.database.update('-L2Uoy3wW3mj9MHFX_Dg', { annuncio : 'ci sono' });
        this.database.set('-L2Uoy3wW3mj9MHFX_Dg', { annuncio : 'modifica l intero oggetto' });

        this.db.list('/offertedilavoro').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            console.log('provo: ', items.forEach( it => console.log('it.key: ', it.key, it.titolo)));
        });

        */
        this.db.list('/candidature/candidature_idonee').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach( it => {
                    this.ob = new Candidatura(this.ref1, it.id_candidato, it.id_offerta, it.data, it.key);
                    this.searchIdOfferta(it.id_offerta);
                    this.searchIdCandidato(it.id_candidato);
                    console.log('devo inviare questo: ', this.ob.key_candidatura)
                    this.candidatilist.push(this.ob);

                    this.ref1++;
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

    public searchIdOfferta(id: String) {
        this.database = this.db.list('/offertedilavoro');
        this.db.list('/offertedilavoro').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach( it => {
                if (id !== it.key) {
                } else {
                    this.ob.offerta = it.titolo;
                }
            });
        });
    }

    public searchIdCandidato(id: String) {
        this.database = this.db.list('/account/candidati');
        this.db.list('/account/candidati').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach( it => {
                if (id !== it.key) {
                } else {
                    this.ob.fullname = it.fullname;
                }
            });
        });
    }
}
