import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
