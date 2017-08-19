# Material-UI responsive Drawer
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![License][license-image]][license-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Style][code-style-image]][code-style-url]

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
    - [Preparation](#preparation)
        -[Material-UI](#material-ui)
        -[Redux responsive](#redux-responsive)
        -[Reducers](#reducers)
    - [Examples](#examples)
- [Contributing](#contributing)


## Description

Material-UI responsive Drawer is a React-Redux component that uses [Material-UI](http://www.material-ui.com/) to create a responsive Drawer.

You can try it out the [DEMO](https://tarikhuber.github.io/material-ui-responsive-drawer/).

## Installation

This project can be installed as npm module using following command:

```bash
npm i -S material-ui-responsive-drawer
```

## Usage


### Preparation

#### Material-UI

For this project components to work in your application after the npm installation you have to be sure that everything is correctly setup for Material-UI to work. You can find more about that [here](https://github.com/callemall/material-ui#installation).

#### Redux responsive

We also need to add the `responsiveStoreEnhancer` from `redux-responsive` into our store:

```js

import {responsiveStoreEnhancer} from 'redux-responsive';
const store = createStore(reducers, responsiveStoreEnhancer);

```

You can find more about the `redux-responsive` project [here](https://github.com/AlecAivazis/redux-responsive).

#### Reducers

No matter where you store your reducers the `ResponsiveDrawer` needs access to a specific reducer and its state. For that we add to our reducers `index.js` file where we combine all our reducers the following two reducers:

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

That are the point we have to do before using this module in our application.


### Examples

The module contains of three main parts:
* **ResponsiveDrawer** the responsive Drawer
* **BodyContainer** the responsive body that is adjusting its position according to the drawer
* **ResponsiveAppBar** the responsive AppBar that works with the ResponsiveDrawer together

All can be imported like this:

```js

import {
  ResponsiveDrawer,
  BodyContainer,
  ResponsiveAppBar
} from 'material-ui-responsive-drawer'

```

All of them are just containers in witch you can put all your other application components:

```js

<div>
    <ResponsiveDrawer>
      <div>
        //all your components you want to have in the drawer part
      </div>
    </ResponsiveDrawer>
    <BodyContainer>
      <ResponsiveAppBar
          title={'Responsive Material-UI Drawer DEMO'}
          iconElementRight={<FlatButton label="Demo" />}
        />
      <div>
        //all your components you want to have in the body part
      </div>
    </BodyContainer>
</div>

```

The ResponsiveDrawer has the same properties as the [Material-UI Drawer](http://www.material-ui.com/#/components/drawer).
The ResponsiveAppBar has the same properties as the [Material-UI AppBar](http://www.material-ui.com/#/components/app-bar).

There are some properties that should always be the same in this three components:
* **width** - if the width of the drawer is set to a specific value the width of the BodyContainer should be set to the same to avoid overlapping. Default is 256.
* **openSecondary** - defines on witch side the Drawer will open so the BodyContainer should also have the same value for this property. Default is false.
* **breakPoint** - defines on witch size of the window the Drawer will be closed (small windows) or open and docked (large windows). Default is 'medium'. You can add custom break points to the `redux-responsive` implementation and change the breakPoint for the ResponsiveDrawer. More about that you can find [here](https://github.com/AlecAivazis/redux-responsive#using-custom-breakpoints)

All this properties are **optional**.

To use the actions for changing the drawer properties we will need some more code. For example we can change the `responsive` state of the drawer by calling the action `setResponsive` that needs a boolean as parameter witch defines if the drawer is responsive or not.

The actions available in this module are: `toggleDrawerOpen`, `toggleDrawerDock`, `setDrawerOpen(open)`, `setResponsive(responsive)`.

We can import them from the module like this:

```js

import {
  ResponsiveDrawer,
  BodyContainer,
  ResponsiveAppBar,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive
} from 'material-ui-responsive-drawer'

```

An complete example with all the actions called can be found in the [App.js](https://github.com/TarikHuber/material-ui-responsive-drawer/blob/master/demo/src/App.js) of the demo part of this project.


## Contributing

Every help no matter if it is a critique, suggestion or pull request is welcome :)

[travis-image]: https://travis-ci.org/TarikHuber/material-ui-responsive-drawer.svg?branch=master
[travis-url]: https://travis-ci.org/TarikHuber/material-ui-responsive-drawer
[daviddm-image]: https://img.shields.io/david/TarikHuber/material-ui-responsive-drawer.svg?style=flat-square
[daviddm-url]: https://david-dm.org/TarikHuber/material-ui-responsive-drawer
[coverage-image]: https://img.shields.io/codecov/c/github/TarikHuber/material-ui-responsive-drawer.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/TarikHuber/material-ui-responsive-drawer
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://github.com/TarikHuber/material-ui-responsive-drawer/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
