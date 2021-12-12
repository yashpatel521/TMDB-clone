import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({ userInfo: { isAuthenticated }, children }) => {
  return isAuthenticated === false ? <Navigate to="/login" /> : children;
};
PrivateRoute.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps)(PrivateRoute);
