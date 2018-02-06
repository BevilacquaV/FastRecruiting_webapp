import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Candidatura} from '../candidati-idonei/candidatura';
import {FirebaseApp} from 'angularfire2';

@Component({
    selector: 'app-view-candidates',
    templateUrl: './view-candidates.component.html',
    styleUrls: ['./view-candidates.component.scss']
})
export class ViewCandidatesComponent implements OnInit {

    public alerts: Array<any> = [];
    fullname: string;
    database;
    public candidatilist: Array<any> = [];
    ob;
    items;
    value;
    ref1 = 1;
    fff;
    ref;

    constructor(private db: AngularFireDatabase, private f: FirebaseApp) {
        this.fff = f;

        this.db.list('/candidature/candidature_da_analizzare/').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach( it => {
                this.ob = new Candidatura();
                this.ob.setIdCandidato(it.id_candidato);
                this.ob.setIdOfferta(it.id_offerta);
                this.ob.setDataCandidatura(it.data);
                this.ob.setKeyCandidatura(it.key);
                this.ob.setNumber(this.ref1);

                this.searchIdOfferta(it.id_offerta);
                this.searchIdCandidato(it.id_candidato);
                this.candidatilist.push(this.ob);

                this.ref1++;
            });
        });

    }


    ngOnInit() {
    }


    public searchIdOfferta(id: String) {
        this.ref = this.fff.database().ref('/offertedilavoro/' + id);
        this.ref.once('value', snapshot => {
            snapshot.forEach(value => {
                if (value.key === 'titolo') {
                    console.log('name offerta: ', value.val());
                    this.ob.setNameOfferta(value.val());

                }

            });
        });
    }


    public searchIdCandidato(id: String) {

        this.ref = this.fff.database().ref('/account/candidati/' + id);
        this.ref.once('value', snapshot => {
            snapshot.forEach(value => {
                if (value.key === 'fullname') {
                    console.log('Fullname candidato: ', value.val());
                    this.ob.setFullname(value.val());

                }

            });
        });
    }
}



