import tw from 'tailwind-styled-components';

export const ProjectsMainContainer=tw.div`
    px-5
    py-2 
    overflow-y-scroll
`;

export const ProjectsListContainer=tw.div`
    relative 
    grid 
    grid-cols-12 
    gap-4 
    my-3
`;

export const ProjectCardContainer=tw.div`
    col-span-12
    p-2 
    bg-gray-200 
    rounded-lg 
    sm:col-span-6 
    lg:col-span-4 
    dark:bg-dark-200
`;