import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import AmplifyAuth from './components/amplify-auth';
import Header from './components/header';
import EditProducts from './components/edit-products';
import './App.css';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { buildCart } from './helpers/cart';
import { PRODUCTS, STORE_ID } from './data';

const Overlay = styled.div({
  position: 'absolute',
  top: '100px',
  width: '100vw',
  height: '100vh',
  background: 'white',
  zIndex: 300,
});

const App = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [showEditCart, setShowEditCart] = useState(false);
  const [cartData, setCartData] = useState({
    products: PRODUCTS,
    storeId: STORE_ID,
  });

  useEffect(() => {
    window.addEventListener(
      'message',
      (event) => {
        var payload = event.data && event.data.payload;
        var messageType = event.data && event.data.messageType;

        if (
          messageType === 'loadingEvent' &&
          payload.name === 'headlessAppLoaded'
        ) {
          setIsIframeLoaded(true);
        }
      },
      false
    );

    document.getElementById('jane-frame-script').src =
      'https://staging-api.nonprod-iheartjane.com/v1/headless/embed.js';
  }, []);

  useEffect(() => {
    if (isGuest && isIframeLoaded) {
      buildCart(null, cartData);
    }
  }, [isGuest, isIframeLoaded]);

  useEffect(() => {
    if (user && isIframeLoaded) {
      buildCart(user, cartData);
    }
  }, [user, isIframeLoaded]);

  const onEditCart = (storeId, products) => {
    setShowEditCart(false);
    setCartData({
      storeId,
      products,
    });
    buildCart(user, { storeId, products });
  };

  const showCart = isGuest || user;

  return (
    <div className="App">
      <Header
        setIsGuest={setIsGuest}
        setShowEditCart={setShowEditCart}
        showCart={showCart}
      />
      {!showCart && <Overlay />}
      <EditProducts
        showEditCart={showEditCart}
        setShowEditCart={setShowEditCart}
        cartData={cartData}
        onEditCart={onEditCart}
      />
      {!isGuest && <AmplifyAuth setIsGuest={setIsGuest} />}
    </div>
  );
};

export default App;
