import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CardRecomend from '../components/CardRecomend';
import { getDetailsRecipe } from '../services/recipesAPI';
import './style/RecipeDetails.css';

function RecipeDetails({ type }) {
  const [recipe, setRecipe] = useState([]);
  const [showBtn, setShowBtn] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  const recipeType = type === 'meal' ? 'Meal' : 'Drink';
  const localStorageType = type === 'meal' ? 'meals' : 'cocktails';
  const pathType = type === 'meal' ? 'foods' : 'drinks';

  const getRecipeAPI = async () => {
    const newRecipe = await getDetailsRecipe(type, id);
    setRecipe(newRecipe);
  };

  const btnCondition = () => {
    const doneRecipes = localStorage.getItem('doneRecipes');
    if (doneRecipes) {
      const condition = doneRecipes.json().some((element) => element.id === id);
      setShowBtn(!condition);
    }
  };

  useEffect(() => {
    getRecipeAPI();
    btnCondition();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ingredientes = recipe.length !== 0 ? Object.keys(recipe[0])
    .filter((key) => key.includes('strIngredient'))
    : [];

  const amount = recipe.length !== 0 ? Object.keys(recipe[0])
    .filter((key) => key.includes('strMeasure'))
    : [];

  const listIngredients = ingredientes
    .filter((e) => recipe[0][e] !== null)
    .filter((ele) => recipe[0][ele].length !== 0);

  const youtubeVideo = () => {
    const url = recipe[0].strYoutube;
    const index = url.indexOf('=');
    const youtubeCode = url.slice(index + 1);
    return `https://www.youtube.com/embed/${youtubeCode}`;
  };

  const handleClick = () => {
    const progressRecipes = localStorage.getItem('inProgressRecipes')
      ? JSON.parse(localStorage.getItem('inProgressRecipes')) : {};

    const newRecipe = { ...progressRecipes,
      [localStorageType]: { ...progressRecipes[localStorageType],
        [id]: [] } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));

    history.push(`/${pathType}/${id}/in-progress`);
  };

  return (
    <div className="all-page">
      {
        recipe.length !== 0
        && (
          <>
            <img
              src={ recipe[0][`str${recipeType}Thumb`] }
              alt="Food"
              data-testid="recipe-photo"
              className="img-recipe"
            />
            <h3
              data-testid="recipe-title"
              className="title-recipe"
            >
              {recipe[0][`str${recipeType}`]}
            </h3>
            <p
              data-testid="recipe-category"
              className="category-recipe"
            >
              {recipe[0].strCategory}
            </p>
            {
              type === 'drinks'
              && <p data-testid="recipe-category">{recipe[0].strAlcoholic}</p>
            }
            <h3>Ingredients:</h3>
            <ul>
              {
                listIngredients.map((ingrediente, index) => (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                    id="li-ingredients"
                  >
                    {recipe[0][ingrediente]}
                    {' - '}
                    {recipe[0][amount[index]]}
                  </li>
                ))
              }
            </ul>
            <h3>Instructions</h3>
            <p
              data-testid="instructions"
              className="instructions-recipe"
            >
              {recipe[0].strInstructions}
            </p>
            {
              type === 'meal'
              && <iframe
                width="510"
                height="300"
                src={ youtubeVideo() }
                title="YouTube video player"
                frameBorder="0"
                data-testid="video"
              />
            }
            {
              showBtn
              && (
                <button
                  type="button"
                  data-testid="start-recipe-btn"
                  className="btn-start"
                  onClick={ handleClick }
                >
                  Start Recipe
                </button>
              )
            }
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
