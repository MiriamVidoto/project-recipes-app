import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsRecipe } from '../services/recipesAPI';
import './style/RecipeInProgress.css';
import IconCopy from '../components/IconCopy';
import Favorite from '../components/Favorite';
import CheckIngredient from '../components/CheckIngredient';
import myContext from '../context/Context';

function RecipeInProgress({ type, history }) {
  const { recipesCheck } = useContext(myContext);
  const { id } = useParams();
  const recipeType = type === 'meal' ? 'Meal' : 'Drink';
  const [recipe, setRecipe] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [ListArray, setListArray] = useState([]);
  const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const testType = type === 'meal' ? 'meals' : 'cocktails';
  const ingredientes = recipe.length !== 0 ? Object.keys(recipe[0])
    .filter((key) => key.includes('strIngredient'))
    : [];

  // const verifyIngredientesCheck = () => {
  //   const ListArray = ingredientes
  //     .map((ingrediente) => recipe[0][ingrediente]).filter((element) => element !== null)
  //     .filter((e) => e.length !== 0);
  //   setRecipesCheck(ListArray);
  // };

  const getRecipeAPI = async () => {
    const newRecipe = await getDetailsRecipe(type, id);
    setRecipe(newRecipe);
  };

  const listIngredients = ingredientes
    .filter((e) => recipe[0][e] !== null)
    .filter((ele) => recipe[0][ele].length !== 0);

  const getLocalStorage = () => {
    const progressRecipes = localStorage.getItem('inProgressRecipes')
      ? local
      : { meals: {}, cocktails: {} };
    localStorage.setItem('inProgressRecipes', JSON.stringify(progressRecipes));
    // setRecipesCheck(progressRecipes);
  };

  const getListArray = () => setListArray(ingredientes
    .map((ingrediente) => recipe[0][ingrediente]).filter((element) => element !== null)
    .filter((e) => e.length !== 0));

  const funcDisabled = () => {
    if (ListArray.length !== 0 && ListArray.length === local[testType][id].length) {
      setIsDisabled(false);
      console.log('false');
    } else {
      setIsDisabled(true);
      console.log('true');
      console.log(ListArray);
      console.log(local[testType][id]);
    }
  };

  const handleButton = () => {
    history.push('/done-recipes');
  };

  useEffect(() => {
    funcDisabled();
  }, [recipesCheck]);

  useEffect(() => {
    getListArray();
  }, [recipe]);

  useEffect(() => {
    getRecipeAPI();
    getLocalStorage();
    // verifyIngredientesCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <div>
      {
        recipe.length !== 0
        && ListArray.length !== 0 && (
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
            <IconCopy id={ id } type={ type } index={ 0 } />
            <Favorite id={ id } type={ type } />

            <p data-testid="recipe-category">{recipe[0].strCategory}</p>
            <ul>
              {
                listIngredients.map((ingrediente, index) => (
                  <CheckIngredient
                    key={ index }
                    ingrediente={ ingrediente }
                    index={ index }
                    recipe={ recipe }
                    type={ type }
                  />
                ))
              }
            </ul>

            <h3>Instructions</h3>
            <p
              data-testid="instructions"
            >
              {recipe[0].strInstructions}
            </p>

            <button
              type="button"
              data-testid="finish-recipe-btn"
              onClick={ handleButton }
              disabled={ isDisabled }
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
