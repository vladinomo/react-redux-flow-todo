// @flow

// actions
const ADD = 'counter/add';
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

// types
export type State = {
  value: number,
};

export type Action =
  | {
      type: typeof ADD,
      payload: {
        amount: number,
      },
    }
  | {
      type: typeof INCREMENT,
    }
  | {
      type: typeof DECREMENT,
    };

// Action Creator
export function add(amount: number) {
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
const initialState: State = {
  value: 0,
};

export default (state: State = initialState, action: Action) => {
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
