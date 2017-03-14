import {responsiveStateReducer} from 'redux-responsive';
import { combineReducers } from 'redux';
import responsiveDrawer from './responsiveDrawer';

const reducers = combineReducers({
  browser: responsiveStateReducer,
  responsiveDrawer
})

export default reducers;
