import React from 'react';
import { Authenticator, Button, View, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const components = (setIsGuest) => ({
  SignIn: {
    Footer() {
      const { tokens } = useTheme();

      return (
        <>
          <Authenticator.SignIn.Footer />
          <View textAlign="center" padding={tokens.space.xl} paddingTop={0}>
            <Button
              variation="primary"
              isFullWidth
              onClick={() => setIsGuest(true)}
            >
              Continue as Guest
            </Button>
          </View>
        </>
      );
    },
  },
});

const AmplifyAuth = ({ setIsGuest }) => {
  return (
    <div style={{ zIndex: 400, marginTop: '80px', background: 'white' }}>
      <Authenticator
        loginMechanisms={['email', 'username']}
        signUpAttributes={[
          'preferred_username',
          'given_name',
          'family_name',
          'email',
          'password',
          'phone_number',
          'birthdate',
          'custom:zipcode',
          'custom:dispensary',
        ]}
        formFields={{
          signUp: {
            given_name: {
              label: 'First Name',
              placeholder: 'First Name',
            },
            family_name: {
              label: 'Last Name',
              placeholder: 'Last Name',
            },
            'custom:zipcode': {
              label: 'Zip Code',
              placeholder: 'Zip Code',
            },
            'custom:dispensary': {
              label: 'Home Dispensary',
              placeholder: 'Home Dispensary',
            },
          },
        }}
        socialProviders={['google']}
        components={components(setIsGuest)}
      />
    </div>
  );
};

export default AmplifyAuth;
