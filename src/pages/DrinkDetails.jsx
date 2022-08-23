import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import myContext from '../context/Context';
import { getDetailsRecipe } from '../services/recipesAPI';

function DrinkDetails({ match }) {
  const { type, setType } = useContext(myContext);
  const [recipe, setRecipe] = useState();
  const { id } = match.params;

  useEffect(() => {
    setType('drinks');
    const newRecipe = async () => {
      const teste = await getDetailsRecipe(type, id);
      setRecipe(teste);
    };
    if (!recipe) {
      newRecipe();
    }
    console.log(recipe);
    console.log(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipe]);

  return (
    <div>
      {
        recipe && <h1>Drinks</h1>
      }
    </div>
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default DrinkDetails;
