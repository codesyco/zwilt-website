import { TOGGLE_MENU } from '../Actions/menuAction';

const initialState = {
  isMenuOpen: false, // Initial state: menu closed
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen }; // Toggle menu state
    default:
      return state;
  }
};

export default menuReducer;