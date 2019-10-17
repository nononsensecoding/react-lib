import { isValidEmail } from "./index";

describe("isValidEmail", () => {
  it("returns true when a valid email is supplied", () => {
    const expected = true;
    const actual = isValidEmail("terry@test.com");
    expect(actual).toEqual(expected);
  });

  it("returns false when an invalid email is supplied", () => {
    const expected = false;
    const actual = isValidEmail("terrytest.com");
    expect(actual).toEqual(expected);
  });
});
