const request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
request.send();

request.addEventListener("load", function () {
  const { abilities } = JSON.parse(this.responseText);

  const request2 = new XMLHttpRequest();
  request2.open("GET", abilities[0].ability.url);
  request2.send();

  request2.addEventListener("load", function () {
    const { flavor_text_entries } = JSON.parse(this.responseText);
    const englishText = flavor_text_entries
      .filter((item) => item.language.name === "en")
      .map((item) => {
        let res = item.flavor_text.slice(0, item.flavor_text.length - 1);
        res = res.split("\n").join(" ");
        return res;
      });
      
    const uniqueEnglishTexts = Array.from(new Set(englishText));

    uniqueEnglishTexts.forEach((item, index) =>
      console.log(`${index + 1}. ${item}`)
    );
  });
});
