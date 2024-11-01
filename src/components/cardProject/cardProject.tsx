import styles from './cardProject.module.css';
import { assetsItems } from '../../assets/assets';

type CardProjectProps = {
  description: string;
  image: string;
  cleanName: string;
};

const CardProject = ({ description, image, cleanName }: CardProjectProps) => {
  return (
    <div className={styles.cardProjectContainer}>
      <div className={styles.cardProjectImage}>
        <img src={image} alt={description} />
      </div>
      <a className={styles.cardProjectLink} href={`project/${cleanName}`}>
        <img src={assetsItems.projectArrow} alt="" />
      </a>
    </div>
  );
};

export default CardProject;
