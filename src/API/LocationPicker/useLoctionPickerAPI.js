export default function useLocationPickerAPI() {
  let latitude = null;
  let longitude = null;
  let address = null;
  let error = null;

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.permissions) {
        navigator.permissions.query({ name: 'geolocation' })
          .then((result) => {
            if (result.state === 'granted' || result.state === 'prompt') {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  latitude = position.coords.latitude;
                  longitude = position.coords.longitude;
                  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                  resolve();
                },
                (error) => {
                  console.error(`Error: ${error.message}`);
                  reject(error);
                }
              );
            } else {
              console.error('User denied Geolocation. Please enable location services.');
              reject(new Error('User denied Geolocation.'));
            }
          })
          .catch((error) => {
            console.error(`Error querying geolocation permission: ${error.message}`);
            reject(error);
          });
      } else {
        console.error('Geolocation permissions not supported by your browser.');
        reject(new Error('Geolocation permissions not supported.'));
      }
    });
  };

  const getAddress = async () => {
    try {
      await getLocation();
      if (latitude !== null) {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse.php?lat=${latitude}&lon=${longitude}&zoom=18&format=jsonv2`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        });

        if (!response.ok) {
          console.log("error");
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        address = result.address;
        console.log(result);
        console.log(result.display_name);
      }
    } catch (error) {
      console.error('Error fetching address:', error.message);
      address = null;
    }
  };

  // Return a Promise that resolves with the address once available
  return new Promise((resolve, reject) => {
    getAddress()
      .then(() => resolve({
        AddressLine1: address.neighbourhood +", "+address.suburb,
        AddressLine2: address.city_district,
        city: address.county,
        state: address.state_district.replace("District", ""),
        pinCode: address.postcode
      }))
      .catch((error) => reject(error));
  });
}
