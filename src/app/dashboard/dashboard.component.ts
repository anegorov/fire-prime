import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  emailRequests: any[];

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.ProductService.getEmailRequests().subscribe(product => {
      this.emailRequests = product;
    });
  }

}
