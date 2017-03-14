import {render} from 'react-dom'
import React  from 'react';
import App from './App.js'
import { Provider } from 'react-redux';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {responsiveStoreEnhancer} from 'redux-responsive';
import { createStore, compose } from 'redux';
const store = createStore(reducers, responsiveStoreEnhancer);
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('#demo'))
