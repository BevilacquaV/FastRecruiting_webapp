import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-selected-candidates',
    templateUrl: './selected-candidates.component.html',
    styleUrls: ['./selected-candidates.component.scss']
})
export class SelectedCandidatesComponent implements OnInit, OnDestroy {

    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            console.log(' leggo param[key]: ', params['key']);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
