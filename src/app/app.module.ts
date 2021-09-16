import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { EtradeNaviComponent } from './features/navi/etrade-navi/etrade-navi.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/reducers/cart-reducer';
import { CartComponent } from './features/cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EtradeNaviComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      { cartReducer },
      {
        runtimeChecks: {
          strictStateImmutability: false,
        },
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
