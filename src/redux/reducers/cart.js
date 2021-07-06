import AsyncStorage from '@react-native-async-storage/async-storage';

// var data = JSON.parse(AsyncStorage.getItem('CART')); 
var initStateCart =[];
//
const cart = (state = initStateCart, action) => {
  var product = action.payload;
  var quantity = action.quantity;
  var index = state.findIndex(x => x.product.id === product.id)
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
              });
      }
      AsyncStorage.setItem('CART', JSON.stringify(state))
      console.log('ADD_TO_CART ok')
      return [...state];
    case 'DELETE_PRODUCT_TO_CART':
      if(index!==-1){
          state.splice(index,1);
      }
      AsyncStorage.setItem('CART', JSON.stringify(state))
      console.log('DELETE_PRODUCT_TO_CART ok')
      return [...state];
    case 'UPDATE_QUANTITY_PRODUCT_TO_CART':
      if(index!==-1){
          state[index].quantity = state[index].quantity + quantity;
      }
      AsyncStorage.setItem('CART', JSON.stringify(state))
      console.log('UPDATE_QUANTITY_PRODUCT_TO_CART ok')
      return [...state];
    default:

      return [...state];
  }
};

// const findProductInCart = (cart,product) => {
//   var index=-1;
//   if(cart.length>0)
//   {
//       for (let i = 0; i < cart.length; i++) {
//           if(cart[i].product.id===product.id)
//           {
//             index = i;
//             break;
//           }
//       }
//   }
//   return index;
//   }
export default cart;
