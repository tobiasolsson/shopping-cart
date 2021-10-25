import React from 'react';

import styles from './Footer.module.css';
import github from '../../assets/images/GitHub-Mark-32px.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>Tobias Olsson</p>
      <a
        target="_blank"
        href="https://github.com/tobiasolsson"
        rel="noreferrer"
      >
        <img src={github} alt="GitHub Logo" className={styles.logo} /> GitHub
      </a>
    </footer>
  );
}

export default Footer;
