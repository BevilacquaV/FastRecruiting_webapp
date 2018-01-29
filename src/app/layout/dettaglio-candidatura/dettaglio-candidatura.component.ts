import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Joboffer} from '../dashboard/joboffer';
import {FirebaseApp} from 'angularfire2';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import {Candidatura} from '../candidati-idonei/candidatura';

import { Md5 } from '../../../../node_modules/md5-typescript/Md5';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {DatabaseReference} from 'angularfire2/database';

@Component({
  selector: 'app-dettaglio-candidatura',
  templateUrl: './dettaglio-candidatura.component.html',
  styleUrls: ['./dettaglio-candidatura.component.scss']
})
export class DettaglioCandidaturaComponent implements OnInit, OnDestroy {

    private sub: any;
    database;
    log: string;
    flag: boolean;
    job: Joboffer;
    d;
    key: String;
    ob: Candidatura;
    ref;
    name;
    public candidatilist: Array<any> = [];
    fullname;
    ref1;
    who_candidatura: String;
    constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private fff: FirebaseApp) {

        this.sub = this.route.params.subscribe(params => {
            this.key = params['key'];
            this.who_candidatura = params['candidatura'];
            console.log('key: ', params['key'], ' page_id: ', this.who_candidatura);
        });

        this.ref1 = 0;
        /*
         this.database = this.db.list('/candidature/' + this.who_candidatura);
        this.database.update('-L2Uoy3wW3mj9MHFX_Dg', { annuncio : 'ci sono' });
        this.database.set('-L2Uoy3wW3mj9MHFX_Dg', { annuncio : 'modifica l intero oggetto' });

        this.db.list('/candidature/' + this.who_candidatura).snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach( it => {
                this.ob = new Candidatura(this.ref1, it.id_candidato, it.id_offerta, it.data, it.key);
                this.candidatilist.push(this.ob);

                this.ref1++;
            });
        });
        */

        this.ref = fff.database().ref('/candidature/' + this.who_candidatura + '/' + this.key);
        this.ref.once('value')
            .then(function(snapshot) {
                console.log('snapshot numChildren: ', snapshot.numChildren());
                console.log('Titolo di studio: ', snapshot.child('titolodistudio').val());
                console.log('PATH CV: ', snapshot.child('cv').val());
                console.log('Data: ', snapshot.child('data').val());
                console.log('Data Colloquio: ', snapshot.child('data_colloquio').val());
                console.log('Google Maps: ', snapshot.child('google_maps').val());
                console.log('Id Candidato: ', snapshot.child('id_candidato').val());
                console.log('Id offerta: ', snapshot.child('id_offerta').val());
                console.log('Id Tecnico: ', snapshot.child('id_tecnico').val());
                console.log('Lettera di presentazione: ', snapshot.child('lett_present').val());
                console.log('Luogo Colloquio: ', snapshot.child('luogo_colloquio').val());
                console.log('Note candidato: ', snapshot.child('note').val());
                console.log('Note recruiter: ', snapshot.child('note_recruiter').val());
                console.log('Note tecnico: ', snapshot.child('note_tecnico').val());
                console.log('Orario colloquio: ', snapshot.child('orario_colloquio').val());
                console.log('Skill: ', snapshot.child('skill').val());

                /*
                CONTROLLO SE ESISTE UN FIGLIO.
                if (snapshot.hasChild('skill')) {
                    alert('exists');
                }
                */
                /*
                this.name = snapshot.child('-L2UpPY2VQxcrXc9fZUK').val();

                this.fullname = snapshot.child(this.key + '/titolo').val();
                console.log('Hooooooo.... this.name: ', this.name, ' this.fullname: ', this.fullname);
                */
            });


    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
