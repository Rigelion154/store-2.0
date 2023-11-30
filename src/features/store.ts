import { configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './categories/categoriesSlice';
import { productsSlice } from './products/productsSlice';
import { userSlice } from './userApi/userSlice';
import { tokenSlice } from './tokens/tokenSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
    user: userSlice.reducer,
    token: tokenSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
