import { $dataApi } from '../../axios/dataApi';

export const UserSignUp = async (
  firstName: string,
  email: string,
  password: string,
) => {
  const data = { firstName, email, password };
  await $dataApi.post('me/signup', data);
};
