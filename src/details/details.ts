import { Meal, Meals, weekday } from "../data";

function fillDetails() {
  const info = document.querySelector(".details-info");
  const data: Meal = getData();

  info!.innerHTML = `
    <div class="relative">
      <h2>Main Dish:</h2>
      <a href="search/?for=meal&day=sunday">edit</a>
      <ul>
        <li>${data.main.name}</li>
      </ul>
    </div>
    <div class="relative">
      <h2>Side Dishes:</h2>
      <a href="search/?for=side&day=sunday">edit</a>
      <ul>
        ${data.side.map((side: string) => `<li>${side}</li>`).join("")}
      </ul>
    </div>
    `;
}

function getParam(param: string) {
  const searchString = window.location.search;
  const params = new URLSearchParams(searchString);
  return params.get(param);
}

function getIndex() {
  const day = getParam("day");
  return weekday.findIndex((d) => d == day);
}

function getData(): Meal {
  return Meals[getIndex()];
}

function displayDate() {
  const day = document.querySelector(".section-header");
  const date = document.querySelector(".section-subheader");

  day!.textContent = getParam("day");
  date!.textContent = getData().date.toLocaleDateString();
}

function init() {
  fillDetails();
  displayDate();
}

init();
