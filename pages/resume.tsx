import React from 'react';
import { Bar } from '../components/Bar/Bar';
import {
  EducationExperienceContainer,
  LanguagesToolContainer,
  LevelFiveHeader,
  LevelFiveSubHeader,
  ParagraphFont,
  ParagraphWithMargin,
  ResumeMainContainer,
  SubContainer,
} from './ResumeStyles';

import { languages, tools } from '../Data/data';

export default function Resume() {
  return (
    <ResumeMainContainer>
      <EducationExperienceContainer>
        <div>
          <LevelFiveHeader>Education</LevelFiveHeader>
          <div>
            <LevelFiveSubHeader>Computer Science</LevelFiveSubHeader>

            <ParagraphFont>University of Toronto (2000 - 2004)</ParagraphFont>
            <ParagraphWithMargin>
              I archived my honour degree of Science with Major in Computer
              Science, Mathematics Science and Minor in Statistics in University
              of Toronto
            </ParagraphWithMargin>
          </div>
        </div>
        <div>
          <LevelFiveHeader>Experience</LevelFiveHeader>
          <div>
            <LevelFiveSubHeader>Senior Software Developer</LevelFiveSubHeader>
            <ParagraphFont>Freelance and Consultant</ParagraphFont>
            <ParagraphFont>
              Available for both full time and contract employment
            </ParagraphFont>
          </div>
        </div>
      </EducationExperienceContainer>

      <LanguagesToolContainer>
        <div>
          <LevelFiveHeader>Languages and Frameworks</LevelFiveHeader>
          <SubContainer>
            {languages.map((language, index) => (
              <Bar value={language} key={index} />
            ))}
          </SubContainer>
        </div>
        <div>
          <LevelFiveHeader>Tools</LevelFiveHeader>
          <SubContainer>
            {tools.map((tool, index) => (
              <Bar value={tool} key={index} />
            ))}
          </SubContainer>
        </div>
      </LanguagesToolContainer>
    </ResumeMainContainer>
  );
}
