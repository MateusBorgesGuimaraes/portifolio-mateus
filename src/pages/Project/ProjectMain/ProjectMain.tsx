import styles from './ProjectMain.module.css';
import { ProjetoInfos } from '../../../types/projeto';

const ProjectMain = ({ projeto }: ProjetoInfos) => {
  return (
    <section className="container">
      <div className={styles.containerProject}>
        <div className={styles.video}>
          <iframe
            src={projeto.embed}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width={'640px'}
            height={'400px'}
          ></iframe>
        </div>
        <div className={styles.infos}>
          <h1>{projeto.name}</h1>
          <div className={styles.texts}>
            <div>
              <h3>DESCRIÇÃO</h3>
              <p>{projeto.description}</p>
            </div>
            <div>
              <h3>TECNOLOGIAS</h3>
              <ul className={styles.technologies}>
                {projeto.technologies.map((tec) => (
                  <li key={tec}>{tec}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>LINKS</h3>
              <div className={styles.links}>
                <a href={projeto.urlGithub}>
                  Github <img src="/src/assets/icons/github.svg" alt="" />
                </a>
                <a href={projeto.urlYoutube}>
                  Youtube <img src="/src/assets/icons/youtube.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.objetivosPrincipais}>
          <h1>
            <span></span>OBJETIVOS
          </h1>
          <h3>PRINCIPAIS</h3>
          <ul className={styles.objetivos}>
            {projeto.objetivos.principais.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </div>
        <div className={styles.objetivosSecundarios}>
          <h3>SECUNDÁRIOS</h3>
          <ul className={styles.objetivos}>
            {projeto.objetivos.secundarios.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectMain;
