const chooseForm = (num, form1, form2, formMany) => {
  const module = num % 10;
  const bigModule = num % 100;

  if (bigModule > 10 && bigModule < 20) {
    return formMany;
  } else if (module === 1) {
    return form1;
  } else if ([2, 3, 4].includes(module)) {
    return form2;
  } else return formMany;
};

const newYearTimer = () => {
  const newYear = new Date(2026, 0, 1);
  const now = new Date();

  const timer = new Intl.DateTimeFormat("ru", {
    minute: "numeric",
    second: "numeric",
  });

  const timerData = timer.formatToParts(newYear.getTime() - now.getTime());

  const monthsLeft = 11 - now.getMonth();

  const dayMax = [0, 2, 4, 6, 7, 9, 11].includes(now.getMonth())
    ? 31
    : now.getMonth() === 1
    ? 28
    : 30;

  const daysLeft = dayMax - now.getDate();
  const hoursLeft = 23 - now.getHours();
  const minutesLeft = Number(timerData[0].value);
  const secondsLeft = Number(timerData[2].value);

  return `${monthsLeft} ${chooseForm(
    monthsLeft,
    "месяц",
    "месяца",
    "месяцев"
  )}, ${daysLeft} ${chooseForm(
    daysLeft,
    "день",
    "дня",
    "дней"
  )}, ${hoursLeft} ${chooseForm(
    hoursLeft,
    "час",
    "часа",
    "часов"
  )}, ${minutesLeft} ${chooseForm(
    minutesLeft,
    "минута",
    "минуты",
    "минут"
  )}, ${secondsLeft} ${chooseForm(
    secondsLeft,
    "секунда",
    "секунды",
    "секунд"
  )}`;
};

const timer = document.createElement("h1");
document.body.appendChild(timer);

const interval = setInterval(() => {
  timer.textContent = newYearTimer();
}, 1000);