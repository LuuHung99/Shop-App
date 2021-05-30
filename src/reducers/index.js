import {combineReducers} from 'redux';
import {currentDataShop} from './reducer_shop';

const rootReducer = combineReducers({
    currentShop: currentDataShop
})

export default rootReducer;
