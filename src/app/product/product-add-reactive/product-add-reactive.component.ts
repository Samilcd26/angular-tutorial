import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-reactive',
  templateUrl: './product-add-reactive.component.html',
  styleUrls: ['./product-add-reactive.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddReactiveComponent {

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService
  ) {

  }

  productAddForm: FormGroup = new FormGroup('');
  product: Product = new Product();
  categories: Category[];


  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      categoryID: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],

    });
  }

  ngOnInit(): void {

    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }

    this.productService.addProduct(this.product).subscribe(data => {
      this.alertifyService.success(data.name + " add succes")
    }

    )
  }
}
