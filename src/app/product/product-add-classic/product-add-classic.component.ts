import { Component } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-classic',
  templateUrl: './product-add-classic.component.html',
  styleUrls: ['./product-add-classic.component.css'],
  providers:[CategoryService]
})
export class ProductAddClassicComponent {

constructor(
  private categoryService:CategoryService ){}
  model:Product = new Product();

  title:"List of categories"
  categories :Category[];

  ngOnInit(): void {
  
    this.categoryService.getCategories().subscribe(data=>{
      this.categories =data
    });
  }
  
  add(form:NgForm){
    
  }
}
