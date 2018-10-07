import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListComponent} from './list/list.component';
import {ArticlesComponent} from "./articles/articles.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {ItemComponent} from "./item/item.component";
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ImageEditComponent } from './image-edit/image-edit.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/main.html', pathMatch: 'full' },
  { path: 'main.html', component: ListComponent },
  { path: 'catalog.html', component: CatalogComponent },
  { path: 'articles.html', component: ArticlesComponent },
  { path: 'product-edit.html', component: ProductEditComponent },
  { path: 'image-edit.html', component: ImageEditComponent },
  { path: 'dashboard.html', component: DashboardComponent },
  { path: ':link', component: ItemComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
