import { createSlice } from '@reduxjs/toolkit';
import { userSignIn } from '../../services/Auth/userSignIn';

export interface UserState {
  isAuth: boolean;
  userId: string;
  loading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  isAuth: !!localStorage.getItem('userId'),
  userId: localStorage.getItem('userId') || '',
  loading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.userId = '';
      localStorage.removeItem('userId');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignIn.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.userId = payload;
      localStorage.setItem('userId', payload);
    });
  },
});

export const { logout } = userSlice.actions;
