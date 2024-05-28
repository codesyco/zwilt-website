import { TOGGLE_DROPDOWN } from '../Actions/dropDownAction';

const initialState = {
  isOpen: false,
};

const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default dropdownReducer;
