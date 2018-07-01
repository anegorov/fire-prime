import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../product";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  products: Product[];

  userId:string;

  constructor(
      private route: ActivatedRoute,
      private ProductService: ProductService
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          let userId = params['link'];
          this.ProductService.getProductByLink(userId).subscribe(product => this.products = product);
          console.log(userId);
      });


  }

}
