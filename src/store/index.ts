import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import themeReducer from './slices/theme/themeSlice';
import userReducer from './slices/users/usersSlice';

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  // console.log(store.getState());
  // console.log(action);
  next(action);
  console.log(store.getState());
  localStorage.setItem(
    '__users__redux__state',
    JSON.stringify(store.getState())
  );
};

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistanceLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
