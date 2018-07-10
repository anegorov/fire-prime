import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    id:any;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.id = params['fil'];
        })


    }
}
