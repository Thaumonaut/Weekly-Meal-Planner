// import './style.css'

type Meal = {
  date: Date
  main: {
    name: string,
    img: string,
  }
  side: string[]
}

const meals: Meal[] = [
  {
    date: new Date("07/14/24"),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: [
      "Broccoli",
      "Fruit Salad",
      "Mashed Potato"
    ]
  },
  {
    date: new Date("07/15/24"),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: [
      "Broccoli",
      "Fruit Salad",
      "Mashed Potato"
    ]
  },
  {
    date: new Date("07/16/24"),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: [
      "Broccoli",
      "Fruit Salad",
      "Mashed Potato"
    ]
  },
  {
    date: new Date("07/17/24"),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: [
      "Broccoli",
      "Fruit Salad",
      "Mashed Potato"
    ]
  },
  {
    date: new Date("07/18/24"),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: [
      "Broccoli",
      "Fruit Salad",
      "Mashed Potato"
    ]
  },
  {
    date: new Date("07/19/24"),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: [
      "Broccoli",
      "Fruit Salad",
      "Mashed Potato"
    ]
  },
  {
    date: new Date("07/20/24"),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: [
      "Broccoli",
      "Fruit Salad",
      "Mashed Potato"
    ]
  },
]

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const MealCardTemplate = function(meal: Meal) {
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
        ${meal.side.map(side => `<li>${side}</li>`).join("")}
      </ul>
    </div>
  </a>
  `
}

function init() {
  const mealList = document.querySelector('.week-grid');
  mealList!.innerHTML = meals.map(meal => MealCardTemplate(meal)).join("")
  document.querySelectorAll(".week-day").forEach(day => day.addEventListener("click", (e)=>{
    e.preventDefault;

    console.log("click")
  }))
}

init();