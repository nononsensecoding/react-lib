export const isFormValid = fields => {
  const allFields = Object.values(fields);
  const validFields = allFields.filter(obj => obj.isValid);
  return validFields.length && validFields.length === allFields.length;
};

export const isFormInvalid = fields => {
  const allFields = Object.values(fields);
  const invalidFields = allFields.filter(obj => obj.isInvalid);
  return invalidFields.length;
};

export const isValidEmail = val => val.includes("@");

export const isValidUsername = val => isValidEmail(val) && val.length > 8;
