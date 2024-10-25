import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className="container">
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.dec}></span>
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
          <span className={styles.dec}></span>
          <button className={styles.btnDec}></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
