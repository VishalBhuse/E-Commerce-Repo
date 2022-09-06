import axios from "axios"
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes"

export const getProductsRequest = () => ({
    type: GET_PRODUCTS_REQUEST
})

export const getProductsSuccess = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload
})

export const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR
})

export const getProducts = (params) => dispatch => {
    dispatch(getProductsRequest())
    axios.get("/", params)
    .then((res) => dispatch(getProductsSuccess(res.data)))
    .catch((err) => dispatch(getProductsError(err))) 
}