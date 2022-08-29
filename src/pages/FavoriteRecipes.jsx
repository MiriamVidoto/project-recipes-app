import React, { useEffect, useState } from 'react';
import ButtonsFilter from '../components/ButtonsFilter';
import CardFavoriteRecipes from '../components/CardFavoriteRecipes';
import Header from '../components/Header';

function FavoriteRecipes() {
  const [listFavoriteRecipes, setListFavoriteRecipes] = useState([]);

  const getRecipesLocalStorage = () => {
    if (localStorage.getItem('favoriteRecipes')) {
      return JSON.parse(localStorage.getItem('favoriteRecipes'));
    }
    return [];
  };

  useEffect(() => {
    const favorites = getRecipesLocalStorage();
    setListFavoriteRecipes(favorites);
  }, []);

  const handleFilter = ({ target }) => {
    const { name } = target;
    getRecipesLocalStorage();
    if (name !== 'all') {
      const newRecipes = listFavoriteRecipes.filter((recipe) => recipe.type === name);
      setListFavoriteRecipes(newRecipes);
    }
  };

  return (
    <div className="favorite-recipes">
      <Header title="Favorite Recipes" />
      <ButtonsFilter handleFilter={ handleFilter } />
      <CardFavoriteRecipes listRecipes={ listFavoriteRecipes } />
    </div>
  );
}

export default FavoriteRecipes;
