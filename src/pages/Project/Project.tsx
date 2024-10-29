// import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { projectsInfo } from '../../utils/projectsInfo';
import { Projeto } from '../../types/projeto';
import ProjectMain from './ProjectMain/ProjectMain';
import ProjectDesing from './ProjectDesing/ProjectDesing';

const Project = () => {
  const { name } = useParams();
  const project = projectsInfo.find(
    (project) => project.cleanName === name,
  ) as Projeto;
  const { desing, ...projetctInfos } = project;

  return (
    <section>
      <ProjectMain projeto={projetctInfos} />
      <ProjectDesing desings={desing} />
    </section>
  );
};

export default Project;
