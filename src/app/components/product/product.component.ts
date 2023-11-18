import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() Product: Product = {} as Product;
  faBagShopping = faBagShopping;
}
