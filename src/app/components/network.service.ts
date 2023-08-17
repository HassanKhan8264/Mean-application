import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  addProduct(data:any) {
    return this.http.post(`${this.apiUrl}/addProduct`,data);
  }
  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }
  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getProductsById(id:any){
    return this.http.get(`${this.apiUrl}/product/${id}`);
  }
}
