import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import IconCopy from './IconCopy';
import IconFavorite from './IconFavorite';
import './styles/cardFavoriteRecipes.css';

function CardFavoriteRecipes({ listRecipes }) {
  return (
    <div className="container-card-favorites">
      {
        listRecipes.map((element, index) => (
          <div key={ index } className="container-cards">
            <Link to={ `/${element.type}s/${element.id}` } className="a-thumb">
              <img
                src={ element.image }
                alt={ element.name }
                data-testid={ `${index}-horizontal-image` }
                className="thumb-favorite"
              />
            </Link>
            <div>
              {
                element.type === 'food' ? (
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                    className="nationality-food"
                  >
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
                <h4
                  data-testid={ `${index}-horizontal-name` }
                  className="link-favorites"
                >
                  {element.name }
                </h4>
              </Link>
            </div>
            <div className="container-icons">
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
