import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Drinks from '../pages/Drinks';
import RecipeDetails from '../pages/RecipeDetails';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import DoneRecipes from '../pages/DoneRecipes';
import Profile from '../pages/Profile';
import Foods from '../pages/Foods';
import RecipeInProgress from '../pages/RecipeInProgress';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:id" render={ () => <RecipeDetails type="meal" /> } />
      <Route exact path="/drinks/:id" render={ () => <RecipeDetails type="drinks" /> } />
      <Route
        exact
        path="/foods/:id/in-progress"
        render={ () => <RecipeInProgress type="meal" /> }
      />
      <Route
        exact
        path="/drinks/:id/in-progress"
        render={ () => <RecipeInProgress type="drinks" /> }
      />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/profile" component={ Profile } />
    </Switch>
  );
}

export default Routes;
