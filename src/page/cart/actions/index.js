import * as types from "./types";

export const getDataCart = (id) => ({
  type: types.ADD_CART,
  id,
});

export const startGetDataCart = (status) => ({
  type: types.START_ADD_CART,
  status,
});

export const finishGetDataCart = (status) => ({
  type: types.FINISH_ADD_CART,
  status,
});

export const getDataCartSuccess = (data) => ({
  type: types.ADD_CART_SUCCESS,
  data,
});

export const getDataCartFailure = (err) => ({
  type: types.ADD_CART_FAILURE,
  err,
});

export const deleteItemCart = (id) => ({
  type: types.DELETE_ITEM_CART,
  id,
});

export const deleteAllItems = (id) => ({
  type: types.DELETE_ALL_ITEM_CART,
  id
})

export const changeQtyCart = (id, qty) => ({
  type: types.CHANGE_QTY_CART,
  id,
  qty,
});
