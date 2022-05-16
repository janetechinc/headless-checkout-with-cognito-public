# Jane Roots Cognito Headless Checkout Sample App

This app can be used as a React starter for a Jane Roots implementation with AWS Cognito Authentication.

For more information on implementing AWS Cognito with Jane Roots, go [here](https://docs.iheartjane.com/new-jane-roots-docs/implementing-roots/integrating-authentication/implementing-cognito-auth) to view our docs.

## Setup Instructions
1) `npm install`
2) Edit `src/config.js`, and add values for the variables USER_POOL_ID, APP_CLIENT_ID, and DOMAIN.
4) `npm start`

## Configuring the Jane Environment
to use different Jane environments, customize the iframe url in [src/App.jsx](https://github.com/janetechinc/headless-checkout-with-cognito-public/blob/main/src/App.jsx#L48)