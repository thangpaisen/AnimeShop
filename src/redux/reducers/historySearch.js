import AsyncStorage from '@react-native-async-storage/async-storage';
var initStateCart =[];
const historySearch = (state = initStateCart, action) => {
  var index = state.findIndex(x => x === action.payload )
  switch (action.type) {
     case 'SET_DATA_HISTORY_SEARCH':
      return [
          ...action.payload,
      ];
    case 'ADD_ITEM_SEARCH':
      if(index ===-1){
          state.push(action.payload);
      }
      AsyncStorage.setItem('HISTORY_SEARCH', JSON.stringify(state))
      return [...state];
    case 'DELETE_HISTORY_SEARCH':
        var newState =[];
        AsyncStorage.setItem('HISTORY_SEARCH',JSON.stringify(newState))
      return [];
    default:
      return [...state];
  }
};

export default historySearch;
