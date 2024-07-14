import type { Meal } from "./data";
import { Meals, weekday } from "./data";

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
  const mealList = document.querySelector(".week-grid");
  mealList!.innerHTML = Meals.map((meal) => MealCardTemplate(meal)).join("");
  document.querySelectorAll(".week-day > a").forEach((day) =>
    day.addEventListener("click", (e) => {
      e.preventDefault;

      console.log("click");
    }),
  );
}

init();
