import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import favoriteIcon from '../images/whiteHeartIcon.svg';
import favoriteIconBlack from '../images/blackHeartIcon.svg';
import { getDetailsRecipe } from '../services/recipesAPI';

function Favorite({ id, type }) {
  const [isFavorite, setIsfavorite] = useState(false);
  const [recipe, setRecipe] = useState([]);

  const favoriteType = type === 'meal' ? 'food' : 'drink';
  const recipeType = type === 'meal' ? 'Meal' : 'Drink';

  const listFavoriteRecipes = localStorage.getItem('favoriteRecipes')
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : [];

  const IsFavoriteCondition = () => {
    const conditionFavorite = listFavoriteRecipes
      .some((e) => e.id === id);
    setIsfavorite(conditionFavorite);
  };

  const getRecipeAPI = async () => {
    const newRecipe = await getDetailsRecipe(type, id);
    setRecipe(newRecipe);
  };

  useEffect(() => {
    IsFavoriteCondition();
    getRecipeAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setFavoriteLocalStorage = () => {
    if (isFavorite === false) {
      const newFavoriteRecipes = [...listFavoriteRecipes,
        {
          id: recipe[0] ? recipe[0][`id${recipeType}`] : undefined,
          type: favoriteType,
          nationality: type === 'meal'
            ? recipe[0]?.strArea
            : '',
          category: recipe[0]?.strCategory,
          alcoholicOrNot: type === 'meal'
            ? ''
            : recipe[0]?.strAlcoholic,
          name: recipe[0] ? recipe[0][`str${recipeType}`] : undefined,
          image: recipe[0] ? recipe[0][`str${recipeType}Thumb`] : undefined,
        }];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
    } else {
      const newList = listFavoriteRecipes.filter((e) => e.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
    }
  };

  const setFavorite = () => {
    setFavoriteLocalStorage();
    setIsfavorite(!isFavorite);
  };

  if (isFavorite) {
    return (
      <button
        type="button"
        className="icon-btn"
        onClick={ setFavorite }
      >
        <img
          src={ favoriteIconBlack }
          alt="favorite"
          className="icon-img"
          data-testid="favorite-btn"
        />
      </button>
    );
  }
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={ setFavorite }
    >
      <img
        src={ favoriteIcon }
        alt="favorite"
        className="icon-img"
        data-testid="favorite-btn"
      />
    </button>
  );
}

Favorite.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Favorite;
