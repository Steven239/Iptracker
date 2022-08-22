import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

function LocationMarker(props) {
  const coordinates = props.location;
  const lng = coordinates.longitude;
  const lat = coordinates.latitude;
  const city = coordinates.city;
  const region = coordinates.region;
  const country = coordinates.country;
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    mouseover() {
      map.locate();
    },
    locationfound() {
      setPosition([lat, lng]);
      map.setView([lat, lng], map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>{`${city} ${region}, ${country}`}</Popup>
    </Marker>
  );
}

export default LocationMarker;
