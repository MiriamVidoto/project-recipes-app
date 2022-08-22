import React from 'react';
import propTypes from 'prop-types';

function SearchBar({ showSearchBar }) {
  return (
    <section>
      { showSearchBar && (
        <input
          data-testid="search-input"
          type="text"
        />
      )}

    </section>
  );
}

SearchBar.propTypes = {
  showSearchBar: propTypes.bool,
}.isRequired;

export default SearchBar;
