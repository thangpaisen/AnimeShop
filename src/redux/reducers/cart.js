import AsyncStorage from '@react-native-async-storage/async-storage';

// var data = JSON.parse(AsyncStorage.getItem('CART')); 
var initStateCart =[];
// const initStateCart =[
//   {
//     product: {
//       id: 1,
//       title: 'Móc khóa mica anime Jujutsu Kaisen - Mẫu 3 ',
//       image:
//         'https://product.hstatic.net/1000273792/product/3_31cac2b2a9394d59acc77218074ebca3_large.jpg',
//       price: 55000,
//       sale: 69,
//       rate: 5,
//       sold: 69,
//     },
//     quantity: 1,
//   },
//   {
//     product: {
//       id: 2,
//       title: 'Móc khóa kim loại Nguyên tố Vision game Genshin Impact ',
//       image:
//         'https://product.hstatic.net/1000273792/product/1_7476fd4a35ce4aed8caf8e20194debf7_large.jpg',
//       price: 55000,
//       sale: 12,
//       rate: 5,
//       sold: 69,
//     },
//     quantity: 1,
//   },
// ];

const cart = (state = initStateCart, action) => {
  var product = action.payload;
  var quantity = action.quantity;
  var index =-1;
  switch (action.type) {
    case 'SET_DATA_CART':
      return [
          ...action.payload,
      ];
    case 'ADD_TO_CART':
      index =findProductInCart(state,product);
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
      console.log('addToCart ok')
      return [...state];
    default:
      return [...state];
  }
};

const findProductInCart = (cart,product) => {
  var index=-1;
  if(cart.length>0)
  {
      for (let i = 0; i < cart.length; i++) {
          if(cart[i].product.id===product.id)
          {
            index = i;
            break;
          }
      }
  }
  return index;
  }
export default cart;
