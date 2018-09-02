import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.scss']
})

export class ImageEditComponent implements OnInit {

  fid:string;
  fpid:string;
  fsrc:string;
  ftitle:string;
  falt:string;

  images: any[];
  imageDoc: Observable<any>;

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.ProductService.getImages().subscribe(image => {
      this.images = image;
    });
  }

  showImage(valueId:string){
    this.imageDoc = this.ProductService.getImageById(valueId);
  }

  updateImage(pId:string){
    let newImage = {
      id:this.fid,
      pid:this.fpid,
      src:this.fsrc,
      title:this.ftitle,
      alt:this.falt
    }

    if(pId == this.fpid) {
      console.log("Equals");
      this.ProductService.updateProduct(pId, newImage);
    }
    console.log("pId:" + pId + " pId:fId" +  this.fpid)
  }

}
