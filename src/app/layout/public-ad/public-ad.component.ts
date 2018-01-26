import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import {Timestamp} from 'rxjs/Rx';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-public-ad',
  templateUrl: './public-ad.component.html',
  styleUrls: ['./public-ad.component.scss']
})
export class PublicAdComponent implements OnInit {
    database;
    public checklist: Array<any> = [];
    public listskill: Array<any> = [];
    log: string;
    flag: boolean;

    public selectedllist: Array<any> = [];

  constructor(private db: AngularFireDatabase) {
      this.database = this.db.list('/offertedilavoro');
      this.flag = false;
  }

  ngOnInit() {
  }

onPublicAd(titolo: string, annuncio: string, titolostudio: string, luogolavoro: string) {

    const saveData = {titolo: titolo, annuncio: annuncio, titolodistudio: titolostudio,
        luogodilavoro: luogolavoro, active: 'yes'};
    console.log(saveData);
    this.database.push( saveData);
    /*
    const keypush = this.database.push(saveData).key;
    */

}


onAddCheckbox(element: HTMLInputElement) {
    this.log = element.value;
console.log(this.log);
this.flag = false;

    if (this.listskill.length === 0) {
    this.listskill.push(this.log);
    }

    for (const skill of this.listskill) {

        console.log('skill ' + skill);
        if ( skill !== this.log) {
            this.flag = true;
        } else {
            this.flag = false;
            break;
        }

    }
    if (this.flag === true) {
        this.listskill.push(this.log);
    }
    console.log(' array ' + this.listskill);
}
}
