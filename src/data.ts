import { GetNewDate } from "./utils";

export type Meal = {
  date: Date;
  main: {
    id: number;
    name: string;
    img: string;
  };
};

export const getEmptyMeal = function (day: number): Meal {
  return {
    date: GetNewDate(day),
    main: {
      id: 0,
      name: "",
      img: "",
    },
  };
};
