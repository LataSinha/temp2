import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Review } from '../product.model';
import { ProductDetailsService } from '../service/product-details.service';
import { AuthService } from 'src/app/authentication/service/auth.service';

@Component({
  selector: 'app-review-product',
  templateUrl: './review-product.component.html',
  styleUrls: ['./review-product.component.css'],
})
export class ReviewProductComponent implements OnInit {
  content: string = '';
  rating: number = 0;
  productCode: any;
  showSuccessNotification: boolean = false;

  constructor(
    private reviewService: ProductDetailsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productCode = params['code'];
    });
  }

  setRating(rating: number) {
    this.rating = rating;
  }

  submitReview() {
    const userEmail = this.authService.getUserEmail();

    const review: Review = {
      id: 0,
      content: this.content,
      rating: this.rating,
      product: { code: this.productCode } as any,
      user: { email: userEmail } as any,
    };

    this.reviewService.postReview(review).subscribe(
      (response) => {
        console.log('Review added:', response);
        this.content = '';
        this.rating = 0;
        this.showSuccessNotification = true
        setTimeout(() => {
          this.router.navigate(['/getProduct', this.productCode]);
        }, 10000);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
