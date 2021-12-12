import axios from "axios";
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
import setAuthToken from "../utils/SetAuthToken";

//login action and if success set token in localstorage
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users/login`,
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("token", data.token);
    localStorage.setItem("isAdmin", data.isAdmin);
    localStorage.setItem("isAuthenticated", true);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("isAuthenticated");
  dispatch({ type: USER_LOGOUT });
};

//get currnet authnticated user data and set authorization
export const loadUser = () => async (dispatch) => {
  dispatch({ type: USER_LOAD_REQUEST });
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(`/api/users/userInfo`, config);
    dispatch({ type: USER_LOAD_SUCCESS, payload: data });
    localStorage.setItem("isAdmin", data.isAdmin);
    localStorage.setItem("isAuthenticated", true);
  } catch (error) {
    dispatch({
      type: USER_LOAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//Register action and if success set token in localstorage
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users`,
      { name, email, password },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("token", data.token);
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//Register action and if success set token in localstorage
export const userImageUpload = (image) => async (dispatch) => {
  try {
    dispatch({ type: USER_IMAGE_UPLOAD_REQUEST });
    if (localStorage.token) setAuthToken(localStorage.token);

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    let dataImage = new FormData();
    dataImage.append("image", image);
    const { data } = await axios.post(
      `/api/imageUpload/users`,
      dataImage,
      config
    );
    dispatch({ type: USER_IMAGE_UPLOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_IMAGE_UPLOAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
