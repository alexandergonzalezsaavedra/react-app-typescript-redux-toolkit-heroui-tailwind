import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import { setTheme } from '../../store/slices/theme/themeSlice';

export const useSetTheme = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storageTheme = localStorage.getItem('theme') ?? '';
    if (storageTheme) {
      dispatch(setTheme(storageTheme));
    }
  }, [dispatch]);
  const { theme } = useAppSelector((state) => state.theme);
  const changeTheme = () => {
    if (theme === 'dark') {
      dispatch(setTheme('light'));
    } else {
      dispatch(setTheme('dark'));
    }
  };
  return { changeTheme, theme };
};
