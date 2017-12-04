import { responsiveStateReducer } from 'redux-responsive'
import { combineReducers } from 'redux'
import reducer from './reducer'

const reducers = combineReducers({
  browser: responsiveStateReducer,
  responsiveDrawer: reducer
})

export default reducers
