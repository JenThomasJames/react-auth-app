export const validateNonEmpty = (input) => {
  if (input === "") return false;
  return true;
};

export const validateEmail = (input) => {
  const regexp = /\S+@\S+\.\S+/;
  return regexp.test(String(input).toLowerCase());
};

export const validatePassword = (input) => {
  if (input.length < 6) return false;
  return true;
};

export const isEqual = (input1, input2) => {
  if (input1 !== input2) return false;
  return true;
};
