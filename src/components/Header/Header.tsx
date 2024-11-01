import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useScreenHeight } from '../../hooks/useScreenHeigth';
import { HashLink } from 'react-router-hash-link';
import React from 'react';

const Header = () => {
  const { scrollPercentage } = useScreenHeight();
  const [activeMenu, setActiveMenu] = React.useState(false);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

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
        <button
          className={`${styles.btnMenu} ${activeMenu ? styles.active : ''}`}
          onClick={handleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          className={`${styles.menuLinks} ${activeMenu ? styles.active : ''}`}
        >
          <li>
            <HashLink smooth to={'/#sobre'}>
              sobre
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projetos">
              projetos
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#tecnologias">
              tecnologias
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contato">
              contato
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
