import {makeActionCreator} from './makeActionCreator';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_RESPONSE = 'FETCH_PRODUCTS_RESPONSE';


export const FetchProductsRequest = makeActionCreator(FETCH_PRODUCTS_REQUEST);
export const FetchProductsResponse = makeActionCreator(FETCH_PRODUCTS_RESPONSE);
