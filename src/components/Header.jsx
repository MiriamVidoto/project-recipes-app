import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const history = useHistory();
  const [showSearchIcon, setShowSearchIcon] = useState(false);

  useEffect(() => {
    if (title === 'Drinks' || title === 'Foods') return setShowSearchIcon(true);
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
        showSearchIcon && (
          <button
            type="button"
          >
            <img
              data-testid="search-top-btn"
              alt="searchIcon"
              src={ searchIcon }
            />
          </button>
        )
      }
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
