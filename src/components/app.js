import React from 'react';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';

import Routes from '../routes';
import store from '../redux/store';
import userManager from '../redux/userManager';

// Default global styling (hmm... we understand why I am no designer)
import './app.css';

export default function App(props) {
  return (
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <div className="App">
          <Routes />
        </div>
      </OidcProvider>
    </Provider>
  );
}
