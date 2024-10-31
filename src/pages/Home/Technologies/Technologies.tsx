import styles from './Technologies.module.css';
import CardTech from '../../../components/cardTech/cardTech';

const Technologies = () => {
  return (
    <section className={styles.technologiesContainer}>
      <div className={`${styles.gridContainer} container`}>
        <h1 className={styles.tecno}>TECNO</h1>
        <h1 className={styles.hiddenTitle}>
          TECNO
          <br />
          LOGIAS
        </h1>
        <div className={styles.react}>
          <CardTech
            image={'/src/assets/icons/react.svg'}
            href={'https://react.dev/'}
            description={'react'}
            title={'react'}
          />
        </div>
        <div className={styles.javascript}>
          <CardTech
            image={'/src/assets/icons/javascript.svg'}
            href={'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'}
            description={'javascript'}
            title={'javascript'}
          />
        </div>
        <div className={styles.typescript}>
          <CardTech
            image={'/src/assets/icons/typescript.svg'}
            href={'https://www.typescriptlang.org/'}
            description={'typescript'}
            title={'typescript'}
          />
        </div>
        <div className={styles.node}>
          <CardTech
            image={'/src/assets/icons/node.svg'}
            href={'https://nodejs.org/pt'}
            description={'node'}
            title={'node'}
          />
        </div>
        <div className={styles.figma}>
          <CardTech
            image={'/src/assets/icons/figma.svg'}
            href={'https://www.figma.com/pt-br/'}
            description={'figma'}
            title={'figma'}
          />
        </div>
        <div className={styles.tailwind}>
          <CardTech
            image={'/src/assets/icons/tailwindcss.svg'}
            href={'https://tailwindcss.com/'}
            description={'tailwind'}
            title={'tailwind'}
          />
        </div>
        <h1 className={styles.logias}>LOGIAS</h1>
        <div className={styles.css}>
          <CardTech
            image={'/src/assets/icons/css.svg'}
            href={'https://developer.mozilla.org/pt-BR/docs/Web/CSS'}
            description={'CSS'}
            title={'css'}
          />
        </div>
        <div className={styles.html}>
          <CardTech
            image={'/src/assets/icons/html.svg'}
            href={'https://developer.mozilla.org/pt-BR/docs/Web/HTML'}
            description={'html'}
            title={'html'}
          />
        </div>
        <div className={styles.vazio}></div>
        <div className={styles.nest}>
          <CardTech
            image={'/src/assets/icons/nest.svg'}
            href={'https://nestjs.com/'}
            description={'nest'}
            title={'nest'}
          />
        </div>
        <div className={styles.next}>
          <CardTech
            image={'/src/assets/icons/next.svg'}
            href={'https://nextjs.org/'}
            description={'next'}
            title={'next'}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
