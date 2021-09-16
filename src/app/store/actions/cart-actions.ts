import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product/product';

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}
//action çağırıldığında redux state'in değişeceğini anlar.

export class AddToCart implements Action {
  type: string = CartActionTypes.ADD_TO_CART;
  constructor(public payload: Product) {}
}

export class RemoveFromCart implements Action {
  type: string = CartActionTypes.REMOVE_FROM_CART;
  constructor(public payload: Product) {}
}

//aynı anda 2 import yapmaya yarayan syntax
export type CartActions = AddToCart | RemoveFromCart;
