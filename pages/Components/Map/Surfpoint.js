import { React, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoiemhvbmd6aGVuZ2d1YW5nIiwiYSI6ImNsOXd4d29sYjA1OXozbnBhNnI1bm9xcnkifQ.ijReFc9-sxVsHcbzagb-0w";

let Surfpoints = [
  {
    id: 1,
    name: "honeyBay",
    latitude: [24.933169593789774],
    longitude: [121.88572098227161],
  },
  {
    id: 2,
    name: "Wushi",
    latitude: [24.87135903984007],
    longitude: [121.84231049225696],
  },
  {
    id: 3,
    name: "Jinzun ",
    latitude: [22.956187473143952],
    longitude: [121.29513265045756],
  },
  {
    id: 4,
    name: "Fulong ",
    latitude: [25.023013918450737],
    longitude: [121.94294856015472],
  },
  {
    id: 5,
    name: "Jishan ",
    latitude: [25.23941638517633],
    longitude: [121.63284421111359],
  },
];

const Surfpoint = () => {
  const [showPopup, setShowPopup] = useState();
  console.log(showPopup);
  return (
    <Map
      initialViewState={{
        latitude: 25.058452802073912,
        longitude: 121.56717401111011,
        zoom: 10,
      }}
      style={{ height: "100vh", width: "100vh" }}
      mapStyle="mapbox://styles/zhongzhengguang/cl9wy5dyz000d14qqxmm85712"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <div>
        {Surfpoints.map((item) => (
          <Marker
            key={item.id}
            latitude={item.latitude}
            longitude={item.longitude}
          >
            <p
              className="cursor-pointer text-2xl"
              onClick={() => setShowPopup(item)}
            >
              🏄‍♀️
            </p>
          </Marker>
        ))}
      </div>
    </Map>
  );
};
export default Surfpoint;
