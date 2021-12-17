import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";
function Loading({ size = 100 }) {
  return (
    <div className="loading">
      <Spinner
        style={{
          width: size,
          height: size,
        }}
        animation="border"
      />
    </div>
  );
}

export default Loading;
