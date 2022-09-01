import React, { useEffect, useState, useContext } from 'react';
import ButtonsFilter from '../components/ButtonsFilter';
import CardFavoriteRecipes from '../components/CardFavoriteRecipes';
import Header from '../components/Header';
import myContext from '../context/Context';
import './style/favoriteRecipes.css';

function FavoriteRecipes() {
  const [listFavoriteRecipes, setListFavoriteRecipes] = useState([]);
  const { favoRender } = useContext(myContext);

  const getRecipesLocalStorage = () => {
    if (localStorage.getItem('favoriteRecipes')) {
      return JSON.parse(localStorage.getItem('favoriteRecipes'));
    }
    return [];
  };

  useEffect(() => {
    const favorites = getRecipesLocalStorage();
    setListFavoriteRecipes(favorites);
  }, [favoRender]);

  const handleFilter = ({ target }) => {
    const favorites = getRecipesLocalStorage();
    const { name } = target;
    setListFavoriteRecipes(favorites);
    if (name !== 'all') {
      const newRecipes = listFavoriteRecipes.filter((recipe) => recipe.type === name);
      setListFavoriteRecipes(newRecipes);
    }
  };

  return (
    <div>
      <Header title="Favorite Recipes" />
      <div className="favorite-page">
        <ButtonsFilter handleFilter={ handleFilter } />
        <CardFavoriteRecipes listRecipes={ listFavoriteRecipes } />
      </div>
    </div>
  );
}

export default FavoriteRecipes;
