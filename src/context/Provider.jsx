import PropTypes from 'prop-types';
import React, { useState } from 'react';
import myContext from './Context';

function Provider({ children }) {
  const [showSearchIcon, setShowSearchIcon] = useState(false);

  const value = {
    showSearchIcon,
    setShowSearchIcon,
  };

  return (
    <myContext.Provider value={ value }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
