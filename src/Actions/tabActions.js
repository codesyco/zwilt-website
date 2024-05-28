// Action types
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

// Action creator
export const setActiveTab = (tab) => ({
  type: SET_ACTIVE_TAB,
  payload: tab,
});
