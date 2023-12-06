export const validateNames = (name: string) => {
  const errors: string[] = [];

  if (!/^[a-zA-Z]+$/.test(name)) {
    errors.push('Name should contain only alphabetic characters');
  }

  if (name.length === 0) {
    errors.length = 0;
  }

  return errors;
};
