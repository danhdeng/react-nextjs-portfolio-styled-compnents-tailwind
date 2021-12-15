import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { NavBarContainer } from '../Projects/ProjectsStyles';
import { NavbarMainContainer, NavbarSpan } from './NavbarStyles';
import { NavItem } from './NavItem';

export const Navbar = () => {
  const { pathname } = useRouter();
  const [active, setActive] = useState('');
  useEffect(() => {
    if (pathname === '/') setActive('About');
    else if (pathname === 'projects') setActive('Projects');
    else if (pathname === 'resume') setActive('Resume');
  }, []);

  return (
    <NavbarMainContainer>
      <NavbarSpan>{active}</NavbarSpan>
      <NavBarContainer>
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
      </NavBarContainer>
    </NavbarMainContainer>
  );
};
