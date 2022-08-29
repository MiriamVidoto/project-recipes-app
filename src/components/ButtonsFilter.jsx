import PropTypes from 'prop-types';
import React from 'react';

function ButtonsFilter({ handleFilter }) {
  return (
    <section className="done-recipes-buttons">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        name="all"
        onClick={ (e) => handleFilter(e) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        name="food"
        onClick={ (e) => handleFilter(e) }
      >
        Foods
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        name="drink"
        onClick={ (e) => handleFilter(e) }
      >
        Drinks
      </button>
    </section>
  );
}

ButtonsFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default ButtonsFilter;
