import React from 'react';
import styled from '@emotion/styled';
import { flex, spacing, colors } from '../style';
import { useAuthenticator, Button, Flex } from '@aws-amplify/ui-react';

export const HeaderContainer = styled.header(
  flex({ alignItems: 'center', justifyContent: 'space-between' }),
  spacing({ px: 16 }),
  {
    height: '50px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 420,
    background: colors.white,
  }
);

const TextContainer = styled.span({ color: colors.violetPurple });

const buttonStyles = {
  background: colors.sparkYellow,
  color: colors.violetPurple,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 25,
  paddingRight: 25,
  borderRadius: 8,
};

const Header = ({ setIsGuest, showCart, setShowEditCart }) => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <HeaderContainer>
      {user && user.username && (
        <TextContainer>Welcome: {user.username}</TextContainer>
      )}
      <Flex width="100%" justifyContent="flex-end">
        {showCart && (
          <Button
            variation="link"
            style={buttonStyles}
            onClick={() => setShowEditCart(true)}
            marginRight={10}
          >
            Edit Cart
          </Button>
        )}
        {!user && (
          <Button
            variation="link"
            style={buttonStyles}
            onClick={() => setIsGuest(false)}
          >
            Sign In
          </Button>
        )}
        {user && (
          <Button variation="link" style={buttonStyles} onClick={signOut}>
            Sign Out
          </Button>
        )}
      </Flex>
    </HeaderContainer>
  );
};

export default Header;
