import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsdataService {

  constructor(private http: HttpClient) {}
  
  
  getData() {
      return this.http.get('https://hills.ccsf.edu/~zhong12/JavaScriptLib/angular/products.json');
      //return this.http.get('http://localhost:4200/products.json');
  }
   
}
