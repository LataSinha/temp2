import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProductComponent } from './get-product/get-product.component';
import { ReviewProductComponent } from './review-product/review-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: 'getProduct/:code', component: GetProductComponent },
  { path: 'addReview/:code', component: ReviewProductComponent},
  { path: 'addProduct', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
