import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { getRecipesfirstLetter,
  getRecipesIngredient,
  getRecipesName } from '../services/recipesAPI';
import myContext from './Context';

function Provider({ children }) {
  const [category, setCategory] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [type, setType] = useState('meal');

  const getSearchAPI = async () => {
    if (category === 'ingredient') {
      const newRecipes = await getRecipesIngredient(type, searchInput);
      setRecipes(newRecipes);
    } else if (category === 'nameSearch') {
      const newRecipes = await getRecipesName(type, searchInput);
      setRecipes(newRecipes);
    } else if (category === 'firstLetter' && searchInput.length === 1) {
      const newRecipes = await getRecipesfirstLetter(type, searchInput);
      setRecipes(newRecipes);
    } else {
      global.alert('Your search must have only 1 (one) character');
    }
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
