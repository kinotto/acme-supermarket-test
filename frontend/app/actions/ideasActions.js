import {makeActionCreator} from './makeActionCreator';

export const FETCH_IDEAS_REQUEST = 'FETCH_IDEAS_REQUEST';
export const FETCH_IDEAS_RESPONSE = 'FETCH_IDEAS_RESPONSE';


export const FetchIdeasRequest = makeActionCreator(FETCH_IDEAS_REQUEST);
export const FetchIdeasResponse = makeActionCreator(FETCH_IDEAS_RESPONSE);
