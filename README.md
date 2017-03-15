# Material-UI responsive Drawer

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Table of Contents

- [Description](#description)
- [Installation](#instalaltion)
  - [Clone repository](#clone-repository)
  - [Install as npm module](#install-as-npm-module)
- [Usage](#usage)
  - [As repository clone](#as-repository-clone)
  - [As npm module](#as-npm-module)
    - [Preparation](#preparation)
    - [Examples](#examples)
- [Contibuting](#contibuting)


## Description

React-Redux Component that uses [Material-UI](http://www.material-ui.com/) to create a responsive Drawer.
Some properties of the Drawer can be changed using actions from the module.

## Installation

There are two types of using this project. You can clone the repository form GitHub or use it directly as npm module in you own react-redux application. Of course the second one is the prefered because it is made for shared. We will show both of the installation types.

### Clone repository

If you want to install the project to make commits or to see the demo you should run the following command:

```bash
git clone https://github.com/TarikHuber/material-ui-responsive-drawer your_project_name
```

You can change the "your_project_name" to any name you want.

### Install as npm module

This project should be used as npm module in your application. To install it run the following command:

```bash
npm i material-ui-responsive-drawer
```

The module should be installed after that and you should be ready to use it.



## Usage

### As repository clone

If you have cloned the project the first thing you have to do is to install the npm dependencies by runing following command:

```bash
npm install
```

After that you can run a second command to run the demo application:

```bash
npm start
```

The demo application should now be awaylable on `http://localhost:3000/`

More about the possible usage ofthe project you can find [here](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md).


### As npm module

#### Preparation

If you want to use the project as npm module you'll have more work to do.

We need to add the `responsiveStoreEnhancer` from `redux-responsive` into our store:

```js

import {responsiveStoreEnhancer} from 'redux-responsive';
const store = createStore(reducers, responsiveStoreEnhancer);

```

You can find more about the `redux-responsive` project [here](https://github.com/AlecAivazis/redux-responsive).

I asume that you are already using `material-ui`. But if not you have to setup your project for compnents from taht project with adding the `MuiThemeProvider` and setting up the `TapEventPlugin`. For example (thsi code is from the dmeo in this project):

```js

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
  , document.querySelector('#app'))

```

No mather where you store your reducers the `ResponsiveDrawer` needs access to a specific reducer and hes state. For that we add to our reducers `index.js` file where we compine all our reducers the following two reduces:

```js

import {responsiveStateReducer} from 'redux-responsive';
import {combineReducers} from 'redux';
import {responsiveDrawer} from 'material-ui-responsive-drawer';

const reducers = combineReducers({
  browser: responsiveStateReducer,
  responsiveDrawer: responsiveDrawer
})

export default reducers;

```

I would say "that's all you have to do" ;)


#### Examples

The module contains of two main parts:
* ResponsiveDrawer the responsive Drawer
* BodyContainer the "responsive" body that is adjusting hes margins to not be hidden behind the drawer

Both can be imported like this:

```js

import {
  ResponsiveDrawer,
  BodyContainer
} from 'material-ui-responsive-drawer'

```

Both of them are just containers in witch you can put all your other application componnets:

```js

<div>
    <ResponsiveDrawer>
      <div>
        //all your componnets you want to have in the drawer part
      </div>
    </ResponsiveDrawer>
    <BodyContainer>
      <div>
        //all your componnets you want to have in the body part
      </div>
    </BodyContainer>
</div>

```

The ResponsiveDrawer has the same properties as the [Material-UI Drawer](http://www.material-ui.com/#/components/drawer).

There are some properties that shuld always be the same in this two components:
*width - if the `width of the draver is set to a specific value the `width` of the BodyContainer should be set to the same to avoid overlaping. Default is 256.
*openSecondary - this defines on witch side the Drawer will open so the BodyContainer should also have the same value for this property. Default is false.
*breackPoint - ths defines on witch size of the window the Drawer will be closed (small windows) or open and docked (large windows). Default is 'medium'. You can add custom break points to the `redux-responsive` implementation and change the breackPoint for the ResponsiveDrawer. More about that you can find [here](https://github.com/AlecAivazis/redux-responsive#using-custom-breakpoints)

All this properties are **optional**.

To use the actions for changing the drawer properties we will need some more code. For example we can change the `responsive` state of the drawer by calling the action `setResponsive` that needs a boolean as parameter witch defines if the drawer is responsive or not.

The actions available in this module are: `toggleDrawerOpen`, `toggleDrawerDock`, `setDrawerOpen(open)`, `setResponsive(responsive)`.

We can import them from the module like this:

```js

import {
  ResponsiveDrawer,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive
} from 'material-ui-responsive-drawer'

```

An complete example with all the actions called can be found in the [App.js](https://github.com/TarikHuber/material-ui-responsive-drawer/blob/master/demo/src/App.js) of the demo part of this project.


## Contributing

Every help no mather if it is a kritik, suggestion or pull request is welkome :)



[build-badge]: https://img.shields.io/travis/TarikHuber/material-ui-responsive-drawer/master.png?style=flat-square
[build]: https://travis-ci.org/TarikHuber/material-ui-responsive-drawer?branch=master

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/material-ui-responsive-drawer

[coveralls-badge]: https://img.shields.io/coveralls/TarikHuber/material-ui-responsive-drawer/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/TarikHuber/material-ui-responsive-drawer?branch=master
