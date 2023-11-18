import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio' },
  { path: 'Home', redirectTo: '', pathMatch: 'full' },
  { path: 'Productos', component: ProductsComponent, title: 'Productos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
