import type React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../store';
import NavbarLayoutApp from '../components/commun/NavbarLayoutApp';
const LayoutApp: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <main className={`${theme} text-foreground bg-background min-h-dvh`}>
      <div className='container mx-auto'>
        <header>
          <NavbarLayoutApp />
        </header>

        <main>
          <Outlet />
        </main>

        <footer>Powered by: Alexander González</footer>
      </div>
    </main>
  );
};

export default LayoutApp;
