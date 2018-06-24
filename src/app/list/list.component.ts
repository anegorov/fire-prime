import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  title = 'Guidein';
  products: Product[];

  constructor(private ProductService: ProductService){}

  ngOnInit(){

      this.ProductService.getProduct().subscribe(product => this.products = product);

  }

}


