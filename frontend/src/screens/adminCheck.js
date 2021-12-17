import React, { useEffect, useState } from "react";
import { moviesAPIsCall } from "../constants/MoviesConstant";

const AdminCheck = () => {
  const [state, setState] = useState({
    isLoading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    setState(moviesAPIsCall("movie/now_playing"));
  }, []);
  console.log(state.isLoading);

  useEffect(() => {
    if (state.isLoading) {
      console.log(state.isLoading);
    }
  }, [state.isLoading]);
  return (
    <div style={{ marginTop: "80px" }}>
      <h1>Admin Route</h1>
    </div>
  );
};

export default AdminCheck;
