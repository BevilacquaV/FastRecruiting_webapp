import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Joboffer} from '../dashboard/joboffer';
import {FirebaseApp} from 'angularfire2';

@Component({
  selector: 'app-dettaglio-annuncio',
  templateUrl: './dettaglio-annuncio.component.html',
  styleUrls: ['./dettaglio-annuncio.component.scss']
})
export class DettaglioAnnuncioComponent implements OnInit, OnDestroy {

    private sub: any;
    database;
    log: string;
    flag: boolean;
    job: Joboffer;
    d;
    key: String;
    ob: Joboffer;
    ref;
    name: String;
        fullname: String;
    constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {


        this.job = {titolo: '', luogodilavoro: '',
            skill: '', annuncio: '', titolodistudio: '', key: ''};

        this.sub = this.route.params.subscribe(params => {
            this.key = params['key'];
            console.log('leggo: ', params['key']);
        });

        /*
        this.ref = dat.database().ref('/offertedilavoro/');
        console.log(this.ref.database.titolodistudio);
        this.ref.once('value')
            .then(function(snapshot) {
                this.name = snapshot.child('-L2UpPY2VQxcrXc9fZUK').val();
                this.fullname = snapshot.child(this.key + '/titolo').val();
                console.log('this.name: ', this.name, ' this.fullname: ', this.fullname);
            });

*/
        this.database = this.db.list('/offertedilavoro/');

        this.db.list('/offertedilavoro').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach(it => {

                if (this.key !== it.key) {
                } else {
                    this.ob = new Joboffer(it.titolo, it.luogodilavoro, it.skill, it.annuncio,
                        it.titolodistudio, it.key);
                    this.job.titolo = it.titolo;
                    this.job.luogodilavoro = it.luogodilavoro;
                    this.job.skill = it.skill;
                    this.job.annuncio = it.annuncio;
                    this.job.titolo = it.titolo;
                    this.job.titolodistudio = it.titolodistudio;

                }
            });
        });
}

ngOnInit() {
}

ngOnDestroy() {
 this.sub.unsubscribe();
}
}
