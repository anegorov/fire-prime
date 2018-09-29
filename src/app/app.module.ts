import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { ListComponent } from './list/list.component';
import { ArticlesComponent } from './articles/articles.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';
import { FormsModule} from "@angular/forms";
import {SearchPipe} from "./search.pipe";
import { StudyComponent } from './study/study.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ImageEditComponent } from './image-edit/image-edit.component';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuModule} from 'primeng/megamenu';
import {CarouselModule} from 'primeng/carousel';
import {FieldsetModule} from 'primeng/fieldset';
import {GalleriaModule} from 'primeng/galleria';
import {DataScrollerModule} from 'primeng/datascroller';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';    
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import {GrowlModule} from 'primeng/growl';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ArticlesComponent,
    CatalogComponent,
    ItemComponent,
    SearchPipe,
    StudyComponent,
    ProductEditComponent,
    ImageEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    CardModule,
    ButtonModule,
  	MenuModule,
  	MegaMenuModule,
    CarouselModule,
    FieldsetModule,
    GalleriaModule,
    DataScrollerModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    HttpClientModule,
    GrowlModule,
      AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
