import * as React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoiemhvbmd6aGVuZ2d1YW5nIiwiYSI6ImNsOXd4d29sYjA1OXozbnBhNnI1bm9xcnkifQ.ijReFc9-sxVsHcbzagb-0w";

let Surfpoints = [
  {
    name: "honeyBay",
    latitude: [24.933169593789774],
    longitude: [121.88572098227161],
  },
  {
    name: "Wushi",
    latitude: [24.87135903984007],
    longitude: [121.84231049225696],
  },
  {
    name: "Jinzun ",
    latitude: [22.956187473143952],
    longitude: [121.29513265045756],
  },
  {
    name: "Fulong ",
    latitude: [25.023013918450737],
    longitude: [121.94294856015472],
  },
  {
    name: "Jishan ",
    latitude: [25.23941638517633],
    longitude: [121.63284421111359],
  },
];

const Surfpoint = () => {
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
      {Surfpoints.map((item) => (
        <Marker
          latitude={item.latitude}
          longitude={item.longitude}
          color="red"
        />
      ))}
      <Marker
        latitude={25.058452802073912}
        longitude={121.56717401111011}
        color="red"
      />
    </Map>
  );
};
export default Surfpoint;
