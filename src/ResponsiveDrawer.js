import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from './actions/responsiveDrawer';
import { Drawer } from 'material-ui';

class ResponsiveDrawer extends Component {

  render() {
    const { browser, responsiveDrawer, breackPoint, toggleDrawerOpen} = this.props
    const props=this.props;
    const docked=browser.greaterThan[breackPoint] && responsiveDrawer.responsive;

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        docked: docked
      })
    );

    const drawerP = {
      docked: docked,
      open:docked?docked:responsiveDrawer.open,
      onRequestChange: toggleDrawerOpen,
      ...props

    };

    return (

      <Drawer {...drawerP} >
        {childrenWithProps}
      </Drawer>

    );

  }
}

ResponsiveDrawer.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
  responsiveDrawer: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
  breackPoint: PropTypes.string.isRequired,
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
