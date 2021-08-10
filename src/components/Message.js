import React from "react";
import "./Message.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Message() {
  return (
    <div className="message">
      <i className="bi bi-check-circle-fill"></i>
      <h2>Successfully submitted!</h2>
    </div>
  );
}

export default Message;
