import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={`container ${styles.generalContainer}`}>
        <span className={styles.dec}></span>
        <div className={styles.titleContainer}>
          <p>s</p>
          <p>o</p>
          <p>b</p>
          <p>r</p>
          <p>e</p>
        </div>

        <div className={styles.phraseContainer}>
          <p>
            Me chamo Mateus Borges e Guimarães, tenho 23 anos e estou concluindo
            o Bacharelado em Sistemas de Informação, tive o primeiro contato com
            a área em 2020, onde acabei me apaixonando por programação Web e
            Design.
          </p>

          <p>
            Tenho interesse em trabalhar com full stack na área de web,
            atualmente meu se concentra mais conhecimento na parte do front End.
          </p>

          <p>
            Sou uma pessoa muito dedicada, estou sempre disposto a aprender
            novas tecnologias e a enfrentar quaisquer desafios propostos, sou
            muito comunicativo quando a questão é aprender algo e
            disponibilização a melhorar.
          </p>

          <p>
            Tenho inglês intermediário, tenho conhecimentos de design de maneira
            que possa ajudar também a contribuir no processo criativo do
            desenvolvimento dos sites.
          </p>

          <p>
            Ser uma pessoa curiosa, é o que me levou a aprender todas as etapas
            do desenvolvimento web, do design, ao front end ao back end, posso
            contribuir dentro das minhas habilidade com toda minha dfedicação.
          </p>

          <p>
            Sempre que começo algo, tenha certeza que vou dar o meu máximo para
            terminar.
          </p>
        </div>

        <span className={styles.dec}></span>
      </div>
    </section>
  );
};

export default About;
