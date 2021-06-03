import {combineReducers} from 'redux';
import {currentDataShop} from './reducer_shop';
import {cartReducer} from '../page/cart/reducers/reducer-cart';
const rootReducer = combineReducers({
    currentShop: currentDataShop,
    // cartReducer
})

export default rootReducer;
