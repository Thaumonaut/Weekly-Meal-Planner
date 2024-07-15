document.querySelector(".confirm").addEventListener("click", (evt) => {
  evt.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const day = params.get("day");

  const element = evt.target;
  element.attributes.href = "/details/?day=" + day;
  console.log(element.attributes.href);

  window.open("/details/?day=" + day, "_self");
});

document.querySelectorAll(".card").forEach((result) => {
  result.addEventListener("click", (e) => {
    const selected = document.querySelector(".selected");
    console.log();
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
      document.querySelector(".selection").innerHTML = "Nothing Selected";
      return;
    }
    selected ? selected.classList.remove("selected") : selected;
    result.classList.add("selected");
    document.querySelector(".selection").innerHTML = result.innerHTML;
  });
});
