import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as api from "../services/api";
import {GET_DATA_SHOP} from '../actions/types';

function* getDataShopApp({ change }) {
  //tiep nhan action cua user truyen vao
  try {
    yield put(actions.startLoadingDataShop(true));
    const data = yield call(api.getDataShop, change);
    if (data) {
      yield put(actions.getDataShopSuccess(data));
    } else {
      yield put(
        actions.getDataShopFail({
          code: 404,
          message: "Not found data",
        })
      );
    }
    yield put(actions.stopLoadingDataShop(false));
  } catch (err) {
      yield put(actions.getDataShopFail(err));
  }
}

//Dung action cua user de lang nghe su kien cua saga

export function* watchDataShopApp() {
    yield takeLatest(GET_DATA_SHOP, getDataShopApp)
}


