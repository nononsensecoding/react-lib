import {
  getDaysInMonth,
  getDaysInMonthArray,
  addMonths,
  getFirstDayOfMonth
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

describe("addMonths", () => {
  it("adds 0 months by default", () => {
    const expected = new Date(2019, 5, 1);
    const actual = addMonths(new Date(2019, 5, 1));
    expect(actual).toEqual(expected);
  });

  it("carries over to the next year", () => {
    const expected = new Date(2020, 0, 10);
    const actual = addMonths(new Date(2019, 11, 10), 1);
    expect(actual).toEqual(expected);
  });

  it("allows adding more than 12 months", () => {
    const expected = new Date(2021, 4, 10);
    const actual = addMonths(new Date(2019, 4, 10), 24);
    expect(actual).toEqual(expected);
  });

  it("allows subtracting months", () => {
    const expected = new Date(2019, 1, 10);
    const actual = addMonths(new Date(2019, 4, 10), -3);
    expect(actual).toEqual(expected);
  });

  it("allows subtracting more than 12 months", () => {
    const expected = new Date(2017, 4, 10);
    const actual = addMonths(new Date(2019, 4, 10), -24);
    expect(actual).toEqual(expected);
  });

  it("changes the date if current date is not valid for new month", () => {
    const expected = new Date(2019, 2, 3);
    const actual = addMonths(new Date(2019, 0, 31), 1);
    expect(actual).toEqual(expected);
  });
});

describe("getFirstDayOfMonth", () => {
  it("returns the indexed day of the week for the first day of the month", () => {
    const expected = 2;
    const actual = getFirstDayOfMonth(2019, 9);
    expect(actual).toEqual(expected);
  });

  it("return 0 (Monday) for Jan, 2021", () => {
    const expected = 3;
    const actual = getFirstDayOfMonth(2020, 0);
    expect(actual).toEqual(expected);
  });
});
