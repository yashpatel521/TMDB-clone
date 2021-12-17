import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import React from "react";
import dateFormat from "dateformat";
import { Card } from "react-bootstrap";
import { getMoviesImage } from "../../constants/MoviesConstant";
import "./CardCarosoul.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const pathColor = (len) => {
  if (len < 50 || len === 50) {
    return "red";
  } else if ((len > 50 && len < 70) || len === 70) {
    return "#b300ff";
  } else if ((len > 70 && len < 80) || len === 80) {
    return "#D2D430";
  } else if ((len > 80 && len < 100) || len === 100) {
    return "#21D17B";
  }
};

const trailPathColor = (len) => {
  if (len < 50 || len === 50) {
    return "red";
  } else if ((len > 50 && len < 70) || len === 70) {
    return "#e19cff";
  } else if ((len > 70 && len < 80) || len === 80) {
    return "#433D0F";
  } else if ((len > 80 && len < 100) || len === 100) {
    return "#173527";
  }
};
const CardCarosoul = (props) => {
  let i = 0;
  return (
    <>
      <ScrollingCarousel>
        {props.data &&
          props.data.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={i++}>
              <Card className="cardMain" key={i++}>
                <Card.Img
                  className="cardImg"
                  src={getMoviesImage(movie.poster_path)}
                  alt="movieImg"
                />
                <div className="progressBar">
                  <CircularProgressbar
                    value={movie.vote_average * 10}
                    text={`${movie.vote_average * 10}%`}
                    styles={buildStyles({
                      textSize: "30px",
                      pathColor: pathColor(movie.vote_average * 10),
                      textColor: "#fff",
                      trailColor: trailPathColor(movie.vote_average * 10),
                    })}
                  />
                </div>
                <Card.Body className="cardBody">
                  <Card.Title className="cardTitle">
                    {movie.original_title}
                  </Card.Title>
                  <Card.Title>
                    {dateFormat(movie.release_date, "mmmm dS, yyyy")}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
      </ScrollingCarousel>
    </>
  );
};

export default CardCarosoul;
