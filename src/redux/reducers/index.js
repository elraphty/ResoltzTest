/**
 * Created by Raphael Osaze Eyerin
 * On May 22nd 2019
 * This file loads all the reducers and combine them
 */

import { combineReducers } from 'redux';
import timeReducer from './timeReducer';

const rootReducer = combineReducers({
  time: timeReducer
});

export default rootReducer;
