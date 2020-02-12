import { ADD_COFFEE, ADD_SNACK, ADD_NAP, ADD_STUDY } from '../actions/feedMeActions';

export default function reducer(state, action) {
  switch(action.type) {
    case ADD_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case ADD_SNACK:
      return { ...state, snacks: state.snacks + 1 };
    case ADD_NAP:
      return { ...state, naps: state.naps + 1 };
    case ADD_STUDY:
      return { ...state, studies: state.studies + 1 };
    default:
      console.log(`unhandled name: ${name}`);
      return state;
  }
}
