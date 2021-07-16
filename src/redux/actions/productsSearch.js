const axios = require('axios');

export const setProductsSearch = (products)=>{
    return {
        type:'SET_PRODUCTS_SEARCH',
        payload:products,
    }
}

export const fetchProductsSearch  = (value) => async (dispatch)=>{
    try {
        const res = await axios.get(`http://localhost:3000/products/Search/${value}`)
        dispatch(setProductsSearch(res.data));
    } catch (error) {
        console.log("error",error)
        
    }
  }
