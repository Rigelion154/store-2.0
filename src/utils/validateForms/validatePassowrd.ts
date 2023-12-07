export const validatePassword = (password: string) => {
  const errors: string[] = [];

  if (password.replace(/\s/g, '') !== password) {
    errors.push('Password should not have leading or trailing spaces');
  }

  if (password.trim().length < 8) {
    errors.push('Password should be at least 8 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password should contain at least one uppercase letter (A-Z)');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password should contain at least one lowercase letter (a-z)');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password should contain at least one digit (0-9)');
  }

  if (!/[^a-zA-Z0-9]/.test(password)) {
    errors.push('Password should contain at least one special character');
  }

  if (password.length === 0) errors.length = 0;

  return errors;
};
