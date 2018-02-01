import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Joboffer} from '../dashboard/joboffer';
import {FirebaseApp} from 'angularfire2';
import {Skills} from '../public-ad/skills';

@Component({
  selector: 'app-dettaglio-annuncio',
  templateUrl: './dettaglio-annuncio.component.html',
  styleUrls: ['./dettaglio-annuncio.component.scss']
})
export class DettaglioAnnuncioComponent implements OnInit, OnDestroy {

    database;
    flag;
    i;
    j;
    n;
    job: Joboffer;
    public list: Array<any> = [];
    public listskill: Array<any> = [];
    key;
    sub;
    databaseskill;
    public skill: Skills = {nome: ''};
    router: Router;

    constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private r: Router) {

        this.i = 0;
        this.j = 0;
        this.n = 0;
        this.router = r;

        this.database = this.db.list('/skill/');
        this.database.valueChanges().forEach(el => {
            el.forEach(element => {
                this.skill = new Skills(element.nome);
                this.listskill.push(this.skill);
            });

        });
        this.sub = this.route.params.subscribe(params => {
            this.key = params['key'];
            console.log('leggo: ', params['key']);
        });
        this.job = {titolo: '', luogodilavoro: '', skill: '', annuncio: '', titolodistudio: '', key: ''};

        this.database = this.db.list('/offertedilavoro/');

        this.db.list('/offertedilavoro', ref => ref.orderByChild('titolo')).snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach( it => {
                if (this.key === it.key ) {
                    this.job = {titolo: it.titolo, luogodilavoro: it.luogodilavoro, skill: it.skill, annuncio: it.annuncio,
                        titolodistudio: it.titolodistudio, key:  it.key};
                    this.skill = new Skills(it.skill);
                    this.list.push(this.job);
                    console.log('Annuncio: ', it.annuncio, ' Luogo di lavoro: ', it.luogodilavoro,
                        ' titolo di studio: ', it.titolodistudio, ' key: ', it.key);
                }
            });
        });
    }




    ngOnInit() {}

    onUpdateOfferta() {
        this.database = this.db.list('/offertedilavoro/');
        this.onUpdateTitolo();
        this.onUpdateAnnuncio();
        this.onUpdateTitolodistudio();
        this.onUpdateLuogodilavoro();
        this.onAggiornaSkills();
        this.router.navigateByUrl('/dashboard');

    }

    onUpdateTitolo() {
        this.database.update(this.key, {titolo: this.job.titolo});
        console.log('titolo cambiato;');
    }
    onUpdateAnnuncio() {
        this.database.update(this.key, {annuncio: this.job.annuncio});
        console.log('titolo Annuncio;');
    }
    onUpdateTitolodistudio() {
        this.database.update(this.key, {titolodistudio: this.job.titolodistudio});
        console.log('titolo titolodistudio;');
    }
    onUpdateLuogodilavoro() {
        this.database.update(this.key, {luogodilavoro: this.job.luogodilavoro});
        console.log('titolo luogodilavoro;');
    }
    onAggiornaSkills() {
        this.database.update(this.key, {skill: this.job.skill});
        console.log('skill cambiate)');
    }
    onDeleteAd() {
        this.db.list('/offertedilavoro').remove(this.key);
        this.router.navigateByUrl('/dashboard');
    }

    onControlSkill(skill: string) {
        this.database = this.db.list('/skill/');
        this.flag = false;
        this.i = 0;
        if (skill.length === 0) {
            this.i++;
            alert(' campo vuoto');
        }
        this.database.valueChanges().forEach(el => {
            el.forEach(element => {
                if ( element.nome  === skill) {
                    this.flag = true;
                    this.i++;
                }

            });
            if (this.flag === false && this.i === 0 ) {
                this.onAddSkill(skill);
            } else {
                console.log('skill esistente'); }
        });

    }
    onAddSkill(skill: string) {
        this.database = this.db.list('/skill');
        const saveData = {nome: skill};
        this.database.push( saveData );
        this.onUpdateSkill();

    }
    onUpdateSkill() {
        this.n = this.listskill.length;
        for (this.j = 0; this.j <= this.n ; this.j++) {
            this.listskill.pop();
        }
    }

ngOnDestroy() {
 this.sub.unsubscribe();
}
}
