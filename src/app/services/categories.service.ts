import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryRes } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  private API_ORIGIN = "http://localhost:1337";
  private API = this.API_ORIGIN + "/api/";

  get API_ORIGIN_URL(){
    return this.API_ORIGIN;
  }

  getCategories(){
    return this.http.get<CategoryRes>(this.API+"Categories?populate=*");
  }
}
