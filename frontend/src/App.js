import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './LoginFormPage';
import SignupFormPage from './SignupFormPage';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
    </Switch>
  );
}

export default App;