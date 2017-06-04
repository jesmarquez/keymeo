import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link } from 'react-router-dom';

function handleTouchTap() {

}

const styles = {
  title: {
    cursor: 'pointer',
    color: 'white',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
       <Link to="/login"><NavItem>Login</NavItem></Link>
 */
const Base = () => (
  <div className="top-bar">
	  <AppBar
	    title={ <Link to="/"><span style={ styles.color }>KeyMeo</span></Link> }
	    onTitleTouchTap={handleTouchTap}
	    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
	  />
  </div>
);

export default Base;
