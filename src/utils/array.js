/**
 * Generate an array of integers up to the given length.
 * Each value in the array is index + 1.
 */
export const fillIntegerArray = length => {
  const result = [];
  for (let i = 1; i <= length; i++) {
    result.push(i);
  }
  return result;
};
