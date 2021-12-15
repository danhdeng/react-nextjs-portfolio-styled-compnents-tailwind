import React, { FunctionComponent } from 'react';
import { Service } from '../../Types/Types';
import { ServiceCardContainer } from './ServiceCardStyles';

export const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, title, about },
}) => {
  //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
  function createMarkup() {
    return {
      __html: about,
    };
  }

  return (
    <ServiceCardContainer>
      <Icon className="w-12 h-12 text-green" />
      <div className="">
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </ServiceCardContainer>
  );
};
