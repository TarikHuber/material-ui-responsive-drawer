import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ResponsiveDrawer} from '../../src'
import {toggleDrawerOpen} from '../../src'
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'material-ui';



class App extends Component {

  render() {
    const { toggleDrawerOpen, browser, responsiveDrawer} = this.props

    return (

        <div>
          <h1>material-ui-responsive-drawer Demo</h1>
          <MuiThemeProvider>
            <div>
              <ResponsiveDrawer breackPoint={'medium'}/>
              <RaisedButton label="Toogle Drawer" primary={true} onTouchTap={toggleDrawerOpen} />
            </div>

          </MuiThemeProvider>
        </div>

    );
  }
}

App.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => {
  const {  browser, responsiveDrawer } = state;
  return {
    browser,
    responsiveDrawer
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen());
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
