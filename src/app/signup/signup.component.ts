import { Component, OnInit, Input} from '@angular/core';
import { routerTransition } from '../router.animations';
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
    constructor(private db: AngularFireDatabase) {
        this.database = this.db.list('/account/recruiter');
    }

    ngOnInit() {}

    onSignup(fullname: string, email: string, password: string, repeatpassword: string ) {
        const md5password = Md5.init(password);
        const md5repeatpassword = Md5.init(repeatpassword);
        if (md5password !== md5repeatpassword ) {
            alert(' password diverse');
        }
        console.log(md5password);
        const saveData = {fullname: fullname, email: email,  password: md5password};
        console.log(saveData);
        this.database.push(saveData);
        console.log('Utente salvato');

    }
}
