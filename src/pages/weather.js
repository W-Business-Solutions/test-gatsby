import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../newSrc2/components/navbar/navbar";
import Footer from "../newSrc2/components/footer/newFooter";
import SmallHeader from "../newSrc2/components/smallHeader/smallHeader";

function Weather() {
  return (
    <>
      <Helmet>
        <title>Weather Tracking | Snow | Transblue Facility Management</title>
        <meta
          name="description"
          content="Advanced weather tracking with Transblue ensures that the elements are never a bottleneck to your success."
        />
      </Helmet>
      <Navbar />
      <SmallHeader
        page="weather"
        title="Weather Tracking"
        subtitle="Snow + Ice"
      />

      <iframe
        width="100vw"
        height="100vh"
        src="https://embed.windy.com/embed2.html?lat=37.753&lon=-97.778&detailLat=37.753&detailLon=-97.778&width=650&height=450&zoom=5&level=surface&overlay=rain&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
        frameborder="0"
        style={{ width: "98vw", height: "100vh" }}
      ></iframe>
      <Footer />
    </>
  );
}

export default Weather;
