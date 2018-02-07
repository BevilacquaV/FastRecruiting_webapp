import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase } from 'angularfire2/database';
import {Skills} from './skills';
import {Joboffer} from '../dashboard/joboffer';
import {Router} from '@angular/router';


@Component({
    selector: 'app-public-ad',
    templateUrl: './public-ad.component.html',
    styleUrls: ['./public-ad.component.scss']
})



export class PublicAdComponent implements OnInit {
    database;
    i;
    router: Router;
    n = 0;
    j = 0;
    job: Joboffer;
    databasePubblica;

    public skill: Skills = {nome: ''};

    public list: Array<any> = [];
    log: string;
    flag: boolean;
    alert;

    public selectedllist: Array<any> = [];

    constructor(private db: AngularFireDatabase, private r: Router) {
        this.alert = false;
        this.router = r;
        this.job = {titolo: '', luogodilavoro: '', skill: '', annuncio: '', titolodistudio: '', key: ''};
        this.flag = false;
        this.i = 0;
        this.j = 0;
        this.database = this.db.list('/skill/');
        this.database.valueChanges().forEach(el => {
            el.forEach(element => {
                console.log('skill ' + element.nome);
                this.skill = new Skills(element.nome);
               this.list.push(this.skill);
            });

        });
    }


    ngOnInit() {
    }
    onPublicAd() {

        this.databasePubblica = this.db.list('/offertedilavoro');
        if ( this.job.titolo === '' || this.job.annuncio === '' || this.job.titolodistudio === ''
            || this.job.luogodilavoro === '' || this.job.skill === '') {
            this.alert = true;
        } else {
            const saveData = {
                titolo: this.job.titolo, annuncio: this.job.annuncio, titolodistudio: this.job.titolodistudio,
                luogodilavoro: this.job.luogodilavoro, skill: this.job.skill
            };
            console.log(saveData);
            this.databasePubblica.push(saveData);
            this.router.navigateByUrl('/dashboard');

        }

    }

    onAlert() {
        this.alert = false;
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
        console.log(saveData);
        this.database.push( saveData );
        this.onUpdateSkill();

    }
    onUpdateSkill() {
        this.n = this.list.length;
        for (this.j = 0; this.j <= this.n ; this.j++) {
            console.log('eliminato' + this.list.pop());
        }
    }
}
