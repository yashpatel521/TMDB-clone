import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BsImageAlt } from "react-icons/bs";
import { userImageUpload } from "../../actions/UserActions";
import "./ProfileStyle.css";

const Profile = ({ userImageUpload, userInfo }) => {
  const { name, email, pic } = { ...userInfo };
  const [picture, setPicture] = useState("");
  const postImage = (image) => {
    userImageUpload(image);
  };
  useEffect(() => {
    if (pic) {
      setPicture(`/Images/${pic}`);
    }
  }, [pic]);
  return (
    <>
      <div className="page-container">
        <div className="col-xl-6 col-md-12 ">
          <div className="card user-card-full">
            <div className="row m-l-0 m-r-0">
              <div className="col-sm-4 bg-c-lite-green user-profile">
                <div className="card-block text-center text-white">
                  <div className="m-b-25">
                    {" "}
                    <img
                      src={picture}
                      className="img-radius"
                      alt="User-Profile"
                    ></img>{" "}
                  </div>
                  <h6 className="f-w-600">{name}</h6>
                  <p>Web Designer</p>{" "}
                  <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="card-block">
                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                    Information
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Email</p>
                      <h6 className="text-muted f-w-400">{email}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Phone</p>
                      <h6 className="text-muted f-w-400">98979989898</h6>
                    </div>
                  </div>
                  <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                    Projects
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Recent</p>
                      <h6 className="text-muted f-w-400">Sam Disuja</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Most Viewed</p>
                      <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                    </div>
                  </div>
                  <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                    <BsImageAlt size={14} className="mr-1" />
                    Upload Profile Photo
                  </h6>
                  <Form.Group>
                    <Form.Control
                      type="file"
                      onChange={(e) => postImage(e.target.files[0])}
                    ></Form.Control>
                  </Form.Group>
                  <ul className="social-link list-unstyled m-t-40 m-b-10">
                    <li>
                      <a
                        href="#!"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="facebook"
                        data-abc="true"
                      >
                        <i
                          className="mdi mdi-facebook feather icon-facebook facebook"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="twitter"
                        data-abc="true"
                      >
                        <i
                          className="mdi mdi-twitter feather icon-twitter twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="instagram"
                        data-abc="true"
                      >
                        <i
                          className="mdi mdi-instagram feather icon-instagram instagram"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profile.prototype = {
  userImageUpload: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo.userInfo,
});

export default connect(mapStateToProps, { userImageUpload })(Profile);
