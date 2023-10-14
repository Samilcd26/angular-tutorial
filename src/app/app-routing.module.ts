import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddClassicComponent } from './product/product-add-classic/product-add-classic.component';
import { ProductAddReactiveComponent } from './product/product-add-reactive/product-add-reactive.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

//?: Roots
const routes: Routes = [
  {path:'products', component:ProductComponent},
  {path:'product-add-classic', component:ProductAddClassicComponent , canActivate:[LoginGuard] },
  {path:'product-add-reactive', component:ProductAddReactiveComponent,canActivate:[LoginGuard]},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products/category/:categoryID',component:ProductComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
