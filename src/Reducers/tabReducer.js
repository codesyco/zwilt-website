import { SET_ACTIVE_TAB } from '../Actions/tabActions';

const initialState = {
  activeTab: 'IT & Development',
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

export default tabReducer;
