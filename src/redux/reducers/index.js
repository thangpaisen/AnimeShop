import { combineReducers } from 'redux'
import products from './products'
import categories from './categories'
import user from './user'
import cart from './cart'

const rootReducer  = combineReducers({
    user,
    products,
    categories,
    cart,
})

export default rootReducer;