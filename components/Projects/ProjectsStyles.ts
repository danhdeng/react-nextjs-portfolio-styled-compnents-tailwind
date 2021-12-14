import tw, { css } from 'tailwind-styled-components';
import {NavItemProps} from '../../Types/Types';

export const ListItemContainer=tw.li<NavItemProps>`
  capitalize 
  cursor-pointer 
  hover:text-green
  ${(p) => (p.isActive ? "text-green" : "text-black")}
`;

export const NavBarContainer=tw.div`
  flex 
  px-3 
  py-2 
  space-x-3 
  overflow-x-auto 
  list-none
`;

export const ProjectNameContainer=tw.p`
  my-2
  text-center
`;

export const ProjectDetailContainer=tw.div`
  absolute 
  top-0 
  left-0 
  z-10 
  grid 
  w-full 
  h-auto 
  p-2 
  text-black 
  bg-gray-100 
  md:grid-cols-2 
  gap-x-12 
  dark:text-white 
  dark:bg-dark-100
`;

export const ProjectResourceContainer=tw.div`
  flex 
  justify-center 
  my-4 
  space-x-3
`;

export const ProjectAnchorContainer=tw.a`
  flex 
  items-center 
  px-4 
  py-2 
  space-x-3 
  text-lg 
  bg-gray-200 
  dark:bg-dark-200
`;

export const ProjectHeaderTwo=tw.h2`
  mb-3 
  text-xl 
  font-medium 
  md:text-2xl
`;

export const ProjectHeaderThree=tw.h3`
  mb-3 
  font-medium
`;

export const ProjectTagsContainer=tw.div`
  flex 
  flex-wrap 
  mt-5 
  space-x-2 
  text-sm 
  tracking-wider
`;

export const ProjectTagSpan=tw.span`
  px-2 
  py-1 
  my-1 
  bg-gray-200 
  dark:bg-dark-200 
  rounde-sm
`;

export const ProjectSetDetailButton =tw.button`
  absolute 
  p-1 
  bg-gray-200 
  rounded-full 
  top-3 
  right-3 
  focus:outline-none 
  dark:bg-dark-200
`;
