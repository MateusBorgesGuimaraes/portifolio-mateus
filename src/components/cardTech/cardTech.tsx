import styles from './cardTech.module.css';

type CardTechProps = {
  image: string;
  description: string;
  title: string;
};

const CardTech = ({ image, description, title }: CardTechProps) => {
  return (
    <div className={styles.cardTechContainer}>
      <div className={styles.cardTechImage}>
        <img src={image} alt={description} />
      </div>
      <h2 className={styles.cardTechTitle}>{title}</h2>
    </div>
  );
};

export default CardTech;
