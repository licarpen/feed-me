import { ADD_COFFEE, ADD_SNACK, ADD_NAP, ADD_STUDY } from '../actions/feedMeActions';

export default function reducer(state, action) {
  switch(action.type) {
    case ADD_COFFEE:
      return [action.payload, ...state];
    case ADD_SNACK:
      return [action.payload, ...state];
    case ADD_NAP:
      return [action.payload, ...state];
    case ADD_STUDY:
      return [action.payload, ...state];
    default:
      return state;
  }
}
