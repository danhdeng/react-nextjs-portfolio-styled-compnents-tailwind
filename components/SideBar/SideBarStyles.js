import tw from 'tailwind-styled-components';

export const SideBarMainContainer = tw.div`
    items-center
    justify-center
`;

export const GithubIconContainer = tw.div`
    flex 
    items-center
    justify-center
    m-2 
    border-2 
    border-solid 
    border-gray-333 
    p-2 
    rounded-full 
    transition-colors 
    duration-100 
    ease-in-out
    w-8
    h-8
`;

export const GitHubContainer = tw.div`
    flex
    justify-center
    items-center
`;

export const SocialContainer = tw.div`
    flex 
    justify-around 
    w-9/12 
    mx-auto 
    my-5 
    text-green md:w-full
`;

export const Button = tw.button`
    w-8/12 
    px-5 
    py-2 
    my-4
    text-white 
    bg-black 
    rounded-full 
    cursor-pointer 
    bg-gradient-to-r 
    from-green 
    to-blue-500 
    focus:outline-none 
    hover:scale-105 
`;
