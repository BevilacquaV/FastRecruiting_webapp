import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Recruiter} from './recruiter';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Md5 } from '../../../../node_modules/md5-typescript/Md5';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    recruiter: Recruiter;
    flag = 0;
    criptPassword2;
    i= 0;
    email: string;
    key: string;
    public database;
    router;
    constructor(private db: AngularFireDatabase, private r: Router) {
        this.flag = 0;
        this.router = r;
        this.email = sessionStorage.getItem('SessionEmail');
        this.key = sessionStorage.getItem('SessionKEy');
        console.log(this.email + '   ' + this.key);
        this.recruiter = {nome: '', email: '', telefono: '', password: '', nuovapassword: ''};

        this.database = this.db.list('/account/recruiter/');
        this.database.valueChanges().forEach(el => {
            el.forEach(element => {
                if (element.email === this.email ) {
                    this.recruiter = {nome: element.fullname, email: this.email, telefono: element.telefono ,
                        password: '', nuovapassword: ''};
                }

            });

        });
    }

    ngOnInit() {
    }

    onControllPassword() {
        if (this.recruiter.telefono.length < 1) {
            console.log('Telefono non valido');
            return;
        }
        this.database.update(this.key, {telefono: this.recruiter.telefono});
        if (this.recruiter.password.length === 0 && this.recruiter.nuovapassword.length === 0) {
            this.router.navigateByUrl('/dashboard');
        }

        if (this.recruiter.password.length !== 0 && this.recruiter.nuovapassword.length !== 0) {

            this.flag = 0;
            const criptPassword = Md5.init(this.recruiter.password);
            this.db.list('/account/recruiter').snapshotChanges().map(actions => {
                return actions.map(action => ({key: action.key, ...action.payload.val()}));
            }).subscribe(items => {
                items.forEach(it => {
                    if (it.email === this.email && criptPassword === it.password) {
                        if (this.recruiter.nuovapassword.length !== 0) {
                            this.database.update(this.key, {password: Md5.init(this.recruiter.nuovapassword)});
                            console.log('Password aggiornata');
                            this.router.navigateByUrl('/dashboard');
                        }
                    }
                });
            });
                console.log('Impossibile aggiornare la password');
                return;
        }

    }

}
