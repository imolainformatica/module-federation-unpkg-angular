import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Product} from "../../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }


  getProduct(personID: string): Observable<Product> {
    if(!personID) {
      personID = '60d0fe4f5311236168a109d3';
    }
    return this.http.get<Product>(environment.baseURL + 'data/' + personID);
  }

}
