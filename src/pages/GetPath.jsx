import React from "react";
import Navbar from "../components/Navbar";
import MapboxComponent from "../components/MapboxCpmponent";

const GetPath = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="first"></div>
        <MapboxComponent />
      </div>
    </div>
  );
};

export default GetPath;
