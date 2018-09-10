import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {FieldsetModule} from 'primeng/fieldset';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  title = 'Guidein';
  products: Product[];
  cars: any[];

  constructor(private ProductService: ProductService){}

  ngOnInit(){

          this.cars = [
            {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black', src: 'assets/banner/домик-полка.PNG'},
            {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White', src: 'assets/banner/игрушки.PNG'},
            {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue', src: 'assets/banner/кресла.PNG'},
            {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White', src: 'assets/banner/мебель.PNG'},
            {vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red', src: 'assets/banner/стулья.PNG'},
            {vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black', src: 'assets/banner/полка.jpg'}
        ];
  
      this.ProductService.getProduct().subscribe(product => {
        this.products = product.slice(0,6);
      });


  }

}


