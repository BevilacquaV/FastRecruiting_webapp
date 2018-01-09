import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Md5 } from '../../../node_modules/md5-typescript/Md5';
import { AngularFireModule } from 'angularfire2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    database;
    dbref: AngularFireObject<any>;
    flag;
    fullname: String;
    name;
    // constructor(public router: Router) {}

    constructor(private db: AngularFireDatabase) {
        this.database = this.db.list('/account/recruiter/');
        this.fullname = '';
    }

    ngOnInit() {
    }

    onLoggedin(email, password) {
        this.flag = 0;
        this.database.valueChanges().forEach(el => {
             const criptPassword = Md5.init(password);
         //   const criptPassword = password;
            el.forEach(element => {
                if (element.email === email && element.password === criptPassword) {
                    this.flag = 1;
                    this.fullname = element.fullname;
                }
            });
            if ( this.flag === 1) {
                console.log('Utente trovato');

                localStorage.setItem('isLoggedin', 'true');

                sessionStorage.setItem('SessionName' , '' + this.fullname);
                this.name = sessionStorage.getItem('SessionName');
                console.log('stampo la sessione:', this.name );
            } else {
                console.log('Utente non trovato');
            }
        });
    }
}
