# Material-UI responsive Drawer

## Table of Contents

- [Description](#description)
- [Installation](#instalaltion)
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

This project can be istalled as npm module using following command:

```bash
npm i -S material-ui-responsive-drawer
```

## Usage


### Preparation

#### Material-UI

For this project components to work in your application after the npm installetion you have to be shure that everithing is correctly setup for Material-UI to work. You can find more about that [here](https://github.com/callemall/material-ui#installation).

#### Redux responsive

We also need to add the `responsiveStoreEnhancer` from `redux-responsive` into our store:

```js

import {responsiveStoreEnhancer} from 'redux-responsive';
const store = createStore(reducers, responsiveStoreEnhancer);

```

You can find more about the `redux-responsive` project [here](https://github.com/AlecAivazis/redux-responsive).

#### Reducers

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

That are the point we have to do before using this module in our application.


### Examples

The module contains of three main parts:
* **ResponsiveDrawer** the responsive Drawer
* **BodyContainer** the responsive body that is adjusting hes position acording to the drawer
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
        //all your componnets you want to have in the drawer part
      </div>
    </ResponsiveDrawer>
    <BodyContainer>
      <ResponsiveAppBar
          title={'Responsive Material-UI Drawer DEMO'}
          iconElementRight={<FlatButton label="Demo" />}
        />
      <div>
        //all your componnets you want to have in the body part
      </div>
    </BodyContainer>
</div>

```

The ResponsiveDrawer has the same properties as the [Material-UI Drawer](http://www.material-ui.com/#/components/drawer).
The ResponsiveAppBar has the same properties as the [Material-UI AppBar](http://www.material-ui.com/#/components/app-bar).

There are some properties that shuld always be the same in this three components:
* **width** - if the width of the draver is set to a specific value the width of the BodyContainer should be set to the same to avoid overlaping. Default is 256.
* **openSecondary** - defines on witch side the Drawer will open so the BodyContainer should also have the same value for this property. Default is false.
* **breackPoint** - defines on witch size of the window the Drawer will be closed (small windows) or open and docked (large windows). Default is 'medium'. You can add custom break points to the `redux-responsive` implementation and change the breackPoint for the ResponsiveDrawer. More about that you can find [here](https://github.com/AlecAivazis/redux-responsive#using-custom-breakpoints)

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

Every help no mather if it is a kritik, suggestion or pull request is welkome :)
