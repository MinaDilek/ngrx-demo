import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart/cart.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
