import {
  USER_FETCH_FAILURE,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
} from "./userActionTypes";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case USER_FETCH_FAILURE:
      return {
        data: [],
        error: action.payload,
        loading: false,
      };
  }
};
