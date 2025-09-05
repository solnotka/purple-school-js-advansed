async function race(arr) {
    return new Promise((resolve) => {
        Promise.all(arr.map(p => resolve(p)));
    })
    }

const products = race([
  fetch("https://dummyjson.com/products/1000"),
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
  fetch("https://dummyjson.com/products/1000"),
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