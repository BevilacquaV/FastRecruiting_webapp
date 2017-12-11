import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-prova',
    templateUrl: './prova.component.html',
    styleUrls: ['./prova.component.scss'],
    animations: [routerTransition()]
})
export class ProvaComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
