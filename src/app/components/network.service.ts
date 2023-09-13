import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // products apis

  addProduct(data:any) {
    return this.http.post(`${this.apiUrl}/addProduct`,data);
  }
  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }
  getProductsById(id:any){
    return this.http.get(`${this.apiUrl}/product/${id}`);
  }
  deleteProductById(id:any){
    return this.http.delete(`${this.apiUrl}/product/${id}`);
  }


  //  User apis
  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  addUser(data:any) {
    return this.http.post(`${this.apiUrl}/addUser`,data);
  }
  getUserById(id:any){
    return this.http.get(`${this.apiUrl}/user/${id}`);
  }

  deleteUserById(id:any){
    return this.http.delete(`${this.apiUrl}/user/${id}`);
  }

  updateUserById(id:any){
    return this.http.get(`${this.apiUrl}/user/${id}`);
  }


  // upload image
  uploadImg(data:any) {
    return this.http.post(`${this.apiUrl}/uploadImg`,data);
  }
}
