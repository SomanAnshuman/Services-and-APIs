import { Component } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productData:
    | {
        name: string;
        brand: string;
        price: string;
      }[]
    | undefined;

  constructor(private productService: ProductService) {}

  getProductData() {
    this.productData = this.productService.getProductData();
    console.log(this.productData);
  }
}
