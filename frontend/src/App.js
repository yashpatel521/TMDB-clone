import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/Routing";
import PrivateAdminRoute from "./components/PrivateAdminRoute";
import Home from "./screens/Home";
import Login from "./screens/Login/Login";
import Profile from "./screens/Profile/Profile";
import setAuthToken from "./utils/SetAuthToken";
import { loadUser } from "./actions/UserActions";
import store from "./Store";
import { connect } from "react-redux";
import Register from "./screens/Register/Register";
import PropTypes from "prop-types";
import ToastSet, { toastSet } from "./components/ToastSet";
import AdminCheck from "./screens/adminCheck";
import PopularMovies from "./screens/Movies/PopularMovies";
import Loading from "./components/Loading";

if (localStorage.token) setAuthToken(localStorage.token);
if (localStorage.token) store.dispatch(loadUser());
const App = ({ isAuthenticated, loading, error }) => {
  useEffect(() => {
    if (!isAuthenticated && error) {
      toastSet(error, "error");
    }
  }, [isAuthenticated, loading, error]);
  return (
    <>
      {loading && <Loading />}
      <ToastSet />
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/admincheck"
              element={
                <PrivateAdminRoute>
                  <AdminCheck />
                </PrivateAdminRoute>
              }
            />
            <Route
              exact
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/PopularMovies"
              element={
                <PrivateRoute>
                  <PopularMovies />
                </PrivateRoute>
              }
            />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userInfo.isAuthenticated,
  loading: state.userInfo.loading,
  error: state.userInfo.error,
});
export default connect(mapStateToProps)(App);
