import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ButtonsCategory from '../components/ButtonsCategory';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';
import myContext from '../context/Context';
import { getCategories, getRecipes } from '../services/recipesAPI';

function Drinks() {
  const { setType, setRecipes, setButtonsCategories } = useContext(myContext);

  const getDataAPI = async (type) => {
    const newRecipes = await getRecipes(type);
    const newCategories = await getCategories(type);
    setButtonsCategories(newCategories);
    setRecipes(newRecipes);
  };

  useEffect(() => {
    setType('drinks');
    getDataAPI('drinks');
  }, []);

  return (
    <div>
      <Header title="Drinks" />
      <ButtonsCategory />
      <RecipeCards />
      <Footer />
    </div>
  );
}

export default Drinks;
