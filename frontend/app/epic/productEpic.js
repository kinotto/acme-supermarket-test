import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import {API} from '../utilities/API';
import {
  FETCH_PRODUCTS_REQUEST,
  FetchProductsResponse
} from '../actions';

// receive an action Observable and filter only the action of FETCH_PRODUCTS_REQUEST
// to then fetch the product through an ajax call
const fetchProducts = action$ => {
  return action$
    .ofType(FETCH_PRODUCTS_REQUEST)
    .switchMap(() => {
      return ajax({'url': API.FETCH_PRODUCTS})
        .map(resp => {
          return FetchProductsResponse(resp.response);
        });
    });
};


export const productEpic = [
  fetchProducts
];
