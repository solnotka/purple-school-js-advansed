fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(res => {
    return res.json();
  })
  .then(res => {
    const { abilities } = res;
    return fetch(abilities[0].ability.url);
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
    const { flavor_text_entries } = res;
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
  })
  .catch((err) => console.log(err));