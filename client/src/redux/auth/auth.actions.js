import axios from "axios";
import { authTypes } from "./auth.types";

export const INVALID_CREDENTIALS = "Invalid login credentials";

const setUserPermissions = (permissions) => ({
  type: authTypes.SET_USER_PERMISSIONS,
  payload: permissions,
});

const signInStart = () => ({
  type: authTypes.SIGN_IN_START,
});

const signInSuccess = (userProfile) => ({
  type: authTypes.SIGN_IN_SUCCESS,
  payload: userProfile,
});

const signInFailure = (errorMessage) => ({
  type: authTypes.SIGN_IN_FAIL,
  payload: errorMessage,
});

export const clearErrorMessage = () => ({
  type: authTypes.CLEAR_ERROR_MESSAGE,
});

export const signInAsync = (email, password) => async (dispatch) => {
  dispatch(signInStart());
  try {
    const { data } = await axios.post(
      `/api/v1/auth/signin`, //
      {
        email,
        password,
      }
    );
    dispatch(setUserPermissions(data.user.role));
    dispatch(signInSuccess(data.user));
  } catch (err) {
    console.log({ err }); /////////////////
    if (err.response.status === 401) {
      return dispatch(signInFailure(INVALID_CREDENTIALS));
    } else {
      return dispatch(signInFailure(err.message));
    }
  }
};

const signout = () => ({
  type: authTypes.SIGNOUT,
});

export const signOutAsync = () => (dispatch) => {
  try {
    axios.post(`/api/v1/auth/logout`);
  } catch (err) {
    // proceed to log the user out
  }
  dispatch(signout());
};

const signupStart = () => ({
  type: authTypes.SIGNUP_START,
});

const signupSuccess = () => ({
  type: authTypes.SIGNUP_SUCCESS,
});

const signupFail = (errMessage) => ({
  type: authTypes.SIGNUP_FAIL,
  payload: errMessage,
});

export const signupAsync =
  ({ firstName, lastName, email, password }) =>
  async (dispatch) => {
    dispatch(signupStart());
    try {
      const { data } = await axios.post(`/api/v1/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      dispatch(signupSuccess);
      dispatch(setUserPermissions(data.user.role));
      dispatch(signInSuccess(data.user));
    } catch (err) {
      dispatch(signupFail(err.message));
    }
  };
