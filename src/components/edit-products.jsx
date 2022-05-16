import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { TextField, Button, Flex } from '@aws-amplify/ui-react';

import EditJSON from './edit-json';

const styles = {
  overlay: {
    zIndex: 500,
  },
};

function EditProducts({ showEditCart, setShowEditCart, cartData, onEditCart }) {
  const [json, setJson] = useState(JSON.stringify(cartData.products));
  const [storeId, setStoreId] = useState(cartData.storeId);
  const [validProducts, setValidProducts] = useState(true);

  useEffect(() => {
    if (!showEditCart) {
      setStoreId(cartData.storeId);
    }
  }, [showEditCart]);

  return (
    <ReactModal isOpen={showEditCart} style={styles}>
      <div className="app">
        <div className="contents">
          <TextField
            descriptiveText="Store ID"
            type="number"
            width={100}
            value={storeId}
            onChange={(e) => setStoreId(e.currentTarget.value)}
          />
          <h3>Products</h3>
          <EditJSON
            json={cartData.products}
            onChange={setJson}
            setValidProducts={setValidProducts}
          />
        </div>
        <Flex width="100%" justifyContent="flex-end" marginTop={10}>
          <Button onClick={() => setShowEditCart(false)}>Cancel</Button>
          <Button
            variation="primary"
            onClick={() => onEditCart(storeId, JSON.parse(json))}
            isDisabled={!validProducts || !storeId}
          >
            Save
          </Button>
        </Flex>
      </div>
    </ReactModal>
  );
}

export default EditProducts;
