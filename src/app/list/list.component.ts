import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  title = 'Guidein';
  products: Product[];
  cars: any[];

  constructor(
    private ProductService: ProductService,
    private titleService: Title
    ){}

  ngOnInit(){

          //Setting page title
          this.titleService.setTitle('GuideIn - Инструкции для изготовления игрушек и мебели');

          this.cars = [
            {txt: 'В современный век мы много времени проводим сидя за компьютером или любым другим девайсом. В таких условиях хочется переключить фокус на другой вид деятельности.', src: 'assets/banner/домик-полка.PNG'},
            {txt: 'Дерево приятно на ощупь. От него приятно похнет.', src: 'assets/banner/игрушки.PNG'},
            {txt: 'Интересно собирать мебель самому. Доводить изделие до ума. Как играть в конструктор на более высоком уровне.', src: 'assets/banner/кресла.PNG'},
            {txt: 'Самореализация. Самооценка. Приятно делать что-то полезное.', src: 'assets/banner/мебель.PNG'},
            {txt: 'Необычное хобби и вещи в твоем доме.', src: 'assets/banner/стулья.PNG'},
            {txt: 'Учавствуюя в производственном процессе от начала и до конца, точнопонимаешь за что платишь и уверен в качестве.', src: 'assets/banner/полка.jpg'}
        ];
  
      this.ProductService.getProduct().subscribe(product => {
        this.products = product.slice(0,6);
      });


  }

}


