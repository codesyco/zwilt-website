import { SET_INPUT_VALUE } from '../Actions/inputAction';

const initialState = {
  value: '',
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default inputReducer;