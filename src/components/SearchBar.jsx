import React from 'react';
import propTypes from 'prop-types';

function SearchBar({ showSearchBar }) {
  return (
    <section>
      { showSearchBar && (
        <div>
          <input
            data-testid="search-input"
            type="text"
          />
          <form action="form-action">
            <p>
              <input type="radio" data-testid="ingredient-search-radio" />
              ingredient
              <input type="radio" data-testid="name-search-radio" />
              name
              <input type="radio" data-testid="first-letter-search-radio" />
              first-letter
            </p>
            <p>
              <input type="button" data-testid="exec-search-btn" value="Search" />
            </p>
          </form>
        </div>
      )}

    </section>
  );
}

SearchBar.propTypes = {
  showSearchBar: propTypes.bool,
}.isRequired;

export default SearchBar;
