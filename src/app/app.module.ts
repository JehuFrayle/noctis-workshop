import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';

import { provideClientHydration } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CarouselComponent,
    ProductComponent,
    ProductsComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
