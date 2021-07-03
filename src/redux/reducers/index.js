import { combineReducers } from 'redux'
import products from './products'
import categories from './categories'
import user from './user'

const rootReducer  = combineReducers({
    user,
    products,
    categories,
})

export default rootReducer;