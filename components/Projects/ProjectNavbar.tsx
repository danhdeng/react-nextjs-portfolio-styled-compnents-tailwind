import {FunctionComponent} from 'react'
import {NavBarContainer} from './ProjectsStyles';
import {NavItem} from './NavItem';

export const ProjectNavbar:FunctionComponent<{handlerFilterCategory:Function; active:string}> = (props) => {
    return (
        <NavBarContainer>
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props} />
            <NavItem value="mongo" {...props} />
            <NavItem value="django" {...props} />
            <NavItem value="node" {...props} />
        </NavBarContainer>
    )
}
