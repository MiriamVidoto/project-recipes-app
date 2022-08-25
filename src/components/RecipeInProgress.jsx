import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsRecipe } from '../services/recipesAPI';

function RecipeInProgress({ type }) {
  const { id } = useParams();
  const recipeType = type === 'meal' ? 'Meal' : 'Drink';

  /* const [id, setID] = useState(); */
  const [recipe, setRecipe] = useState([]);

  const getRecipeAPI = async () => {
    const newRecipe = await getDetailsRecipe(type, id);
    setRecipe(newRecipe);
  };

  const ingredientes = recipe.length !== 0 ? Object.keys(recipe[0])
    .filter((key) => key.includes('strIngredient'))
    : [];

  const amount = recipe.length !== 0 ? Object.keys(recipe[0])
    .filter((key) => key.includes('strMeasure'))
    : [];

  useEffect(() => {
    getRecipeAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <div>
      {
        recipe.length !== 0
        && (
          <>
            <img
              src={ recipe[0][`str${recipeType}Thumb`] }
              alt="Food"
              data-testid="recipe-photo"
            />
            <h3
              data-testid="recipe-title"
            >
              {recipe[0][`str${recipeType}`]}
            </h3>
            <button
              type="button"
              data-testid="share-btn"
            >
              Compartilhar
            </button>
            <button
              type="button"
              data-testid="favorite-btn"
            >
              Favoritar
            </button>
            <p data-testid="recipe-category">{recipe[0].strCategory}</p>
            { type === 'meal'
              && ingredientes.filter((element) => recipe[0][element].length !== 0)
                .map((ingrediente, index) => (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-step` }
                  >
                    {recipe[0][ingrediente]}
                    {' - '}
                    {recipe[0][amount[index]]}
                  </li>
                ))}
            { type === 'cocktails'
              && ingredientes.filter((element) => recipe[0][element] !== null)
                .map((ingredient, index) => (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-step` }
                  >
                    {recipe[0][ingredient]}
                    {' - '}
                    {recipe[0][amount[index]]}
                  </li>
                ))}
            <h3>Instructions</h3>
            <p
              data-testid="instructions"
            >
              {recipe[0].strInstructions}
            </p>
            <button
              type="button"
              data-testid="finish-recipe-btn"
            >
              Finalizar Receita
            </button>
          </>
        )
      }

    </div>
  );
}

RecipeInProgress.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default RecipeInProgress;
