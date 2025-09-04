function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function getCity() {
  try {
    const res = await getGeolocation();
    const { latitude, longitude } = res.coords
    console.log(latitude, longitude);

    const bigDataResponse = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
      if (!bigDataResponse.ok) {
        throw new Error(bigDataResponse.status);
      }
    const data = await bigDataResponse.json();
    console.log(data.city, data.locality)

  } catch (e) {
    console.error(e.message);
  } finally {
    console.log("Больше можно не ждать");
  }
}

getCity();

console.log("connection");
