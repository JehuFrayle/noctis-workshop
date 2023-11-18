import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRes } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  private API_ORIGIN = "http://localhost:1337";
  private API = this.API_ORIGIN + "/api/";

  get API_ORIGIN_URL(){
    return this.API_ORIGIN;
  }

  getProducts(){
    return this.http.get<ProductRes>(this.API+"Products?populate=*");
  }
}
