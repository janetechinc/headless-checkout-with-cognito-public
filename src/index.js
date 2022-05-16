import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './config';
import reportWebVitals from './reportWebVitals';
import './index.css';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
  oauth: {
    domain: config.cognito.DOMAIN,
    redirectSignIn: 'http://localhost:3000/',
    redirectSignOut: 'http://localhost:3000/logout',
    responseType: 'token',
    scope: ['profile', 'email', 'openid'],
  },
});

ReactDOM.render(
  <Authenticator.Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Authenticator.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
