import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './component/LoginFormPage';
import SignupFormPage from './component/SignupFormPage';
import Navigation from './component/Navigation';
import HomePage from './component/HomePage';
import UserProfile from './component/UserProfilePage';
import ProductsIndex from './component/ProductsPage';
import AboutPage from './component/AboutPage';
import RecipesIndex from './component/RecipesIndex';


function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/account">
          <UserProfile />
        </Route>
        <Route exact path="/login">
          <LoginFormPage />
        </Route>
        <Route exact path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/products">
          <ProductsIndex />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/recipes">
          <RecipesIndex/>
        </Route>
      </Switch>
    </>
    
  );
}

export default App;