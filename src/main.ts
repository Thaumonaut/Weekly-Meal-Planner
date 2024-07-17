import { getEmptyMeal, Meal, Meals } from "./data";
import { MealCardTemplate, weekday } from "./utils";

const CreateWeekDayCard = function (meal: Meal) {
  return `
  <li class="">
    <h3>${weekday[meal.date.getDay()]}</h3>
    <span class="">${meal.date.toLocaleDateString()}</span>
    ${MealCardTemplate(meal)}
  </li>
  `;
};

function init() {
  const mealGrid = document.querySelector(".week-grid");
  const data = Meals || {};
  for (let i = 0; i < 7; i++) {
    const day = weekday[i].toLowerCase();
    if (!Meals[day]) data[day] = getEmptyMeal(i);

    mealGrid!.innerHTML += CreateWeekDayCard(Meals[day]);
  }
  document.querySelectorAll(".week-day > a").forEach((day) =>
    day.addEventListener("click", (e) => {
      e.preventDefault;
      console.log("click");
    }),
  );
}

init();
