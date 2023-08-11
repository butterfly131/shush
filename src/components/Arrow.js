import React from "react";
import "./Arrow.css";
import { Link } from "react-router-dom";

const Arrow = () => {
  return (
    <div>
      {/* Use the Link component with "to" prop to specify the target page */}
      <Link to="/messages" className="arrow-link">
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default Arrow;
