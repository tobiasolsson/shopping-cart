import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Modal from '../modal/Modal';

function Navbar() {
  const [modal, setModal] = useState(false);

  function modalOpen() {
    setModal(true);
  }

  function modalClose() {
    setModal(false);
  }

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
          <li className={styles.varukorg}>
            <button type="button" onClick={modalOpen}>
              Varukorg
            </button>
          </li>
        </ul>
      </nav>
      <Modal show={modal} handleClose={modalClose}>
        <h2>Hello Modal</h2>
      </Modal>
    </header>
  );
}

export default Navbar;
