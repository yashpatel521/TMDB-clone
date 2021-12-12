import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../actions/UserActions";
import { Link, useNavigate } from "react-router-dom";

var loginStyles = {
  loginContainer: {
    width: "50%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <Container
        style={loginStyles.loginContainer}
        className="shadow-lg p-3 mb-5 bg-white rounded border"
      >
        <Row>
          <Col>
            <Button variant="danger" onClick={logoutHandler}>
              LOGOUT
            </Button>{" "}
          </Col>
          <Col>
            <Button variant="danger">
              <Link to="/profile">Profile</Link>
            </Button>{" "}
          </Col>
          <Col>
            <Button variant="danger">
              <Link to="/admincheck">admincheck</Link>
            </Button>{" "}
          </Col>
          <Col>
            <Button variant="danger">
              <Link to="/PopularMovies">PopularMovies</Link>
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
