import { Component, OnInit,OnChanges } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  type:string='';
  products: Product[];
  searchStr = '';

  constructor(private ProductService: ProductService,
              private route: ActivatedRoute) { }

ngOnInit() {
      this.route.params.subscribe(params => {
          this.type = params['type'];
      });

      console.log('Type:'+this.type)
      if(!this.type){
        this.ProductService.getProduct().subscribe(product => {this.products = product});
      }else {
        this.ProductService.getProductByType(this.type).subscribe(product => this.products = product);
        
      }

  }



}