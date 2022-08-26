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
      <div className="container-header">
        <button
          type="button"
          onClick={ () => history.push('/profile') }
          className="icon-btn"
        >
          <img
            data-testid="profile-top-btn"
            alt="profileIcon"
            src={ profileIcon }
            className="img-icon"
          />
        </button>
        <h2 data-testid="page-title">{title}</h2>
        {
          searchIconCondition && (
            <button
              type="button"
              onClick={ () => (setShowSearchBar(!showSearchBar)) }
              className="icon-btn"
            >
              <img
                data-testid="search-top-btn"
                alt="searchIcon"
                src={ searchIcon }
                className="img-icon"
              />
            </button>
          )
        }
      </div>
      <SearchBar showSearchBar={ showSearchBar } />
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Header;
