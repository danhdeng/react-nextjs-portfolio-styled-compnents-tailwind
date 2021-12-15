import React from 'react';
import {
  SideBarMainContainer,
  GithubIconContainer,
  GitHubContainer,
  SocialContainer,
  Button,
  SwitchContainer,
  SwitchLabel,
  SwitchLine,
  SwitchDot,
  SwitchTheme,
  EmailMeButton,
  ContactContainer,
} from './SideBarStyles';
import Image from 'next/image';
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { GoLocation } from 'react-icons/go';

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
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{' '}
        </a>
        <a
          href="https://www.linkedin.com/in/danhuideng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />{' '}
        </a>
        <a
          href="https://dandeng.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBlogger className="w-8 h-8 cursor-pointer" />{' '}
        </a>
        <a
          href="https://www.instagram.com/danhdeng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="w-8 h-8 cursor-pointer text" />{' '}
        </a>
      </SocialContainer>

      <a href="mailto:huidh@yahoo.com" className="flex items-center m-2">
        <FaEnvelope />
        <p className="ml-2">Email: huidh@yahoo.com</p>
      </a>

      {/* Contacts */}
      <ContactContainer style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Toronto,Ontario,Canada </span>
        </div>
        <p className="my-2 "> huidh@yahoo.com </p>
        <p className="my-2"></p>
      </ContactContainer>

      {/* Email Button */}

      <EmailMeButton onClick={() => window.open('mailto:huidh@yahoo.com')}>
        Email me
      </EmailMeButton>

      <SwitchContainer>
        <SwitchLabel htmlFor="toogleA">
          <div className="relative">
            <input
              id="toogleA"
              type="checkbox"
              className="sr-only"
              onChange={changeTheme}
            />
            <SwitchLine></SwitchLine>
            <SwitchDot></SwitchDot>
          </div>
          {/* <div class="ml-3 text-gray-700 font-medium">{theme} theme</div> */}
          <SwitchTheme>{theme} theme</SwitchTheme>
        </SwitchLabel>
      </SwitchContainer>
    </SideBarMainContainer>
  );
};
