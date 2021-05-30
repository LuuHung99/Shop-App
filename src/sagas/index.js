import {all, call} from 'redux-saga/effects';
import {watchDataShopApp} from './saga_shop';

export default function* rootSaga() {
    yield all([
        call(watchDataShopApp)
    ])
}