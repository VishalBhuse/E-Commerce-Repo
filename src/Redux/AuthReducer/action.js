import axios from "axios"
import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionTypes"

// export const loginRequest = () => ({
//     type: USER_LOGIN_REQUEST
// })

// export const loginSuccess = (payload) => ({
//     type: USER_LOGIN_SUCCESS,
//     payload
// })

// export const loginError = () => ({
//     type: USER_LOGIN_ERROR
// })

export const login = (payload) => (dispatch) => {
    // dispatch(loginRequest());
    dispatch({type: USER_LOGIN_REQUEST});

    return axios({
        method: "post",
        url: "/api/login",
        baseURL: "https://reqres.in",
        data: payload
    })
    // .then((res) => dispatch(loginSuccess(res.data)))
    // .catch((err) => dispatch(loginError()))
    .then((res) => dispatch({type: USER_LOGIN_SUCCESS, payload: res.data}))
    .catch((err) => dispatch({type: USER_LOGIN_ERROR}))
}