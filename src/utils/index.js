export const isValidEmail = val => val.includes("@");
export const isValidUsername = val => isValidEmail && val.length > 8;
