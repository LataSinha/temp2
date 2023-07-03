import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductsComponent } from '../product/show-products/show-products.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'showProducts', component:ShowProductsComponent},
  {path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
