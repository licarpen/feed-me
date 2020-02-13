import {
  ADD_COFFEE,
  addCoffee,
  ADD_SNACK,
  addSnack,
  ADD_NAP,
  addNap,
  ADD_STUDY,
  addStudy
} from './feedMeActions';

describe('feedMe action creators', () => {
  it('creates an addCoffee action', () => {
    const action = addCoffee();
    expect(action).toEqual({ type: ADD_COFFEE });
  });
  it('creates an addSnack action', () => {
    const action = addSnack();
    expect(action).toEqual({ type: ADD_SNACK });
  });
  it('creates an addNap action', () => {
    const action = addNap();
    expect(action).toEqual({ type: ADD_NAP });
  });
  it('creates an addStudy action', () => {
    const action = addStudy();
    expect(action).toEqual({ type: ADD_STUDY });
  });
});
