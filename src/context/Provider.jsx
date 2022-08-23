import PropTypes from 'prop-types';
import React, { useState } from 'react';
import myContext from './Context';
import {
  getRecipesfirstLetterMeals,
  getRecipesIngredientMeals,
  getRecipesNameMeals,
  getRecipesIngredientDrink,
  getRecipesNameDrink,
  getRecipesfirstLetterDrink,
} from '../services/recipesAPI';

function Provider({ children }) {
  const [category, setCategory] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [type, setType] = useState('meal');

  const getSearchAPIDrink = async (categoryDrink, searchInputDrink) => {
    if (categoryDrink === 'ingredient') {
      const newRecipes = await getRecipesIngredientDrink(searchInputDrink);
      setRecipes(newRecipes);
    } else if (categoryDrink === 'nameSearch') {
      const newRecipes = await getRecipesNameDrink(searchInputDrink);
      setRecipes(newRecipes);
    } else if (categoryDrink === 'firstLetter' && searchInputDrink.length === 1) {
      const newRecipes = await getRecipesfirstLetterDrink(searchInputDrink);
      setRecipes(newRecipes);
    } else {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const getSearchAPIMeals = async (categoryMeals, searchInputMeals) => {
    if (categoryMeals === 'ingredient') {
      const newRecipes = await getRecipesIngredientMeals(searchInputMeals);
      setRecipes(newRecipes);
    } else if (categoryMeals === 'nameSearch') {
      const newRecipes = await getRecipesNameMeals(searchInputMeals);
      setRecipes(newRecipes);
    } else if (categoryMeals === 'firstLetter' && searchInputMeals.length === 1) {
      const newRecipes = await getRecipesfirstLetterMeals(searchInputMeals);
      setRecipes(newRecipes);
    } else {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const getSearchAPI = async () => {
    if (type === 'meal') await getSearchAPIMeals(category, searchInput);
    if (type === 'drink') await getSearchAPIDrink(category, searchInput);
  };

  const value = {
    recipes,
    getSearchAPI,
    category,
    setCategory,
    searchInput,
    setSearchInput,
    type,
    setType,
    setRecipes,
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
