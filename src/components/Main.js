import React from "react";
import './Main.css';
import Navbar from "./Navbar";
import BeeAnimation from "./BeeAnimation";
import Butterfly from "./Butterfly";

const Main = () => {
  return (
    <div className="main-page">
      <Navbar/>
      <h1>Main Page Content</h1>
      <BeeAnimation/>
      <Butterfly/>
      {/* <BeeAnimation /> */}
    </div>
  );
};

export default Main;
