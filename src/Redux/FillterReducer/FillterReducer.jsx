import { ADD_FILLTER } from "./actionType"

const initialState = {
    Fillter:[]
}

export const FillterReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_FILLTER:
    return { ...state, Fillter:payload }

  default:
    return state
  }
}
