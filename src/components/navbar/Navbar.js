import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import CartModal from '../modal/CartModal';

function Navbar({ shoppingCart }) {
  const [modal, setModal] = useState(false);

  function modalOpen() {
    setModal(true);
  }

  function modalClose() {
    setModal(false);
  }

  function calculateTotal() {
    const listPrice = shoppingCart.map((item) => item.price);
    const sumTotal = listPrice.reduce(
      (currentSum, currentValue) => currentSum + currentValue,
      0,
    );
    return sumTotal;
  }

  const itemsInCart = shoppingCart.map((item) => {
    const relevantInfo = Object.keys(item).filter(
      (key) => key === 'title' || key === 'price',
    );
    const article = relevantInfo.map((key) => <li>{item[key]}</li>);
    return <ul>{article}</ul>;
  });

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
      <CartModal show={modal} handleClose={modalClose}>
        <h2>Hello Modal</h2>
        {itemsInCart}
        <ul>
          <li>Summa:</li>
          <li>{calculateTotal()}</li>
        </ul>
      </CartModal>
    </header>
  );
}

export default Navbar;
