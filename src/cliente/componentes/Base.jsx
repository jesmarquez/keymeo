import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
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
	    title={<span style={styles.title}>KeyMeo</span>}
	    onTitleTouchTap={handleTouchTap}
	    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={ <Link to="/login"><FlatButton label="Login" style={{ color: 'white'}}/></Link>}
	  />
  </div>
);

export default Base;
