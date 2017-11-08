import {Map} from 'immutable';
import {FETCH_PRODUCTS_RESPONSE} from '../actions';

export const products = (state = Map(), action) => {
  switch (action.type) {
  case FETCH_PRODUCTS_RESPONSE: {
    return state
      .set('products', action.payload);
  }
  default:
    return state;
  }
};
