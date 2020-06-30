import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-notifications',
  templateUrl: './product-notifications.component.html',
  styleUrls: ['./product-notifications.component.sass']
})
export class ProductNotificationsComponent implements OnInit {
  @Input() productPrice: number;

  constructor() { }

  ngOnInit(): void {
  }

  handleNotifyBtnClick() {
    alert('You will be notified when the product goes on sale!');
  }

}
