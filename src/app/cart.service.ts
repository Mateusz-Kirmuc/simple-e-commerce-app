import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cart = [];

  constructor() {}

  addProductToCart(product) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }
}
