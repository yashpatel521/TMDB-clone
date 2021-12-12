import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import PropTypes from "prop-types";
import "./registerStyle.css";
import {
  BsFillEnvelopeFill,
  BsFillPersonFill,
  BsFillShieldLockFill,
  //   BsImageAlt,
  BsLockFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { toastSet } from "../../components/ToastSet";
import { register } from "../../actions/UserActions";
import { userConst } from "../../constants/UserConstant";
import validator from "validator";

const Register = ({ register, isAuthenticated, loading }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [image, setImage] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  //on click submit get email password
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name) {
      toastSet(userConst.NameRequired, "error");
    } else if (!email) {
      toastSet(userConst.EmailRequired, "error");
    } else if (!validator.isEmail(email)) {
      toastSet(userConst.ValidEmail, "error");
    } else if (!password) {
      toastSet(userConst.PasswordRequired, "error");
    }
    // else if (
    //   !validator.isStrongPassword(password, {
    //     minLength: 8,
    //     minLowercase: 1,
    //     minUppercase: 1,
    //     minNumbers: 1,
    //     minSymbols: 1,
    //   })
    // ) {
    //   toastSet(userConst.PasswordAccept, "warning");
    // }
    else if (!confirmPassword) {
      toastSet(userConst.ConfirmPasswordRequired, "error");
    } else if (!(password === confirmPassword)) {
      toastSet(userConst.PasswordNotMatch, "error");
    } else {
      register(name, email, password);
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="bg-black">
        <div className="main Mainborder">
          <div className="section1">
            <h2>SIGN UP</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group className="form-group">
                <Form.Label>
                  <BsFillPersonFill size={16} />
                </Form.Label>
                <Form.Control
                  className="inputControl"
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

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
                  type="password"
                  autoComplete="false"
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>
                  <BsLockFill size={16} />
                </Form.Label>
                <Form.Control
                  className="inputControl"
                  type="password"
                  autoComplete="false"
                  placeholder="Repeat Your Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              {/* <Form.Group className="form-group" style={{ width: "120%" }}>
                <BsImageAlt size={16} />
                <p className="mb-0 ml-1">Upload Profile Photo</p>
                <Form.Control
                  style={{ width: "auto", blockSize: " auto" }}
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                ></Form.Control>
              </Form.Group> */}
              <Form.Group className="form-group">
                <Form.Control
                  style={{ width: "auto", blockSize: " auto" }}
                  type="checkbox"
                ></Form.Control>
                <Form.Label className="checkboxLabel">
                  I agree all statements in terms and conditions
                </Form.Label>
              </Form.Group>
              <Button className="submit-button" type="submit">
                Register
              </Button>
            </Form>
          </div>
          <div className="section2">
            <img src="./signup-image.jpg" alt="signup" />
            <Link to="/login" className="sec2-link">
              I am already a member
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userInfo.isAuthenticated,
  loading: state.userInfo.loading,
});

export default connect(mapStateToProps, { register })(Register);
