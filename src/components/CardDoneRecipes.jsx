import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import './styles/CardDoneRecipes.css';

function CardDoneRecipes() {
  const doneRecipes = [
    { id: '52771',
      type: 'foods',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '25/08/2022',
      tags: ['Pasta', 'Curry', 'teste'],
    },
    { id: '178319',
      type: 'drinks',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '24/08/2022',
      tags: [],
    }];

  // const doneRecipes = localStorage.getItem('doneRecipes')
  //   ? JSON.parse(localStorage.getItem('doneRecipes'))
  //   : [];

  const LIMIT_TAGS = 2;

  return (
    <div>
      {
        doneRecipes.map((element, index) => (
          <div className="card-done-recipes" key={ index }>
            <Link to={ `/${element.type}/${element.id}` }>
              <img
                src={ element.image }
                alt={ element.name }
                data-testid={ `${index}-horizontal-image` }
                className="thumb"
              />
            </Link>
            <div className="container-done-recipes">
              <div className="share">
                {
                  element.type === 'foods' ? (
                    <p data-testid={ `${index}-horizontal-top-text` }>
                      { `${element.nationality} - ${element.category}` }
                    </p>
                  )
                    : (
                      <p data-testid={ `${index}-horizontal-top-text` }>
                        { element.category }
                        {' - '}
                        { element.alcoholicOrNot}
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
              <Link to={ `/${element.type}/${element.id}` }>
                <h3 data-testid={ `${index}-horizontal-name` }>
                  {element.name }
                </h3>
              </Link>
              <p data-testid={ `${index}-horizontal-done-date` }>
                {`Done in: ${element.doneDate}`}
              </p>
              <ul>
                {
                  element.tags.slice(0, LIMIT_TAGS).map((tag, i) => (
                    <li key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>
                      {tag}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default CardDoneRecipes;
