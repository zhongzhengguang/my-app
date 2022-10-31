import { React } from "react";

import background from "../public/Assets/surf.mp4";
import Navbar from "./Components/Navbar/Navbar";
import SearchLocation from "./Components/Forecast/SearchLocation";

const forecast = () => {
  return (
    <div>
      <video
        src={background}
        className="absolute top-0 left-0 bottom-0 object-cover w-full h-[100%] z-[-1]"
        loop
        autoPlay
        muted
      />
      <Navbar />
      <SearchLocation />
    </div>
  );
};
export default forecast;
