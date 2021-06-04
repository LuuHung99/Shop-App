import {combineReducers} from 'redux';
import {currentDataShop} from './reducer_shop';
import {cartReducer} from '../page/cart/reducers/reducer-cart';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const configPersistCart = {
    key: 'cart-persist',
    storage,
    whitelist: ['cartItems', 'sumMoney', 'countItem']
}
const rootReducer = combineReducers({
    currentShop: currentDataShop,
    cartReducer: persistReducer(configPersistCart, cartReducer) 
})

export default rootReducer;
