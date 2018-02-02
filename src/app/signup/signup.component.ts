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
    recruiter: Recruiter;
    constructor(private db: AngularFireDatabase, private router: Router) {
        this.recruiter = {nome: '', email: '', telefono: '', password: '', nuovapassword: ''};
        this.database = this.db.list('/account/recruiter');
    }

    ngOnInit() {}


    onControlData(repeatpassword: string) {
        if (this.recruiter.nome === '' || this.recruiter.email === '' ||
            this.recruiter.password === '' || this.recruiter.telefono === '' || repeatpassword === '' ) {
            console.log('compilare tutti i campi');
            this.error = 'compilare tutti i campi';
            return;

        }  else {
            this.onSignup(repeatpassword);
        }


    }

    onSignup( repeatpassword: string ) {

        const md5password = Md5.init(this.recruiter.password);
        const md5repeatpassword = Md5.init(repeatpassword);
        if (md5password !== md5repeatpassword ) {
            this.error = 'password diverse';
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
}
