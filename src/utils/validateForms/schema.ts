import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'Name should contain only alphabetic characters'),
  email: yup
    .string()
    .required()
    .email('Invalid email. It should be in the format xxx@xxx.xx')
    .test(
      'no-leading-or-trailing-spaces',
      'Email should not have leading or trailing spaces',
      (value) => value.replace(/\s/g, '') === value,
    )
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Invalid email. It should be in the format xxx@xxx.xx',
    ),
  password: yup
    .string()
    .required('Field is required')
    .matches(
      /[a-z]/,
      'Password should contain at least one lowercase letter (a-z)',
    )
    .matches(
      /[A-Z]/,
      'Password should contain at least one uppercase letter (A-Z)',
    )
    .matches(/[0-9]/, 'Password should contain at least one digit (0-9)')
    .matches(
      /[^a-zA-Z0-9]/,
      'Password should contain at least one special character',
    )
    .min(8, 'Password should be at least 8 characters long')
    .test(
      'no-leading-or-trailing-spaces',
      'Password should not have leading or trailing spaces',
      (value) => value.replace(/\s/g, '') === value,
    ),
});
