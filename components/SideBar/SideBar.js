import React from 'react';
import {
  SideBarMainContainer,
  GithubIconContainer,
  GitHubContainer,
  SocialContainer,
  Button,
} from './SideBarStyles';
import Image from 'next/image';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export const SideBar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <SideBarMainContainer>
      <Image src="/p.jpg" width="80px" height="100px" alt="Dan Deng"></Image>
      <h3>Dan Deng</h3>
      <p>Full Stack Developer</p>
      <p>Download Resume</p>
      <SocialContainer>
        <a
          href="https://www.github.com/danhdeng"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/danhuideng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://dandeng.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBlogger className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/danhdeng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="w-8 h-8 cursor-pointer text" />{' '}
        </a>
      </SocialContainer>
      <Button onClick={changeTheme}>
        {/* //TODO remove bg black */}
        Toggle Theme
      </Button>
    </SideBarMainContainer>
  );
};
