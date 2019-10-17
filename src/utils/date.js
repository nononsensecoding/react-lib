import { fillIntegerArray } from "./array";

/**
 * Year is the full 4-digit year
 * Month is 0-indexed (0 = Jan, 11 = Dec)
 */
export const getDaysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

export const getDaysInMonthArray = (year, month) =>
  fillIntegerArray(getDaysInMonth(year, month));

export const incrementMonth = date => {
  if (date.getMonth() === 11) {
    new Date(date.getFullYear() + 1, 0, 1);
  }

  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
};

export const decrementMonth = date => {
  if (date.getMonth() === 0) {
    new Date(date.getFullYear() - 1, 11, 1);
  }

  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
};
