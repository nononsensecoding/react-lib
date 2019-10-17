import { fillIntegerArray } from "./array";

describe("fillIntegerArray", () => {
  it("returns 10 items when given 10 length", () => {
    const expected = 10;
    const actual = fillIntegerArray(10).length;
    expect(actual).toEqual(expected);
  });

  it("returns 0 items when given 0 length", () => {
    const expected = 0;
    const actual = fillIntegerArray(0).length;
    expect(actual).toEqual(expected);
  });

  it("returns 1 items when given 1 length", () => {
    const expected = 1;
    const actual = fillIntegerArray(1).length;
    expect(actual).toEqual(expected);
  });
});
