import {List} from 'immutable';
import {FETCH_PRODUCTS_RESPONSE} from '../actions';

export const products = (state = List(), action) => {
  switch (action.type) {
  case FETCH_PRODUCTS_RESPONSE: {
    return List(action.payload);
  }
  default:
    return state;
  }
};
