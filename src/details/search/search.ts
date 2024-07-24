import { getEmptyMeal } from "../../data";
import {
  CardTemplate,
  GetNewDate,
  weekday,
  saveMeals,
  getMeals,
  RecipeSearch,
  RandomRecipes,
  GetParam,
} from "../../utils";

let selectedItem = getEmptyMeal(weekday.indexOf(GetParam("day")));
let results: any = [];
const searchInput = document.querySelector("#search");

searchInput?.addEventListener("keydown", (e: any) => {
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

  const day = GetParam("day")
  
  let data = getMeals("wmp") || {};
  
  // console.log(selectedItem.id)

  data[day?.toLowerCase()] = {
    date: GetNewDate(weekday.indexOf(day)),
    main: {
      // @ts-ignore
      id: selectedItem.id || selectedItem.main.id,
      // @ts-ignore
      name: selectedItem.title || selectedItem.main.name,
      // @ts-ignore
      img: selectedItem.image || selectedItem.main.img,
    },
  };
  console.log(data)

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

function CreateItemCards(selector: string, data: any) {
  const parentObject = document.querySelector(selector);
  const html = data.map((data: any) => CardTemplate(data, SelectCard));
  parentObject!.innerHTML = "";
  html.forEach((element: any) => {
    parentObject?.appendChild(element);
  });
}

// @ts-ignore
const SelectCard = function (e: any, result: any) {
  const selected = document.querySelector(".selected");
  if (result.classList.contains("selected")) {
    result.classList.remove("selected");
    document.querySelector(".selection")!.innerHTML = "Nothing Selected";
    const index: number = weekday.indexOf(GetParam('day'))
    selectedItem = getEmptyMeal(index);
    console.log(selectedItem)
    return;
  }
  selected ? selected.classList.remove("selected") : selected;
  result.classList.add("selected");
  document.querySelector(".selection")!.innerHTML = result.innerHTML;

  const id: number = result!.getAttribute("data-id") || 0;
  const index = results!.findIndex((item: any) => item.id == id);
  selectedItem = results![index];
};
