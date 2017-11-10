import {makeActionCreator} from './makeActionCreator';

export const FETCH_BASKET_REQUEST = 'FETCH_BASKET_REQUEST';
export const FETCH_BASKET_RESPONSE = 'FETCH_BASKET_RESPONSE';
export const FETCH_BASKET_TOTAL_REQUEST = 'FETCH_BASKET_TOTAL_REQUEST';
export const FETCH_BASKET_TOTAL_RESPONSE = 'FETCH_BASKET_TOTAL_RESPONSE';
export const ADD_TO_BASKET_REQUEST = 'ADD_TO_BASKET_REQUEST';
export const ADD_TO_BASKET_RESPONSE = 'ADD_TO_BASKET_RESPONSE';
export const REMOVE_FROM_BASKET_REQUEST = 'REMOVE_FROM_BASKET_REQUEST';
export const REMOVE_FROM_BASKET_RESPONSE = 'REMOVE_FROM_BASKET_RESPONSE';

export const FetchBasketRequest = makeActionCreator(FETCH_BASKET_REQUEST);
export const FetchBasketResponse = makeActionCreator(FETCH_BASKET_RESPONSE);
export const AddToBasketRequest = makeActionCreator(ADD_TO_BASKET_REQUEST);
export const AddToBasketResponse = makeActionCreator(ADD_TO_BASKET_RESPONSE);
export const RemoveFromBasketRequest = makeActionCreator(REMOVE_FROM_BASKET_REQUEST);
export const RemoveFromBasketResponse = makeActionCreator(REMOVE_FROM_BASKET_RESPONSE);
export const FetchBasketTotalRequest = makeActionCreator(FETCH_BASKET_TOTAL_REQUEST);
export const FetchBasketTotalResponse = makeActionCreator(FETCH_BASKET_TOTAL_RESPONSE);
