import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from './actions/responsiveDrawer';
import muiThemeable from 'material-ui/styles/muiThemeable';
import isResponsiveAndOverBreackPoint from './utils/drawerHelper.js';

class BodyContainer extends Component {

  render() {
    const { browser, responsiveDrawer, breackPoint, children, width, openSecondary} = this.props

    const setWidth= isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);
    const drawerWidth=width!==undefined?width:256;
    const drawerOnRight=openSecondary!==undefined?openSecondary:false;

    const styles={
      docked_left: {
        marginLeft: setWidth?drawerWidth:undefined,
      },
      docked_right: {
        marginRight: setWidth?drawerWidth:undefined,
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
