import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import IconCopy from './IconCopy';
import './styles/CardDoneRecipes.css';

function CardDoneRecipes({ doneRecipes }) {
  const LIMIT_TAGS = 2;

  return (
    <div className="container-done">
      {
        doneRecipes.map((element, index) => (
          <div className="card-done-recipes" key={ index }>
            <Link to={ `/${element.type}s/${element.id}` } className="a-thumb">
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
                  element.type === 'food' ? (
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
                <IconCopy
                  index={ index }
                  id={ element.id }
                  type={ element.type }
                />
              </div>
              <Link to={ `/${element.type}s/${element.id}` }>
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

CardDoneRecipes.propTypes = {
  doneRecipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    nationality: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    doneDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default CardDoneRecipes;
