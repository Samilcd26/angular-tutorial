import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Form, NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient
  ) { }
  path="http://localhost:3000/products"

  getProducts(categoryID:String):Observable<Product[]>{
  
    let newPath = this.path;
    if (categoryID) {
      newPath+="?categoryID="+categoryID
    }
    
   return this.http.get<Product[]>(newPath).pipe(
    tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handleError)
   );
  }

  addProduct(product:Product):Observable<Product>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
     );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage =""
    if (error.error instanceof ErrorEvent) {
      errorMessage = "An error occurred" + error.error.message
    }else{
      errorMessage = "Error of system"
    }

    return throwError(errorMessage)
}

  

}
