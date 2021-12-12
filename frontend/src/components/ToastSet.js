import React from "react";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastSet = (msg, type) => {
  const config = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Zoom,
  };
  if (type === "error") {
    toast.error(msg, config);
  } else if (type === "success") {
    toast.success(msg, config);
  } else if (type === "warning") {
    toast.warning(msg, config);
  } else if (type === "info") {
    toast.info(msg, config);
  } else {
    toast(msg, config);
  }
};
const ToastSet = (msg) => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default ToastSet;
