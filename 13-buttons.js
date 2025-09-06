const div = document.querySelector(".buttons");
const counter = document.querySelector(".counter");
let clicksCount = 0;

for(let i = 0; i < 5; i++) {
    const button = document.createElement("button");
    button.textContent = 'Нажми меня';
    div.append(button)
}

div.addEventListener("click", (e) => {
   for(let button of div.children) {
    button.textContent = "Нажми меня"
   }
    e.target.textContent = 'Нажата!';
    clicksCount += 1;
    counter.textContent = `${clicksCount}`
})