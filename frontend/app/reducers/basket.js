import {List} from 'immutable';
import {
  FETCH_BASKET_RESPONSE
} from '../actions';

export const basket = (state = List(), action) => {
  switch (action.type) {
  case FETCH_BASKET_RESPONSE: {
    return List(action.payload);
  }
  default:
    return state;
  }
};
