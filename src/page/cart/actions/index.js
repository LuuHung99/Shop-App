import * as types from './types';

export const getDataCart = (id) => ({
    type: types.ADD_CART,
    id
});

export const startGetDataCart = (status) => ({
    type: types.START_ADD_CART,
    status
})

export const finishGetDataCart = (status) => ({
    type: types.FINISH_ADD_CART,
    status
})

export const getDataCartSuccess = (cart) => ({
    type: types.ADD_CART_SUCCESS,
    cart
})

export const getDataCartFailure = (err) => ({
    type: types.ADD_CART_FAIL,
    err
})