import React, { useState, useEffect } from 'react';
import ButtonsFilter from '../components/ButtonsFilter';
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
      <ButtonsFilter handleFilter={ handleFilter } />
      <CardDoneRecipes doneRecipes={ listRecipes } />
    </div>
  );
}
export default DoneRecipe;
