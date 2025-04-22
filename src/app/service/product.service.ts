import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('product service');
  }
  getProductData() {
    return [
      { name: 'mobile', brand: 'samsung', price: '20000' },
      { name: 'laptop', brand: 'dell', price: '200000' },
      { name: 'fridge', brand: 'samsung', price: '10000' },
    ];
  }
}
