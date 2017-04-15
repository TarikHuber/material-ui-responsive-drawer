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
      style,
      showMenuIconButton,
      onLeftIconButtonTouchTap,
      toggleDrawerOpen,
      drawerHeight,
      ...rest
    } = this.props
    const props={...(this.props)};
    const setWidth= isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);
    const drawerWidth=width!==undefined?width:250;
    const drawerOnRight=responsiveDrawer.anchor==='right';

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
      },
      docked_top: {
        position: 'fixeds',
        width: 'auto',
        right: 0,
        top:'auto',
        left:0,
        ...style
      },
      docked_bottom: {
        position: 'absolute',
        width: 'auto',
        right: 0,
        top:0,
        left:0,
        bottom: 'auto',
        ...style
      }
    }

    let dock_style=styles.docked_left;

    switch (responsiveDrawer.anchor) {
      case 'left':
          dock_style=styles.docked_left;
        break;
      case 'right':
          dock_style=styles.docked_right;
        break;
      case 'top':
          dock_style=styles.docked_top;
        break;
      case 'bottom':
          dock_style=styles.docked_bottom;
        break;
      default:
        dock_style=styles.docked_left;
    }


    const appBarProps = {
      width,
      style: dock_style,
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
