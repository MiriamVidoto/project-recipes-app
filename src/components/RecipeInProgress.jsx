import PropTypes, { element } from 'prop-types';
import React, { useState, useEffect } from 'react';
import { getDetailsRecipe } from '../services/recipesAPI';

function RecipeInProgress({ type }) {
  const recipeType = type === 'meal' ? 'Meal' : 'Drink';

  const [id, setID] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);

  const getRecipeAPI = async () => {
    const newRecipe = await getDetailsRecipe(type, id);
    setRecipe(newRecipe);
  };

  const getIdToLocalStorage = () => {
    const idLocalSotorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    let idStorage = '';
    if (type === 'cocktails') idStorage = idLocalSotorage.cocktails;
    if (type === 'meal') idStorage = idLocalSotorage.meals;
    const idTolocalString = Object.keys(idStorage).toString();
    setID(idTolocalString);
    setIngredientes(idStorage);
  };

  const mapIngrediente = () => { ingredientes.map((elements) => console.log(elements)); };

  useEffect(() => {
    getIdToLocalStorage();
    getRecipeAPI();
    mapIngrediente();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
            {/*             {
              ingredientes.map((ingrediente, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-step` }
                >
                  {' '}
                  {ingredientes.ingrediente}
                  {' '}
                </li>
              ))
            } */}
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
