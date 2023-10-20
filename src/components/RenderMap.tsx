import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import './RenderMap.css'

const RenderMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY as string,
  });
  const center = useMemo(() => ({ lat: 45.52043, lng: -73.856743 }), []);

  return (
    <div className="render-map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 45.52043, lng: -73.856743 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default RenderMap;