import type { Meal } from "./data";
import { emptyMeal, getEmptyMeal, Meals, weekday } from "./data";

const MealCardTemplate = function (meal: Meal) {
  return `
  <a  href="details/?day=${weekday[meal.date.getDay()]}" class="week-day">
    <img
      src="${meal.main.img}"
      alt="Image of ${meal.main.name}"
    />
    <div>
      <h3>${weekday[meal.date.getDay()]}</h3>
      <span class="meal-date">${meal.date.toLocaleDateString()}</span>
      <p><span>Main: </span>${meal.main.name}</p>
      <p>Sides:</p>
      <ul>
        ${meal.side.map((side: string) => `<li>${side}</li>`).join("")}
      </ul>
    </div>
  </a>
  `;
};

function init() {
  const mealGrid = document.querySelector(".week-grid");
  const mealList = Object.entries(Meals);
  for (let i = 0; i < 7; i++) {
    if (!mealList[i]) mealList[i] = [weekday[i], getEmptyMeal(i)];
  }
  mealGrid!.innerHTML = mealList
    .map(([_, meal]) => MealCardTemplate(meal))
    .join("");
  document.querySelectorAll(".week-day > a").forEach((day) =>
    day.addEventListener("click", (e) => {
      e.preventDefault;

      console.log("click");
    }),
  );
}

init();
