import { responsiveStateReducer } from 'redux-responsive'
import { combineReducers } from 'redux'
import { responsiveDrawer } from '../../../src'

const reducers = combineReducers({
  browser: responsiveStateReducer,
  responsiveDrawer: responsiveDrawer
})

export default reducers
