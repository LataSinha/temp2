import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product, Review } from '../product.model';
import { ProductDetailsService } from '../service/product-details.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css'],
})
export class GetProductComponent implements OnInit {
  product: Product = {} as Product;
  averageRating: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductDetailsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const code = params.get('code');
      if (code) {
        this.getProductByCode(code);
      } else {
        console.log('Error: Code parameter is null');
      }
    });
  }

  getProductByCode(code: string) {
    this.productService.getProductByCode(code).subscribe(
      (response) => {
        this.product = response;
        this.averageRating = this.calculateAverageRating(this.product.reviews);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  calculateAverageRating(reviews: Review[]): number {
    if (!reviews || reviews.length === 0) {
      return 0;
    }
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  }

  addReview(productCode: string) {
    this.router.navigate(['/addReview', productCode]);
  }

  
}
