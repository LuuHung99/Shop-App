import * as types from "../actions/types";

const initState = {
  statusAdd: false,
  finished: false,
  cartItems: [],
  sumMoney: 0,
  countItem: 0,
  errorCart: null,
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case types.START_ADD_CART:
      return {
        ...state,
        statusAdd: state.status,
      };
    case types.FINISH_ADD_CART:
      return {
        ...state,
        statusAdd: state.status,
      };
    case types.ADD_CART_FAIL:
      return {
        ...state,
        cartItems: state.err,
      };
    case types.ADD_CART_SUCCESS:
      const detailPd = action.data;
      // truong hop gio hang chua ton tai hay la chua co san pham nao ben trong
      if (!state.cartItems) {
        // bo sung them truong so luong mua san pham vao ben trong du lieu cua san pham
        detailPd.qty = 1;
        return {
          ...state,
          cartItems: [...state.cartItems, detailPd],
          errorCart: null,
          countItem: state.countItem + 1, // 0 + 1
          sumMoney: parseInt(state.sumMoney) + parseInt(detailPd.price),
        };
      } else {
        // kiem tra san pham them moi da ton tai trong gio hang chua ?
        // neu da ton tai thi chi cap lai so luong mua
        // neu chua them moi san pham vao gio hang
        const idPdAdd = detailPd.id;
        const infoPd = state.cartItems.filter((item) => item.id === idPdAdd)[0];
        if (infoPd) {
          infoPd.qty += 1;
          return {
            ...state,
            errorCart: null,
            sumMoney: parseInt(state.sumMoney) + parseInt(detailPd.price),
          };
        } else {
          detailPd.qty = 1;
          return {
            ...state,
            cartItems: [...state.cartItems, detailPd],
            errorCart: null,
            countItem: state.countItem + 1, // 0 + 1
            sumMoney: parseInt(state.sumMoney) + parseInt(detailPd.price),
          };
        }
      }
  }
};
