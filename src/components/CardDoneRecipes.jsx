import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import './styles/CardDoneRecipes.css';

const copy = require('clipboard-copy');

function CardDoneRecipes({ doneRecipes }) {
  const [linkCopied, setLinkCopied] = useState(false);

  const LIMIT_TAGS = 2;

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
    <div className="container-done">
      {
        linkCopied && <span>Link copied!</span>
      }
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
                <button
                  type="button"
                  onClick={ () => handleCopyURL(element) }
                  className="icon-btn"
                >
                  <img
                    src={ shareIcon }
                    alt="share"
                    data-testid={ `${index}-horizontal-share-btn` }
                    className="share-icon"
                  />
                </button>
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
  doneRecipes: PropTypes.arrayOf.isRequired,
};

export default CardDoneRecipes;
