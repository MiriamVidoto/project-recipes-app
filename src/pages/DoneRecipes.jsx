import React from 'react';
import CardDoneRecipes from '../components/CardDoneRecipes';
import Header from '../components/Header';

function DoneRecipe() {
  return (
    <>
      <Header title="Done Recipes" />
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
        >
          Foods
        </button>
        <button
          type="button"
          ata-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </section>
      <CardDoneRecipes />
    </>
  );
}
export default DoneRecipe;
