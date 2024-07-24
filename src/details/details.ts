import { getEmptyMeal, Meal } from "../data";
import { GetMealDetails, getMeals, StringToDate, weekday } from "../utils";

async function fillDetails() {
  const info = document.querySelector(".details-info");
  const button = document.querySelector(".confirm");
  const data: Meal = getData();

  button?.addEventListener("click", (e: any) => {
    e.preventDefault;
    window.open("/", "_self");
  });

  const img = document.querySelector(".details-img");
  img?.setAttribute("src", data.main.img);
  if (data.main.img) img?.setAttribute("alt", "Image of " + data.main.name);

  info!.innerHTML = `
      <h2>Meal:</h2>
      ${
        data.main.name
          ? `<a href="search/?day=${getParam("day")}">Change Meal</a><ul><li>${data.main.name}</li></ul>`
          : ` <a href = "search/?day=${getParam("day")}" > Add Meal </a>`
      }`;

  if (data.main.name) {
    info!.innerHTML += await CreateDetailsSection(data);
  }
}

function getParam(param: string) {
  const searchString = window.location.search;
  const params = new URLSearchParams(searchString);
  return params.get(param);
}

async function CreateDetailsSection(data: any) {
  try {
    const details = await GetMealDetails(data.main.id);
    return `<h2>Details</h2>
      <a href="${details.sourceUrl}"> Source </a>
      <h3>Description</h3>
      <p>${details.summary}</p>
      <h3>Ingredients</h3>
      <ul style="list-style: disc; padding-left: 1.5rem;">
      ${
        details.extendedIngredients
          ? details.extendedIngredients
              .map((item: any) => {
                return `<li><p>${item.original}</p></li>`;
              })
              .join("")
          : ""
      }`;
  } catch (e: any) {
    return `<p>${e}</p>`;
  }
}

function getData(): Meal {
  const day = getParam("day")?.toLowerCase() || "";
  const data = getMeals("wmp") || {};
  const currentMeal = data[day];
  return currentMeal == undefined
    ? getEmptyMeal(weekday.indexOf(day))
    : currentMeal;
}

function displayDate() {
  const day = document.querySelector(".section-header");
  const date = document.querySelector(".section-subheader");

  day!.textContent = getParam("day");
  date!.textContent = StringToDate(getData().date).toLocaleDateString();
}

function init() {
  fillDetails();
  displayDate();
}

init();
