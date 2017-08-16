import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from './store/actions';
import Drawer  from 'material-ui/Drawer';
import isResponsiveAndOverBreakPoint from './store/selectors';

class ResponsiveDrawer extends Component {

  render() {
    const { browser, responsiveDrawer, breakPoint, toggleDrawerOpen, children} = this.props

    const props=this.props;
    const open= isResponsiveAndOverBreakPoint(browser, responsiveDrawer, breakPoint);

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
  breakPoint: PropTypes.string,
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
