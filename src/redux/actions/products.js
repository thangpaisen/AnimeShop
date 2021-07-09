const axios = require('axios');

export const setProducts = (products)=>{
    return {
        type:'SET_PRODUCTS',
        payload:products,
    }
}

export const fetchProducts  = () => async (dispatch)=>{
    try {
        const res = await axios.get('http://localhost:3000/products')
        dispatch(setProducts(res.data));
    } catch (error) {
        console.log("error",error)
        
    }
  }

export const addNewProduct = (newProduct)=>{
    return {
        type:'ADD_NEW_PRODUCT',
        payload:newProduct,
    }
}