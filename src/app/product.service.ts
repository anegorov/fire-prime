import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Product} from "./product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    usersCollection: AngularFirestoreCollection<any>;
    usersObservable: Observable<Product[]>;
    itemDocument: AngularFirestoreDocument<Product>;
    itemObservable: Observable<Product>;
    type = 'мебель';


  constructor(private afs: AngularFirestore) { }

  getProduct():Observable<Product[]>{
      this.usersCollection = this.afs.collection('products');
      this.usersObservable = this.usersCollection.valueChanges();
      return this.usersObservable;
  }

  getProductByLink(link:string):Observable<Product[]>{
        this.usersCollection = this.afs.collection('products', ref => ref.where('link', '==', link));
        this.usersObservable = this.usersCollection.valueChanges();
        return this.usersObservable;
    }

  getProductByType(type:string):Observable<Product[]>{
        this.usersCollection = this.afs.collection('products', ref => ref.where('type', '==', type));
        this.usersObservable = this.usersCollection.valueChanges();
        return this.usersObservable;
    }

  getDocById(pid:string):Observable<Product>{
      this.itemDocument = this.afs.doc('products/' + pid);
      this.itemObservable = this.itemDocument.valueChanges();
      return this.itemObservable;
  }


}
