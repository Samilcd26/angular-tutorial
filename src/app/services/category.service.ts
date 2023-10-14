import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Category } from '../category/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:HttpClient
  ) { }
  path="http://localhost:3000/categories"

  getCategories():Observable<Category[]>{
   return this.http.get<Category[]>(this.path).pipe(
    tap(data => console.log(JSON.stringify(data))),
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
