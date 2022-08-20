import React from 'react';
import { Link } from 'react-router-dom';
import './styles/RecipeCards.css';

function RecipeCards() {
  const recipes = [{ idMeal: '52770',
    strMeal: 'Spaghetti Bolognese',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg' },
  { idMeal: '52945',
    strMeal: 'Kung Pao Chicken',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1525872624.jpg' }];
  const meal = true;

  const LIMIT_RECIPES = 12;
  const recipeType = meal ? 'Meal' : 'Drink';
  const recipeTypeId = meal ? 'idMeal' : 'idDrink';
  const pathType = meal ? 'foods' : 'drinks';

  return (
    <div className="recipeCards">
      {
        recipes
          .slice(0, LIMIT_RECIPES)
          .map((recipe, index) => (
            <Link
              key={ recipe[recipeTypeId] }
              to={ `/${pathType}/${recipe[recipeTypeId]}` }
            >
              <div className="recipeCard" data-testid={ `${index}-recipe-card` }>
                <img
                  src={ recipe[`str${recipeType}Thumb`] }
                  alt={ recipe[`str${recipeType}`] }
                />
                <h2 data-testid={ `${index}-card-name` }>
                  {recipe[`str${recipeType}`] }
                </h2>
              </div>
            </Link>
          ))
      }
    </div>
  );
}

export default RecipeCards;
