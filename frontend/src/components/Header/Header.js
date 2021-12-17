import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import "./Header.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout } from "../../actions/UserActions";
import TMDB from "./TMDB.svg";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Header = ({
  logout,
  isAuthenticated,
  userInfo: { userInfo },
  loading,
}) => {
  const logoutHandler = () => {
    logout();
  };
  return (
    <>
      {!loading && isAuthenticated && (
        <Navbar className="nav fixed-top">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src={TMDB} alt="" style={{ width: "170px" }} />
              </Link>
            </Navbar.Brand>
            <div
              style={{
                display: "flex",
                alignItems: " center",
              }}
            >
              <div className="dropdown">
                <button className="dropbtn">Movies</button>
                <div className="dropdown-content">
                  <Link to="/movies">Popular</Link>
                  <Link to="/movies/nowplaying">Now Playing</Link>
                  <Link to="/movies/upcoming">Upcoming</Link>
                  <Link to="/movies/toprated">Top Rated</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Tvshows</button>
                <div className="dropdown-content">
                  <Link to="/tv">Popular</Link>
                  <Link to="/tv/nowplaying">Now Playing</Link>
                  <Link to="/tv/upcoming">Upcoming</Link>
                  <Link to="/tv/toprated">Top Rated</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">People</button>
                <div className="dropdown-content">
                  <Link to="/person">Popular People</Link>
                </div>
              </div>
              <Link to="/more" className="navLink">
                More
              </Link>
            </div>
            <div
              style={{
                marginLeft: "inherit",
                display: "flex",
                alignItems: " center",
              }}
            >
              <div className="dropdown">
                <button className="dropbtn">
                  {userInfo.name}
                  <FiSettings className="ml-2" />
                </button>
                <div className="dropdown-content">
                  <Link to="/profile">
                    <CgProfile size={24} />
                    Profile
                  </Link>{" "}
                  <Link to="/admincheck">
                    <CgProfile size={24} />
                    Admin Check
                  </Link>{" "}
                  <Link to="/login" onClick={logoutHandler}>
                    <BiLogOut size={24} />
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
      )}
    </>
  );
};

Header.propTypes = {
  loading: PropTypes.bool,
  userInfo: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  loading: state.userInfo.loading,
  isAuthenticated: state.userInfo.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
