const axios = require('axios');

export const setCategories = (categories)=>{
    return {
        type:'SET_CATEGORIES',
        payload:categories,
    }
}

export const fetchCategories  = () => async (dispatch)=>{
    try {
        const res = await axios.get('http://localhost:3000/categories')
        dispatch(setCategories(res.data));
    } catch (error) {
        console.log("error",error)
        
    }
  }
