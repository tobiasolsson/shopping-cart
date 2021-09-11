/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import ProductModal from '../modal/ProductModal';

import styles from './Card.module.css';

function Card({ product }) {
  const [modal, setModal] = useState(false);

  function modalOpen() {
    setModal(true);
  }

  function modalClose() {
    setModal(false);
  }
  return (
    <div className={styles.card}>
      <div onClick={modalOpen}>
        <img src={product.image} alt="" className={styles.image} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
      <ProductModal show={modal} handleClose={modalClose}>
        <h2>Hello Modal</h2>
      </ProductModal>
    </div>
  );
}

export default Card;
