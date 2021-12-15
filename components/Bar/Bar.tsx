import React, { FunctionComponent } from 'react';
import { Skill } from '../../Types/Types';
import { BarContainer, BarMainContainer } from './BarStyles';

export const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  return (
    <BarMainContainer>
      <BarContainer
        style={{
          width: bar_width,
        }}
      >
        <Icon className="mr-3" /> {name}
      </BarContainer>
    </BarMainContainer>
  );
};
