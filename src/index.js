import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { FirebaseProvider } from './contexts/FirebaseContext';
import { UserProvider } from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
