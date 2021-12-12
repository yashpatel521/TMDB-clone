import axios from "axios";
import { moviesConstants } from "../constants/MoviesConstant";
import {
  POPULAR_MOVIES_FAIL,
  POPULAR_MOVIES_REQUEST,
  POPULAR_MOVIES_SUCCESS,
} from "../constants/UserReducerConstants";

export const popularMoviesFun = (route) => async (dispatch) => {
  const api_key = moviesConstants.TmdbApiKey;
  dispatch({ type: POPULAR_MOVIES_REQUEST });
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await axios.get(
      `https://api.themoviedb.org/3/${route}`,
      { params: { api_key } },
      config
    );
    dispatch({ type: POPULAR_MOVIES_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({
      type: POPULAR_MOVIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
