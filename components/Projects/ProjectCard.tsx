import {FunctionComponent, useState} from 'react'
import { IProject } from '../../Types/Types';
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { ProjectAnchorContainer, ProjectDetailContainer, ProjectHeaderThree, ProjectHeaderTwo, ProjectNameContainer, ProjectResourceContainer, ProjectSetDetailButton, ProjectTagsContainer, ProjectTagSpan } from './ProjectsStyles';

export const ProjectCard:FunctionComponent<{project:IProject}> = ({
    project:{
        name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div>
            <Image 
                src={image_path}
                alt={name}
                className="cursor-pointer"
                onClick={()=>setShowDetail(true)}
                layout='responsive'
                height='150'
                width='300'
            />
        <ProjectNameContainer>{name}</ProjectNameContainer>
        {
            showDetail && (
                <ProjectDetailContainer>
                    <div>
                        <Image
                            src={image_path}
                            alt={name}
                            layout="responsive"
                            height="150"
                            width="300"
                            />
                        
                        <ProjectResourceContainer>
                            <ProjectAnchorContainer href={github_url}>
                                <AiFillGithub /> <span>Github</span>
                            </ProjectAnchorContainer>
                            <ProjectAnchorContainer href={deployed_url}>
                                <AiFillProject /> <span>Project</span>
                            </ProjectAnchorContainer>
                        </ProjectResourceContainer>
                    </div>
                    <div>
                        <ProjectHeaderTwo>{name}</ProjectHeaderTwo>
                        <ProjectHeaderThree>{description}</ProjectHeaderThree>
                        <ProjectTagsContainer>
                            {
                                key_techs.map((tech)=>(
                                    <ProjectTagSpan key={tech}>{tech}</ProjectTagSpan>
                                ))
                            }
                        </ProjectTagsContainer>
                    </div>
                    <ProjectSetDetailButton onClick={() => setShowDetail(false)}>
                         <MdClose size={30} />
                    </ProjectSetDetailButton>
                </ProjectDetailContainer>

            )
        }
        </div>
    )
}
