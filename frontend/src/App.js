import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './component/LoginFormPage';
import SignupFormPage from './component/SignupFormPage';
import Navigation from './component/Navigation';
import HomePage from './component/HomePage';
import UserProfile from './component/UserProfilePage';
import ProductsIndex from './component/ProductsPage';


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
      </Switch>
    </>
    
  );
}

export default App;