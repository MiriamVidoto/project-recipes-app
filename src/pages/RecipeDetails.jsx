import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardRecomend from '../components/CardRecomend';
import { getDetailsRecipe } from '../services/recipesAPI';

function RecipeDetails({ type }) {
  // const history = useHistory();
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

  const recipeType = type === 'meal' ? 'Meal' : 'Drink';

  const getRecipeAPI = async () => {
    const newRecipe = await getDetailsRecipe(type, id);
    setRecipe(newRecipe);
  };

  useEffect(() => {
    getRecipeAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ingredientes = recipe.length !== 0 ? Object.keys(recipe[0])
    .filter((key) => key.includes('strIngredient'))
    : [];

  const amount = recipe.length !== 0 ? Object.keys(recipe[0])
    .filter((key) => key.includes('strMeasure'))
    : [];

  const youtubeVideo = () => {
    const url = recipe[0].strYoutube;
    const index = url.indexOf('=');
    const youtubeCode = url.slice(index + 1);
    return `https://www.youtube.com/embed/${youtubeCode}`;
  };

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
            <h3 data-testid="recipe-title">{recipe[0][`str${recipeType}`]}</h3>
            <p data-testid="recipe-category">{recipe[0].strCategory}</p>
            {
              type === 'drinks'
              && <p data-testid="recipe-category">{recipe[0].strAlcoholic}</p>
            }
            <h3>Ingredients</h3>
            <ul>
              {
                ingredientes.map((ingrediente, index) => (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    {recipe[0][ingrediente]}
                    {' - '}
                    {recipe[0][amount[index]]}
                  </li>
                ))
              }
            </ul>
            <h3>Instuctions</h3>
            <p data-testid="instructions">{recipe[0].strInstructions}</p>
            {
              type === 'meal'
              && <iframe
                width="560"
                height="315"
                src={ youtubeVideo() }
                title="YouTube video player"
                frameBorder="0"
                data-testid="video"
              />
            }
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="btn-start"
            >
              Start Recipe
            </button>
            <section className="container-recomend">
              <CardRecomend type={ type } />
            </section>
          </>
        )
      }
    </div>
  );
}

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RecipeDetails;