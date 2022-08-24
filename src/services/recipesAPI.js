export const getRecipes = async (type) => {
  const url = type === 'meal'
    ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  const recipes = type === 'meal'
    ? data.meals
    : data.drinks;
  return recipes;
};

export const getCategories = async (type) => {
  const url = type === 'meal'
    ? 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(url);
  const data = await response.json();
  const categories = type === 'meal'
    ? data.meals
    : data.drinks;
  return categories;
};

export const getRecipesByCategory = async (type, category) => {
  const url = type === 'meal'
    ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  const data = await response.json();
  const recipes = type === 'meal'
    ? data.meals
    : data.drinks;
  return recipes;
};

export const getRecipesIngredient = async (type, ingrediente) => {
  const url = type === 'meal'
    ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`
    : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const response = await fetch(url);
  const data = await response.json();
  const recipes = type === 'meal'
    ? data.meals
    : data.drinks;
  return recipes;
};

export const getRecipesName = async (type, nameSearch) => {
  const url = type === 'meal'
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${nameSearch}`
    : `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameSearch}`;
  const response = await fetch(url);
  const data = await response.json();
  const recipes = type === 'meal'
    ? data.meals
    : data.drinks;
  return recipes;
};

export const getRecipesfirstLetter = async (type, firstLetter) => {
  const url = type === 'meal'
    ? `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`
    : `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(url);
  const data = await response.json();
  const recipes = type === 'meal'
    ? data.meals
    : data.drinks;
  return recipes;
};

export const getDetailsRecipe = async (type, id) => {
  const url = type === 'meal'
    ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  const recipe = type === 'meal'
    ? data.meals
    : data.drinks;
  return recipe;
};

export const getRecomends = async (type) => {
  const url = type === 'meal'
    ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  const recipe = type === 'meal'
    ? data.meals
    : data.drinks;
  return recipe;
};
