import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import {API} from '../utilities/API';
import {
  FETCH_BASKET_REQUEST,
  ADD_TO_BASKET_REQUEST,
  REMOVE_FROM_BASKET_REQUEST,
  FetchBasketResponse
} from '../actions';


const fetchBasket = action$ => {
  return action$
    .ofType(FETCH_BASKET_REQUEST)
    .switchMap(() => {
      return ajax({'url': API.BASKET})
        .map(resp => {
          return FetchBasketResponse(resp.response);
        });
    });
};

const addToBasket = action$ => {
  return action$
    .ofType(ADD_TO_BASKET_REQUEST)
    .switchMap((action) => {
      return ajax({
        'url': API.BASKET,
        'method': 'POST',
        'body': action.payload,
        'headers': {'Content-Type': 'application/json'}
      }).map(resp => {
        return FetchBasketResponse(resp.response);
      });
    });
};

const removeFromBasket = action$ => {
  return action$
    .ofType(REMOVE_FROM_BASKET_REQUEST)
    .switchMap((action) => {
      return ajax({
        'url': API.BASKET,
        'method': 'DELETE',
        'body': action.payload,
        'headers': {'Content-Type': 'application/json'}
      }).map(resp => {
        return FetchBasketResponse(resp.response);
      });
    });
};

export const basketEpic = [
  fetchBasket,
  addToBasket,
  removeFromBasket
];
