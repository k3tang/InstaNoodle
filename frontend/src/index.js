import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';
import * as productActions from "./store/products";
import * as cartActions from "./store/cart";
import * as reviewActions from "./store/reviews";
import './fonts/TSTAR PRO W00 Regular.ttf'
import './fonts/TSTAR W00 Bold.ttf'
import './fonts/HWT Artz W00 Regular.ttf'

const store = configureStore();
  if (process.env.NODE_ENV !== 'production') {
    window.store = store;
    window.csrfFetch = csrfFetch;
    window.sessionActions = sessionActions;
    window.productActions = productActions;
    window.cartActions = cartActions;
    window.reviewActions = reviewActions
  }

  function Root() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  }

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}



if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}

