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
            o bacharelado em Sistemas de Informação. Tive meu primeiro contato
            com a área em 2020, quando acabei me apaixonando por programação web
            e design.
          </p>

          <p>
            Tenho interesse em trabalhar como desenvolvedor full stack na área
            de web. Atualmente, meu conhecimento se concentra mais na parte de
            front-end.
          </p>

          <p>
            Sou uma pessoa muito dedicada, sempre disposto a aprender novas
            tecnologias e a enfrentar quaisquer desafios propostos. Sou muito
            comunicativo quando se trata de aprender algo novo.
          </p>

          <p>
            Tenho inglês intermediário e conhecimento em design, o que me
            permite contribuir também no processo criativo do desenvolvimento de
            sites.
          </p>

          <p>
            Ser uma pessoa curiosa foi o que me levou a aprender todas as etapas
            do desenvolvimento web, desde o design até o front-end e o back-end,
            de maneira que eu possa contribuir onde for necessário
          </p>

          <p>
            Sempre que começo algo, tenha certeza de que vou dar o meu máximo
            para concluir.
          </p>
        </div>

        <span className={styles.dec}></span>
      </div>
    </section>
  );
};

export default About;
