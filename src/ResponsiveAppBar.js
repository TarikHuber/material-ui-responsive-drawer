import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from './actions/responsiveDrawer';
import isResponsiveAndOverBreackPoint from './utils/drawerHelper.js';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class ResponsiveAppBar extends Component {

  render() {
    const {
      browser,
      responsiveDrawer,
      breackPoint,
      children,
      width,
      openSecondary,
      style,
      showMenuIconButton,
      onLeftIconButtonTouchTap,
      toggleDrawerOpen,
      ...rest
    } = this.props
    const props={...(this.props)};
    const setWidth= isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);
    const drawerWidth=width!==undefined?width:256;
    const drawerOnRight=openSecondary!==undefined?openSecondary:false;

    const styles={
      docked_left: {
        position: 'fixed',
        width: 'auto',
        left: setWidth?drawerWidth:0,
        top:0,
        right: 0,
        ...style
      },
      docked_right: {
        position: 'fixed',
        width: 'auto',
        right: setWidth?drawerWidth:0,
        top:0,
        left:0,
        ...style
      }
    }

    const appBarProps = {
      width,
      style: drawerOnRight?styles.docked_right:styles.docked_left,
      ...rest
    };

    const showButton = showMenuIconButton!==undefined?showMenuIconButton:!setWidth;
    const handleButtonClick= onLeftIconButtonTouchTap!==undefined?onLeftIconButtonTouchTap:toggleDrawerOpen;

    return (

      <AppBar {...appBarProps}>
        <Toolbar>
          {showButton&&
            <IconButton 
              contrast
              onTouchTap={handleButtonClick}>
              <MenuIcon />
            </IconButton>
          }
          {children}
        </Toolbar>
      </AppBar>

    );

  }
}

ResponsiveAppBar.propTypes = {
  responsiveDrawer: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  style: PropTypes.object,
  breackPoint: PropTypes.string,
  width: PropTypes.number,
  openSecondary: PropTypes.bool,
  showMenuIconButton: PropTypes.bool,
  onLeftIconButtonTouchTap: PropTypes.func,
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
)(ResponsiveAppBar);
