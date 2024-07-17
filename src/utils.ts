import { Meal } from "./data";

export function GetNewDate(start: Date, offset = 1): Date {
  const weekStart: Date = new Date(start.toDateString());
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
    <a href="details/?day=${weekday[meal.date.getDay()]}" class="week-day card">
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

export const CardTemplate = function (item: any, action: any, callback: any) {
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
  card.addEventListener("click", (evt) => callback(evt, card));
  return card;
};
