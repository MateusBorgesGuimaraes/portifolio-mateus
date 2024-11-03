import styles from './Technologies.module.css';
import { assetsItems } from '../../../assets/assets';
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
            image={assetsItems.react}
            description={'react'}
            title={'react'}
          />
        </div>
        <div className={styles.javascript}>
          <CardTech
            image={assetsItems.javascript}
            description={'javascript'}
            title={'javascript'}
          />
        </div>
        <div className={styles.typescript}>
          <CardTech
            image={assetsItems.typescript}
            description={'typescript'}
            title={'typescript'}
          />
        </div>
        <div className={styles.node}>
          <CardTech
            image={assetsItems.node}
            description={'node'}
            title={'node'}
          />
        </div>
        <div className={styles.figma}>
          <CardTech
            image={assetsItems.figma}
            description={'figma'}
            title={'figma'}
          />
        </div>
        <div className={styles.tailwind}>
          <CardTech
            image={assetsItems.tailwind}
            description={'tailwind'}
            title={'tailwind'}
          />
        </div>
        <h1 className={styles.logias}>LOGIAS</h1>
        <div className={styles.css}>
          <CardTech image={assetsItems.css} description={'CSS'} title={'css'} />
        </div>
        <div className={styles.html}>
          <CardTech
            image={assetsItems.html}
            description={'html'}
            title={'html'}
          />
        </div>
        <div className={styles.vazio}></div>
        <div className={styles.nest}>
          <CardTech
            image={assetsItems.nest}
            description={'nest'}
            title={'nest'}
          />
        </div>
        <div className={styles.next}>
          <CardTech
            image={assetsItems.next}
            description={'next'}
            title={'next'}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
