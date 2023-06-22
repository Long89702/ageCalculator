import { isLeapYear } from "./year.js";

const form = document.querySelector("#result");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const daysResult = document.querySelector("#days-result");
const monthsResult = document.querySelector("#months-result");
const yearsResult = document.querySelector("#years-result");

const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

// console.log(typeof(Number.parseInt(day.value,10)))
// console.log(Number.parseInt(day.value,10))
// const calculateDd = () => {
// if (dd<day.value){

// }
// }

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let dayDuration = dd - Number.parseInt(day.value, 10);
  let monthDuration = mm - Number.parseInt(month.value, 10);
  let yearDuration = yyyy - Number.parseInt(year.value, 10);
  // console.log(dayDuration);
  // console.log(monthDuration);
  // console.log(yearDuration);

  if (monthDuration < 0 && dayDuration < 0) {
    yearDuration -= 1;
    monthDuration += 12;
    if (mm % 2 === 1) {
      dayDuration += 31;
    } else if (mm === 2 && !isLeapYear(yyyy)) {
      dayDuration += 28;
    } else if (mm === 2 && isLeapYear(yyyy)) {
      dayDuration += 29;
    } else {
      dayDuration += 30;
    } //console.log(dayDuration)
    daysResult.textContent = dayDuration;
    monthsResult.textContent = monthDuration;
    yearsResult.textContent = yearDuration;
  } else if (dayDuration < 0) {
    yearDuration-=1;
    if (mm % 2 === 1) {
      dayDuration += 31;
    } else if (mm === 2 && !isLeapYear(yyyy)) {
      dayDuration += 28;
    } else if (mm === 2 && isLeapYear(yyyy)) {
      dayDuration += 29;
    } else {
      dayDuration += 30;
    } //console.log(dayDuration)
    daysResult.textContent = dayDuration;
    monthsResult.textContent = monthDuration;
    yearsResult.textContent = yearDuration;
  } else if (monthDuration < 0) {
    yearDuration -= 1;
    monthDuration += 12;
    daysResult.textContent = dayDuration;
    monthsResult.textContent = monthDuration;
    yearsResult.textContent = yearDuration;
  } else{
    daysResult.textContent = dayDuration;
    monthsResult.textContent = monthDuration;
    yearsResult.textContent = yearDuration;
  }

});
