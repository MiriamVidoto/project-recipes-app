import React from 'react';

function CardDoneRecipes() {
  const doneRecipes = [];

  return (
    <div>
      {
        doneRecipes.map((element, index) => (
          <div key={ index }>
            <img src="" alt="" data-testid={ `${index}-horizontal-image ` } />
            <p data-testid={ `${index}-horizontal-top-text` }>category</p>
            <h2 data-testid={ `${index}-horizontal-name` }>Name</h2>
            <p data-testid={ `${index}-horizontal-done-date` }>Data</p>
            <img
              src="src/images/shareIcon.svg"
              alt=""
              data-testid={ `${index}-horizontal-share-btn` }
            />
            <li>
              <ul data-testid={ `${index}-${tagName}-horizontal-tag` }>tag</ul>
            </li>
          </div>
        ))
      }
    </div>
  );
}

export default CardDoneRecipes;
