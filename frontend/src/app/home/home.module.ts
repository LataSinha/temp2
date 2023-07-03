import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class HomeModule { }
