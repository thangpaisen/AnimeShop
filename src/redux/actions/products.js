const axios = require('axios');

export const setProducts = (products)=>{
    return {
        type:'SET_PRODUCTS',
        payload:products,
    }
}

export const fetchProducts  = () => async (dispatch)=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch(setProducts(res.data));
  }

export const addNewProduct = (newProduct)=>{
    return {
        type:'ADD_NEW_PRODUCT',
        payload:newProduct,
    }
}