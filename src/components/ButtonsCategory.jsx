import React from 'react';
import './styles/ButtonsCategory.css';

function ButtonsCategory() {
  const categorys = [{ strCategory: 'Beef' },
    { strCategory: 'Breakfast' },
    { strCategory: 'Chicken' },
    { strCategory: 'Dessert' },
    { strCategory: 'Goat' },
    { strCategory: 'Lamb' }];

  const LIMIT_CATEGORYS = 5;

  return (
    <div className="buttonsCategory">
      <button
        type="button"
        data-testid="All-category-filter"
      >
        All
      </button>
      {
        categorys.slice(0, LIMIT_CATEGORYS)
          .map((category) => (
            <button
              key={ category.strCategory }
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
            >
              { category.strCategory }
            </button>
          ))
      }
    </div>
  );
}

export default ButtonsCategory;
