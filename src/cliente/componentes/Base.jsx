import React, { PropTypes } from 'react';

const Base = ({ children }) => (
  <div>
    { children }
  </div>
);

Base.PropTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
