import styles from './ProjectMain.module.css';
import { ProjetoInfos } from '../../../types/projeto';

const ProjectMain = ({ projeto }: ProjetoInfos) => {
  console.log('projeto aqui:', projeto);
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
          <div>
            <div>
              <h3>DESCRIÇÃO</h3>
              <p>{projeto.description}</p>
            </div>
            <div>
              <h3>TECNOLOGIAS</h3>
              <ul>
                {projeto.technologies.map((tec) => (
                  <li key={tec}>{tec}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>LINKS</h3>
              <div>
                <button>Github</button>
                <button>Youtube</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.objetivosPrincipais}>
          <h1>OBJETIVOS</h1>
          <h3>PRINCIPAIS</h3>
          <ul>
            {projeto.objetivos.principais.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </div>
        <div className={styles.objetivosSecundarios}>
          <h3>SECUNDÁRIOS</h3>
          <ul>
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
