import {
  getDaysInMonth,
  getDaysInMonthArray,
  incrementMonth,
  decrementMonth
} from "./date";

describe("getDaysInMonth", () => {
  it("returns 31 for January", () => {
    const expected = 31;
    const actual = getDaysInMonth(2019, 0);
    expect(actual).toEqual(expected);
  });

  it("returns 30 for September", () => {
    const expected = 30;
    const actual = getDaysInMonth(2019, 8);
    expect(actual).toEqual(expected);
  });
});

describe("getDaysInMonthArray", () => {
  it("returns 31 items for January", () => {
    const expected = 31;
    const actual = getDaysInMonthArray(2019, 0).length;
    expect(actual).toEqual(expected);
  });

  it("returns 30 items for September", () => {
    const expected = 30;
    const actual = getDaysInMonthArray(2019, 8).length;
    expect(actual).toEqual(expected);
  });
});

describe("incrementMonth", () => {
  it("returns the first day of the next chronological month", () => {
    const expected = new Date(2019, 5, 1);
    const actual = incrementMonth(new Date(2019, 4, 10));
    expect(actual).toEqual(expected);
  });

  it("returns the first day of Jan for the next chronological year when month is December", () => {
    const expected = new Date(2020, 0, 1);
    const actual = incrementMonth(new Date(2019, 11, 10));
    expect(actual).toEqual(expected);
  });
});

describe("decrementMonth", () => {
  it("returns the first day of the previous chronological month", () => {
    const expected = new Date(2019, 3, 1);
    const actual = decrementMonth(new Date(2019, 4, 10));
    expect(actual).toEqual(expected);
  });

  it("returns the first day of Dec for the prev chronological year when month is Jan", () => {
    const expected = new Date(2019, 11, 1);
    const actual = decrementMonth(new Date(2020, 0, 10));
    expect(actual).toEqual(expected);
  });
});
