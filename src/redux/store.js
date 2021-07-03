import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'

// const myMiddleware =(store) =>(next) =>(action)=>{
//     return next(action);
// }

const store = createStore(rootReducer,applyMiddleware(thunk))


export default store;