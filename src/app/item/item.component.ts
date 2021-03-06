import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../product";
import {Observable} from "rxjs/internal/Observable";
import { HttpService} from '../http.service';
import {SeoService} from '../seo.service';
import { Title } from '@angular/platform-browser';

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
  block:boolean = false;
  msgs: any[] = [];

  constructor(
      private route: ActivatedRoute,
      private ProductService: ProductService,
      private httpService: HttpService,
      private seo: SeoService,
      private titleService: Title
  ) { }

  ngOnInit() {
    this.seo.generateTags({title:'',description:'',image:''});
      this.route.params.subscribe((params: Params) => {
          let userId = params['link'];
          this.ProductService.getProductByLink(userId).subscribe(
              product => {
                  this.products = product;
                  product.forEach(value => {this.productId = value.id; this.productType = value.type});
                  this.product = this.ProductService.getDocById(this.productId);

                  this.product.subscribe(productValue => {
                    //Setting page title
                    this.titleService.setTitle(productValue.lname);
                    //Setting metatags
                    this.seo.generateTags({
                      title:productValue.lname,
                      description:productValue.description,
                      image:productValue.iurl
                    });
                  })

                  //Setting all images of the item
                  this.images = [];
                  this.ProductService.getImagesById(this.productId)
                    .subscribe(res => {
                        this.images = res.map(x => {return {source:x.src, alt:x.alt, title:x.title};});
                    });
 
                  //Setting relative products
                  this.ProductService.getProduct().subscribe(rel => {this.related = rel.filter(n => n.type == this.productType).filter(m => m.id != this.productId).slice(0,3)});
              })

      });

  }

  sendEmail(lname:string, pdfurl:string, name:string, email:string) {

    let data1 = {to: email, 
                from: 'admin@guidein.ru',
                subject: 'Инструкция - ' + lname,
                lname: lname,
                name: name,
                pdfurl: pdfurl,
                content: 'Здравствуйте, ' + name + '<br>Ссылка для скачивагия инструкции:<br> ' + pdfurl}
                
    this.httpService.postData(data1).toPromise()
                      .then( res => {
                        console.log(res)
                      })
                      .catch(err => {
                        console.log('Error was rased')
                        console.log(err)
                      })

    this.ProductService.addEmailRequest(name, email, lname);

    this.msgs.push({severity:'success', summary:'Ссылка отправлена на', detail:email});
  }

}
