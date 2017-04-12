import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from './actions/responsiveDrawer';
import Drawer  from 'material-ui/Drawer';
import isResponsiveAndOverBreackPoint from './utils/drawerHelper.js';

class ResponsiveDrawer extends Component {

  render() {
    const { browser, responsiveDrawer, breackPoint, toggleDrawerOpen, children} = this.props

    const props=this.props;
    const open= isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);

    const drawerP = {
      docked: open?true:responsiveDrawer.docked,
      open: open?open:responsiveDrawer.open,
      onRequestChange: toggleDrawerOpen,
      ...props
    };

    return (
      <Drawer {...drawerP} >
        {children}
      </Drawer>
    );

  }
}

ResponsiveDrawer.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
  responsiveDrawer: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
  breackPoint: PropTypes.string,
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
)(ResponsiveDrawer);
