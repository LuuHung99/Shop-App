import {all, call} from 'redux-saga/effects';
import {watchDataShopApp} from './saga_shop';
import {watchDataCart} from '../page/cart/sagas/saga-cart';

export default function* rootSaga() {
    yield all([
        call(watchDataShopApp),
        call(watchDataCart)
    ])
}