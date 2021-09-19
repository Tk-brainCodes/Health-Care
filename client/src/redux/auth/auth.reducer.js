import { authTypes } from "./auth.types";
const INITIAL_STATE = {
  userProfile: null,
  userRole: "",
  isSigningIn: false,
  errorMessage: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.SIGN_IN_START: {
      return { ...state, isSigningIn: true };
    }
    case authTypes.SIGN_IN_SUCCESS: {
      return { ...state, isSigningIn: false, userProfile: action.payload };
    }
    case authTypes.SIGNUP_FAIL:
    case authTypes.SIGN_IN_FAIL: {
      return { ...state, isSigningIn: false, errorMessage: action.payload };
    }
    case authTypes.SET_USER_PERMISSIONS: {
      return { ...state, userRole: action.payload };
    }
    case authTypes.CLEAR_ERROR_MESSAGE: {
      return { ...state, errorMessage: "" };
    }
    case authTypes.SIGNOUT: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
