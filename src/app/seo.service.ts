import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  rootUrl:string = 'https://guidein.ru/';

  constructor(private meta:Meta) { }

  generateTags(config){
    // config = {
    //   title: 'Инструкции guidein.ru',
    //   description: 'Инструкции по изготовлению игрушек и мебели из дерева',
    //   image: 'https://guidein.ru/assets/catalog/Домик-полка.jpg',
    //   url: 'https://guidein.ru'
    // }

    this.meta.updateTag({name:'description', content: config.description});

    this.meta.updateTag({name:'twitter:card', content: 'summary'});
    this.meta.updateTag({name:'twitter:site', content: 'guidein.ru'});
    this.meta.updateTag({name:'twitter:title', content: config.title});
    this.meta.updateTag({name:'twitter:description', content: config.description});
    this.meta.updateTag({name:'twitter:image', content: this.rootUrl + config.image});
    
    this.meta.updateTag({name:'og:type', content: 'article'});
    this.meta.updateTag({name:'og:site_name', content: 'guidein.ru'});
    this.meta.updateTag({name:'og:title', content: config.title});
    this.meta.updateTag({name:'og:description', content: config.description});
    this.meta.updateTag({name:'og:image', content: this.rootUrl + config.image});
    this.meta.updateTag({name:'og:url', content: this.rootUrl});
    
  }


}
