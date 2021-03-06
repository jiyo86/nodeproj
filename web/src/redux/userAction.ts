import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from "./userActionTypes";
import axios from "axios";
export interface State {
  loading?: boolean;
  error?: object;
  data?: object;
  params?: object;
}

export interface Action {
  type: string;
  payload?: object;
}
export const fetchUser = () => {
  return {
    type: USER_FETCH_REQUEST,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: user,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: USER_FETCH_FAILURE,
    payload: error,
  };
};

export const createUser = (userDate) => {
  return (dispatch) => {};
};

export const fetchUserList = () => {
  return (dispatch) => {
    dispatch(fetchUser());
    axios
      .get("http://3.83.122.242:8080/userlist")
      .then((response) => dispatch(fetchUserSuccess(response.data)))
      .catch((error) => dispatch(fetchUserFailure(error)));
  };
};
