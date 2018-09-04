import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../product";
import {Observable} from "rxjs/internal/Observable";
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

  products: Product[];
  productId: string;
  productType: string;
  related: Product[];
  product: Observable<Product>;
  img: Observable<Product>;
  images: any[];
  

  constructor(
      private route: ActivatedRoute,
      private ProductService: ProductService
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          let userId = params['link'];
          this.ProductService.getProductByLink(userId).subscribe(
              product => {
                  this.products = product;
                  product.forEach(value => {this.productId = value.id; this.productType = value.type});
                  this.product = this.ProductService.getDocById(this.productId);
                  
                  this.images = [];
                  this.ProductService.getImagesById(this.productId)
                    .subscribe(res => {
                        this.images = res.map(x => {return {source:x.src, alt:x.alt, title:x.title};});
                    });
 
                  this.ProductService.getProduct().subscribe(rel => {this.related = rel.filter(n => n.type == this.productType).filter(m => m.id != this.productId).slice(0,3)});
              })

      });

      
  }

}
