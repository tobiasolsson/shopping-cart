import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import CartModal from '../modal/CartModal';

function Navbar({ shoppingCart, handleRemoveItem }) {
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

    const totalPrice = `${sumTotal.toLocaleString('se')} kr`;

    return totalPrice;
  }

  const itemsInCart = shoppingCart.map((item) => {
    const relevantInfo = Object.keys(item).filter(
      (key) => key === 'title' || key === 'price' || key === 'image',
    );
    const article = relevantInfo.map((key) => {
      if (key === 'image') {
        return <img src={item[key]} alt="" className={styles.cartImage} />;
      }
      if (key === 'title') {
        return <li className={styles.title}>{item[key]}</li>;
      }
      if (key === 'price') {
        return (
          <li className={styles.price}>
            {`${item[key].toLocaleString('se')} kr`}
          </li>
        );
      }
      return <li>Oops...</li>;
    });
    return (
      <ul className={styles.itemCart}>
        <button
          className={styles.delete}
          type="button"
          onClick={() => handleRemoveItem(item)}
        >
          X
        </button>
        {article}
      </ul>
    );
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
              <span className={styles.numberItems}>{shoppingCart.length}</span>
              <span className={styles.totalCart}>{calculateTotal()}</span>
            </button>
          </li>
        </ul>
      </nav>
      <CartModal show={modal} handleClose={modalClose}>
        <h2 className={styles.dinVarukorg}>Din varukorg</h2>
        {itemsInCart}
        <ul className={styles.totalPrice}>
          <li className={styles.summa}>Summa:</li>
          <li className={styles.total}>{calculateTotal()}</li>
        </ul>
        <div className={styles.buttons}>
          <Link to="/checkout" className={styles.checkout} onClick={modalClose}>
            Till kassan
          </Link>
          <button type="button" onClick={modalClose} className={styles.close}>
            Göm Varukorg
          </button>
        </div>
      </CartModal>
    </header>
  );
}

export default Navbar;
