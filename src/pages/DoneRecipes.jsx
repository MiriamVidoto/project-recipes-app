import React from 'react';
import CardDoneRecipes from '../components/CardDoneRecipes';
import Header from '../components/Header';
import './style/DoneRecipes.css';

function DoneRecipe() {
  return (
    <div className="done-recipes">
      <Header title="Done Recipes" />
      <section className="done-recipes-buttons">
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
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </section>
      <CardDoneRecipes />
    </div>
  );
}
export default DoneRecipe;
