import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import myContext from '../context/Context';

function Header({ headerName }) {
  const {
    showSearchIcon,
    setShowSearchIcon,
  } = useContext(myContext);

  useEffect(() => {
    if (headerName === 'Drinks' || headerName === 'Foods') return setShowSearchIcon(true);
  }, [headerName]);

  return (
    <header>
      <h2 data-testid="page-title">{headerName}</h2>
      <button
        type="button"
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
              alt="profileIcon"
              src={ searchIcon }
            />
          </button>
        )
      }
    </header>
  );
}

Header.propTypes = {
  headerName: propTypes.string.isRequired,
};

export default Header;
