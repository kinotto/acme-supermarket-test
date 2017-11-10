import {Map, List} from 'immutable';
import {
  FETCH_BASKET_RESPONSE,
  FETCH_BASKET_TOTAL_RESPONSE
} from '../actions';

export const basket = (state = Map({'items': List(), 'total': 0}), action) => {
  switch (action.type) {
  case FETCH_BASKET_RESPONSE: {
    return state
      .set('items', List(action.payload));
  }
  case FETCH_BASKET_TOTAL_RESPONSE: {
    return state
      .set('total', action.payload.total);
  }
  default:
    return state;
  }
};
