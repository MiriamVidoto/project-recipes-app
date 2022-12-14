import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import myContext from './Context';
import {
  getRecipesfirstLetter,
  getRecipesIngredient,
  getRecipesName,
} from '../services/recipesAPI';

function Provider({ children }) {
  const [category, setCategory] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [type, setType] = useState('meal');
  const [buttonsCategories, setButtonsCategories] = useState([]);
  const [recipesCheck, setRecipesCheck] = useState(true);
  const [favoRender, setFavoRender] = useState(true);
  const history = useHistory();

  const verifyValue = () => {
    if (recipes === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  };

  const recipesOne = (result) => {
    if (result !== null) {
      const pathType = type === 'meal' ? 'foods' : 'drinks';
      const recipeTypeId = type === 'meal' ? 'idMeal' : 'idDrink';
      if (result.length === 1) {
        result.map((element) => (
          history.push(`/${pathType}/${element[recipeTypeId]}`)
        ));
      }
    }
  };

  const getSearchAPI = async () => {
    if (category === 'ingredient') {
      const newRecipes = await getRecipesIngredient(type, searchInput);
      setRecipes(newRecipes);
      recipesOne(newRecipes);
    } else if (category === 'nameSearch') {
      const newRecipes = await getRecipesName(type, searchInput);
      setRecipes(newRecipes);
      recipesOne(newRecipes);
    } else if (category === 'firstLetter' && searchInput.length === 1) {
      const newRecipes = await getRecipesfirstLetter(type, searchInput);
      setRecipes(newRecipes);
      recipesOne(newRecipes);
    } else {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const value = {
    verifyValue,
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
    recipesCheck,
    setRecipesCheck,
    favoRender,
    setFavoRender,
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
