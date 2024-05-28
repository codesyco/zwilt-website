// reducers/index.js
import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import tabReducer from './tabReducer';
import menuReducer from './menuReducer';
import dropdownReducer from './dropDownReducer';

const rootReducer = combineReducers({
    tab: tabReducer,
    menu: menuReducer,
    input: inputReducer,
    dropdown: dropdownReducer,
  });

export default rootReducer;