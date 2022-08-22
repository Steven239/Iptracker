import React, { useState } from "react";
import Arrow from "../icon-arrow.svg";
import * as Services from "./Services";

function SearchBar() {
  const [mapData, setMapData] = useState({
    ip: "",
    country: "",
    timezone: "",
    isp: "",
  });

  const handleMouseEnter = () => {
    document
      .getElementById("searchBtn")
      .setAttribute("style", "background-color:hsl(0, 0%, 59%)");
  };

  const handleMouseLeave = () => {
    document
      .getElementById("searchBtn")
      .setAttribute("style", "background-color: hsl(0, 0%, 17%)");
  };

  const handleButtonClick = () => {
    console.log("performing services");
    Services.Get().then(onGetSuccess).catch(onGetError);
  };

  const onGetSuccess = (response) => {
    console.log(response);

    let ip = response.data.ip;
    let country = response.data.location.country;
    let timezone = response.data.location.timezone;
    let isp = response.data.isp;

    setMapData((prevState) => {
      let prevMapData = { ...prevState };

      prevMapData.ip = ip;
      prevMapData.country = country;
      prevMapData.timezone = timezone;
      prevMapData.isp = isp;
      return prevMapData;
    });
  };

  const onGetError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <div>
        <input type="search" className="input-style" />
        <button
          id="searchBtn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          type="button"
          className="btn-style"
          onClick={handleButtonClick}
          name="ip"
          value={mapData.ip}
        >
          <img src={Arrow} alt="arrow" className="img" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
