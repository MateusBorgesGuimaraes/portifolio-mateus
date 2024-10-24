import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useScreenHeight } from '../../hooks/useScreenHeigth';

const Header = () => {
  const { scrollPercentage } = useScreenHeight();

  return (
    <header className={`container`}>
      <div className={`${styles.guiderWrapper}`}>
        <span
          style={{ width: `${scrollPercentage}%` }}
          className={styles.guiderContent}
        ></span>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <p>MATEUS BORGES</p>
          <span className={styles.logoDec}></span>
        </Link>
        <ul className={styles.menuLinks}>
          <li>
            <a href="#sobre">sobre</a>
          </li>
          <li>
            <a href="#projetos">projetos</a>
          </li>
          <li>
            <a href="#tecnologias">tecnologias</a>
          </li>
          <li>
            <a href="#contato">contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
