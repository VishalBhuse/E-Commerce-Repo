import { GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";

 const initState = {
    isLoading: false,
    isError: false,
    products: [],
  };
  
  export const Appreducer = (state = initState, action) => {
    switch (action.type) {
  
      // ***************GET FROM SERVER******************************
  
      case GET_PRODUCTS_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
  
      case GET_PRODUCTS_SUCCESS: {
        return {
          ...state,
          products: action.payload,
          isLoading: false,
          isError: false,
        };
      }
  
      case GET_PRODUCTS_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
  
      default:
        return state;
    }
  };
  