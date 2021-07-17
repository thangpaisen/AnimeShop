import Toast from 'react-native-simple-toast';

const initStateProducts = {
  data:[],
  loading: false,
}

const products = (state = initStateProducts, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_LOADING':
      return {
        data:[...state.data],
        loading: true,
      }
    case 'SET_PRODUCTS_SUCCESS':
      return {
        data:[...action.payload],
        loading: false,
      }
    default:
      return state;
  }
}

export default products;
