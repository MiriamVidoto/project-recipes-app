export const getRecipes = async (type) => {
  const url = type === 'meal'
    ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const request = await fetch(url);
  const recipes = type === 'meal'
    ? request.meals
    : request.drinks;
  return recipes;
};

export const getCategories = async (type) => {
  const url = type === 'meal'
    ? 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const request = await fetch(url);
  const categories = type === 'meal'
    ? request.meals
    : request.drinks;
  return categories;
};

export const getRecipesByCategory = async (type, category) => {
  const url = type === 'meal'
    ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const request = await fetch(url);
  const recipes = type === 'meal'
    ? request.meals
    : request.drinks;
  return recipes;
};

export const getRecipesIngredient = async (ingrediente) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  const data = await response.json();
  return data;
};

export const getRecipesName = async (nameSearch) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameSearch}`);
  const data = await response.json();
  return data;
};

export const getRecipesfirstLetter = async (firstLetter) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const data = await response.json();
  return data;
};
