import { ProjetoDesing } from '../../../types/projeto';
import styles from './ProjectDesing.module.css';

type ProjectDesingProps = {
  desings: ProjetoDesing[];
};

const ProjectDesing = ({ desings }: ProjectDesingProps) => {
  console.log('desings:', desings);
  return (
    <section className="container">
      <h1>DESING</h1>
      <div className={styles.containerDesings}>
        {desings.map((desing) => (
          <div className={styles.desing} key={desing.title}>
            <div className={styles.imageCotainer}>
              <img src={desing.image} alt={desing.title} />
            </div>
            <h3>{desing.title}</h3>
            <p>desing</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDesing;
