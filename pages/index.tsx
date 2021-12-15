import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import {
  AboutContainer,
  AboutHeaderLevelFour,
  AboutHeaderLevelSix,
  AboutMainContainer,
  AboutServiceContainer,
  ServiceContainer,
} from './IndexStyles';
import { services } from '../Data/data';
import { ServiceCard } from '../components/Services/ServiceCard';
import { Service } from '../Types/Types';
export default function About() {
  return (
    <AboutMainContainer>
      <AboutHeaderLevelSix>
        I am a Full Stack Solution Developer, Specialize in .Net technology,
        Azure(DevOps, Serverless,Docker, Kubunetes), SQL Server, SharePoint,
        Office 365. Angular, Node.js, React, KnockoutJS, SOA Architecture
        advocate. WCF/Web API Development, Legacy application migration
        Specialist.
      </AboutHeaderLevelSix>
      <AboutContainer>
        <AboutHeaderLevelFour>What I am doing</AboutHeaderLevelFour>
        <AboutServiceContainer>
          {services.map((service: Service) => (
            <ServiceContainer key={service.title}>
              <ServiceCard service={service} />
            </ServiceContainer>
          ))}
        </AboutServiceContainer>
      </AboutContainer>
    </AboutMainContainer>
  );
}
