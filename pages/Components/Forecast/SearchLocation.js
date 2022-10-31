import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import YilanForecast from "./YilanForcast";
import JinshanForecast from "./JishanForcast";
import JinzunForecast from "./JinzunForecast";

const SearchLocation = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="w-[400px] mt-4 ml-10">
      <div className=" w-[400px]">
        <div className=" relative flex justify-between items-center max-w-[500px]  m-auto pt-4 z-10">
          <form className=" flex justify-between items-center  p-3 bg-transparent border border-black text-black rounded-2xl">
            <div>
              <input
                value={[location]}
                onChange={(event) => setLocation(event.target.value)}
                className=" border-none text-black bg-transparent focus:outline-none text-2xl"
                type="text"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div>{location === "東北" ? <YilanForecast /> : null}</div>
        <div>{location === "蜜月灣" ? <YilanForecast /> : null}</div>
        <div>{location === "烏石港" ? <YilanForecast /> : null}</div>
        <div>{location === "北部" ? <JinshanForecast /> : null}</div>
        <div>{location === "金山" ? <JinshanForecast /> : null}</div>
        <div>{location === "福隆" ? <JinshanForecast /> : null}</div>
        <div>{location === "東部" ? <JinzunForecast /> : null}</div>
        <div>{location === "金尊" ? <JinzunForecast /> : null}</div>
      </div>
    </div>
  );
};
export default SearchLocation;
