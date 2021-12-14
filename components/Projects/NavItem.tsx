import React, {FunctionComponent} from 'react'
import {Category} from '../../Types/Types';
import { ListItemContainer } from './ProjectsStyles';
import tw from 'tailwind-styled-components';
import {NavItemProps} from '../../Types/Types';

export const NavItem:FunctionComponent<{
    value: Category | "all";
    handlerFilterCategory: Function;
    active: string;}> = ({value, handlerFilterCategory, active}) => {
        return (
            <ListItemContainer isActive={value===active} onClick={() => handlerFilterCategory(value)}>
              {value}
            </ListItemContainer>
          );
}
