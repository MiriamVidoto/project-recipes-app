import React from 'react';
import PropTypes from 'prop-types';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';

function Recipes({ type }) {
  return (
    <div>
      { (type === 'meal') ? <Foods /> : <Drinks /> }
    </div>
  );
}
Recipes.propTypes = {
  type: PropTypes.string,
}.isRequired;
export default Recipes;
