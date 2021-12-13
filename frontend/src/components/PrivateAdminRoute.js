import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateAdminRoute = ({
  userInfo: { isAuthenticated, userInfo },
  children,
}) => {
  if (isAuthenticated === true) {
    if (userInfo.isAdmin === true) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

PrivateAdminRoute.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps)(PrivateAdminRoute);
