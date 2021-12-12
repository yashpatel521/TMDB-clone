import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateAdminRoute = ({
  userInfo: { isAuthenticated, userInfo },
  children,
}) => {
  useEffect(() => {
    console.log("AUTH ", isAuthenticated, userInfo);
  }, [isAuthenticated]);
  console.log(isAuthenticated, userInfo?.isAdmin);

  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  } else {
    if (userInfo?.isAdmin === true) {
      return children;
    }
    return <Navigate to="/" />;
  }
};

PrivateAdminRoute.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps)(PrivateAdminRoute);
