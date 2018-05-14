import { combineReducers } from 'redux';

// actions
const ADD = 'counter/add';
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

// Action Creator
export function add(amount) {
  return {
    type: ADD,
    payload: {
      amount,
    },
  };
}

export function increase() {
  return {
    type: INCREMENT,
  };
}

export function decrease() {
  return {
    type: DECREMENT,
  };
}

// reducer
const initialState = {
  value: 0,
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        value: state.value + action.payload.amount,
      };
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

// app

export default combineReducers({
  counter,
});
