import { CartItem } from 'src/app/models/states/cart-item';
import { CartActions, CartActionTypes } from '../actions/cart-actions';

//hangi state ile ilgili işlem yapacaksak
export let initialState: CartItem[] = [];

export function cartReducer(state = initialState, action: CartActions) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      //redux'ta push yasaktır. çünkü redux state'in değiştiğini bellekteki yeri değişince anlar. bunun yerine spread operatörü kullanırız. *** önemli- SPREAD operatörü yeni REFERANS oluşturur.
      let newState = [...state];
      let item = state.find((c) => c.product.id === action.payload.id);

      if (item) { //if i quantity i için yaptık
        item.quantity++;
        return newState;
      } else {
        let cartItem: CartItem = { product: action.payload, quantity: 1 };
        return [...state, cartItem];
      }

    case CartActionTypes.REMOVE_FROM_CART:
      return state.filter((c) => c.product.id !== action.payload.id);

    default:
      return state;
  }
}
// SEPETİN SON HALİNİ TUTAN YER REDUCER,ACTİON İSE BU STATE İLE İLGİLİ EMİRLERİMİZİ(EKLE,CIKAR)
//AKSİYON GÖNDERDİĞİMİZDE ÖRNEĞİN ADD TO CART ,NGRX KISACA REDUX BU ADD TO CART I KULLANAN REDUCERLAR KİMLER VAR DİYE BAKIYOR.REDUCER IN İÇİNDEKİLER BANA ADD TO CART DİYE BİR AKSİYON GELİRSE BASLANGIC DEĞERİ VE AKSİYON İSTİYOR.EĞER GELEN AKSİYON SUYSA SU STATEİ YAP BASKAYSA SUNU(STATE İ) YAP .
//DİSPATCH İLE TS DE METODU CAGIRIYORUZ.
