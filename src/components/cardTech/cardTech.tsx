import styles from './cardTech.module.css';

type CardTechProps = {
  image: string;
  href: string;
  description: string;
  title: string;
};

const CardTech = ({ image, href, description, title }: CardTechProps) => {
  return (
    <a href={href} className={styles.cardTechContainer}>
      <div className={styles.cardTechImage}>
        <img src={image} alt={description} />
      </div>
      <h2 className={styles.cardTechTitle}>{title}</h2>
    </a>
  );
};

export default CardTech;
