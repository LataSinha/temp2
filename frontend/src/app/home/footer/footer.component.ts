import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  userCount: number = 0;
  productCount: number = 0;
  reviewCount: number = 0;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getUserCount();
    this.getProductCount();
    this.getReviewCount();
  }

  getUserCount() {
    this.homeService.getUserCount().subscribe(
      (count: number) => {
        this.userCount = count;
      },
      (error: any) => {
        console.error('Error getting user count', error);
      }
    );
  }

  getProductCount() {
    this.homeService.getProductCount().subscribe(
      (count: number) => {
        this.productCount = count;
      },
      (error: any) => {
        console.error('Error getting product count', error);
      }
    );
  }

  getReviewCount() {
    this.homeService.getReviewCount().subscribe(
      (count: number) => {
        this.reviewCount = count;
      },
      (error: any) => {
        console.error('Error getting review count', error);
      }
    );
  }
}
