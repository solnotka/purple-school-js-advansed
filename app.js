"use strict";

function checkAge(birthday) {
  const userBirthday = new Date(birthday);
  const now = new Date();

  let assumedAge = now.getFullYear() - userBirthday.getFullYear();

  if (userBirthday.getMonth() > now.getMonth() 
    || (userBirthday.getMonth() === now.getMonth() && userBirthday.getDate() > now.getDate())) {
    assumedAge -= 1;
  }

  return assumedAge >= 14 ? true : false;
}


console.log("18 ноября 1986: ", checkAge("1986-11-18"));
console.log("08 августа 2018: ", checkAge("2018-08-08"));
console.log("08 августа 2025: ", checkAge("2025-08-08"));
console.log("23 августа 2024: ", checkAge("2024-08-23"));
console.log("22 августа 2011: ", checkAge("2011-08-21"));
