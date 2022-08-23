import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import './styles/Header.css';
import myContext from '../context/Context';

function Header({ title }) {
  const history = useHistory();
  const [searchIconCondition, setSearchIconCondition] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { setType, recipes, recipesOne } = useContext(myContext);

  useEffect(() => {
    if (title === 'Done Recipes' || title === 'Profile'
    || title === 'Favorite Recipes') return setSearchIconCondition(false);
    setSearchIconCondition(true);
    recipesOne();
  }, [title, recipes]);

  useEffect(() => {
    recipesOne();
  }, [recipes]);

  useEffect(() => {
    if (history.location.pathname === '/foods') setType('meal');
    if (history.location.pathname === '/drinks') setType('drinks');
  });

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
