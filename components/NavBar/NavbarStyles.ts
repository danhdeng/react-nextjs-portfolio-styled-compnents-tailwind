import tw from 'tailwind-styled-components';

export const NavbarMainContainer = tw.div`
    flex 
    items-center justify-between 
    px-5 
    py-3 
    my-3
`;

export const NavbarSpan = tw.span`
    text-xl 
    font-bold 
    border-b-4 
    md:text-2xl 
    border-green
`;

export const NavItemContainer = tw.div`
    text-base 
    font-normal 
    md:text-xl
`;
