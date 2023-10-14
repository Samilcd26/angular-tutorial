import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddClassicComponent } from './product/product-add-classic/product-add-classic.component';
import { ProductAddReactiveComponent } from './product/product-add-reactive/product-add-reactive.component';

//?: Roots
const routes: Routes = [
  {path:'products', component:ProductComponent},
  {path:'product-add-classic', component:ProductAddClassicComponent},
  {path:'product-add-reactive', component:ProductAddReactiveComponent},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products/category/:categoryID',component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
