import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductNotificationsComponent } from './product-notifications/product-notifications.component';
import { CartComponent } from './cart/cart.component';
import {CartService} from './cart.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
   declarations: [
     AppComponent,
     TopBarComponent,
     ProductListComponent,
     ProductDetailsComponent,
     ProductNotificationsComponent,
     CartComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'product-details/:productIndex', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent}
    ]),
    ReactiveFormsModule
  ],
   providers: [CartService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
