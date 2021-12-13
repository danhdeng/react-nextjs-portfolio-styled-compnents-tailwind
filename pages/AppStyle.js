import tw from 'tailwind-styled-components';

export const AppMainContainer=tw.div`
    grid 
    grid-cols-12 
    gap-6 
    px-5 
    my-14 
    lg:mb-0 
    md:mb-16 
    sm:px-20 
    md:px-32 
    lg:px-36 
    xl:px-48
`;

export const LeftContainer=tw.div`
    h-full 
    col-span-12 
    p-4 
    text-base 
    text-center 
    bg-blue-200
    dark:bg-dark-500 
    lg:col-span-3 
    rounded-2xl 
    shadow-custom-light 
    dark:shadow-custom-dark
`;

export const RightContainer=tw.div`
    flex 
    flex-col 
    col-span-12 
    overflow-hidden 
    bg-blue-200
    shadow-custom-light 
    dark:shadow-custom-dark 
    rounded-2xl 
    lg:col-span-9 
    dark:bg-dark-500
`;