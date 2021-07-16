import { combineReducers } from 'redux'
import products from './products'
import productsSearch from './productsSearch'
import categories from './categories'
import user from './user'
import cart from './cart'
import historySearch from './historySearch'

const rootReducer  = combineReducers({
    user,
    products,
    categories,
    cart,
    productsSearch,
    historySearch,
})

export default rootReducer;