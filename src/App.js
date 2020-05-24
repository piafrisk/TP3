import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import * as ROUTES from './routes';

import Landing from './components/Landing';
import SignIn from './components/SignIn';
import IdeaWizard from './components/IdeaWizard';
import Dashboard from './components/Dashboard';
import {
  WizardState,
  WizardStateProvider,
} from './components/IdeaWizard/WizardState';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  outline: none;
}
  
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: #F3F3F3;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 900;
  }

  label {
    font-weight:bold;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }

  blockquote {
    text-align: center;
    font-weight: 900;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const App = () => {
  return (
    <Router>
      <WizardStateProvider>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.WIZARD} component={IdeaWizard} />
          {/* TODO: auth redirect etc */}
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        </Switch>
      </WizardStateProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
