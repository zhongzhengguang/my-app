import react, { useEffect, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
const Forecast = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-A0012-001?Authorization=CWB-25FE09E6-5C41-4606-B5A8-9D18D9DB957E&format=json"
      )
      .then((response) => {
        setData(response.data.cwbopendata.dataset);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      {/* 北台 */}
      <div className=" flex flex-col max-w-[500px] w-full m-auto  mt-10">
        <div>
          {/* <div className=" text-4xl">{data.location[22].locationName}</div> */}
          <div className=" mt-10">
            {/* {data.location[22].weatherElement[3].time[0].startTime}{" "} */}
            <span> to </span>
            {/* {data.location[22].weatherElement[3].time[0].endTime} */}
          </div>
          <div className="  mt-10 ">
            <div className="">
              <div className=" flex">
                {/* <div>{data.location[22].weatherElement[3].elementName} : </div> */}
                <div>
                  {/* {
                    data.location[22].weatherElement[3].time[0].parameter
                      .parameterName
                  } */}
                </div>
                <div>
                  {/* {
                    data.location[22].weatherElement[4].time[0].parameter
                      .parameterName
                  } */}
                </div>
              </div>
            </div>
            <div className=" flex mt-10">
              <div>
                {/* {
                  data.location[22].weatherElement[1].time[0].parameter
                    .parameterName
                } */}
              </div>
              <div>
                {/* {
                  data.location[22].weatherElement[2].time[0].parameter
                    .parameterName
                } */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 宜蘭 */}
      {/* <div>{data.location[2].locationName}</div>
      <div>
        {data.location[2].weatherElement[1].time[0].parameter.parameterName}
      </div>
      <div>
        {data.location[2].weatherElement[2].time[0].parameter.parameterName}
      </div>
      <div>{data.location[2].weatherElement[3].time[0].startTime}</div>
      <div>{data.location[2].weatherElement[3].time[0].endTime}</div>
      <div>{data.location[2].weatherElement[3].elementName}</div>
      <div>
        {data.location[2].weatherElement[3].time[0].parameter.parameterName}
      </div>
      <div>
        {data.location[2].weatherElement[4].time[0].parameter.parameterName}
      </div> */}
      {/* 台東 */}
      {/* <div>
        <div>{data.location[11].locationName}</div>
        <div>
          {data.location[11].weatherElement[1].time[0].parameter.parameterName}
        </div>
        <div>
          {data.location[11].weatherElement[2].time[0].parameter.parameterName}
        </div>
        <div>{data.location[11].weatherElement[3].time[0].startTime}</div>
        <div>{data.location[11].weatherElement[3].time[0].endTime}</div>
        <div>{data.location[11].weatherElement[3].elementName}</div>
        <div>
          {data.location[11].weatherElement[3].time[0].parameter.parameterName}
        </div>
        <div>
          {data.location[11].weatherElement[4].time[0].parameter.parameterName}
        </div>
      </div> */}
    </div>
  );
};

export default Forecast;
