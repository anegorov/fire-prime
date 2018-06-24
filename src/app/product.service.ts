import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {AngularFirestore,AngularFirestoreCollection} from "angularfire2/firestore";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    usersCollection: AngularFirestoreCollection<any>;
    usersObservable: Observable<Product[]>;
    type = 'мебель';

  constructor(private afs: AngularFirestore) { }

  getProduct():Observable<Product[]>{

      //this.usersCollection = this.afs.collection('products', ref => ref.where('type', '==', this.type));
      this.usersCollection = this.afs.collection('products');
      this.usersObservable = this.usersCollection.valueChanges();
      return this.usersObservable;
  }
}
