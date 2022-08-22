import React from 'react';
import Header from '../components/Header';
import ButtonsCategory from '../components/ButtonsCategory';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';

function Foods() {
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
