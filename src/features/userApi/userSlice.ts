import { createSlice } from '@reduxjs/toolkit';
import { userSignIn } from '../../services/Auth/userSignIn';

export interface UserState {
  isAuth: boolean;
  userId: string;
  isOpen: boolean;
  loading: boolean;
  error: string[];
}

const initialState: UserState = {
  isAuth: !!localStorage.getItem('userId'),
  userId: localStorage.getItem('userId') || '',
  isOpen: false,
  loading: false,
  error: [],
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
    setAuthError(state, { payload }) {
      state.error = payload;
    },
    setIsOpen(state) {
      state.isOpen = !state.isOpen;
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

export const { logout, setAuthError, setIsOpen } = userSlice.actions;
