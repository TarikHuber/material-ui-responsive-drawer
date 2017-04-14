import React, { Component, PropTypes } from 'react';
import {
  ResponsiveDrawer,
  ResponsiveAppBar,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive
} from '../../src/index.js'
import {connect} from 'react-redux';
import Icon from 'material-ui/Icon';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import { LabelSwitch } from 'material-ui/Switch';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';

const styles={
  drawer_container:{
    backgroundColor: 'green',
    height: '100%',
    width: 250,
  },
  drawer_header:{
    margin: '0px',
    paddingBottom: '10px'
  },
  drawer_header_container:{
    padding: '10px'
  },
  body_header:{
    margin: '0px',
    padding: '10px'
  },
  responsive_toggler:{
    width: 250,
    paddingTop:15
  }
}


class App extends Component {

  render() {
    const {
      toggleDrawerOpen,
      browser,
      responsiveDrawer,
      toggleDrawerDock,
      setResponsive
    } = this.props

    return (

      <div>
        <div>
          <ResponsiveDrawer >
            <div style={styles.drawer_container}>
              <div style={styles.drawer_header_container}>
                <h1 style={styles.drawer_header}>Drawer</h1>
                <Button
                  primary
                  onTouchTap={toggleDrawerOpen}>
                  {responsiveDrawer.open?"Close drawer":"Open drawer"}
                </Button>
              </div>
            </div>
          </ResponsiveDrawer>
          <BodyContainer >
            <ResponsiveAppBar>
              <Text type="title" colorInherit>Title</Text>
            </ResponsiveAppBar>

            <div style={{margin:20, marginTop: 70}}>
              <h1 style={styles.body_header}>Body</h1>
              <Button
                primary
                onTouchTap={toggleDrawerOpen}>
                {responsiveDrawer.open?"Close drawer":"Open drawer"}
              </Button><br/>
              <LabelSwitch
                label={responsiveDrawer.responsive?"Disable responsive":"Enable responsive"}
                checked={responsiveDrawer.responsive}
                onChange={()=>{setResponsive(!responsiveDrawer.responsive)}}
              /><br/>
              <LabelSwitch
                label={responsiveDrawer.docked?"Disable docked":"Enable docked"}
                checked={responsiveDrawer.docked}
                onChange={toggleDrawerDock}
              />
            </div>
          </BodyContainer>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
  toggleDrawerDock: PropTypes.func.isRequired,
  setResponsive: PropTypes.func.isRequired,
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
    toggleDrawerDock: () => {
      dispatch(toggleDrawerDock());
    },
    setResponsive: (isResponsive) => {
      dispatch(setResponsive(isResponsive));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
