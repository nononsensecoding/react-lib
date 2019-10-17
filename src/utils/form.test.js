import { isFormValid, isFormInvalid } from "./form";

describe("isFormValid", () => {
  it("returns true when all fields are valid", () => {
    const expected = true;
    const actual = isFormValid({
      field1: { isValid: true },
      field2: { isValid: true },
      field3: { isValid: true }
    });
    expect(actual).toEqual(expected);
  });

  it("returns false when one field is not valid", () => {
    const expected = false;
    const actual = isFormValid({
      field1: { isValid: true },
      field2: { isValid: false },
      field3: { isValid: true }
    });
    expect(actual).toEqual(expected);
  });

  it("returns false when more than one field is not valid", () => {
    const expected = false;
    const actual = isFormValid({
      field1: { isValid: true },
      field2: { isValid: false },
      field3: { isValid: false }
    });
    expect(actual).toEqual(expected);
  });
});

describe("isFormInvalid", () => {
  it("returns false when no fields are invalid", () => {
    const expected = false;
    const actual = isFormInvalid({
      field1: { isInvalid: false },
      field2: { isInvalid: false },
      field3: { isInvalid: false }
    });
    expect(actual).toEqual(expected);
  });

  it("returns true when one field is invalid", () => {
    const expected = true;
    const actual = isFormInvalid({
      field1: { isInvalid: true },
      field2: { isInvalid: false },
      field3: { isInvalid: false }
    });
    expect(actual).toEqual(expected);
  });

  it("returns true when more than one field is invalid", () => {
    const expected = true;
    const actual = isFormInvalid({
      field1: { isInvalid: true },
      field2: { isInvalid: false },
      field3: { isInvalid: true }
    });
    expect(actual).toEqual(expected);
  });
});
