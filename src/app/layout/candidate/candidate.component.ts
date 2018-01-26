import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit, OnDestroy {
    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            console.log('leggo: ', params['id']);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
