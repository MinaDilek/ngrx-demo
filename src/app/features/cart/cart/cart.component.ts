import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product/product';
import { CartItem } from 'src/app/models/states/cart-item';
import * as AllCartActions from '../../../store/actions/cart-actions';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:CartItem[] = []
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.store.select("cartReducer").subscribe(state=>{
      this.cartItems = state;
    })
  }

  removeFromCart(product: Product) {
    this.store.dispatch(new AllCartActions.RemoveFromCart(product));
  }

  

}
