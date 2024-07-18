import { getEmptyMeal, Meal } from "../data";
import { getMeals, weekday } from "../utils";

function fillDetails() {
  const info = document.querySelector(".details-info");
  const data: Meal = getData();

  const img = document.querySelector(".details-img");
  img?.setAttribute("src", data.main.img);
  if (data.main.img) img?.setAttribute("alt", "Image of " + data.main.name);

  info!.innerHTML = `
    <div class="relative">
      <h2>Main Dish:</h2>
      <a href="search/?for=meal&day=${getParam("day")}">edit</a>
      <ul>
        <li>${data.main.name}</li>
      </ul>
    </div>
    <div class="relative">
      <h2>Side Dishes:</h2>
      <a href="search/?for=side&day=${getParam("day")}">edit</a>
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

function getData(): Meal {
  const day = getParam("day")?.toLowerCase() || "";
  const data = getMeals("wmp");
  const currentMeal = data[day];
  return currentMeal == undefined
    ? getEmptyMeal(weekday.indexOf(day))
    : currentMeal;
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
