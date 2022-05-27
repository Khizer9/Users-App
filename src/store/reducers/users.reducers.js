import { GET_USERS_DATA, GET_USERS_DATA_SUCCESS } from "../actions/users.action"
const initialState = {
  users: [],
  loading: false
}
export function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_DATA: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_USERS_DATA_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    }
    default: {
      return { ...state }
    }
  }
}

