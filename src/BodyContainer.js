import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from './actions/responsiveDrawer';
import muiThemeable from 'material-ui/styles/muiThemeable';
import isResponsiveAndOverBreackPoint from './utils/drawerHelper.js';

class BodyContainer extends Component {

  render() {
    const { browser, responsiveDrawer, breackPoint, children, width, openSecondary, style} = this.props

    const setWidth= isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);
    const drawerWidth=width!==undefined?width:256;
    const drawerOnRight=openSecondary!==undefined?openSecondary:false;

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
      }
    }

    return (

      <div style={drawerOnRight?styles.docked_right:styles.docked_left}>
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
  width: PropTypes.number,
  openSecondary: PropTypes.bool,
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
