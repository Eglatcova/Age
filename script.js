"use strict";

const daySelect = document.querySelector("#day"),
  monthSelect = document.querySelector("#month"),
  yearSelect = document.querySelector("#year"),
  button = document.querySelector(".button"),
  result = document.querySelector(".result");

class userAge {
  constructor() {}

  static countAge(userYear, userMonth, userDay) {
    let nowDate = new Date(),
      birthdayDate = new Date(userYear, userMonth, userDay),
      nowYear = new Date().getFullYear(),
      nowUseYear = birthdayDate.getFullYear(),
      ageYear = nowYear - nowUseYear;
    if (
      nowDate.getMonth() + 1 < birthdayDate.getMonth() ||
      (nowDate.getMonth() + 1 === birthdayDate.getMonth() &&
        nowDate.getDate() < birthdayDate.getDate())
    ) {
      ageYear = ageYear - 1;
    }
    return ageYear;
  }

  static ageWord(age) {
    let lastNumber = age % 10;
    if (age > 10 && age < 20) {
      return "лет";
    }
    switch (lastNumber) {
      case 0:
        return "лет";
      case 1:
        return "год";
      case 2:
      case 3:
      case 4:
        return "года";
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        return "лет";
    }
  }
}

const showAge = () => {
  result.textContent =
    userAge.countAge(1998, 5, 23) +
    " " +
    userAge.ageWord(userAge.countAge(1998, 5, 23));
};

button.addEventListener("click", showAge);
