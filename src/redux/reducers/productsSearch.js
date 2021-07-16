

const initStateProducts = [
];

const productsSearch = (state = initStateProducts, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_SEARCH':
      return [
          ...action.payload,
      ];
    default:
      return [...state];
  }
}

export default productsSearch;
