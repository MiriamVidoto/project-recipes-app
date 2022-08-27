import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import favoriteIconBlack from '../images/blackHeartIcon.svg';
import favoriteIconWhite from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

function CardFavoriteRecipes({ listRecipes }) {
  const [isFavorite, setIsfavorite] = useState(true);
  const [linkCopied, setLinkCopied] = useState(false);

  const setFavorite = () => {
    setIsfavorite(!isFavorite);
  };

  const handleCopyURL = (element) => {
    const copyURL = `http://localhost:3000/${element.type}s/${element.id}`;
    copy(copyURL);
    setLinkCopied(true);
    const TWO_SECONDS = 2000;
    setTimeout(() => {
      setLinkCopied(false);
    }, TWO_SECONDS);
  };

  return (
    <div>
      {
        linkCopied && <span>Link copied!</span>
      }
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
              <button
                type="button"
                onClick={ () => handleCopyURL(element) }
                className="icon-btn"
              >
                <img
                  src={ shareIcon }
                  alt="share"
                  data-testid={ `${index}-horizontal-share-btn` }
                  className="icon-img"
                />
              </button>
              { isFavorite
                ? (
                  <button type="button" className="icon-btn" onClick={ setFavorite }>
                    <img
                      src={ favoriteIconBlack }
                      alt="favorite"
                      data-testid={ `${index}-horizontal-favorite-btn` }
                      className="icon-img"
                    />
                  </button>
                )
                : (
                  <button type="button" className="icon-btn" onClick={ setFavorite }>
                    <img
                      src={ favoriteIconWhite }
                      alt="favorite"
                      data-testid="favorite-btn"
                      className="icon-img"
                    />
                  </button>
                )}
            </div>
          </div>
        ))
      }
    </div>
  );
}

CardFavoriteRecipes.propTypes = {
  listRecipes: PropTypes.arrayOf.isRequired,
};

export default CardFavoriteRecipes;
