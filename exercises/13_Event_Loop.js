// function myFetch(url) {
//   const { resolve, reject, promise } = Promise.withResolvers();

//   const request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.send();

//   request.addEventListener("load", function () {
//     resolve(JSON.parse(this.responseText));
//   });

//   return promise;
// }

function myFetch(url) {
  const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.addEventListener("load", function () {
      resolve(JSON.parse(this.responseText));
    });

    request.addEventListener("error", function () {
      reject(new Error(this.status));
    });

    request.addEventListener("timeout", function () {
      reject(new Error("Timeout"));
    });
  });

  return promise;
}

myFetch("https://dummyjson.com/products")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
