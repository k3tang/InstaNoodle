import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormPage from './component/LoginFormPage';
import SignupFormPage from './component/SignupFormPage';
import Navigation from './component/Navigation';
import HomePage from './component/HomePage';
import UserProfile from './component/UserProfilePage';
import ProductsIndex from './component/ProductsIndexPage';
import AboutPage from './component/AboutPage';
import RecipesIndex from './component/RecipesIndex';
import ProductShow from './component/ProductShow';
import CartIndexPage from './component/CartIndexPage';


function App() {
  return (
    <>
      <div className="main-container">
        <Navigation />
        <CartIndexPage />
        <div id="main-page">
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
              <RecipesIndex />
            </Route>
            <Route exact path="/products/:productId">
              <ProductShow />
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </div>
      </>
     
      
    
  );
}

export default App;