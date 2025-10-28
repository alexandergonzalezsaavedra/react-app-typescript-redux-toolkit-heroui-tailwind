import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import ButtonChangeTheme from '../theme/ButtonChangeTheme';
import { Dog, FileCode, Github, Home, Linkedin, Origami } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavbarLayoutApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <Navbar
      disableAnimation
      isBordered
      shouldHideOnScroll
      maxWidth='2xl'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent
        className='flex sm:hidden'
        justify='start'
      >
        <NavbarMenuToggle
          className='w-10'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent
        className='sm:hidden pr-3'
        justify='start'
      >
        <NavbarBrand>
          <p className='font-bold text-inherit'>ALEXANDER</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify='start'
        className='hidden sm:flex items-center gap-4'
      >
        <NavbarBrand>
          <p className='font-bold text-inherit'>ALEXANDER</p>
        </NavbarBrand>
        <NavbarItem className='flex items-center gap-4'>
          <NavLink
            aria-current='page'
            className={({ isActive }) =>
              isActive
                ? 'text-primary flex gap-1'
                : 'dark:text-white text-dark flex gap-1'
            }
            to='/'
          >
            <Dog /> Conoce a Hanna
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            aria-current='page'
            className={({ isActive }) =>
              isActive
                ? 'text-primary flex gap-1'
                : 'dark:text-white text-dark flex gap-1'
            }
            to='/crud-redux'
          >
            <FileCode />
            CRUD Redux
          </NavLink>
        </NavbarItem>

        <NavbarItem className='flex items-center gap-4'>
          <NavLink
            aria-current='page'
            className={({ isActive }) =>
              isActive
                ? 'text-primary flex gap-1'
                : 'dark:text-white text-dark flex gap-1'
            }
            to='/animacion'
          >
            <Origami /> Animación
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className='flex items-center gap-4'
        justify='end'
      >
        <NavbarItem>
          <Button
            as={Link}
            color='primary'
            href='https://www.linkedin.com/in/alexander-gonzalez-saavedra'
            target='_blank'
            variant='flat'
            radius='full'
            isIconOnly
          >
            <Linkedin />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color='warning'
            href='https://github.com/alexandergonzalezsaavedra'
            target='_blank'
            variant='flat'
            radius='full'
            isIconOnly
          >
            <Github />
          </Button>
        </NavbarItem>
        <NavbarItem className='flex'>
          <ButtonChangeTheme />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <NavLink
            aria-current='page'
            className={({ isActive }) =>
              isActive
                ? 'text-primary flex gap-1'
                : 'dark:text-white text-dark flex gap-1'
            }
            to='/'
            onClick={closeMenu}
          >
            <Home />
            Inico
          </NavLink>
          <NavLink
            aria-current='page'
            className={({ isActive }) =>
              isActive
                ? 'text-primary flex gap-1'
                : 'dark:text-white text-dark flex gap-1'
            }
            to='/crud-redux'
            onClick={closeMenu}
          >
            <FileCode />
            CRUD Redux
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarLayoutApp;
