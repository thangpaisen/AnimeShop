const axios = require('axios');
import axiosConfig from '../../../axiosConfig' ;


export const setCategoriesLoading = ()=>{
    return {
        type:'SET_CATEGORIES_LOADING',
    }
}
export const setCategoriesSuccess = (categories)=>{
    return {
        type:'SET_CATEGORIES_SUCCESS',
        payload:categories,
    }
}

export const fetchCategories  = () => async (dispatch)=>{
    try {
        dispatch(setCategoriesLoading());
        const res = await axiosConfig.get('/categories')
        dispatch(setCategoriesSuccess(res.data));
    } catch (error) {
        console.log("error",error)
        
    }
  }
