import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private products: ProductsService) { }

  Products: Product[] = [];

  ngOnInit(): void {
    this.products.getProducts().subscribe((data) => {
      console.log(data);
      this.Products = data.data;
      //add the origin url to the images
      this.Products.forEach((product) => {
        //check if already have the origin url
        if (!product.attributes.Images.data[0].attributes.url.includes(this.products.API_ORIGIN_URL)) {
          product.attributes.Images.data[0].attributes.url = this.products.API_ORIGIN_URL + product.attributes.Images.data[0].attributes.url;
        }
      });
    });
  }
}
