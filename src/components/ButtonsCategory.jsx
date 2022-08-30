import React, { useContext, useState } from 'react';
import myContext from '../context/Context';
import { getRecipes, getRecipesByCategory } from '../services/recipesAPI';
import './styles/ButtonsCategory.css';

function ButtonsCategory() {
  const { type, buttonsCategories, setRecipes } = useContext(myContext);
  const [categorySetected, setCategorySetected] = useState('All');
  const LIMIT_CATEGORIES = 5;

  const handleClick = async ({ target }) => {
    const { name } = target;
    const category = (categorySetected === name || name === 'All')
      ? 'All'
      : name;
    setCategorySetected(category);

    if (category === 'All') {
      const newRecipes = await getRecipes(type);
      setRecipes(newRecipes);
    } else {
      const newRecipes = await getRecipesByCategory(type, category);
      setRecipes(newRecipes);
    }
  };

  return (
    <div className="buttonsCategory">
      <button
        type="button"
        data-testid="All-category-filter"
        name="All"
        onClick={ handleClick }
      >
        All
      </button>
      {
        buttonsCategories ? buttonsCategories
          .slice(0, LIMIT_CATEGORIES)
          .map((category) => (
            <button
              key={ category.strCategory }
              type="button"
              name={ category.strCategory }
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ handleClick }
            >
              { category.strCategory }
            </button>
          )) : undefined
      }
    </div>
  );
}

export default ButtonsCategory;
