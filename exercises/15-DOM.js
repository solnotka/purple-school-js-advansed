const wrapper = document.querySelector(".wrapper");

const input = document.querySelector("input");

for (let i = 0; i < 18; i++) {
  const div = document.createElement("div");
  div.textContent = `Элемент № ${i}`;
  div.className = "example";
  wrapper.append(div);
}

wrapper.addEventListener("change", (e) => {
    for (let div of wrapper.children) {
    if (Array.from(div.classList).includes("example")) {
        div.style.color = "white";
        if (div.textContent.includes(e.target.value)) {
        div.style.color = "yellow";
      }
    }
  }
});
