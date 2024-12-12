import React from "react";
import { Link } from "react-router-dom";
import "../scss/button.scss"


const Button = ({ text }) => {
  return (
    <div className="button">
      <Link className="link" to="/">{text}</Link>
    </div>
  );
};

export default Button;
