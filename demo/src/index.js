import {render} from 'react-dom'
import React  from 'react';
import App from './App.js'
import { Provider } from 'react-redux';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {responsiveStoreEnhancer} from 'redux-responsive';
import { createStore, compose } from 'redux';
import { blue, pink } from 'material-ui/styles/colors';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
const store = createStore(reducers, responsiveStoreEnhancer);
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const palette = createPalette({
  primary: blue,
  accent: pink,
});

import './index.css';

const { theme } = MuiThemeProvider.createDefaultContext({
  theme: createMuiTheme({ palette }),
});

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App/>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('#demo'))
