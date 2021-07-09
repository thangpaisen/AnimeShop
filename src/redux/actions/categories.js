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
        // console.log(res.data)
        // console.log('csacsacsac')
        dispatch(setCategories(res.data));
    } catch (error) {
        console.log("error",error)
        
    }
  }

// export const addNewProduct = (newProduct)=>{
//     return {
//         type:'ADD_NEW_PRODUCT',
//         payload:newProduct,
//     }
// }