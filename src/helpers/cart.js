import { OPTIONS, USER } from '../data';
import { get, set, assign } from 'lodash';

export const buildCart = (user, { storeId, products }) => {
  let payload = {
    products,
    user: USER,
    cognitoToken: undefined,
    storeId,
    headlessPartnerName: 'Your Company Name',
    options: OPTIONS,
  };

  if (user) {
    const {
      jwtToken,
      payload: { given_name, family_name, email },
    } = get(user, 'signInUserSession.idToken');

    set(payload, 'cognitoToken', jwtToken);
    assign(payload.user, {
      firstName: given_name,
      lastName: family_name,
      email,
    });
  }

  console.log('BUILD CART: ', payload);

  const frame = document.getElementById('jane-menu');
  frame.contentWindow.postMessage(
    {
      messageType: 'buildCart',
      payload,
    },
    '*'
  );
};
