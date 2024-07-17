import type { Meal } from "./data";
import { getEmptyMeal, Meals, weekday } from "./data";

const MealCardTemplate = function (meal: Meal) {
  return `
  <li>
    <h3>${weekday[meal.date.getDay()]}</h3>
    <span class="">${meal.date.toLocaleDateString()}</span>
    <a  href="details/?day=${weekday[meal.date.getDay()]}" class="week-day">
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
  </li>
  `;
};

function init() {
  const mealGrid = document.querySelector(".week-grid");
  const data = Meals || {};
  for (let i = 0; i < 7; i++) {
    const day = weekday[i].toLowerCase();
    if (!Meals[day]) data[day] = getEmptyMeal(i);

    mealGrid!.innerHTML += MealCardTemplate(Meals[day]);
  }
  document.querySelectorAll(".week-day > a").forEach((day) =>
    day.addEventListener("click", (e) => {
      e.preventDefault;
      console.log("click");
    }),
  );
}

init();
