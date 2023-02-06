import axios from "axios";

// export const getProductsRequest = () => ({
//     type: GET_PRODUCTS_REQUEST
// })

// export const getProductsSuccess = (payload) => ({
//     type: GET_PRODUCTS_SUCCESS,
//     payload
// })

// export const getProductsError = () => ({
//     type: GET_PRODUCTS_ERROR
// })

// export const getProducts = (params) => dispatch => {
//     dispatch(getProductsRequest())
//     axios.get("/", params)
//     .then((res) => dispatch(getProductsSuccess(res.data)))
//     .catch((err) => dispatch(getProductsError(err)))
// }

import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  SEARCH_RAM,
  SEARCH_STORAGE,
  SEARCH_TITLE,
} from "./actionTypes";

export const getProductsAPI = (category,curretpage) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  axios
    .get(`https://verceljson.vercel.app/${category}?page=${curretpage}`)
    .then((r) => {
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: r.data.data });
    })
    .catch(() => {
      dispatch({ type: GET_PRODUCTS_ERROR });
    });
};

export const searchSTORAGE = (data) => {
  return {
    type: SEARCH_STORAGE,
    payload: data,
  };
};

export const searchTITLE = (data) => {
  return {
    type: SEARCH_TITLE,
    payload: data,
  };
};

export const searchRAM = (data) => {
  return {
    type: SEARCH_RAM,
    payload: data,
  };
};
