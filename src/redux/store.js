import { combineReducers, createStore,compose,applyMiddleware  } from 'redux'
import filterReducer from './reducers/filter';
import pizzasReducer from './reducers/pizzas';
import thunk from 'redux-thunk'
import cartReducer from './reducers/cart';
import navUrlReducer from './reducers/navUrl';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const redusers = combineReducers({
    filterReducer,
    pizzasReducer,
    cartReducer,
    navUrlReducer
})

const store = createStore(redusers,composeEnhancers(applyMiddleware(thunk)))
export default store