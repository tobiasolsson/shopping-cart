/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import uniqid from 'uniqid';
import ProductModal from '../modal/ProductModal';

import styles from './Card.module.css';

// TODO: Snygga till <Button>
function Card({ product, handleAddToCart }) {
  const [modal, setModal] = useState(false);

  function modalOpen() {
    setModal(true);
  }

  function modalClose() {
    setModal(false);
  }

  function addToCart() {
    handleAddToCart({ ...product, id: uniqid() });
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
          <button type="button" onClick={addToCart} className={styles.add}>
            Lägg i varukorgen
          </button>
        </div>
      </ProductModal>
    </div>
  );
}

export default Card;
