async function race(arr) {
  return new Promise((resolve, reject) => {
   for (let promise of arr) {
    let stop;
    promise.then(res => {
        resolve(res);
    }).catch(e => {
        reject(e)
    }).finally(
        stop = true
    )
    if(stop) break;
   }
  });
}

const products = race([
  fetch("https://dummyjson.com/products/10000"),
  fetch("https://dummyjson.com/products/20"),
  fetch("https://dummyjson.com/products/30"),
  fetch("https://dummyjson.com/products/40"),
  fetch("https://dummyjson.com/products/50"),
  fetch("https://dummyjson.com/products/60"),
  fetch("https://dummyjson.com/products/700"),
  fetch("https://dummyjson.com/products/80"),
  fetch("https://dummyjson.com/products/90"),
  fetch("https://dummyjson.com/products/100"),
]);

const productsOfBox = Promise.race([
  fetch("https://dummyjson.com/products/100000"),
  fetch("https://dummyjson.com/products/20"),
  fetch("https://dummyjson.com/products/30"),
  fetch("https://dummyjson.com/products/40"),
  fetch("https://dummyjson.com/products/50"),
  fetch("https://dummyjson.com/products/60"),
  fetch("https://dummyjson.com/products/700"),
  fetch("https://dummyjson.com/products/80"),
  fetch("https://dummyjson.com/products/90"),
  fetch("https://dummyjson.com/products/100"),
]);

console.log(products);
console.log(productsOfBox);
