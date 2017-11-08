import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import {API} from '../utilities/API';
import {
  FETCH_IDEAS_REQUEST,
  FetchIdeasResponse
} from '../actions';

// receive an action Observable and filter only the action of FETCH_IDEAS_REQUEST
// to then fetch the ideas through an ajax call
const fetchIdeas = action$ => {
  return action$
    .ofType(FETCH_IDEAS_REQUEST)
    .switchMap(() => {
      return ajax({'url': API.FETCH_IDEAS, 'crossDomain': true})
        .map(resp => {
          return FetchIdeasResponse(resp);
        });
    });
};


export const ideaEpic = [
  fetchIdeas
];
