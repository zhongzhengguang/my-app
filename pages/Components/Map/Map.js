import * as React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoiemhvbmd6aGVuZ2d1YW5nIiwiYSI6ImNsOXd4d29sYjA1OXozbnBhNnI1bm9xcnkifQ.ijReFc9-sxVsHcbzagb-0w";

const Map1 = () => {
  return (
    <Map
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
      }}
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/zhongzhengguang/cl9wy5dyz000d14qqxmm85712"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
  );
};
export default Map1;
