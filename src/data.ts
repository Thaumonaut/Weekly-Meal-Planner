import { GetNewDate } from "./utils";

export type Meal = {
  date: Date;
  main: {
    name: string;
    img: string;
  };
  side: string[];
};

export const getEmptyMeal = function (day: number): Meal {
  return {
    date: GetNewDate(day),
    main: {
      name: "",
      img: "",
    },
    side: [],
  };
};

export const Meals: { [key: string]: Meal } = {
  friday: {
    date: GetNewDate(5),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
  tuesday: {
    date: GetNewDate(2),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
};

export const Recipes = [
  {
    id: 1,
    name: "Test Object 1",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    id: 2,
    name: "Test Object 2",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    id: 3,
    name: "Test Object 3",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    id: 4,
    name: "Test Object 4",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    id: 5,
    name: "Test Object 5",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    id: 6,
    name: "Test Object 6",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    id: 7,
    name: "Test Object 7",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    id: 8,
    name: "Test Object 8",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    id: 9,
    name: "Test Object 9",
    calories: Math.floor(Math.random() * 500),
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
];
