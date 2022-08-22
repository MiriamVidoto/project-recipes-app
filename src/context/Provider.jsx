import PropTypes from 'prop-types';
import React from 'react';
import myContext from './Context';

function Provider({ children }) {
  return (
    <myContext.Provider>
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
