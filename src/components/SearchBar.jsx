import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import myContext from '../context/Context';

function SearchBar({ showSearchBar }) {
  const history = useHistory();
  const {
    setCategory,
    searchInput,
    setSearchInput,
    getSearchAPI,
    setType,
    recipes,
    verifyValue,
  } = useContext(myContext);

  useEffect(() => {
    verifyValue();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes]);

  useEffect(() => {
    if (history.location.pathname === '/foods') setType('meal');
    if (history.location.pathname === '/drinks') setType('drinks');
  });

  return (
    <section>
      { showSearchBar && (
        <div>
          <form>
            <label htmlFor="insearch-inputput">
              <input
                data-testid="search-input"
                type="text"
                value={ searchInput }
                onChange={ ({ target: { value } }) => setSearchInput(value) }
              />
            </label>
            <label htmlFor="category">
              <input
                name="categoty-name"
                type="radio"
                data-testid="ingredient-search-radio"
                value="ingredient"
                onChange={ ({ target: { value } }) => setCategory(value) }
              />
              Ingredient
              <input
                name="categoty-name"
                type="radio"
                data-testid="name-search-radio"
                value="nameSearch"
                onChange={ ({ target: { value } }) => setCategory(value) }
              />
              Name
              <input
                name="categoty-name"
                type="radio"
                data-testid="first-letter-search-radio"
                value="firstLetter"
                onChange={ ({ target: { value } }) => setCategory(value) }
              />
              First letter
            </label>
            <button
              data-testid="exec-search-btn"
              type="button"
              onClick={ getSearchAPI }
            >
              Search

            </button>
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
