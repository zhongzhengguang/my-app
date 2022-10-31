import React from "react";
import Navbar from "./Components/Navbar/Navbar";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Components/Map/Map"), { ssr: false });
const map = () => {
  return (
    <div>
      <Navbar />
      <Map />
    </div>
  );
};
export default map;
