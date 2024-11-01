import { ProjetoDesign } from '../../../types/projeto';
import styles from './ProjectDesing.module.css';

type ProjectDesingProps = {
  designs: ProjetoDesign[];
};

const ProjectDesing = ({ designs }: ProjectDesingProps) => {
  return (
    <section className={`container ${styles.desingContainer}`}>
      <h1 className={styles.desingTitle}>
        <span></span> DESING
      </h1>
      <div className={styles.containerDesings}>
        {designs.map((design) => (
          <div className={styles.desing} key={design.title}>
            <div className={styles.imageCotainer}>
              <div className={styles.imageWrapper}>
                <img src={design.image} alt={design.title} />
              </div>
            </div>
            <div className={styles.desingTextContainer}>
              <h3>{design.title}</h3>
              <p>desing</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDesing;
