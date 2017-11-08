import {combineReducers} from 'redux-immutable';
import {products} from './products';

export const rootReducer = combineReducers({
  products
});
