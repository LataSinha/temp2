import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductDetailsService } from '../service/product-details.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  showError: boolean = false;
  showSuccessNotification: boolean = false;
  showCodeExistsNotification: boolean = false;

  constructor(private productService: ProductDetailsService, private router: Router) {
    this.productForm = new FormGroup({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      image: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    const product: Product = {
      code: this.productForm.get('code')?.value,
      name: this.productForm.get('name')?.value,
      brand: this.productForm.get('brand')?.value,
      reviews: [],
      image: this.productForm.get('image')?.value, // Store image URL directly
    };

    this.productService.addProduct(product).subscribe(
      (response) => {
        this.showSuccessNotification = true;
        this.productForm.reset();
        setTimeout(() => {
          this.router.navigate(['/showProducts']);
        }, 30000); // Redirect to product review page after 30 seconds
      },
      (error) => {
        if (error.status === 409) {
          this.showCodeExistsNotification = true;
        } else {
          this.showError = true;
        }
        console.error('Error:', error);
      }
    );
  }

  // Handle file selection
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      // Set the selected filename without the fakepath
      this.productForm.patchValue({ image: file.name });
    }
  }
}
