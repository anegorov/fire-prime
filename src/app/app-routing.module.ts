import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListComponent} from './list/list.component';
import {ArticlesComponent} from "./articles/articles.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {ItemComponent} from "./item/item.component";

const routes: Routes = [
  { path: '', redirectTo: '/main.html', pathMatch: 'full' },
  { path: 'main.html', component: ListComponent, data: {type:'мебель'} },
  { path: 'catalog.html', component: CatalogComponent },
  { path: 'articles.html', component: ArticlesComponent },
  { path: ':link', component: ItemComponent }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
