import { getEmptyMeal, Recipes } from "../../data";
import {
  CardTemplate,
  GetNewDate,
  weekday,
  saveMeals,
  getMeals,
  RecipeSearch,
  RandomRecipes,
} from "../../utils";

let selectedItem = {};
let results: any = [];
const searchInput = document.querySelector("#search");

searchInput?.addEventListener("keydown", (e) => {
  // @ts-ignore
  if (e.key == "Enter") {
    Search();
  }
});

async function Search() {
  // @ts-ignore
  let data = await RecipeSearch(searchInput!.value);
  data = data.results;

  results = results.concat(data);
  console.log(results);

  CreateItemCards(".search-results", data);
}

function SaveMeal(evt: any) {
  evt.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const day = params.get("day") || "";

  let data = getMeals("wmp") || {};

  data[day?.toLowerCase()] = {
    date: GetNewDate(weekday.indexOf(day)),
    main: {
      // @ts-ignore
      name: selectedItem.title,
      // @ts-ignore
      img: selectedItem.image,
    },
    side: [],
  };

  saveMeals("wmp", data);

  window.open("/details/?day=" + day, "_self");
}

document.querySelector(".confirm")!.addEventListener("click", SaveMeal);

document.querySelector(".search-button")!.addEventListener("click", () => {
  Search();
});

window.addEventListener("load", async () => {
  let random = await RandomRecipes(10);
  random = random.recipes;

  results = random;

  CreateItemCards(".suggestions-list", random);
});

function CreateItemCards(selector: string, data = Recipes) {
  const parentObject = document.querySelector(selector);
  const html = data.map((data) => CardTemplate(data, SelectCard));
  parentObject!.innerHTML = "";
  html.forEach((element) => {
    parentObject?.appendChild(element);
  });
}

const SelectCard = function (e: any, result: any) {
  const selected = document.querySelector(".selected");
  if (result.classList.contains("selected")) {
    result.classList.remove("selected");
    document.querySelector(".selection")!.innerHTML = "Nothing Selected";
    selectedItem = {}
    return;
  }
  selected ? selected.classList.remove("selected") : selected;
  result.classList.add("selected");
  document.querySelector(".selection")!.innerHTML = result.innerHTML;

  const id: number = result!.getAttribute("data-id") || 0;
  const index = results!.findIndex((item: any) => item.id == id);
  selectedItem = results![index];

  console.log(selectedItem, index);
};
