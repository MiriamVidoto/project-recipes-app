import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import CardRecomend from '../components/CardRecomend';
import myContext from '../context/Context';
import { getDetailsRecipe } from '../services/recipesAPI';

function FoodDetails({ match }) {
  const { setType } = useContext(myContext);
  const [recipe, setRecipe] = useState();
  const { id } = match.params;

  const getRecipeAPI = async () => {
    const newRecipe = await getDetailsRecipe('meal', id);
    setRecipe(newRecipe);
  };

  useEffect(() => {
    setType('meal');
    getRecipeAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ingredientes = recipe ? [
    recipe[0].strIngredient1,
    recipe[0].strIngredient2,
    recipe[0].strIngredient3,
    recipe[0].strIngredient4,
    recipe[0].strIngredient5,
    recipe[0].strIngredient6,
    recipe[0].strIngredient7,
    recipe[0].strIngredient8,
    recipe[0].strIngredient9,
    recipe[0].strIngredient10,
    recipe[0].strIngredient11,
    recipe[0].strIngredient12,
    recipe[0].strIngredient13,
    recipe[0].strIngredient14,
    recipe[0].strIngredient15,
    recipe[0].strIngredient16,
    recipe[0].strIngredient17,
    recipe[0].strIngredient18,
    recipe[0].strIngredient19,
    recipe[0].strIngredient20,
  ] : [];

  return (
    <div>
      {
        recipe
        && (
          <>
            <img
              src={ recipe[0].strMealThumb }
              alt="Food"
              data-testid="recipe-photo"
            />
            <h3 data-testid="recipe-title">{recipe[0].strMeal}</h3>
            <p data-testid="recipe-category">{recipe[0].strCategory}</p>
            <h3>Ingredients</h3>
            <ul>
              {ingredientes.filter((e) => e.length !== 0).map((ingrediente, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {ingrediente}
                </li>
              ))}
            </ul>
            <h3>Instuctions</h3>
            <p data-testid="instructions">{recipe[0].strInstructions}</p>
            <iframe
              src={ recipe[0].strYoutube }
              title="video"
            />
            <section>
              <CardRecomend />
            </section>
          </>
        )
      }
    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodDetails;
