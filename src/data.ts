export type Meal = {
  date: Date;
  main: {
    name: string;
    img: string;
  };
  side: string[];
};

const weekStart: Date = new Date();
weekStart.setDate(weekStart.getDate() - weekStart.getDay());

console.log(weekStart.toLocaleString());

function GetNewDate(start: Date, offset = 1): Date {
  const startDate: Date = new Date(start.toDateString());
  const day = startDate.setDate(startDate.getDate() + offset);
  const date = new Date(day);
  return date;
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

export const Meals: Meal[] = [
  {
    date: GetNewDate(weekStart, 0),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
  {
    date: GetNewDate(weekStart),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
  {
    date: GetNewDate(weekStart, 2),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
  {
    date: GetNewDate(weekStart, 3),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
  {
    date: GetNewDate(weekStart, 4),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
  {
    date: GetNewDate(weekStart, 5),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
  {
    date: GetNewDate(weekStart, 6),
    main: {
      name: "Chicken Dinner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    side: ["Broccoli", "Fruit Salad", "Mashed Potato"],
  },
];
