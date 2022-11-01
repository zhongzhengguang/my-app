import React, { useState, useEffect } from "react";

import axios from "axios";
const url =
  "https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-A0012-001?Authorization=CWB-25FE09E6-5C41-4606-B5A8-9D18D9DB957E&format=json";
const JinshanForecast = () => {
  const [data, setData] = useState("");
  const [weatherElementTime, setWeatherElementTime] = useState("");
  const [waveHieght, setWaveHieght] = useState("");
  const [waveType, setWaveType] = useState("");
  const [windDir, setWindDir] = useState("");
  const [windSpeed, setwindSpeed] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data.cwbopendata.dataset.location[22]);
        setWeatherElementTime(
          response.data.cwbopendata.dataset.location[22].weatherElement[3]
            .time[0]
        );
        setWaveHieght(
          response.data.cwbopendata.dataset.location[22].weatherElement[3]
            .time[0].parameter
        );
        setWaveType(
          response.data.cwbopendata.dataset.location[22].weatherElement[4]
            .time[0].parameter
        );
        setWindDir(
          response.data.cwbopendata.dataset.location[22].weatherElement[1]
            .time[0].parameter
        );
        setwindSpeed(
          response.data.cwbopendata.dataset.location[22].weatherElement[2]
            .time[0].parameter
        );
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className=" mt-10">
      <ul className="flex flex-col justify-center w-[500px] m-auto ">
        <li className=" text-4xl p-4 w-[50%]">{data.locationName}</li>
        <li className=" p-2 w-[50%]">{weatherElementTime.startTime}</li>
        <li className=" p-2 w-[50%]">{weatherElementTime.endTime}</li>
        <li className=" p-2 w-[50%]">{waveHieght.parameterName}</li>
        <li className=" p-2 w-[50%]">{waveType.parameterName}</li>
        <li className=" p-2 w-[50%]">{windDir.parameterName}</li>
        <li className=" p-2 w-[50%]">{windSpeed.parameterName}</li>
      </ul>
    </div>
  );
};
export default JinshanForecast;
