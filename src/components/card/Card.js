/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
// import uniqid from 'uniqid';
import ProductModal from '../modal/ProductModal';

import styles from './Card.module.css';

function Card({ product, handleAddToCart }) {
  const [modal, setModal] = useState(false);
  const [quant, setQty] = useState(1);

  function modalOpen() {
    setModal(true);
  }

  function modalClose() {
    setModal(false);
  }

  function addToCart() {
    // handleAddToCart({ ...product, id: uniqid() });
    handleAddToCart({ ...product, qty: quant });
    modalClose();
  }

  const productPrice = `${product.price.toLocaleString('se')} kr`;

  return (
    <div className={styles.card}>
      <div onClick={modalOpen}>
        <img src={product.image} alt="" className={styles.imageSmall} />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>{productPrice}</p>
      </div>
      <ProductModal show={modal} handleClose={modalClose}>
        <div>
          <img src={product.image} alt="" className={styles.imageLarge} />
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.price}>{productPrice}</p>
          <p>{product.desc}</p>
          <ul>
            <li>Qty:</li>
            <li>
              <select onChange={(e) => setQty(+e.target.value)}>
                <option value="1" selected>
                  1
                </option>
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
          <button type="button" onClick={addToCart} className={styles.add}>
            Lägg i varukorgen
          </button>
        </div>
      </ProductModal>
    </div>
  );
}

export default Card;
