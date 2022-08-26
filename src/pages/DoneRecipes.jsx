import React, { useState, useEffect } from 'react';
import CardDoneRecipes from '../components/CardDoneRecipes';
import Header from '../components/Header';
import './style/DoneRecipes.css';

function DoneRecipe() {
  const [listRecipes, setListRecipes] = useState([]);

  const doneRecipes = () => {
    if (localStorage.getItem('doneRecipes')) {
      setListRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
    }
  };

  useEffect(() => {
    doneRecipes();
  }, []);

  const handleFilter = ({ target }) => {
    const { name } = target;
    doneRecipes();
    if (name !== 'all') {
      const newRecipes = listRecipes.filter((recipe) => recipe.type === name);
      setListRecipes(newRecipes);
    }
  };

  return (
    <div className="done-recipes">
      <Header title="Done Recipes" />
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
      <CardDoneRecipes doneRecipes={ listRecipes } />
    </div>
  );
}
export default DoneRecipe;
