import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.sass']
})
export class ShippingComponent implements OnInit {
  shippingData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/shipping.json').subscribe((data) => {
      this.shippingData = data;
    });
  }
}
