import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Review } from '../product.model';;

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  
  addProduct(product: Product) {
    return this.http.post<any>(`${this.apiUrl}/products`, product);
  }

  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductByCode(code: string) {
    const url = `${this.apiUrl}/products/${code}`;
    return this.http.get<Product>(url);
  }

  getProductsByName(name: string) {
    return this.http.get<Product[]>(`${this.apiUrl}/products?name=${name}`);
  }

  postReview(review: Review) {
    return this.http.post<Review>(`${this.apiUrl}/reviews`, review);
  }
  
}

