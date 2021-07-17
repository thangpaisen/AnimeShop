import { combineReducers } from 'redux'
import products from './products'
import productsSearch from './productsSearch'
import categories from './categories'
import user from './user'
import cart from './cart'
import historySearch from './historySearch'
import loading from './loading'

const rootReducer  = combineReducers({
    user,
    products,
    categories,
    cart,
    productsSearch,
    historySearch,
    loading,
})

export default rootReducer;