"use strict";

const daySelect = document.querySelector("#day"),
  monthSelect = document.querySelector("#month"),
  yearSelect = document.querySelector("#year"),
  button = document.querySelector(".button"),
  result = document.querySelector(".result");

let countAge = () => {
  let nowDate = new Date(),
    userYear = yearSelect.value,
    userMonth = monthSelect.value,
    userDay = daySelect.value,
    birthdayDate = new Date(userYear, userMonth, userDay),
    nowYear = new Date().getFullYear(),
    nowUseYear = birthdayDate.getFullYear(),
    ageYear = nowYear - nowUseYear;

  if (nowDate.getMonth() + 1 < birthdayDate.getMonth()) {
    ageYear = ageYear - 1;
  } else {
    if (
      nowDate.getMonth() + 1 === birthdayDate.getMonth() &&
      nowDate.getDate() < birthdayDate.getDate()
    ) {
      ageYear = ageYear - 1;
    }
  }
  result.textContent = ageYear;
};

button.addEventListener("click", countAge);
