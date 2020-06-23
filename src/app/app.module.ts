import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot([
         {path: '', component: ProductListComponent}
      ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
