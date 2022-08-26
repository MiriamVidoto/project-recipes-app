import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/Context';
import './styles/RecipeCards.css';

function RecipeCards() {
  const { recipes, type } = useContext(myContext);

  const LIMIT_RECIPES = 12;
  const recipeType = type === 'meal' ? 'Meal' : 'Drink';
  const recipeTypeId = type === 'meal' ? 'idMeal' : 'idDrink';
  const pathType = type === 'meal' ? 'foods' : 'drinks';

  return (
    <div className="recipeCards">
      {
        recipes && recipes
          .slice(0, LIMIT_RECIPES)
          .map((recipe, index) => (
            <Link
              key={ index }
              to={ `/${pathType}/${recipe[recipeTypeId]}` }
            >
              <div className="recipeCard" data-testid={ `${index}-recipe-card` }>
                <img
                  src={ recipe[`str${recipeType}Thumb`] }
                  alt={ recipe[`str${recipeType}`] }
                  data-testid={ `${index}-card-img` }
                  className="card-img"
                />
                <h2
                  data-testid={ `${index}-card-name` }
                  className="recipe-title-card"
                >
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
