import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Recruiter} from './recruiter';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Md5 } from '../../../../node_modules/md5-typescript/Md5';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    recruiter: Recruiter;
    flag= false;
    criptPassword2;
    i= 0;
    email: string;
    key: string;
    public database;
    constructor(private db: AngularFireDatabase) {
        this.email = sessionStorage.getItem('SessionEmail');
        this.key = sessionStorage.getItem('SessionKEy');
        console.log(this.email + '   ' + this.key);
        this.recruiter = {nome: '', email: '', telefono: '', password: ''};

        this.database = this.db.list('/account/recruiter/');
        this.database.valueChanges().forEach(el => {
            el.forEach(element => {
                if (element.email === this.email ) {
                    this.recruiter = {nome: element.fullname, email: this.email, telefono: element.telefono ,
                        password: ''};
                }

            });

        });
    }

    ngOnInit() {
    }
    onControllPassword(password) {
        if (password.length === 0 ) {
            console.log('campo vuoto');
        }
        this.flag = false;

        this.i = 0;
        /*console.log(this.key);*/
        const criptPassword = Md5.init(password);
        this.database = this.db.list('/account/recruiter/');
        this.database.valueChanges().forEach(el => {
            el.forEach(element => {
                if (element.email === this.email  && criptPassword === element.password ) {
                    console.log(criptPassword );
                    this.i++;
                } else {
                    this.flag = true;
                }

            });
            if (this.flag === true && this.i === 0) {
                console.log('la password inserita non è corretta');
            } else {
                this.criptPassword2 = Md5.init(this.recruiter.password);
                this.onChangedate(this.criptPassword2);
            }

        });
    }
    onChangedate(password) {
        this.database.update(this.key, { telefono: this.recruiter.telefono, password: password});
        console.log({fullname: this.recruiter.nome, email: this.email,  telefono: this.recruiter.telefono, password: password});
    }

}
