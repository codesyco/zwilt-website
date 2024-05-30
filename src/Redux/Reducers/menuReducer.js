import { TOGGLE_MENU } from '../Actions/menuAction';

const initialState = {
  isMenuOpen: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};

export default menuReducer;