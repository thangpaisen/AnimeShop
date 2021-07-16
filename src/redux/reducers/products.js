import Toast from 'react-native-simple-toast';

const initStateProducts = [
];

const products = (state = initStateProducts, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return [
          ...action.payload,
      ];
    case 'ADD_NEW_PRODUCT':
      return [
          ...state,
          ...action.payload,
      ];
    default:
      return [...state];
  }
}

export default products;
