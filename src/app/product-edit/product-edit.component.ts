import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})

export class ProductEditComponent implements OnInit {

  testValue:string = "0";
  fId:string;
  fSname:string;
  fLname:string;
  fIurl:string;
  fLink:string;
  fLevel:string;
  fMaterial:string;
  fTags:string;
  fType:string;
  fDtime:string;
  fDescription:string;
  
  products: any[];
  product: Observable<any>;

  constructor(private ProductService: ProductService) { }

  ngOnInit() {

    this.ProductService.getProduct().subscribe(product => {
      this.products = product;
    });

  }

  showProduct(valueId:string){
    this.product = this.ProductService.getDocById(valueId);
  }

  newProduct(){
    let newProduct = {
      id:this.fId,
      sname:this.fSname,
      lname:this.fLname,
      iurl:this.fIurl,
      link:this.fLink,
      level:this.fLevel,
      material:this.fMaterial,
      tags:this.fTags,
      type:this.fType,
      dtime:this.fDtime,
      description:this.fDescription
    }
    
    this.ProductService.addNewProduct(newProduct);
  }

  updateProduct(pId:string){
    let newProduct = {
      id:this.fId,
      sname:this.fSname,
      lname:this.fLname,
      iurl:this.fIurl,
      link:this.fLink,
      level:this.fLevel,
      material:this.fMaterial,
      tags:this.fTags,
      type:this.fType,
      dtime:this.fDtime,
      description:this.fDescription
    }

    if(pId == this.fId) {
      console.log("Equals");
      this.ProductService.updateProduct(pId, newProduct);
    }
    console.log("pId:" + pId + " pId:fId" +  this.fId)
  }

}
