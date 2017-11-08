import {Map} from 'immutable';
import {FETCH_IDEAS_RESPONSE} from '../actions';

export const ideas = (state = Map(), action) => {
  switch (action.type) {
  case FETCH_IDEAS_RESPONSE: {
    return state
      .set('ideas', action.payload);
  }
  default:
    return state;
  }
};
