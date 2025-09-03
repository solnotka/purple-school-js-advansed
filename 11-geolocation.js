function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

getGeolocation()
  .then((res) => {
    console.log(`Latitude: ${Math.round(res.coords.latitude * 1000) / 1000}`);
    console.log(`Longitude: ${Math.round(res.coords.longitude * 1000) / 1000}`);
    console.log(`accuracy: ${Math.round(res.coords.accuracy * 1000) / 1000}`);
  })
  .catch((err) => console.error(`Error: ${err.message}`));
