import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import './styles/Header.css';

function Header({ title }) {
  const history = useHistory();
  const [searchIconCondition, setSearchIconCondition] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    if (title === 'Done Recipes' || title === 'Profile'
    || title === 'Favorite Recipes') return setSearchIconCondition(false);
    setSearchIconCondition(true);
  }, [title]);

  return (
    <header>
      <h2 data-testid="page-title">{title}</h2>
      <button
        type="button"
        onClick={ () => history.push('/profile') }
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
