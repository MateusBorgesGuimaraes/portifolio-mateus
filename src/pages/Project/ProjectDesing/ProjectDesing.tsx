import { ProjetoDesing } from '../../../types/projeto';
import styles from './ProjectDesing.module.css';

type ProjectDesingProps = {
  desings: ProjetoDesing[];
};

const ProjectDesing = ({ desings }: ProjectDesingProps) => {
  return (
    <section className={`container ${styles.desingContainer}`}>
      <h1 className={styles.desingTitle}>
        <span></span> DESING
      </h1>
      <div className={styles.containerDesings}>
        {desings.map((desing) => (
          <div className={styles.desing} key={desing.title}>
            <div className={styles.imageCotainer}>
              <div className={styles.imageWrapper}>
                <img src={desing.image} alt={desing.title} />
              </div>
            </div>
            <div className={styles.desingTextContainer}>
              <h3>{desing.title}</h3>
              <p>desing</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDesing;
