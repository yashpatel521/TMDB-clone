import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { popularMoviesFun } from "../../actions/MoviesAction";
import Loading from "../../components/Loading";
import { getMoviesImage } from "../../constants/MoviesConstant";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import "./PopularMoviesStyle.css";
import { Card, Button } from "react-bootstrap";
const PopularMovies = ({
  popularMoviesFun,
  popularMoviesData,
  moviesLoading,
}) => {
  let i = 0;
  useEffect(() => {
    popularMoviesFun("movie/upcoming");
  }, [popularMoviesFun]);

  if (!moviesLoading && popularMoviesData) {
    // console.log(popularMoviesData);
  }
  return (
    <>
      {moviesLoading && <Loading />}
      {!moviesLoading && popularMoviesData && <h1>Popular Movies</h1>}
      <ScrollingCarousel>
        {popularMoviesData &&
          popularMoviesData.map((movie) => (
            <Card style={{ width: "18rem" }} key={i++}>
              <Card.Img
                variant="top"
                // src=""
                src={getMoviesImage(movie.backdrop_path)}
                alt="movieImg"
              />
              <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Button variant="primary">Watch now</Button>
              </Card.Body>
            </Card>
          ))}
      </ScrollingCarousel>
    </>
  );
};

PopularMovies.prototype = {
  popularMoviesFun: PropTypes.func.isRequired,
  moviesLoading: PropTypes.bool,
  popularMoviesData: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  moviesLoading: state.moviesInfo.moviesLoading,
  popularMoviesData: state.moviesInfo.MoviesData,
});
export default connect(mapStateToProps, { popularMoviesFun })(PopularMovies);
