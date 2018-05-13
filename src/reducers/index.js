import { combineReducers } from 'redux';

const initialState = {
  value: 0,
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'Counter/Add':
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};

// app

export default combineReducers({
  counter,
});
