
const initStateCategories = {
  data:[],
  loading:false,
};

const categories = (state = initStateCategories, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES_LOADING':
      return {
        data:[...state.data],
        loading: true,
      }
    case 'SET_CATEGORIES_SUCCESS':
      return {
        data:[...action.payload],
        loading: false,
      }
    default:
      return state
  }
}

export default categories;