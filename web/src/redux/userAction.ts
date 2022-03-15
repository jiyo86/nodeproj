import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from "./userActionTypes";

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
      axios.get("/getuserlist").then( response => dispatch(fetchUserSuccess(response.data))).catch(error => dispatch(fetchUserFailure(error))      ));
      )
  };
};

