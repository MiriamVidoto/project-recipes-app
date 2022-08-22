import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title }) {
  const history = useHistory();
  const [searchIconCondition, setSearchIconCondition] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    if (title === 'Drinks' || title === 'Foods') return setSearchIconCondition(true);
  }, [title]);

  return (
    <header>
      <h2 data-testid="page-title">{title}</h2>
      <button
        type="button"
        onClick={ () => history.push('profile') }
      >
        <img
          data-testid="profile-top-btn"
          alt="profileIcon"
          src={ profileIcon }
        />
      </button>
      {
        searchIconCondition && (
          <button
            type="button"
            onClick={ () => (setShowSearchBar(!showSearchBar)) }
          >
            <img
              data-testid="search-top-btn"
              alt="searchIcon"
              src={ searchIcon }
            />
          </button>
        )
      }
      <SearchBar showSearchBar={ showSearchBar } />
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Header;
