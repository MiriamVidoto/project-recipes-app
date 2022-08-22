import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import FoodProgress from './pages/FoodProgress';
import DrinkProgress from './pages/DrinkProgress';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DoneRecipes from './pages/DoneRecipes';
import Profile from './pages/Profile';
import Foods from './pages/Foods';

function App() {
  return (
    <Switch>
      <Route path="/" component={ Login } exact />
      <Route path="/foods" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="foods/{id-da-receita}" component={ FoodDetails } />
      <Route path="drinks/{id-da-receita}" component={ DrinkDetails } />
      <Route path="/foods/{id-da-receita}/in-progress" component={ FoodProgress } />
      <Route path="/drinks/{id-da-receita}/in-progress" component={ DrinkProgress } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/profile" component={ Profile } />
    </Switch>
  );
}

export default App;
