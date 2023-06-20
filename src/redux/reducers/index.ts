import { combineReducers } from 'redux';

const test = (state = {}, action) => {
  console.log(action); //only for Eslint avoiding
  return state;
};

const rootReducer = combineReducers({
  test,
});

export default rootReducer;
