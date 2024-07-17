import { Meal } from "./data";

export function GetNewDate(offset = 1): Date {
  const weekStart: Date = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());

  const day = weekStart.setDate(weekStart.getDate() + offset);
  const date = new Date(day);
  return date;
}

export const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const MealCardTemplate = function (meal: Meal) {
  return `
    <a href="details/?day=${weekday[new Date(meal.date).getDay()]}" class="week-day card">
      <img
        src="${meal.main.img}"
        alt="Image of ${meal.main.name}"
      />
      <div>
        <h3><span>Main: </span>${meal.main.name}</h3>
        <p>Sides:</p>
        <ul>
          ${meal.side.map((side: string) => `<li>${side}</li>`).join("")}
        </ul>
      </div>
    </a>
  `;
};

export const CardTemplate = function (
  item: any,
  callback: any,
  action = "click",
) {
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `
    <img
      src="${item.img}"
      alt="Image of ${item.name}"
    />
    <div>
      <h3><span>Name: </span>${item.name}</h3>
      <p>${item.calories}</p>
    </div>
  `;
  card.setAttribute("data-id", item.id);
  card.addEventListener(action, (evt) => callback(evt, card));
  return card;
};

export function getMeals(id: string) {
  const jsonString = window.localStorage.getItem(id);
  return JSON.parse(jsonString);
}

export function saveMeals(id: string, data: Meal) {
  const dataString = JSON.stringify(data);
  window.localStorage.setItem(id, dataString);
}
