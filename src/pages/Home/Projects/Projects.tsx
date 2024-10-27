import styles from './Projects.module.css';
import CardProject from '../../../components/cardProject/cardProject';
import { projectsInfo } from '../../../utils/projectsInfo';
import DummyCardProject from '../../../components/cardProject/dummyCardProject';

const Projects = () => {
  return (
    <section className={`container ${styles.projectsContainer}`}>
      <div className={styles.startContainer}>
        <h1>PROJETOS</h1>
        <div className={styles.upDec}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.cardProjectContainer}>
        {projectsInfo.map((project) => (
          <CardProject
            key={project.cleanName}
            description={project.description}
            image={project.image}
            cleanName={project.cleanName}
          />
        ))}
        <DummyCardProject />
      </div>
      <div className={styles.upDec}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Projects;
