import React, { Fragment } from "react";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import "./style.css";
import { GeoJSON } from "react-leaflet";

function Map(props) {
  const position = [props.lat, props.lon];
  const stylePath = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";

  if (typeof window !== "undefined") {
    return (
      <Fragment>
        <link rel="stylesheet" type="text/css" href={stylePath}></link>
        <MapContainer
          center={position}
          zoom={10}
          scrollWheelZoom={true}
          id="mapid"
        >
          <TileLayer
            attribution="Transblue"
            url="https://api.mapbox.com/styles/v1/sarahmariecarter/ckt259o46010e18njaz84sofg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FyYWhtYXJpZWNhcnRlciIsImEiOiJja3EyaXBub2UwcDVnMm9xYjY1M282MWtsIn0.M45SX1Os1C-H17ssCoAL8g"
            // url='https://api.mapbox.com/styles/v1/sarahmariecarter/ckt259o46010e18njaz84sofg.html?fresh=true&title=view&access_token=pk.eyJ1Ijoic2FyYWhtYXJpZWNhcnRlciIsImEiOiJja3A4dGE2eGUwYmhhMm9ueHQxYm81aG1jIn0.IL6ap7-sSL2WXIipenrzUQ'
          />
          <GeoJSON
            data={props.geojson}
            style={{ fillColor: "#ed6a22" }}
            pathOptions={{ color: "#ed6a22" }}
          />
        </MapContainer>
      </Fragment>
    );
  }
  return null;
}

export default Map;
