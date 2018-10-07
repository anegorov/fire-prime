import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta:Meta) { }

  generateTags(config){
    config = {
      title: 'Something',
      description: 'My SEO',
      image: 'https://instafire-app.firebaseapp.com/assets/camel.jpeg',
      url: 'https://instafire-app.firebaseapp.com'
    }

    this.meta.updateTag({name:'twitter:card', content: 'summary'});
    this.meta.updateTag({name:'twitter:site', content: '@angularfirebase'});
    this.meta.updateTag({name:'twitter:title', content: config.title});
    this.meta.updateTag({name:'twitter:description', content: config.description});
    this.meta.updateTag({name:'twitter:image', content: config.image});
    this.meta.updateTag({name:'og:type', content: 'article'});
    this.meta.updateTag({name:'og:site_name', content: 'AngularFirebase'});
    this.meta.updateTag({name:'og:title', content: config.title});
    this.meta.updateTag({name:'og:description', content: config.description});
    this.meta.updateTag({name:'og:image', content: config.image});
    this.meta.updateTag({name:'og:url', content: config.url});
  }


}
