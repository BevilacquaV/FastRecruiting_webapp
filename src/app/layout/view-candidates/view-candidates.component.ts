import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Candiatas} from './candidates';
import {Joboffer} from '../dashboard/joboffer';

@Component({
    selector: 'app-view-candidates',
    templateUrl: './view-candidates.component.html',
    styleUrls: ['./view-candidates.component.scss']
})
export class ViewCandidatesComponent implements OnInit {
    database;
    public candidate;
    offerta: string;
    public candidateslist: Array<any> = [];
    public jobsofferlist: Array<any> = [];
    public offer;
    constructor(private db: AngularFireDatabase) {
        this.database = this.db.list('/candidature/');



        this.database.valueChanges().forEach(el => {
            el.forEach(element => {
                this.candidate = new Candiatas(element.email, element.fullname, element.titolodistudi, element.note,
                    element.skill, element.telefono, element.data, element.cv,
                    element.id_candidato, element.id_offerta, element.let_presentazione, element.stato, );
                this.offerta = element.id_offerta;
                this.candidateslist.push(this.candidate);

            });
console.log(this.offerta);
        });
        this.database = this.db.list('/offertedilavoro/');

        this.database.valueChanges().forEach(el => {
            el.forEach(element => {
                this.offer = new Joboffer(element.titolo, element.luogodilavoro, element.skill, element.annuncio,
                    element.titolodistudio, 'dadsa');
                this.jobsofferlist.push(this.offer);
            });
        });
        console.log(this.offer);
    }




        ngOnInit() {
    }

}
