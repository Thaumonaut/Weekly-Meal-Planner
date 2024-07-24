import { getEmptyMeal, Meal } from "./data";
import { MealCardTemplate, weekday, getMeals, saveMeals } from "./utils";

const CreateWeekDayCard = function (meal: Meal) {
  return `
  <li>
    <h3>${weekday[new Date(meal.date).getDay()]}</h3>
    <span class="">${new Date(meal.date).toLocaleDateString()}</span>
    ${MealCardTemplate(meal)}
  </li>
  `;
};

function init() {
  const mealGrid = document.querySelector(".week-grid");
  const clearButton = document.querySelector(".clear");

  clearButton?.addEventListener("click", ()=>{
    mealGrid!.innerHTML = "";
    for (let i = 0; i < 7; i++) {
      const day = weekday[i].toLowerCase();
      data[day] = getEmptyMeal(i);
      mealGrid!.innerHTML += CreateWeekDayCard(data[day]);
    }
    saveMeals("wmp", data)
  })

  const data = getMeals("wmp") || {};
  for (let i = 0; i < 7; i++) {
    const day = weekday[i].toLowerCase();
    if (!data[day]) data[day] = getEmptyMeal(i);
    mealGrid!.innerHTML += CreateWeekDayCard(data[day]);
  }
  console.log(data);
  document.querySelectorAll(".week-day > a").forEach((day) =>
    day.addEventListener("click", (e: any) => {
      e.preventDefault;
      console.log("click");
    }),
  );
}

init();
