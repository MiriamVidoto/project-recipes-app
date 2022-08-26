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
      <div className="div-container">
        <h2 data-testid="page-title" className="title-header">{title}</h2>
        <div className="div-buttons">
          <button
            type="button"
            onClick={ () => history.push('/profile') }
            className="btn-header"
          >
            <img
              data-testid="profile-top-btn"
              alt="profileIcon"
              src={ profileIcon }
              className="img-button"
            />
          </button>
          {
            searchIconCondition && (
              <button
                type="button"
                onClick={ () => (setShowSearchBar(!showSearchBar)) }
                className="btn-header"
              >
                <img
                  data-testid="search-top-btn"
                  alt="searchIcon"
                  src={ searchIcon }
                  className="img-button"
                />
              </button>
            )
          }
        </div>
      </div>
      <SearchBar showSearchBar={ showSearchBar } />
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Header;
