import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

  @Injectable()
  export class ProductsService {
    constructor(private http: HttpClient) { }
  

  getProducts(): Promise<any>{
    let url =  "https://fakestoreapi.com/products";
    return this.http.get(url)
    .toPromise()
  }


}



