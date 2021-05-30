import * as types from '../actions/types';

const initialState = {
    loading: false,
    products: {},
    error: null
}

export const currentDataShop = (state = initialState, action) => {
    switch (action.type) {
        case types.START_LOADING_DATA_SHOP:
            return {
                ...state,
                loading: action.loading
            }
        case types.STOP_LOADING_DATA_SHOP:
            return {
                ...state,
                loading: action.loading
            }
        case types.GET_DATA_SHOP_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.product,
                error: null
            }
        case types.GET_DATA_SHOP_FAIL:
            return {
                ...state,
                loading: false,
                products: {},
                error: action.error
            }
        default:
            return state;
    }
}