import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceResponse } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http:HttpClient) { }

  private API_ORIGIN = "http://localhost:1337";
  private API = this.API_ORIGIN + "/api/";

  get API_ORIGIN_URL(){
    return this.API_ORIGIN;
  }

  getServices(){
    return this.http.get<ServiceResponse>(this.API+"Services?populate[image][fields][0]=url");
  }
}
