import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify:any;
import {AlertifyService} from '../services/alertify.service'
import { ProductService } from '../services/product.service';
import { tap,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
constructor(
  private alertifyService :AlertifyService,
  private productService :ProductService,
  private activatedRoute:ActivatedRoute
){}

title = "List of products"

filterText =""


products: Product[];

  ngOnInit(): void {
    //?:Finde route URL
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryID"]).subscribe(data=>{
        this.products=data
       })
    })

  
  }
  
 


  addToCart(product:Product){
   this.alertifyService.success("Product added to cart: "+product.name)
    
  }
}
