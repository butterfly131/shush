import React from "react";
import "./Arrows.css";
import { Link } from "react-router-dom";

const Arrows = () => {
  return (
    <div>
      {/* Use the Link component with "to" prop to specify the target page */}
      <Link to="/messages" className="arrows-link">
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default Arrows;
