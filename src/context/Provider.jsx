import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import myContext from './Context';
import {
  getRecipesfirstLetter,
  getRecipesIngredient,
  getRecipesName,
} from '../services/recipesAPI';
import cocktails from '../tests/mock/cocktails';
import meals from '../tests/mock/meals';

function Provider({ children }) {
  const [category, setCategory] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [type, setType] = useState('meal');
  const history = useHistory();

  const verifyValue = () => {
    if (recipes === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  };

  const recipesOne = (newRecipes) => {
    const pathType = type === 'meal' ? 'foods' : 'drinks';
    const recipeTypeId = type === 'meal' ? 'idMeal' : 'idDrink';
    if (newRecipes !== null && newRecipes.length === 1) {
      newRecipes.map((element) => (
        history.push(`/${pathType}/${element[recipeTypeId]}`)
      ));
    }
  };

  // A função abaixo é apenas uma medida para funcionar o RecipeInProgress

  const test = () => {
    localStorage.setItem('inProgressRecipes', JSON.stringify({ cocktails, meals }));
  };

  const [buttonsCategories, setButtonsCategories] = useState([]);

  const getSearchAPI = async () => {
    if (category === 'ingredient') {
      const newRecipes = await getRecipesIngredient(type, searchInput);
      recipesOne(newRecipes);
      setRecipes(newRecipes);
    } else if (category === 'nameSearch') {
      const newRecipes = await getRecipesName(type, searchInput);
      recipesOne(newRecipes);
      setRecipes(newRecipes);
    } else if (category === 'firstLetter' && searchInput.length === 1) {
      const newRecipes = await getRecipesfirstLetter(type, searchInput);
      recipesOne(newRecipes);
      setRecipes(newRecipes);
    } else {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const value = {
    test,
    verifyValue,
    recipesOne,
    recipes,
    getSearchAPI,
    category,
    setCategory,
    searchInput,
    setSearchInput,
    type,
    setType,
    setRecipes,
    buttonsCategories,
    setButtonsCategories,
  };
  return (
    <myContext.Provider value={ value }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
