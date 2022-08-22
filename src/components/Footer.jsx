import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import './styles/Footer.css';
import myContext from '../context/Context';

function Footer() {
  const { setType, setRecipes } = useContext(myContext);

  const handleClickDrink = () => {
    setRecipes([]);
    setType('drink');
  };

  const handleClickFood = () => {
    setRecipes([]);
    setType('meal');
  };

  return (
    <div data-testid="footer" className="footer">
      <Link to="/foods" onClick={ handleClickFood }>
        <img
          src={ mealIcon }
          alt={ mealIcon }
          data-testid="food-bottom-btn"
          className="imgFooter"
        />
      </Link>
      <Link to="/drinks" onClick={ handleClickDrink }>
        <img
          src={ drinkIcon }
          alt={ drinkIcon }
          data-testid="drinks-bottom-btn"
          className="imgFooter"
        />
      </Link>
    </div>
  );
}

export default Footer;
