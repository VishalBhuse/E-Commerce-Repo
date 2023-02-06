// import { GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";

import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  SEARCH_RAM,
  SEARCH_STORAGE,
  SEARCH_TITLE,
} from "./actionTypes";

//  const initState = {
//     isLoading: false,
//     isError: false,
//     products: [],
//   };

//   export const Appreducer = (state = initState, action) => {
//     switch (action.type) {

//       // ***************GET FROM SERVER******************************

//       case GET_PRODUCTS_REQUEST: {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//         };
//       }

//       case GET_PRODUCTS_SUCCESS: {
//         return {
//           ...state,
//           products: action.payload,
//           isLoading: false,
//           isError: false,
//         };
//       }

//       case GET_PRODUCTS_ERROR: {
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//         };
//       }

//       default:
//         return state;
//     }
//   };

const initdata = {
  loading: false,
  error: false,
  data: [],
};

export const Appreducer = (state = initdata, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case SEARCH_TITLE:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };

    case SEARCH_RAM:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };

    case SEARCH_STORAGE:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };

    default: {
      return state;
    }
  }
};
