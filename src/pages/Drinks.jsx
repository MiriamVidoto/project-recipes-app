import React from 'react';
import Header from '../components/Header';
import ButtonsCategory from '../components/ButtonsCategory';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';

function Drinks() {
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
