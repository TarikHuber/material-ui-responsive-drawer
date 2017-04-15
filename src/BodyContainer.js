import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from './actions/responsiveDrawer';
import isResponsiveAndOverBreackPoint from './utils/drawerHelper.js';

class BodyContainer extends Component {

  render() {
    const { browser, responsiveDrawer, breackPoint, children, width, style, drawerHeight} = this.props

    const setWidth= isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);
    const drawerWidth=width!==undefined?width:250;

    const styles={
      docked_left: {
        position: 'absolute',
        left: setWidth?drawerWidth:0,
        top:0,
        bottom: 0,
        right: 0,
        ...style
      },
      docked_right: {
        position: 'absolute',
        right: setWidth?drawerWidth:0,
        top:0,
        left:0,
        bottom: 0,
        ...style
      },
      docked_top: {
        position: 'absolute',
        width: 'auto',
        right: 0,
        left: 0,
        top:setWidth?(drawerHeight!==undefined?drawerHeight:64):0,
        ...style
      },
      docked_bottom: {
        position: 'absolute',
        width: 'auto',
        right: 0,
        top:0,
        left:0,
        bottom: setWidth?drawerHeight:0,
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

    return (

      <div style={dock_style}>
        {children}
      </div>

    );

  }
}

BodyContainer.propTypes = {
  responsiveDrawer: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
  style: PropTypes.object,
  breackPoint: PropTypes.string,
  width: PropTypes.number
};

const mapStateToProps = (state) => {
  const {  browser, responsiveDrawer } = state;
  return {
    browser,
    responsiveDrawer
  };
};

export default connect(
  mapStateToProps
)(BodyContainer);
