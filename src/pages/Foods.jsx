import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ButtonsCategory from '../components/ButtonsCategory';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';
import myContext from '../context/Context';
import { getCategories, getRecipes } from '../services/recipesAPI';

function Foods() {
  const { setType, setRecipes, setButtonsCategories, test } = useContext(myContext);

  const getDataAPI = async (type) => {
    const newRecipes = await getRecipes(type);
    const newCategories = await getCategories(type);
    setButtonsCategories(newCategories);
    setRecipes(newRecipes);
  };

  useEffect(() => {
    test();
    setType('meal');
    getDataAPI('meal');
  }, []);

  return (
    <div>
      <Header title="Foods" />
      <ButtonsCategory />
      <RecipeCards />
      <Footer />
    </div>
  );
}

export default Foods;
