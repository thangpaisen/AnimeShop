const axios = require('axios');
import axiosConfig from '../../../axiosConfig' ;

export const setProductsSearchLoading = (products)=>{
    return {
        type:'SET_PRODUCTS_SEARCH_LOADING'
    }
}

export const setProductsSearchSuccess = (products)=>{
    return {
        type:'SET_PRODUCTS_SEARCH_SUCCESS',
        payload:products,
    }
}
export const fetchProductsSearch  = (value) => async (dispatch)=>{
    try {
        dispatch(setProductsSearchLoading());
        const res = await axiosConfig.get(`/products/Search/${value}`)
        dispatch(setProductsSearchSuccess(res.data));
        console.log('res.data',res.data);
    } catch (error) {
        console.log("error",error)
        
    }
  }
