import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  cart;
  shippingForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  onSubmit() {
    alert('Purchased!');
    this.shippingForm.reset();
  }
}
