import { Component } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-classic',
  templateUrl: './product-add-classic.component.html',
  styleUrls: ['./product-add-classic.component.css'],
  providers:[CategoryService,ProductService,AlertifyService]
})
export class ProductAddClassicComponent {

constructor(
  private categoryService:CategoryService,
  private productService:ProductService,
  private alertifyService:AlertifyService
  
  ){}
  model:Product = new Product();

  title:"List of categories"
  categories :Category[];

  ngOnInit(): void {
  
    this.categoryService.getCategories().subscribe(data=>{
      this.categories =data
    });
  }
  
  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{
this.alertifyService.success(data.name+" add succes")
    })
  }
}
