export const validateEmail = (email: string) => {
  const errors: string[] = [];

  // if (!email.trim()) {
  //   errors.push('Name is required');
  // }

  if (email.replace(/\s/g, '') !== email) {
    errors.push('Password should not have leading or trailing spaces');
  }

  if (email.trim() !== email) {
    errors.push('Email should not have leading or trailing spaces');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Invalid email');
  }

  if (email.length === 0) {
    errors.length = 0;
  }

  return errors;
};
