import { Meals, Recipes } from "../../data";
import {
  CardTemplate,
  GetNewDate,
  weekday,
  saveMeals,
  getMeals,
} from "../../utils";

let selectedItem = {};

document.querySelector(".confirm")!.addEventListener("click", (evt) => {
  evt.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const day = params.get("day") || "";

  let data = getMeals("wmp") || {};

  data[day?.toLowerCase()] = {
    date: GetNewDate(weekday.indexOf(day)),
    main: {
      name: selectedItem.name,
      img: selectedItem.img,
    },
    side: [],
  };

  saveMeals("wmp", data);

  window.open("/details/?day=" + day, "_self");
});

document.querySelector(".search-button")!.addEventListener("click", () => {
  CreateFakeData(".search-results");
});

window.addEventListener("load", () => {
  CreateFakeData(".suggestions-list");
});

function CreateFakeData(selector: string) {
  const parentObject = document.querySelector(selector);
  const html = Recipes.map((data) => CardTemplate(data, SelectCard));
  html.forEach((element) => {
    parentObject?.appendChild(element);
  });
}

const SelectCard = function (e, result: any) {
  const selected = document.querySelector(".selected");
  if (e.target.classList.contains("selected")) {
    e.target.classList.remove("selected");
    document.querySelector(".selection")!.innerHTML = "Nothing Selected";
    return;
  }
  selected ? selected.classList.remove("selected") : selected;
  result.classList.add("selected");
  document.querySelector(".selection")!.innerHTML = result.innerHTML;

  const id: number = result!.getAttribute("data-id") || 0;
  const index = Recipes.findIndex(item => item.id == id)
  selectedItem = Recipes[index];

  console.log(selectedItem, index);
};
