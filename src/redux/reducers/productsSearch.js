

const initStateProducts = 
 {
    data:[],
  loading: false,
 }
;

const productsSearch = (state = initStateProducts, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_SEARCH_LOADING':
      return {
        data:[...state.data],
        loading: true,
      }
    case 'SET_PRODUCTS_SEARCH_SUCCESS':
      return {
        data:[...action.payload],
        loading: false,
      }
    default:
      return {...state};
  }
}

export default productsSearch;
