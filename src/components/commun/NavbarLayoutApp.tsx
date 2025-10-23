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
import { FileCode, Github, Home, Linkedin } from 'lucide-react';
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
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent
        className='sm:hidden'
        justify='start'
      >
        <NavbarMenuToggle
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

      <NavbarContent className='hidden sm:flex items-center gap-4'>
        <NavbarBrand>
          <p className='font-bold text-inherit'>ALEXANDER</p>
        </NavbarBrand>
        <NavbarItem className='flex items-center gap-4'>
          <NavLink
            aria-current='page'
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'dark:text-white text-dark'
            }
            to='/'
          >
            <Home className='me-2' /> Inicio
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NavLink
            aria-current='page'
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'dark:text-white text-dark'
            }
            to='/crud-redux'
          >
            <FileCode />
            CRUD Redux
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
              isActive ? 'text-primary' : 'dark:text-white text-dark'
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
              isActive ? 'text-primary' : 'dark:text-white text-dark'
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
