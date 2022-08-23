import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import './styles/Footer.css';
import myContext from '../context/Context';

function Footer() {
  const { setRecipes } = useContext(myContext);

  return (
    <div data-testid="footer" className="footer">
      <Link to="/foods" onClick={ () => (setRecipes([])) }>
        <img
          src={ mealIcon }
          alt={ mealIcon }
          data-testid="food-bottom-btn"
          className="imgFooter"
        />
      </Link>
      <Link to="/drinks" onClick={ () => (setRecipes([])) }>
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
