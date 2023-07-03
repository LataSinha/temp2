import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.model';
import { ProductDetailsService } from '../service/product-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css'],
})
export class ShowProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  isItemNotFound: boolean = false;

  constructor(
    private productDetailsService: ProductDetailsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productDetailsService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        this.filteredProducts = response;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  showProductDetails(code: string) {
    this.router.navigate(['/getProduct', code]);
  }

  searchProduct(searchTerm: string) {
    if (searchTerm) {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.isItemNotFound = this.filteredProducts.length === 0;
    } else {
      this.filteredProducts = this.products;
      this.isItemNotFound = false;
    }
  }
}
