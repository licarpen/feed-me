import reducer from './feedMeReducer';
import { addCoffee, addSnack, addNap, addStudy } from '../actions/feedMeActions';

describe('feedMe reducer', () => {
  it('handles the ADD_COFFEE case', () => {
    const action = addCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });
  it('handles the ADD_SNACK case', () => {
    const action = addSnack();
    const initialState = { snacks: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ snacks: 1 });
  });
  it('handles the ADD_NAP case', () => {
    const action = addNap();
    const initialState = { naps: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ naps: 1 });
  });
  it('handles the ADD_STUDY case', () => {
    const action = addStudy();
    const initialState = { studies: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ studies: 1 });
  });
});
