import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">
              <h1 className={styles.logo}>Outdoor</h1>
            </Link>
          </li>
          <li className={styles.kategori}>
            <NavLink activeClassName={styles.aktiv} to="/dam">
              Dam
            </NavLink>
          </li>
          <li className={styles.kategori}>
            <NavLink activeClassName={styles.aktiv} to="/herr">
              Herr
            </NavLink>
          </li>
          <li className={styles.kategori}>
            <NavLink activeClassName={styles.aktiv} to="/utrustning">
              Utrustning
            </NavLink>
          </li>
          <li className={styles.varukorg}>Varukorg</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
