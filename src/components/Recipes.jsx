import React from 'react';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';

function Recipes({ type }) {
  return (
    <div>
      { (type === 'meal') ? <Foods /> : <Drinks /> }
    </div>
  );
}

export default Recipes;
