import { scrollSuave } from '../../../func/sroollSuave';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className="container">
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.paragraph}>
            Ola, me chamo Mateus Borges e tenho conhecimento tanto na área de de
            design, quanto de desenvolvimento web.
          </p>
          <h1 className={styles.title}>
            Desenvolvedor Web <br /> Designer
          </h1>
          <p className={styles.paragraph}>
            Busco desenvolver produtos de interface simples, intuitivas e
            fluidas. Aberto a propostas !
          </p>
          <button
            onClick={() => scrollSuave('sobre')}
            className={styles.btnDec}
          ></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
