import { Component, OnInit, Input} from '@angular/core';
import { routerTransition } from '../router.animations';
import {Router} from '@angular/router';
import {Recruiter} from '../layout/profile/recruiter';
import { AngularFireModule } from 'angularfire2';

/*Componenti Firebase*/
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Md5 } from '../../../node_modules/md5-typescript/Md5';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    database;
    error;
    passDiversa;
    alert;
    flag= false;
    recruiter: Recruiter;
    constructor(private db: AngularFireDatabase, private router: Router) {
        this.error = false;
        this.alert = false;
        this.passDiversa = false;
        this.flag = false;
        this.recruiter = {nome: '', email: '', telefono: '', password: '', nuovapassword: ''};
        this.database = this.db.list('/account/recruiter');
    }

    ngOnInit() {}


    onControlData(repeatpassword: string) {
        this.flag = false;
        if (this.recruiter.nome === '' || this.recruiter.email === '' ||
            this.recruiter.password === '' || this.recruiter.telefono === '' || repeatpassword === '' ) {
            this.error = true;
            return;

        }  else {


            this.database.valueChanges().forEach(el => {
                el.forEach(element => {
                    console.log(element.email);
                    if (element.email === this.recruiter.email ) {
                        this.flag = true;
                        this.alert = true;
                        return;


                    }
                });
                console.log(this.flag);

                if (this.flag === false) {
                    this.onSignup(repeatpassword);
                }

            });
        }


    }

    onSignup( repeatpassword: string ) {
        const md5password = Md5.init(this.recruiter.password);
        const md5repeatpassword = Md5.init(repeatpassword);
        if (md5password !== md5repeatpassword ) {
            this.passDiversa = true;
            return;
        }
        console.log(md5password);
        const saveData = {fullname: this.recruiter.nome,
            email: this.recruiter.email, telefono: this.recruiter.telefono, password: md5password};
        console.log(saveData);
        this.database.push(saveData);
        console.log('Utente salvato');
        this.router.navigateByUrl('/login');

    }

    onAlert() {
        this.alert = false;
        this.error = false;
        this.passDiversa = false;
    }
}

