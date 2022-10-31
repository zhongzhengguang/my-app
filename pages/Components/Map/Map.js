import React, { useContext, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import YilanForecast from "../Forecast/YilanForcast";
import JinshanForecast from "../Forecast/JishanForcast";
import JinzunForecast from "../Forecast/JinzunForecast";

const makericon = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  iconSize: [25, 40],
});

const Map = () => {
  const surfpoints = [
    {
      name: "honeyBay",
      position: [24.933169593789774, 121.88572098227161],
      path: "/forecast",
      id: 1,
      locationName: "東北",
    },
    {
      name: "Wushi",
      position: [24.87135903984007, 121.84231049225696],
      path: "/forecast",
      id: 2,
      locationName: "東北",
    },
    {
      name: "Jinzun ",
      position: [22.956187473143952, 121.29513265045756],
      path: "/forecast",
      id: 3,
      locationName: "東部",
    },
    {
      name: "Fulong ",
      position: [25.023013918450737, 121.94294856015472],
      path: "/forecast",
      id: 4,
      locationName: "北部",
    },
    {
      name: "Jishan ",
      position: [25.23941638517633, 121.63284421111359],
      path: "/forecast",
      id: 5,
      locationName: "北部",
    },
  ];
  // console.log(surfpoints[0].name);
  const [locationName, setLocationName] = useState("");

  console.log(locationName);

  return (
    <div>
      <div className=" absolute left-10">
        <div>{locationName === "東北" ? <YilanForecast /> : null}</div>
        <div>{locationName === "北部" ? <JinshanForecast /> : null}</div>
        <div>{locationName === "東部" ? <JinzunForecast /> : null}</div>
      </div>
      <div className="  z-[-1] object-cover absolute top-0 left-0 w-full h-full">
        <MapContainer
          center={[25.058452802073912, 121.56717401111011]}
          zoom={10}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {surfpoints.map((item) => (
            <Marker position={item.position} key={item.id} icon={makericon}>
              <Popup>
                <button onClick={() => setLocationName(item.locationName)}>
                  {item.name}
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div>{locationName === "東北" ? <YilanForecast /> : null}</div>
        <div>{locationName === "北部" ? <JinshanForecast /> : null}</div>
        <div>{locationName === "東部" ? <JinzunForecast /> : null}</div>
      </div>
    </div>
  );
};

export default Map;
