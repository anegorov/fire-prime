import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Product} from "./product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    usersCollection: AngularFirestoreCollection<Product>;
    usersObservable: Observable<Product[]>;
    itemDocument: AngularFirestoreDocument<Product>;
    itemObservable: Observable<Product>;
    imagesCollection: AngularFirestoreCollection<any>;
    imagesObservable: Observable<any[]>;
    type = 'мебель';


  constructor(private afs: AngularFirestore) { }

//Functions for reseving images

  getImages():Observable<any[]>{
    this.imagesCollection = this.afs.collection('images');
    this.imagesObservable = this.imagesCollection.valueChanges();
    return this.imagesObservable;
  }

  getImagesById(pid:string):Observable<any[]>{
    this.imagesCollection = this.afs.collection('images', ref => ref.where('pid', '==', pid));
    this.imagesObservable = this.imagesCollection.valueChanges();
    return this.imagesObservable;
  }

  getImageById(pid:string):Observable<Product>{
    this.itemDocument = this.afs.doc('images/' + pid);
    this.itemObservable = this.itemDocument.valueChanges();
    return this.itemObservable;
}

//Functions for reseving products

  getProduct():Observable<Product[]>{
    this.usersCollection = this.afs.collection('products');
    this.usersObservable = this.usersCollection.valueChanges();
    return this.usersObservable;
}
  // getProductWithId():any {
  //   this.usersCollection = this.afs.collection('products');
  //   this.usersObservable = this.usersCollection.snapshotChanges().forEach(snap => {
  //       const data = snap..payload.doc.data();
  //       const id = snap.payload.doc.id;
  //       return id;
  //     });
  // }

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

  getImgById(pid:string):Observable<Product>{
    this.itemDocument = this.afs.doc('images/' + pid);
    this.itemObservable = this.itemDocument.valueChanges();
    return this.itemObservable;
}

  addNewProduct(data:any){
    const collection = this.afs.collection('products');
    collection.add(data)
        .then(() => console.log('success') )
        .catch(err => console.log(err) )
  }

  updateProduct(pId:string, data:any){
    console.log("Id: " + pId);
    const doc = this.afs.doc('products/'+pId);
    doc.set(data);
  }
}
