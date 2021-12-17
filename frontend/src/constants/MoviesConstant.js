import axios from "axios";

export const moviesConstants = {
  TmdbApiKey: "96c9281d41bddbb69746bd576c8a5eb2",
};

export const moviesAPIsCall = async (path) => {
  const api_key = moviesConstants.TmdbApiKey;
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await axios.get(
      `https://api.themoviedb.org/3/${path}`,
      { params: { api_key } },
      config
    );
    return {
      data: response.data.results,
      isLoading: false,
    };
  } catch (error) {
    return {
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      isLoading: false,
    };
  }
  fetch(
    `https://api.themoviedb.org/3/${path}?api_key=${moviesConstants.TmdbApiKey}`
  )
    .then((res) => res.json())
    .then(
      (result) => {
        return {
          result: result,
          loading: true,
        };
      },
      (error) => {
        return {
          error: error,
          loading: true,
        };
      }
    );
};

export const getMoviesImage = (path) =>
  `https://image.tmdb.org/t/p/w500${path}`;
