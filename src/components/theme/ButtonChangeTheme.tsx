import { Button } from '@heroui/react';
import { CloudMoon, Sun } from 'lucide-react';
import { useSetTheme } from '../../hooks/theme/useSetTheme';

const ButtonChangeTheme = () => {
  const { changeTheme, theme } = useSetTheme();
  return (
    <>
      <Button
        className={`bg-linear-to-tr text-white shadow-lg ${
          theme === 'dark'
            ? 'from-pink-500 to-yellow-500'
            : 'from-blue-500 to-indigo-500'
        }`}
        radius='full'
        onPress={changeTheme}
        isIconOnly
      >
        {theme === 'dark' ? <Sun /> : <CloudMoon />}
      </Button>
    </>
  );
};

export default ButtonChangeTheme;
