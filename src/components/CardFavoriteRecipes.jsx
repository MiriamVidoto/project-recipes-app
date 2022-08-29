import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import IconCopy from './IconCopy';
import IconFavorite from './IconFavorite';

function CardFavoriteRecipes({ listRecipes }) {
  return (
    <div>
      {
        listRecipes.map((element, index) => (
          <div key={ index }>
            <Link to={ `/${element.type}s/${element.id}` } className="a-thumb">
              <img
                src={ element.image }
                alt={ element.name }
                data-testid={ `${index}-horizontal-image` }
                className="thumb"
              />
            </Link>
            <div>
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
              <Link to={ `/${element.type}s/${element.id}` }>
                <h3 data-testid={ `${index}-horizontal-name` }>
                  {element.name }
                </h3>
              </Link>
            </div>
            <div>
              <IconCopy id={ element.id } type={ element.type } index={ index } />
              <IconFavorite id={ element.id } type={ element.type } index={ index } />
            </div>
          </div>
        ))
      }
    </div>
  );
}

CardFavoriteRecipes.propTypes = {
  listRecipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    nationality: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default CardFavoriteRecipes;
