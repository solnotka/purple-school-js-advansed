function getActivitiesList(el, arr) {
    el.innerHTML = `<ol>${arr.map((item) => {
      return `<li>${item}</li>`;
    })}</ol>`;
}
const button = document.querySelector(".boring");

button.addEventListener("click", async () => {
  const response = Promise.all([
    await fetch("https://bored.api.lewagon.com/api/activity").then((res) =>
      res.json()
    ),
    await fetch("https://bored.api.lewagon.com/api/activity").then((res) =>
      res.json()
    ),
    await fetch("https://bored.api.lewagon.com/api/activity").then((res) =>
      res.json()
    ),
  ]);

  let proposals = await response.then((res) => Array.from(res));
  proposals = proposals.map((item) => item.activity);

  if (!document.querySelector(".activities")) {
    let activities = document.createElement("div");
    document.body.appendChild(activities);
    activities.classList.add("activities");
    getActivitiesList(activities, proposals);
    
  } else {
    let activities = document.querySelector(".activities");
    getActivitiesList(activities, proposals);
  }
});
