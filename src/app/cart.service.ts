import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];

  constructor() { }

  addProductToCart(productName: string, productPrice: number) {
    this.cart.push({productName, productPrice});
  }

  getCart() {
    return this.cart;
  }
}
