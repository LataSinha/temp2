import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ShowProductsComponent } from './show-products/show-products.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GetProductComponent } from './get-product/get-product.component';
import { ReviewProductComponent } from './review-product/review-product.component';
import { SuccessNotificationComponent } from './success-notification/success-notification.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeModule } from '../home/home.module';
import { ProductDetailsService } from './service/product-details.service';


@NgModule({
  declarations: [
    ShowProductsComponent,
    GetProductComponent,
    ReviewProductComponent,
    SuccessNotificationComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule
  ]
})
export class ProductModule { }
