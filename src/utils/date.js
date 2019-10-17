import { fillIntegerArray } from "./array";

/**
 * Year is the full 4-digit year
 * Month is 0-indexed (0 = Jan, 11 = Dec)
 */
export const getDaysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

export const getDaysInMonthArray = (year, month) =>
  fillIntegerArray(getDaysInMonth(year, month));

export const addMonths = (date, months = 0) => {
  return new Date(date.getFullYear(), date.getMonth() + months, date.getDate());
};

export const getDayOfWeekName = date => date.toDateString().split(" ")[0];

export const getFirstDayOfMonth = (year, month) =>
  new Date(year, month, 1).getDay();
