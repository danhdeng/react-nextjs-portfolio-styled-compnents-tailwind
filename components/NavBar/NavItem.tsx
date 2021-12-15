import { route } from 'next/dist/server/router';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { NavItemSpan } from './NavItemStyles';

interface INavItem {
  active: string;
  setActive: Function;
  name: string;
  route: string;
}

export const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <NavItemSpan onClick={() => setActive(name)}>{name}</NavItemSpan>
      </a>
    </Link>
  ) : null;
};
