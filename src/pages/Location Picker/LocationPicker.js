import React, { useState, useEffect } from 'react';

const LocationPicker = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            // Handle specific error cases
            if (error.code === error.PERMISSION_DENIED) {
              setError('User denied Geolocation. Please enable location services.');
            } else {
              setError(`Error: ${error.message}`);
            }
          }
        );
      } else {
        setError('Geolocation is not supported by your browser.');
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    //Get Address using Latitude & Longitude
    //Documentation: https://nominatim.org/release-docs/develop/api/Reverse/
    //https://nominatim.openstreetmap.org/reverse.php?lat="+latitude+"&lon="+longitude+"&zoom=18&format=jsonv2
    const getAddress = async() => {
      const response = await fetch("https://nominatim.openstreetmap.org/reverse.php?lat="+latitude+"&lon="+longitude+"&zoom=18&format=jsonv2", {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }  
      });
      if(!response.ok){
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      const result = await response.json();
      setAddress(result.display_name);
      console.log(result);
    }
    if(latitude!=null){
      getAddress();
    }
    
  }, [latitude])

  return (
    <div>
      {latitude && longitude ? (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <p>Address: {address}</p>
        </div>
      ) : (
        <p>{error ? error : 'Fetching location...'}</p>
      )}
    </div>
  );
};

export default LocationPicker;
