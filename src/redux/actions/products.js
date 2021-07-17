const axios = require('axios');
import axiosConfig from '../../../axiosConfig' ;

export const setProductsLoading = ()=>{
    return {
        type:'SET_PRODUCTS_LOADING',
    }
}
export const setProductsSuccess = (products)=>{
    return {
        type:'SET_PRODUCTS_SUCCESS',
        payload:products,
    }
}

export const fetchProducts  = () => async (dispatch)=>{
    try {
         dispatch(setProductsLoading());
        const res = await axiosConfig.get('/products')
        dispatch(setProductsSuccess(res.data));
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