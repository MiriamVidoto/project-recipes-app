import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { getRecomends } from '../services/recipesAPI';
import './styles/CardRecomend.css';

function CardRecomend({ type }) {
  const [recomends, setRecomends] = useState([]);
  const LIMIT_RECIPES = 6;
  const recipeType = type === 'drinks' ? 'Meal' : 'Drink';

  const getRecomendsAPI = async () => {
    const result = await getRecomends(type);
    setRecomends(result);
  };

  useEffect(() => {
    getRecomendsAPI();
    console.log(recomends);
  }, []);

  return (
    <div>
      {
        recomends.slice(0, LIMIT_RECIPES)
          .map((recipe, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recomendation-card` }
              className="container-card"
            >
              <img
                src={ recipe[`str${recipeType}Thumb`] }
                alt={ recipe[`str${recipeType}`] }
              />
              <p>{recipe.strCategory}</p>
              <h4>{recipe[`str${recipeType}`] }</h4>
            </div>
          ))
      }
    </div>
  );
}

CardRecomend.propTypes = {
  type: PropTypes.string.isRequired,
};

export default CardRecomend;
