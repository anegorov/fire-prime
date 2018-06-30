import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: Product[];
  searchStr = '';

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
      this.ProductService.getProduct().subscribe(product => this.products = product);
  }

}
