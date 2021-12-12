import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { login } from "../../actions/UserActions";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import PropTypes from "prop-types";
import "./LoginStyle.css";
import { BsFillEnvelopeFill, BsFillShieldLockFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { userConst } from "../../constants/UserConstant";
import validator from "validator";
import { toastSet } from "../../components/ToastSet";

const Login = ({ login, isAuthenticated, loading, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //on click submit get email password
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email) {
      toastSet(userConst.EmailRequired, "error");
    } else if (!validator.isEmail(email)) {
      toastSet(userConst.ValidEmail, "error");
    } else if (!password) {
      toastSet(userConst.PasswordRequired, "error");
    } else {
      login(email, password);
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="bg-black">
        <div className="main Mainborder">
          <div className="section2">
            <img src="./signin-image.jpg" alt="signup" />
            <Link to="/register" className="sec2-link">
              Create an account
            </Link>
          </div>
          <div className="section1">
            <h2>SIGN IN</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group className="form-group">
                <Form.Label>
                  <BsFillEnvelopeFill size={16} />
                </Form.Label>
                <Form.Control
                  className="inputControl"
                  type="text"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>
                  <BsFillShieldLockFill size={16} />
                </Form.Label>
                <Form.Control
                  className="inputControl"
                  autoComplete="false"
                  type="password"
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Control
                  style={{ width: "12px" }}
                  type="checkbox"
                ></Form.Control>
                <Form.Label className="checkboxLabel">Remember Me</Form.Label>
              </Form.Group>
              <Button className="submit-button" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userInfo.isAuthenticated,
  loading: state.userInfo.Loading,
  error: state.userInfo.error,
});

export default connect(mapStateToProps, { login })(Login);
