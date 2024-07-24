import { Meal } from "./data";

export function GetNewDate(offset = 1): Date {
  const weekStart: Date = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());

  const day = weekStart.setDate(weekStart.getDate() + offset);
  const date = new Date(day);
  return date;
}

export function GetParam(param: string) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param) || "";
}

export function StringToDate(dateString: string | Date) {
  return new Date(dateString);
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
    <a href="/details/?day=${weekday[new Date(meal.date).getDay()]}" class="week-day">
    ${
      meal.main.img
        ? `<img
          src="${meal.main.img}"
          alt="Image of ${meal.main.name}"
        />`
        : `<div class="img-placeholder"></div>`
    }

      <div>
      ${meal.main.id != 0 ? `<p>${StringToDate(meal.date).toDateString()}</p>` : "Select Meal..."}
  <h3> ${meal.main.name}</h3>
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
      src = "${item.img || item.image}"
      alt = "Image of ${item.name || item.title}"
    />
  <div>
  <p class="card-title" > ${item.name || item.title} </p>
    <a href = "${item.spoonacularSourceUrl}" > Recipe </a>
      </div>
        `;
  card.setAttribute("data-id", item.id);
  card.addEventListener(action, (evt) => callback(evt, card));
  return card;
};

export async function GetMealDetails(id: number) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}&includeNutrition=true`,
  );

  try {
    const json = await res.json();
    return json;
  } catch (e) {
    throw new Error("Not able to get data from API");
  }
}

export async function RecipeSearch(query: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${query}&addRecipeInformation=true&include-tags=dinner`,
  );

  const json = await res.json();
  return json;
}

export async function RandomRecipes(quantity: number) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=${quantity}&include-tags=dinner`,
  );

  const json = await res.json();
  console.log(res, json);
  return json;
}

export function getMeals(id: string) {
  const jsonString = window.localStorage.getItem(id);
  // @ts-ignore
  return JSON.parse(jsonString);
}

export function saveMeals(id: string, data: Meal) {
  const dataString = JSON.stringify(data);
  window.localStorage.setItem(id, dataString);
}
