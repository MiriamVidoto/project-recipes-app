import React from 'react';
import { getRecipes, getRecipesByCategory } from '../services/recipesAPI';
import './styles/ButtonsCategory.css';

function ButtonsCategory() {
  const categories = [{ strCategory: 'Beef' },
    { strCategory: 'Breakfast' },
    { strCategory: 'Chicken' },
    { strCategory: 'Dessert' },
    { strCategory: 'Goat' },
    { strCategory: 'Lamb' }];
  const categorySetected = 'Dessert';
  const type = 'meal';

  const LIMIT_CATEGORIES = 5;

  const handleClick = async ({ target }) => {
    const { name } = target;
    const category = (categorySetected === name || name === 'All')
      ? 'All'
      : name;
    setCategorySetected(category); // função para setar a categoria selecionada

    if (category === 'All') {
      const recipes = await getRecipes(type);
      setRecipes(recipes); // função do context para setar as receitas
    }
    const recipes = await getRecipesByCategory(type, category);
    setRecipes(recipes); // função do context para setar as receitas
  };

  return (
    <div className="buttonsCategory">
      <button
        type="button"
        data-testid="All-category-filter"
        name="All"
      >
        All
      </button>
      {
        categories.slice(0, LIMIT_CATEGORIES)
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
          ))
      }
    </div>
  );
}

export default ButtonsCategory;
