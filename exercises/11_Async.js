const request = new XMLHttpRequest();
request.open("GET", "https://dummyjson.com/products");
request.send();

request.addEventListener("load", function () {
  data = JSON.parse(this.responseText)["products"];
});

setTimeout(() => {
  const totalPrice = data.reduce((cum, cur) => cum + cur["price"], 0);
  const averagePrice = Math.round(totalPrice / data.length * 100) / 100
  console.log(averagePrice)
  
}, 2000);
