import * as types from './types';

export const getDataShop = (change) => ({
    type: types.GET_DATA_SHOP,
    change
})

export const startLoadingDataShop = (loading) => ({
    type: types.START_LOADING_DATA_SHOP,
    loading
})

export const stopLoadingDataShop = (loading) => ({
    type: types.STOP_LOADING_DATA_SHOP,
    loading
})

export const getDataShopSuccess = (product) => ({
    type: types.GET_DATA_SHOP_SUCCESS,
    product
})

export const getDataShopFail = (error) => ({
    type: types.GET_DATA_SHOP_FAIL,
    error
})
