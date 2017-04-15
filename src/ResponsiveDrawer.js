import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawerOpen, setAnchor } from './actions/responsiveDrawer';
import Drawer  from 'material-ui/Drawer';
import isResponsiveAndOverBreackPoint from './utils/drawerHelper.js';

class ResponsiveDrawer extends Component {

  componentWillMount(porps){
    const {anchor, setAnchor} =this.props;

    if(anchor!==undefined && anchor!=='left'){
      setAnchor(anchor);
    }

  }

  render() {
    const { browser, responsiveDrawer, breackPoint, toggleDrawerOpen, children, anchor, ...rest} = this.props

    const props=this.props;
    const open= isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint);

    const drawerP = {
      docked: open?true:responsiveDrawer.docked,
      open: open?open:responsiveDrawer.open,
      onRequestClose: toggleDrawerOpen,
      anchor: responsiveDrawer.anchor,
      ...rest
    };

    return (
      <Drawer {...drawerP}>
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
    setAnchor: (anchor) => {
      dispatch(setAnchor(anchor));
    },

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponsiveDrawer);
