import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import myContext from '../context/Context';
import './styles/SearchBar.css';

function SearchBar({ showSearchBar }) {
  const history = useHistory();
  const {
    setCategory,
    searchInput,
    setSearchInput,
    getSearchAPI,
    setType,
    recipes,
    recipesOne,
    verifyValue,
  } = useContext(myContext);

  useEffect(() => {
    recipesOne();
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
          <form className="search-bar">
            <label htmlFor="insearch-inputput">
              <input
                className="input-text-search"
                data-testid="search-input"
                type="text"
                value={ searchInput }
                onChange={ ({ target: { value } }) => setSearchInput(value) }
                placeholder="type something..."
              />
            </label>
            <div className="div-search">
              <label
                htmlFor="ingredient"
                className="label-search"
              >
                <input
                  className="radio-search"
                  id="ingredient"
                  name="categoty-name"
                  type="radio"
                  data-testid="ingredient-search-radio"
                  value="ingredient"
                  onChange={ ({ target: { value } }) => setCategory(value) }
                />
                {' '}
                Ingredient
              </label>
              <label
                htmlFor="name-radio"
                className="label-search"
              >
                <input
                  className="radio-search"
                  id="name-radio"
                  name="categoty-name"
                  type="radio"
                  data-testid="name-search-radio"
                  value="nameSearch"
                  onChange={ ({ target: { value } }) => setCategory(value) }
                />
                {' '}
                Name
              </label>
              <label
                htmlFor="first-radio"
                className="label-search"
              >
                <input
                  className="radio-search"
                  id="first-radio"
                  name="categoty-name"
                  type="radio"
                  data-testid="first-letter-search-radio"
                  value="firstLetter"
                  onChange={ ({ target: { value } }) => setCategory(value) }
                />
                {' '}
                First letter
              </label>
            </div>
            <button
              data-testid="exec-search-btn"
              type="button"
              onClick={ getSearchAPI }
              className="btn-search"
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
