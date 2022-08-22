import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Arrow from "../icon-arrow.svg";
import * as Services from "./Services";
import webFont from "webfontloader";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./Marker";

const StyledHeadline = styled.h1`
  color: white;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 400px;
`;

const StyledSearchBar = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 65px;
`;

const StyledInfoDiv = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  position: absolute;
  top: 100px;
  right: 70px;
  z-index: 2;
`;

function Tracker() {
  const [mapData, setMapData] = useState({
    ip: "",
    country: "",
    city: "",
    timezone: "",
    region: "",
    org: "",
    postal: 0,
    latitude: 0,
    longitude: 0,
  });

  const prevData = useRef(mapData.ip);

  useEffect(() => {
    webFont.load({
      google: {
        families: ["Rubik"],
      },
    });
    Services.GetClient().then(onGetSuccess).catch(onGetError);
  }, []);

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
    Services.Get(mapData.ip).then(onGetSuccess).catch(onGetError);
  };

  const onGetSuccess = (response) => {
    let ip = response.data.ip;
    let country = response.data.country;
    let timezone = response.data.timezone;
    let org = response.data.org;
    let lng = response.data.longitude;
    let lat = response.data.latitude;
    let city = response.data.city;
    let region = response.data.region;
    let postal = response.data.postal;

    setMapData((prevState) => {
      let prevMapData = { ...prevState };

      prevMapData.ip = ip;
      prevMapData.country = country;
      prevMapData.timezone = timezone;
      prevMapData.org = org;
      prevMapData.latitude = lat;
      prevMapData.longitude = lng;
      prevMapData.city = city;
      prevMapData.region = region;
      prevMapData.postal = postal;
      prevData.current = ip;

      return prevMapData;
    });
  };

  const onGetError = (error) => {
    console.log(error);
  };

  const onInputChange = (e) => {
    const value = e.target.value;

    setMapData((prevState) => {
      const newSearchInput = {
        ...prevState,
      };
      newSearchInput.ip = value;
      return newSearchInput;
    });
  };

  return (
    <div>
      <div className="bgImg">
        <StyledHeadline>IP Address Tracker</StyledHeadline>
        <StyledSearchBar>
          <div>
            <input
              onChange={onInputChange}
              name="ip"
              type="search"
              className="input-style"
              placeholder="Search for any IP address"
            />
            <button
              id="searchBtn"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              type="button"
              className="btn-style"
              onClick={handleButtonClick}
            >
              <img src={Arrow} alt="arrow" className="img" />
            </button>
          </div>
        </StyledSearchBar>
        <StyledInfoDiv>
          <div className="info-style">
            <div className="address-style">
              <h5>IP ADDRESS</h5>
              <h1>{prevData.current}</h1>
            </div>
            <div className="location-style">
              <h5>LOCATION</h5>
              <h1>{`${mapData.city} ${mapData.region}, ${mapData.country}`}</h1>
            </div>
            <div className="timezone-style">
              <h5>TIMEZONE</h5>
              <h1>{mapData.timezone}</h1>
            </div>
            <div className="isp-style">
              <h5>ORG</h5>
              <h1>{mapData.org}</h1>
            </div>
          </div>
        </StyledInfoDiv>
      </div>
      <div id="map">
        <MapContainer
          center={[mapData.latitude, mapData.longitude]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker location={mapData} />
        </MapContainer>
      </div>
    </div>
  );
}

export default Tracker;
