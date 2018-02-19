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
import {Valutazione} from './valutazione';
import {Tecnico} from './tecnico';

@Component({
    selector: 'app-dettaglio-candidatura',
    templateUrl: './dettaglio-candidatura.component.html',
    styleUrls: ['./dettaglio-candidatura.component.scss']
})
export class DettaglioCandidaturaComponent implements OnInit, OnDestroy {
    /* Vincenzo */
    data;
    luogo;
    orario;
    url;
    alert;
    vis_pianifica;
    notaRecruiter;
    nota;



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
    public valuta: Valutazione ;
    tecnico;
    keytecnico;
    nomeTecnico= '';
    vistaIdoneo;
    vistaNonIdoneo;
    vistaTecnico;
    scelgoTecnico;
    public tecnicotilist: Array<any> = [];
    databaseAttenzione;
    pianifica;

    constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private fff: FirebaseApp, private router: Router) {
        this.orario = '';
        this.nota = false;
        this.notaRecruiter = '';
        this.luogo = '';
        this.url = '';
        this.data = '';
        this.alert = false;
        this.valuta = {valore: 'Idoneo'};
        this.sub = this.route.params.subscribe(params => {
            this.key = params['key'];
            this.who_candidatura = params['candidatura'];
            if ( this.who_candidatura === 'candidature_da_pianificare') {
                this.pianifica = params['pianifica'];
                console.log(' devo pianificare:', this.pianifica);
            }

            console.log('key: ', params['key'], ' page_id: ', this.who_candidatura, ' devo pianificare:', this.pianifica);
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

        if (this.who_candidatura === 'candidature_da_analizzare') {
            this.stile = 'alert alert-info';
            this.aggettivo = 'Perfetto!';
            this.messaggio = 'Ora puoi analizzare la candidatura. ';
        }

        if (this.who_candidatura === 'candidature_da_pianificare') {
            this.stile = 'alert alert-success';
            this.aggettivo = 'Perfetto!';
            this.messaggio = 'Stai visualizzando una candidatura IDONEA. ';

        }

        /*
        this.dis = 'disabled';

        this.vis = 'false';
        */

        this.ob = new Candidatura();
        if (this.who_candidatura === 'candidature_da_pianificare') {
            this.vis_pianifica = true;
            this.who_candidatura = 'candidature_idonee';
        } else {
            this.vis_pianifica = false;
        }
        this.ref = fff.database().ref('/candidature/' + this.who_candidatura + '/' + this.key);
        this.ref.once('value', snapshot => {
            snapshot.forEach( value => {

                console.log('value: ', value.val(), ' ---- key: ', value.key);
                if (value.key === 'titolodistudio') {
                    this.ob.setTitoloDiStudio(value.val());
                    console.log('titotlo di studio ' + value.val());
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

                if (value.key === 'lett_presentazione') {
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

                if (value.key === 'note_candidato') {
                    this.ob.setNoteCandidato(value.val());
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

                if (value.key === 'giudizio') {
                    this.ob.setGiudizioTecnico(value.val());
                }

            });
        });




        if (this.who_candidatura === 'candidature_da_analizzare' || this.who_candidatura === 'candidature_da_verificare') {
            this.vis = true;
        } else {
            this.vis = false;
        }

        /* carica il responsabile tecnico nella selecet  */
        this.db.list('/account/tecnico/').snapshotChanges().map(actions => {
            return actions.map(action => ({key: action.key, ...action.payload.val()}));
        }).subscribe(items => {
            items.forEach(it => {
                this.tecnico = new Tecnico('', '', '', '');
                this.tecnico.fullname = it.fullname;
                this.nomeTecnico = it.fullname;
                this.tecnicotilist.push(this.tecnico);

            });
        });

    }



    /*  metodo per visualizzare i bottoni e le select*/
    onVisualizza() {

        this.onIdoneo();
        this.onNonIdoneo();
        this.onVisualizzaTecnico();
    }


    onIdoneo() {
        if (this.valuta.valore === 'Idoneo' ) {
            this.vistaIdoneo = true;
            this.vistaNonIdoneo = false;
            this.vistaTecnico = false;
            this.scelgoTecnico = false;
            this.nota = false;
        } else {
            this.vistaIdoneo = false;
        }
    }

    onNonIdoneo() {
        if (this.valuta.valore === 'Non Idoneo' ) {
            this.vistaNonIdoneo = true;
            this.vistaIdoneo = false;
            this.vistaTecnico = false;
            this.scelgoTecnico = false;
            this.nota = false;
        } else {
            this.vistaNonIdoneo = false;

        }
    }

    onVisualizzaTecnico() {
        if (this.valuta.valore === 'Richiedi attenzione' ) {
            this.vistaNonIdoneo = false;
            this.vistaTecnico = true;
            this.vistaIdoneo = false;
            this.scelgoTecnico = false;
            this.nota = false;

        } else {
            this.vistaTecnico = false;

        }
    }


    onScelgoTecnico() {
        this.scelgoTecnico = true;
        this.nota = true;
    }

    onStoreIdoneo() {
        this.database = this.db.list('/candidature/candidature_idonee/');
        const saveData = {cv: this.ob.pathCV, data: this.ob.dataCandidatura, data_colloquio: this.ob.dataColloquio,
            google_maps: this.ob.linkGoogleMaps, id_candidato: this.ob.idCandidato, id_offerta: this.ob.idOfferta,
            id_tecnico: this.ob.idTecnico, lett_presentazione: this.ob.pathLettPresent, luogo_colloquio: this.ob.luogoColloquio,
            note: this.ob.noteCandidato, note_recruiter: this.ob.noteRecruiter, note_tecnico: this.ob.noteTecnico,
            orario_colloquio: this.ob.orarioColloquio, skill: this.ob.skillCandidato, titolodistudio: this.ob.titolodistudio,
            fullnameCandidato: this.ob.fullname, titoloOfferta: this.ob.offerta, giudizio: this.ob.giudizioTecnico};
        console.log(saveData);
        this.database.push( saveData );
        if (this.who_candidatura === 'candidature_da_analizzare') {
            this.db.list('/candidature/candidature_da_analizzare').remove('' + this.key);
            this.router.navigateByUrl('/view-candidates');
        }
        if (this.who_candidatura === 'candidature_da_verificare') {
            this.db.list('/candidature/candidature_da_verificare').remove('' + this.key);
            this.router.navigateByUrl('/candidati-da-verificare');
        }
    }

    onStoreNonIdoneo() {
        this.database = this.db.list('/candidature/candidature_non_idonee/');
        const saveData = {cv: this.ob.pathCV, data: this.ob.dataCandidatura, data_colloquio: this.ob.dataColloquio,
            google_maps: this.ob.linkGoogleMaps, id_candidato: this.ob.idCandidato, id_offerta: this.ob.idOfferta,
            id_tecnico: this.ob.idTecnico, lett_presentazione: this.ob.pathLettPresent, luogo_colloquio: this.ob.luogoColloquio,
            note: this.ob.noteCandidato, note_recruiter: this.ob.noteRecruiter, note_tecnico: this.ob.noteTecnico,
            orario_colloquio: this.ob.orarioColloquio, skill: this.ob.skillCandidato, titolodistudio: this.ob.titolodistudio,
            fullnameCandidato: this.ob.fullname, titoloOfferta: this.ob.offerta, giudizio: this.ob.giudizioTecnico};
        console.log(saveData);
        this.database.push( saveData );


        if (this.who_candidatura === 'candidature_da_analizzare') {
            this.db.list('/candidature/candidature_da_analizzare').remove('' + this.key);
            this.router.navigateByUrl('/view-candidates');
        }
        if (this.who_candidatura === 'candidature_da_verificare') {
            this.db.list('/candidature/candidature_da_verificare').remove('' + this.key);
            this.router.navigateByUrl('/candidati-da-verificare');
        }

    }

    onStoreRichiediAttenzione() {
        this.db.list('/account/tecnico').snapshotChanges().map(actions => {
            return actions.map(action => ({key: action.key, ...action.payload.val()}));
        }).subscribe(items => {
            items.forEach(it => {
                if (it.fullname === this.nomeTecnico) {
                    console.log('sono dentro ');
                    this.keytecnico = it.key;
                    console.log(this.keytecnico);
                    this.databaseAttenzione = this.db.list('/candidature/candidature_da_verificare');
                    const saveData = {
                        cv: this.ob.pathCV,
                        data: this.ob.dataCandidatura,
                        data_colloquio: this.ob.dataColloquio,
                        google_maps: this.ob.linkGoogleMaps,
                        id_candidato: this.ob.idCandidato,
                        id_offerta: this.ob.idOfferta,
                        id_tecnico: this.keytecnico,
                        lett_presentazione: this.ob.pathLettPresent,
                        luogo_colloquio: this.ob.luogoColloquio,
                        note: this.ob.noteCandidato,
                        note_recruiter: this.notaRecruiter,
                        note_tecnico: this.ob.noteTecnico,
                        orario_colloquio: this.ob.orarioColloquio,
                        skill: this.ob.skillCandidato,
                        titolodistudio: this.ob.titolodistudio,
                        fullnameCandidato: this.ob.fullname,
                        titoloOfferta: this.ob.offerta,
                        giudizio: this.ob.giudizioTecnico
                    };
                    console.log(saveData);

                    console.log(saveData);
                    this.databaseAttenzione.push(saveData);

                    if (this.who_candidatura === 'candidature_da_analizzare') {

                        this.db.list('/candidature/candidature_da_analizzare').remove('' + this.key);
                        this.router.navigateByUrl('/view-candidates');
                    }
                    if (this.who_candidatura === 'candidature_da_verificare') {
                        this.db.list('/candidature/candidature_da_verificare').remove('' + this.key);
                        this.router.navigateByUrl('/candidati-da-verificare');
                    }

                }

            });
        });
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

    onPianifica() {

        if (this.orario !== '' && this.luogo !== '' && this.data !== '' && this.url !== '') {
            this.database = this.db.list('/candidature/candidature_idonee/');
            this.database.update(this.key, {data_colloquio: this.data, luogo_colloquio: this.luogo, orario_colloquio:
            this.orario, google_maps: this.url});
            this.router.navigateByUrl('/pianifica-colloquio');
        } else {
            this.alert = true;

        }

    }
    onAlert() {
        this.alert = false;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
