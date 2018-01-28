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
    ff: String;
    constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private fff: FirebaseApp) {

        this.sub = this.route.params.subscribe(params => {
            this.key = params['key'];
            this.ff = params['fullname'];
            console.log('leggoooooo---: ', params['key'], this.ff);
        });

        this.ref1 = 0;
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
                this.candidatilist.push(this.ob);

                this.ref1++;
            });
        });

        /*
        Qui funziona
         */
        this.ref = fff.database().ref('/offertedilavoro');
        this.ref.once('value')
            .then(function(snapshot) {
                console.log('snapshot numChildren: ', snapshot.numChildren());
                console.log('child element: ', snapshot.child('-L2UpPY2VQxcrXc9fZUK/titolo').val());
                /*
                this.name = snapshot.child('-L2UpPY2VQxcrXc9fZUK').val();

                this.fullname = snapshot.child(this.key + '/titolo').val();
                console.log('Hooooooo.... this.name: ', this.name, ' this.fullname: ', this.fullname);
                */
            });

        /*
        qui provo ad accedere proprio alla key
         */
        this.ref = fff.database().ref('/offertedilavoro/-L3bTqgbEl7lxcqdm10s');
        this.ref.once('value')
            .then(function(snapshot) {
                console.log('snapshot numChildren: ', snapshot.numChildren());
                console.log('child element: ', snapshot.child('titolodistudio').val());
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
