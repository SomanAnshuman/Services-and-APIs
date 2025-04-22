import { Component } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productList:any;

  constructor(private productService: ProductService){}
  
  ngOnInit(){
    this.productService.getProductList().subscribe((data:any) => {
      console.log(data);
      this.productList = data.products;
    })
  }
}
