import {
  ADD_TO_WISH_LIST_FAILURE,
  ADD_TO_WISH_LIST_REQUEST,
  ADD_TO_WISH_LIST_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  WishListData: [],
  ProId:[],
};

export const WishListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WISH_LIST_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case ADD_TO_WISH_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        WishListData: payload.WithListData,
        ProId:payload.ProId,
        isError: false,
      };

    case ADD_TO_WISH_LIST_FAILURE:
      return { ...state, isLoading: false, isError: false };
    default:
      return state;
  }
};
