import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductsHttpClient {

  constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: HttpHeaders) {
    headers = headers.append("Authorization", "Basic ");
    headers = headers.append("Content-Type", "application/json");
    return headers;
  }

  get(url) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }
  
}
