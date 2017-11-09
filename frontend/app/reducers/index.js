import {combineReducers} from 'redux-immutable';
import {products} from './products';
import {basket} from './basket';

export const rootReducer = combineReducers({
  products,
  basket
});
