import { Recipes } from "../../data";
import { CardTemplate } from "../../utils";

document.querySelector(".confirm")!.addEventListener("click", (evt) => {
  evt.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const day = params.get("day");

  const element = evt.target;
  element!.attributes!.href = "/details/?day=" + day;
  console.log(element!.attributes.href);

  window.open("/details/?day=" + day, "_self");
});

const searchButton = document.querySelector(".search-button");

searchButton!.addEventListener("click", () => {
  CreateFakeData(".search-results");
});

window.addEventListener("load", () => {
  CreateFakeData(".suggestions-list");
});

function CreateFakeData(selector: string) {
  const parentObject = document.querySelector(selector);
  const html = Recipes.map((data) => CardTemplate(data, "click", SelectCard));
  html.forEach((element) => {
    parentObject?.appendChild(element);
  });
}

const SelectCard = function (e: any, result: any) {
  console.log(e, result);
  const selected = document.querySelector(".selected");
  console.log();
  if (e.target.classList.contains("selected")) {
    e.target.classList.remove("selected");
    document.querySelector(".selection")!.innerHTML = "Nothing Selected";
    return;
  }
  selected ? selected.classList.remove("selected") : selected;
  result.classList.add("selected");
  document.querySelector(".selection")!.innerHTML = result.innerHTML;
};
