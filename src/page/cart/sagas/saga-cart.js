import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as api from "../../../services/api";
import {ADD_CART} from '../actions/types';

function* CartSaga({ id }) {
  //tiep nhan action cua user truyen vao
  try {
    yield put(actions.startGetDataCart(true));
    const data = yield call(api.getDataShopById, id);
    if (data) {
      yield put(actions.getDataCartSuccess(data));
    } else {
      yield put(
        actions.getDataCartFailure({
          code: 404,
          message: "Not found data",
        })
      );
    }
    yield put(actions.finishGetDataCart(true));
  } catch (err) {
      yield put(actions.getDataCartFailure(err));
  }
}

//Dung action cua user de lang nghe su kien cua saga

export function* watchDataCart() {
    yield takeLatest(ADD_CART, CartSaga)
}
