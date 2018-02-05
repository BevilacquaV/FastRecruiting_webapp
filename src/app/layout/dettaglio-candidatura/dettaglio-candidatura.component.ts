import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AngularFireDatabase, AngularFireObject, snapshotChanges} from 'angularfire2/database';
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
    public name;
    public candidatilist: Array<any> = [];
    who_candidatura: String;
    public figli;
    public dettaglioCandidatura: Candidatura;
    tf;
    stile;
    vis;
    aggettivo;
    messaggio;
    constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private fff: FirebaseApp, private router: Router) {
        /*
        this.dis = 'disabled';
        this.vis = 'true';
        */
        this.sub = this.route.params.subscribe(params => {
            this.key = params['key'];
            this.who_candidatura = params['candidatura'];
            console.log('key: ', params['key'], ' page_id: ', this.who_candidatura);
        });

        if (this.who_candidatura === 'candidature_idonee') {
            this.stile = 'alert alert-success';
            this.aggettivo = 'Perfetto!';
            this.messaggio = 'Stai visualizzando una candidatura IDONEA. ';

        }
        if (this.who_candidatura === 'candidature_non_idonee') {
            this.stile = 'alert alert-danger';
            this.aggettivo = 'Attenzione!';
            this.messaggio = 'Stai visualizzando una candidatura NON IDONEA. ';
        }

        if (this.who_candidatura === 'candidature_da_verificare') {
            this.stile = 'alert alert-warning';
            this.aggettivo = 'Attenzione!';
            this.messaggio = 'Stai visualizzando una candidatura che ha richiesto assistenza tecnica. ';
        }

        if (this.who_candidatura === 'candidature_da_analizzares') {
            this.stile = 'alert alert-info';
            this.aggettivo = 'Perfetto!';
            this.messaggio = 'Ora puoi analizzare la candidatura. ';
        }

        /*
        this.dis = 'disabled';

        this.vis = 'false';
        */

        this.ob = new Candidatura();
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
        this.ref.once('value', snapshot => {
            snapshot.forEach( value => {

                console.log('value: ', value.val(), ' ---- key: ', value.key);
                if (value.key === 'titolodistudio') {
                    this.ob.setTitoloDiStudio(value.val());
                }

                if (value.key === 'cv') {
                    this.ob.setPathCV(value.val());
                }

                if (value.key === 'data') {
                    this.ob.setDataCandidatura(value.val());
                }

                if (value.key === 'data_colloquio') {
                    this.ob.setDataColloquio(value.val());
                }

                if (value.key === 'google_maps') {
                    this.ob.setLinkGoogleMaps(value.val());
                }

                if (value.key === 'id_candidato') {
                    this.ob.setIdCandidato(value.val());
                    /*
                    Cosi mi setto il fullname del candidato
                     */
                    this.searchIdCandidato(value.val());
                }

                if (value.key === 'id_offerta') {
                    this.ob.setIdOfferta(value.val());
                    /*
                    Così mi setto il nome dell'offerta
                     */
                    this.searchIdOfferta(value.val());
                }

                if (value.key === 'id_tecnico') {
                    this.ob.setIdTecnico(value.val());
                }

                if (value.key === 'lett_present') {
                    this.ob.setPathLettPresent(value.val());
                }

                if (value.key === 'luogo_colloquio') {
                    this.ob.setLuogoColloquio(value.val());
                }

                if (value.key === 'note') {
                    this.ob.setNoteCandidato(value.val());
                }

                if (value.key === 'note_recruiter') {
                    this.ob.setNoteRecruiter(value.val());
                }

                if (value.key === 'note_tecnico') {
                    this.ob.setNoteTecnico(value.val());
                }

                if (value.key === 'orario_colloquio') {
                    this.ob.setOrarioColloquio(value.val());
                }

                if (value.key === 'skill') {
                    this.ob.setSkillCandidato(value.val());
                }

            });
        });

        if (this.who_candidatura === 'candidature_idonee') {
            if (this.ob.dataColloquio === '') {
                this.vis = true;
            } else {
                this.vis = false;
            }
        } else {
            this.vis = false;
        }
            /*
        })
            .then(function(snapshot) {
                let name
                    console.log('key snapshot: ', snapshot.key);
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
                    snapshot.name = 'dasdada';

                });
*/
                /*
                return snapshot.child('skill').val();
                CONTROLLO SE ESISTE UN FIGLIO.
                if (snapshot.hasChild('skill')) {
                    alert('exists');
                }


                this.name = snapshot.child('-L2UpPY2VQxcrXc9fZUK').val();

                this.fullname = snapshot.child(this.key + '/titolo').val();
                console.log('Hooooooo.... this.name: ', this.name, ' this.fullname: ', this.fullname);
                this.router.navigateByUrl('./dashboard/');
                */


    }

    public searchIdOfferta(id: String) {


        this.ref = this.fff.database().ref('/offertedilavoro/' + id);
        this.ref.once('value', snapshot => {
            snapshot.forEach( value => {
                if (value.key === 'titolo') {
                    /* this.ob.titolodistudio = value.val(); */
                    console.log('name offerta: ', value.val());
                    this.ob.setNameOfferta(value.val());
                }

            });
        });

        /*
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
        });*/
    }

    public searchIdCandidato(id: String) {

        this.ref = this.fff.database().ref('/account/candidati/' + id);
        this.ref.once('value', snapshot => {
            snapshot.forEach( value => {
                if (value.key === 'fullname') {
                    /* this.ob.titolodistudio = value.val(); */
                    console.log('Fullname candidato: ', value.val());
                    this.ob.setFullname(value.val());
                }

            });
        });
        /*
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
        */
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
