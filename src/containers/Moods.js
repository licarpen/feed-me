import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import feedMeReducer from '../reducers/feedMeReducer';
import { getFace } from '../selectors/faceSelector';
import { addCoffee, addSnack, addNap, addStudy } from '../actions/feedMeActions';


const Moods = () => {
    
  const [foodState, dispatch] = useReducer(feedMeReducer, { coffees: 0, snacks: 0, naps: 0, studies: 0 });
  const actions = [
    { name: 'ADD_COFFEE', text: 'Drink Coffee', stateName: 'coffees', actionCreator: () => dispatch(addCoffee()) },
    { name: 'ADD_SNACK', text: 'Snack', stateName: 'snacks', actionCreator: () => dispatch(addSnack()) },
    { name: 'ADD_NAP', text: 'Nap', stateName: 'naps', actionCreator: () => dispatch(addNap()) },
    { name: 'ADD_STUDY', text: 'Study', stateName: 'studies', actionCreator: () => dispatch(addStudy()) },
  ];
  const face = getFace(foodState);
  const controlActions = actions.map(action => ({
    ...action,
    count: foodState[action.stateName]
  }));

  return (
    <>
      <Controls actions={controlActions} />
      <Face emoji={face} />
    </>
  );
};

export default Moods;
