import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AdminProductsModule } from './admin-products/admin-products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartsModule,
    SharedModule,
    AdminProductsModule,
    FormsModule,
    AdminProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
