import {
  USER_IMAGE_UPLOAD_FAIL,
  USER_IMAGE_UPLOAD_REQUEST,
  USER_IMAGE_UPLOAD_SUCCESS,
  USER_LOAD_FAIL,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/UserReducerConstants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: false,
  userInfo: { isAdmin: false },
  popularMovies: null,
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload, isAuthenticated: false };
    case USER_LOGOUT:
      return {};
    case USER_LOAD_REQUEST:
      return { loading: true };
    case USER_LOAD_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case USER_LOAD_FAIL:
      return { loading: false, error: action.payload, isAuthenticated: false };
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload, isAuthenticated: false };
    case USER_IMAGE_UPLOAD_REQUEST:
      return { loading: true };
    case USER_IMAGE_UPLOAD_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case USER_IMAGE_UPLOAD_FAIL:
      return { loading: false, error: action.payload, isAuthenticated: false };
    default:
      return state;
  }
};
