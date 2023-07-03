import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getUserCount() {
    return this.http.get<number>('http://localhost:8080/stats/users/count');
  }
  
  getProductCount() {
    return this.http.get<number>('http://localhost:8080/stats/products/count');
  }
  
  getReviewCount() {
    return this.http.get<number>('http://localhost:8080/stats/reviews/count');
  }
  
}
