import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import favoriteIcon from '../images/whiteHeartIcon.svg';
import favoriteIconBlack from '../images/blackHeartIcon.svg';
import { getDetailsRecipe } from '../services/recipesAPI';

function IconFavorite({ id, type, index }) {
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
          id: recipe[0][`id${recipeType}`],
          type: favoriteType,
          nationality: recipe[0].strArea,
          category: recipe[0].strCategory,
          alcoholicOrNot: type === 'meal'
            ? ''
            : recipe[0].strAlcoholic,
          name: recipe[0][`str${recipeType}`],
          image: recipe[0][`str${recipeType}Thumb`],
        }];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
    } else {
      const newList = listFavoriteRecipes.filter((e) => e.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
    }
  };

  const setFavorite = () => {
    setIsfavorite(!isFavorite);
    setFavoriteLocalStorage();
  };

  if (isFavorite) {
    return (
      <button
        type="button"
        className="icon-btn"
        data-testid="favorite-btn"
        onClick={ setFavorite }
      >
        <img
          src={ favoriteIconBlack }
          alt="favorite"
          className="icon-img"
          data-testid={ `${index}-horizontal-favorite-btn` }
        />
      </button>
    );
  }
  return (
    <button
      type="button"
      className="icon-btn"
      data-testid="favorite-btn"
      onClick={ setFavorite }
    >
      <img
        src={ favoriteIcon }
        alt="favorite"
        className="icon-img"
        data-testid={ `${index}-horizontal-favorite-btn` }
      />
    </button>
  );
}

IconFavorite.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default IconFavorite;
