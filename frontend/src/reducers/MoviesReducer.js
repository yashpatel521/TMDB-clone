import {
  POPULAR_MOVIES_FAIL,
  POPULAR_MOVIES_REQUEST,
  POPULAR_MOVIES_SUCCESS,
} from "../constants/UserReducerConstants";

const initialState = {
  moviesLoading: false,
  MoviesData: null,
};

export const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_MOVIES_REQUEST:
      return { moviesLoading: true };
    case POPULAR_MOVIES_SUCCESS:
      return {
        moviesLoading: false,
        MoviesData: action.payload,
      };
    case POPULAR_MOVIES_FAIL:
      return { moviesLoading: false, error: action.payload };
    default:
      return state;
  }
};
