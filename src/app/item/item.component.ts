import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  link;

  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('link');
      this.link = id.toString(1);
  }

}
