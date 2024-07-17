import { GetNewDate } from "./utils";

export type Meal = {
  date: Date;
  main: {
    name: string;
    img: string;
  };
  side: string[];
};

export const weekStart: Date = new Date();
weekStart.setDate(weekStart.getDate() - weekStart.getDay());

export const getEmptyMeal = function (day: number): Meal {
  return {
    date: GetNewDate(weekStart, day),
    main: {
      name: "",
      img: "",
    },
    side: [],
  };
};

export const Meals: { [key: string]: Meal } = {
  friday: {
    date: GetNewDate(weekStart, 5),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
  tuesday: {
    date: GetNewDate(weekStart, 2),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
};

export const Recipes = [
  {
    name: "Test Object 1",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    name: "Test Object 2",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    name: "Test Object 3",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    name: "Test Object 4",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    name: "Test Object 5",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    name: "Test Object 6",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    name: "Test Object 7",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    name: "Test Object 8",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    name: "Test Object 9",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
];
