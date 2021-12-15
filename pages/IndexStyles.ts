import tw from 'tailwind-styled-components';

export const AboutMainContainer = tw.div`
    flex 
    flex-col 
    flex-grow 
    px-6 
    pt-1 
`;

export const AboutHeaderLevelSix = tw.h6`
    my-3 
    text-base 
    font-medium
`;

export const AboutContainer = tw.div`
    flex-grow 
    p-4 
    mt-5 
    bg-gray-400 
    dark:bg-dark-100 
`;

const AboutHeaderLevelFour = tw.h4`
    my-3 
    text-xl 
    font-semibold 
    tracking-wide
`;

const AboutServiceContainer = tw.div`
    grid 
    gap-6 
    my-3 
    md:grid-cols-2
`;

const ServiceContainer = tw.div`
    col-span-2 
    p-2 
    bg-gray-200 
    rounded-lg 
    dark:bg-dark-200 
    md:col-span-1 
`;
