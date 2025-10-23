import { Button } from '@heroui/react';
import { CloudMoon, Sun } from 'lucide-react';
import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../store/slices/theme/themeSlice';
import { useEffect } from 'react';

const ButtonChangeTheme = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storageTheme = localStorage.getItem('theme') ?? '';
    if (storageTheme) {
      dispatch(setTheme(storageTheme));
    }
  }, [dispatch]);
  const { theme } = useAppSelector((state) => state.theme);
  const handleChangeTheme = () => {
    if (theme === 'dark') {
      dispatch(setTheme('light'));
    } else {
      dispatch(setTheme('dark'));
    }
  };
  return (
    <>
      <Button
        className={`bg-linear-to-tr text-white shadow-lg ${
          theme === 'dark'
            ? 'from-pink-500 to-yellow-500'
            : 'from-blue-500 to-indigo-500'
        }`}
        radius='full'
        onPress={handleChangeTheme}
        isIconOnly
      >
        {theme === 'dark' ? <Sun /> : <CloudMoon />}
      </Button>
    </>
  );
};

export default ButtonChangeTheme;
