import AsyncStorage from '@react-native-async-storage/async-storage';
var initStateCart =[];
const cart = (state = initStateCart, action) => {
  var product = action.payload;
  var quantity = action.quantity;
  var model = action.model;
  var index = state.length===0 ? state.findIndex(x => x.product._id === product._id && x.model === model):-1
  switch (action.type) {
    case 'SET_DATA_CART':
      return [
          ...action.payload,
      ];
    case 'ADD_TO_CART':
      if(index!==-1){
          state[index].quantity = state[index].quantity + quantity;
      }
      else
      {
        state.push({
                product ,
                quantity,
                model
              });
      }
      AsyncStorage.setItem('CART', JSON.stringify(state))
      return [...state];
    case 'DELETE_PRODUCT_TO_CART':
      if(index!==-1){
          state.splice(index,1);
      }
      AsyncStorage.setItem('CART', JSON.stringify(state))
      return [...state];
    case 'UPDATE_QUANTITY_PRODUCT_TO_CART':
      if(index!==-1){
          state[index].quantity = state[index].quantity + quantity;
      }
      AsyncStorage.setItem('CART', JSON.stringify(state))
      return [...state];
    default:

      return [...state];
  }
};

export default cart;
