import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useEffect } from 'react';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '50%',
  position: 'relative',
};

export function GoogleMapComponent({ location = {} }) {
  const [center, setCenter] = useState({});

  useEffect(() => {
    setCenter({ lat: Number(location.lat), lng: Number(location.long) });
  }, [location.lat, location.long]);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDE-KJTLxaEEF6g9ETAw4Y3sZJLBntiomE',
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded && !isNaN(center.lat) && !isNaN(center.lng) ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}
