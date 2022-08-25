import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import './styles/CardDoneRecipes.css';

function CardDoneRecipes() {
  const doneRecipes = [{ idMeal: '52771', strMeal: 'Spicy Arrabiata Penne', strCategory: 'Vegetarian', strArea: 'Italian', strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg', strTags: 'Pasta,Curry,teste', data: '25/08/2022', type: 'Meal' }, { idDrink: '178319', strDrink: 'Aquamarine', strCategory: 'Cocktail', strAlcoholic: 'Alcoholic', strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg', data: '24/08/2022', type: 'Drink' }];

  const LIMIT_TAGS = 2;

  return (
    <div>
      {
        doneRecipes.map((element, index) => (
          <div className="card-done-recipes" key={ index }>
            <img
              src={ element[`str${element.type}Thumb`] }
              alt={ element[`str${element.type}`] }
              data-testid={ `${index}-horizontal-image ` }
              className="thumb"
            />
            <div className="container-done-recipes">
              <div className="share">
                {
                  element.type === 'Meal' ? (
                    <p data-testid={ `${index}-horizontal-top-text` }>
                      { element.strCategory }
                      {' - '}
                      { element.strArea }
                    </p>
                  )
                    : (
                      <p data-testid={ `${index}-horizontal-top-text` }>
                        { element.strCategory }
                        {' - '}
                        { element.strAlcoholic}
                      </p>
                    )
                }
                <img
                  src={ shareIcon }
                  alt="share"
                  data-testid={ `${index}-horizontal-share-btn` }
                  className="share-icon"
                />
              </div>
              <h3 data-testid={ `${index}-horizontal-name` }>
                {element[`str${element.type}`] }
              </h3>
              <p data-testid={ `${index}-horizontal-done-date` }>
                {`Done in: ${element.data}`}
              </p>
              { element.type === 'Meal' && (
                <ul>
                  {
                    element.strTags.split(',').slice(0, LIMIT_TAGS).map((tag, i) => (
                      <li key={ i } data-testid={ `${i}-${tag}-horizontal-tag` }>
                        {tag}
                      </li>
                    ))
                  }
                </ul>
              )}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default CardDoneRecipes;
