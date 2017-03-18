import React, { Component, PropTypes } from 'react';
import {
  ResponsiveDrawer,
  ResponsiveAppBar,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive
} from '../../src/index.js'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {connect} from 'react-redux';

const styles={
  drawer_container:{
    backgroundColor: 'green',
    height: '100%'
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
    const { toggleDrawerOpen, browser, responsiveDrawer, toggleDrawerDock, setResponsive} = this.props

    return (

      <div>
        <div>
          <ResponsiveDrawer openSecondary={false}>
            <div style={styles.drawer_container}>
              <div style={styles.drawer_header_container}>
                <h1 style={styles.drawer_header}>Drawer</h1>
                <RaisedButton
                  label={responsiveDrawer.open?"Close drawer":"Open drawer"}
                  primary={true}
                  onTouchTap={toggleDrawerOpen}
                />
              </div>
            </div>
          </ResponsiveDrawer>
          <BodyContainer openSecondary={false}>
            <ResponsiveAppBar
              title={'Responsive Material-UI Drawer DEMO'}
              showMenuIconButton={undefined}
              onLeftIconButtonTouchTap={toggleDrawerOpen}
              iconElementRight={<FlatButton label="Demo" />}
            />
            <div style={{margin:'10px'}}>
              <h1 style={styles.body_header}>Body</h1>
              <RaisedButton
                label={responsiveDrawer.open?"Close drawer":"Open drawer"}
                primary={true}
                onTouchTap={toggleDrawerOpen}
              />
              <Toggle
                label={responsiveDrawer.responsive?"Disable responsive":"Enable responsive"}
                labelPosition='right'
                style={styles.responsive_toggler}
                toggled={responsiveDrawer.responsive}
                onToggle={()=>{setResponsive(!responsiveDrawer.responsive)}}
              />
              <Toggle
                label={responsiveDrawer.docked?"Disable docked":"Enable docked"}
                labelPosition='right'
                style={styles.responsive_toggler}
                toggled={responsiveDrawer.docked}
                onToggle={toggleDrawerDock}
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
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
