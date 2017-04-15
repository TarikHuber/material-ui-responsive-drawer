import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveDrawer,
  ResponsiveAppBar,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive,
  setAnchor
} from '../../src/index.js'
import {connect} from 'react-redux';
import Icon from 'material-ui/Icon';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import { LabelSwitch } from 'material-ui/Switch';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Divider from 'material-ui/Divider';
import DeleteIcon from 'material-ui-icons/Delete';
import Close from 'material-ui-icons/Close';
import { LabelRadio, RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl } from 'material-ui/Form';

const styles={
  drawer_container:{
    height: '100%',
    width: 250,
  }
}


class App extends Component {

  render() {
    const {
      toggleDrawerOpen,
      browser,
      responsiveDrawer,
      toggleDrawerDock,
      setResponsive,
      setAnchor
    } = this.props

    return (

      <div>
        <div>
          <ResponsiveDrawer >
            <div style={styles.drawer_container}>
              <Toolbar >
                { responsiveDrawer.open &&
                  <IconButton onTouchTap={toggleDrawerOpen}>
                    <Close />
                  </IconButton>
                }
                <Text type="title" >
                  Material UI
                </Text>
                <Divider absolute />
              </Toolbar>

            </div>
          </ResponsiveDrawer>
          <BodyContainer >
            <ResponsiveAppBar >
              <Text type="title" colorInherit>Title</Text>
            </ResponsiveAppBar>

            <div style={{margin:20, marginTop: 70}}>
              <LabelSwitch
                label={responsiveDrawer.responsive?"Disable responsive":"Enable responsive"}
                checked={responsiveDrawer.responsive}
                onChange={()=>{setResponsive(!responsiveDrawer.responsive)}}
              /><br/>
              <LabelSwitch
                label={responsiveDrawer.docked?"Disable docked":"Enable docked"}
                checked={responsiveDrawer.docked}
                onChange={toggleDrawerDock}
              /><br/>

              <FormControl >
                <FormLabel>Anchor</FormLabel>
                <RadioGroup
                  aria-label="Anchor"
                  name="anchor"
                  selectedValue={responsiveDrawer.anchor}
                  onChange={(event, value)=>{setAnchor(value);}}
                  >
                    <LabelRadio label="Left" value="left" />
                    <LabelRadio label="Right" value="right" />
                    <LabelRadio label="Top" value="top" />
                    <LabelRadio label="Bottom" value="bottom" />
                  </RadioGroup>
                </FormControl>
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
      setAnchor: (anchor) => {
        dispatch(setAnchor(anchor));
      }
    }
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
