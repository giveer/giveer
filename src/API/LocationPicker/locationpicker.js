export default function locationpicker() {
    let latitude = null;
    let longitude = null;
    let address = null;
    let addressLine1 = "";
    let addressLine2 = "";
    let city = "";
    let state = "";
    let pincode = "";

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
                        'Content-type': 'application/json',
                        'Accept-Language': 'en'
                    }
                });

                if (!response.ok) {
                    console.log("error");
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const result = await response.json();
                address = result.address;

                const neighborhood = address.neighbourhood;
                const suburb = address.suburb;
                const city_distric = address.city_distric;
                const county = address.county;
                const state_district = address.state_district;
                const postcode = address.postcode;

                if (neighborhood || suburb) {
                    addressLine1 = [neighborhood, suburb].filter(Boolean).join(', ');
                }
                if(city_distric) {
                    addressLine2 = city_distric;
                }
                if(county) {
                    city = county;
                }
                if(state_district) {
                    state = state_district.replace(" District", "");
                }
                if(postcode) {
                    pincode = postcode;
                }
                console.log(addressLine1)
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
                AddressLine1: addressLine1,
                AddressLine2: addressLine2,
                city: city,
                state: state,
                pinCode: pincode
            }))
            .catch((error) => reject(error));
    });
}
