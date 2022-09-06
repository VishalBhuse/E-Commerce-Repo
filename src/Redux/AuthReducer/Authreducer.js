import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionTypes";

const initState = {
    isAuth: false,
    token: "",
    isLoading: false,
    isError: false,
}

export const AuthReducer = (state = initState, action) => {
    switch (action.type) {
  
      // ***************GET FROM SERVER******************************
  
      case USER_LOGIN_REQUEST: 
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      
  
      case USER_LOGIN_SUCCESS: 
        return {
          ...state,
          token: action.payload,
          isLoading: false,
          isAuth: true,
          isError: false
        };
      
  
      case USER_LOGIN_ERROR: 
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          token: "",
          isError: true
        };
      
  
      default:
        return state;
    }
  };
  