import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import CartModal from '../modal/CartModal';

function Navbar({ shoppingCart, handleRemoveItem, handleQuantityChange }) {
  const [modal, setModal] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  function modalOpen() {
    setModal(true);
  }

  function modalClose() {
    setModal(false);
  }

  function calculateTotal() {
    const listPrice = shoppingCart.map((item) => item.price * item.qty);
    const sumTotal = listPrice.reduce(
      (currentSum, currentValue) => currentSum + currentValue,
      0,
    );

    const totalPrice = `${sumTotal.toLocaleString('se')} kr`;

    return totalPrice;
  }

  function calculateItemsInCart() {
    if (!shoppingCart.length) {
      return 0;
    }

    const totalItems = shoppingCart
      .map((item) => item.qty)
      .reduce((a, b) => a + b);

    return totalItems;
  }

  useEffect(() => {
    calculateItemsInCart();
  }, [shoppingCart]);

  const itemsInCart = shoppingCart.map((item) => {
    // Mappa upp hur många av var enskild artikel jag har
    // const quantity = 0;

    // gör en quantity selector med förvalt korrekt antal
    // priset bör vara korrekt ändå?
    // ändra pris när jag ändrar qty! (separat function handleQtyChange)

    // Lista på vilken info som vi vill ha från artikeln
    const relevantInfo = Object.keys(item).filter(
      (key) =>
        key === 'title' || key === 'price' || key === 'image' || key === 'qty',
    );

    // Ta fram rätt info som behövs i varukorg
    const article = relevantInfo.map((key) => {
      if (key === 'image') {
        return <img src={item.image} alt="" className={styles.cartImage} />;
      }
      if (key === 'title') {
        return <li className={styles.title}>{item.title}</li>;
      }
      if (key === 'qty') {
        return (
          <ul>
            <li>Qty:</li>
            <li>
              <select
                onChange={(e) => handleQuantityChange(e, item)}
                value={item.qty}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </li>
          </ul>
        );
      }
      if (key === 'price') {
        return (
          <li className={styles.price}>
            {`${(item[key] * item.qty).toLocaleString('se')} kr`}
          </li>
        );
      }
      return <li>Oops...</li>;
    });

    // Spotta ut artikel HTML
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

  function toggleMobliMenu() {
    setMobileMenu(!mobileMenu);
  }

  const showMobileMenu = mobileMenu
    ? `${styles.mobileMenu} ${styles.mobileGrid}`
    : `${styles.mobileMenu} ${styles.hideMenu}`;

  return (
    <header>
      <nav className={styles.navbar}>
        <button type="button" className={styles.menu} onClick={toggleMobliMenu}>
          <span className={styles.hamburger} />
        </button>
        <ul className={showMobileMenu}>
          <li>
            <Link to="/" onClick={() => setMobileMenu(false)}>
              <h1 className={styles.logo}>Outdoor</h1>
            </Link>
          </li>
          <li className={styles.kategori}>
            <NavLink
              activeClassName={styles.aktiv}
              to="/dam"
              onClick={() => setMobileMenu(false)}
            >
              Dam
            </NavLink>
          </li>
          <li className={styles.kategori}>
            <NavLink
              activeClassName={styles.aktiv}
              to="/herr"
              onClick={() => setMobileMenu(false)}
            >
              Herr
            </NavLink>
          </li>
          <li className={styles.kategori}>
            <NavLink
              activeClassName={styles.aktiv}
              to="/utrustning"
              onClick={() => setMobileMenu(false)}
            >
              Utrustning
            </NavLink>
          </li>
        </ul>
        <div className={styles.varukorg}>
          <button type="button" onClick={modalOpen}>
            <span className={styles.numberItems}>{calculateItemsInCart()}</span>
            <span className={styles.totalCart}>{calculateTotal()}</span>
          </button>
        </div>
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
